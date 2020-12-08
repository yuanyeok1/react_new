import React from 'react';
import deselectCurrent from './toggle-selection'

const clipboardToIE11Formatting = {
    'text/plain': 'Text',
    'text/html': 'Url',
    default: 'Text'
};

const defaultMessage = 'Copy to clipboard: #{key}, Enter';

const format = message => {
    var copyKey = (/mac os x/i.test(navigator.userAgent) ? '⌘' : 'Ctrl') + '+C';
    return message.replace(/#{\s*key\s*}/g, copyKey);
};
const CopyToClipboard = props => {
    const copy = (text, options) => {
        var debug,
            message,
            reselectPrevious,
            range,
            selection,
            mark,
            success = false;
        if (!options) {
            options = {};
        }
        debug = options.debug || false;
        try {
            reselectPrevious = deselectCurrent();

            range = document.createRange();
            selection = document.getSelection();

            mark = document.createElement('span');
            mark.textContent = text;
            // reset user styles for span element
            mark.style.all = 'unset';
            // prevents scrolling to the end of the page
            mark.style.position = 'fixed';
            mark.style.top = 0;
            mark.style.clip = 'rect(0, 0, 0, 0)';
            // used to preserve spaces and line breaks
            mark.style.whiteSpace = 'pre';
            // do not inherit user-select (it may be `none`)
            mark.style.webkitUserSelect = 'text';
            mark.style.MozUserSelect = 'text';
            mark.style.msUserSelect = 'text';
            mark.style.userSelect = 'text';
            mark.addEventListener('copy', function(e) {
                e.stopPropagation();
                if (options.format) {
                    e.preventDefault();
                    if (typeof e.clipboardData === 'undefined') {
                        // IE 11
                        debug && console.warn('unable to use e.clipboardData');
                        debug && console.warn('trying IE specific stuff');
                        window.clipboardData.clearData();
                        var format =
                            clipboardToIE11Formatting[options.format] ||
                            clipboardToIE11Formatting['default'];
                        window.clipboardData.setData(format, text);
                    } else {
                        // all other browsers
                        e.clipboardData.clearData();
                        e.clipboardData.setData(options.format, text);
                    }
                }
            });

            document.body.appendChild(mark);

            range.selectNodeContents(mark);
            selection.removeAllRanges(); //此行解决chrome浏览器兼容问题
            selection.addRange(range);

            var successful = document.execCommand('copy');
            if (!successful) {
                throw new Error('copy command was unsuccessful');
            }
            success = true;
        } catch (err) {
            debug && console.error('unable to copy using execCommand: ', err);
            debug && console.error('unable to copy using clipboardData: ', err);
            debug && console.error('falling back to prompt');
            message = format(
                'message' in options ? options.message : defaultMessage
            );
            window.prompt(message, text);
        } finally {
            if (selection) {
                if (typeof selection.removeRange == 'function') {
                    selection.removeRange(range);
                } else {
                    selection.removeAllRanges();
                }
            }

            if (mark) {
                document.body.removeChild(mark);
            }
            reselectPrevious();
        }

        return success;
    };
    const copyText = () => {
        const result = copy(props.text);
        props.onCopy(props.text, result);
    };
    return <div onClick={copyText}>{props.children}</div>;
};

export default CopyToClipboard;
