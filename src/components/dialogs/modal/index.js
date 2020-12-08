/*
** 技术点：
** 1. 调用时可以直接Modal.success(), Modal.error()等的方式进行调用
** 2. 打开Modal后，遮罩层里面的内容不允许滚动。
** 3. 弹框为动态插入到body下面，关闭时清除Modal的dom。
** 4. 使用styled-components的keyframes属性，来渲染弹框打开和关闭时的动画。
** 5. 打开弹框时，滚动条的消失导致页面左右抖动.
*/

import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import styled, { keyframes } from 'styled-components';
import SvgIcon from '@/components/svgIcon';

function getScrollbarWidth() {
    var scrollDiv = document.createElement("div");
    scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);

    return scrollbarWidth;
}

function hasScrollbar() {
    return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight);
}

const scrollbarWidth = getScrollbarWidth();

const fadeIn = keyframes`
    0% {
        opacity: 0;
        transform: scale(0);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
        transform: scale(1);
    }

    100% {
        opacity: 0;
        transform: scale(0);
    }
`;

const Wrapper = styled.div`
    .my-modal-mask {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1000;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.45);
    }

    .my-modal-wrap {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        overflow: auto;
        outline: 0;
        overflow-scrolling: touch;
        z-index: 1000;
        pointer-events: none;

        .my-modal {
            box-sizing: border-box;
            position: relative;
            top: 200px;
            width: 300px;
            max-width: calc(100vw - 32px);
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #191a1b;
            box-shadow: 0px 0px 20px 0px rgba(4, 4, 4, 0.6);
            border: solid 1px #cf2a2a;
            padding: 25px 0;
            z-index: 1001;
            pointer-events: auto;

            .text {
                margin-top: 20px;
                font-size: 14px;
                color: #b0b0b0;
                width: 240px;
                text-align: center;
                word-wrap:break-word; 
                word-break:break-all; 
                overflow: hid
            }

            .ok {
                margin-top: 20px;
                cursor: pointer;
            }
        }

        .fade-in {
            animation: ${fadeIn} .3s;
        }

        .fade-out {
            animation: ${fadeOut} .3s;
        }

        .my-modal-confirm {
            width: 420px;

            .title {
                height: 24px;
                line-height: 24px;
                width: 100%;
                text-align: center;
                font-size: 18px;
                font-weight: normal;
                color: #b0b0b0;
            }

            .buttons {
                margin-top: 20px;
                width: 100%;
                height: 24px;
                display: flex;
                align-items: center;
                justify-content: center;

                .cancel {
                    cursor: pointer;
                }

                .ok {
                    margin-left: 32px;
                    margin-top: 0;
                    cursor: pointer;
                }
            }
        }
    }
`;

const colorDict = {
    success: '#52c55a',
    warning: '#cf2a2a',
    error: '#cf2a2a',
    info: '#d29339'
};

const MyModal = ({
    autoClose = false,
    name,
    mask = true,
    title = '提示',
    content = '...',
    destroy,
    okText = '确定',
    cancelText = '取消',
    onOk=() => {},
    onCancel=() => {}
}) => {
    const [flag, setFlag] = useState(true);

    useEffect(() => {
        let st;

        if (autoClose) {
            st = setTimeout(() => {
                setFlag(false);
                destroy();
            }, 3000);   
        }

        return () => {
            st && window.clearTimeout(st);
        };
    });

    // 修改onOk方法传入关闭Modal方法destroy();
    const onOk_1 = () => {
        onOk();
        setFlag(false); 
        destroy();
    };

    // 修改onCancel方法传入关闭Modal方法destroy();
    const onCancel_1 = () => {
        onCancel();
        setFlag(false);
        destroy();
    };

    return (
        ReactDOM.createPortal(
            <Wrapper className="my-modal-root">
                {mask && <div className="my-modal-mask"></div>}

                <div className="my-modal-wrap">
                    {
                        name === 'confirm' ?
                        <div className={`my-modal my-modal-${name} ${flag? 'fade-in' : 'fade-out'}` }>
                            <div className="title"> {title} </div>

                            <div className="text"> {content} </div>

                            <div className="buttons">
                                <SvgIcon 
                                    className="cancel" 
                                    link="button" 
                                    color="#742223" 
                                    svgAsBackground={true} 
                                    style={{width: '134px', height: '24px'}}
                                    onClick={onCancel_1}>
                                        {cancelText}
                                </SvgIcon>

                                <SvgIcon 
                                    className="ok" 
                                    link="button" 
                                    color="#cf2a2a" 
                                    svgAsBackground={true} 
                                    style={{width: '134px', height: '24px'}}
                                    onClick={onOk_1}>
                                        {okText}
                                </SvgIcon>
                            </div>
                        </div>
                        :
                        <div className={`my-modal my-modal-${name} ${flag? 'fade-in' : 'fade-out'}`}>
                            <SvgIcon link={name} size="50" color={colorDict[name]} />

                            <div className="text"> {content} </div>

                            <SvgIcon 
                                className="ok" 
                                link="button" 
                                color="#cf2a2a" 
                                svgAsBackground={true} 
                                style={{width: '134px', height: '24px'}}
                                onClick={onOk_1}>
                                    {okText}
                            </SvgIcon>
                        </div>
                    }
                </div>
            </Wrapper>,
            document.querySelector('body')
        )
    );
};

['confirm','info','success','error','warning'].forEach(item => {
    MyModal[item] = ({ ...props}) => {
        let div = document.createElement('div');
        let currentConfig = Object.assign({}, props);
        document.body.appendChild(div);

        // 关闭, 延迟250ms移除dom，为了让Modal的关闭动画继续执行
        const destroy = () => {
            let st = setTimeout(() => {
                const unmountResult = ReactDOM.unmountComponentAtNode(div);

                if (unmountResult && div.parentNode) {
                    div.parentNode.removeChild(div);
                    document.body.removeAttribute('style');
                }

                window.clearTimeout(st);
            }, 250); 
        };

        //
        const render = (config) => {
            ReactDOM.render(<MyModal destroy={destroy} name={item} {...config} />, div);

            if (hasScrollbar()) {
                document.body.style.overflow = 'hidden';
                document.body.style.paddingRight = scrollbarWidth + 'px';
            } else {
                document.body.style.overflow = 'hidden';
            }
        };

        // 更新
        const update = (newConfig) => {
            currentConfig = Object.assign({}, currentConfig,newConfig);
            render(currentConfig);
        };

        render(currentConfig);

        return {
            destroy: destroy,
            update: update
        };
    }
});

export default MyModal;