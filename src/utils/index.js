import history from '@/router/history';
import dayjs from 'dayjs';

export function BrowserType() {
    const userAgent = navigator.userAgent;

    if (/^(?=.Safari)(?!.Chrome)/.test(userAgent)) {
        return 'Safari';
    }

    if (userAgent.indexOf('Edge') > -1) {
        return 'Edge';
    }

    if (userAgent.indexOf('Firefox') > -1) {
        return 'Firefox';
    }

    if (userAgent.indexOf('Chrome') > -1) {
        return 'Chrome';
    }

    if (userAgent.indexOf('.NET') > -1) {
        return 'IE';
    }
}

const checkWebp = () => {
    try {
        if (BrowserType() === 'Safari') {
            return false;
        } else {
            return (
                document
                    .createElement('canvas')
                    .toDataURL('image/webp')
                    .indexOf('data:image/webp') === 0
            );
        }
    } catch (err) {
        return false;
    }
};

// 是否支持webp格式
export const supportWebp = checkWebp();
export const imgSuffix = supportWebp ? '.webp' : '';

export const setWebp = () => {
    // 判断浏览器是否支持webp格式图片，设置标识修改css背景图片格式
    if (supportWebp) {
        const className = document.documentElement.className;
        const name = className ? ' webpa' : 'webpa';

        document.documentElement.className += name;
    }
};

export const webp = url => {
    if (supportWebp) {
        return `${url}.webp`;
    } else {
        return url;
    }
};

/**
 * Dialog相关
 */

export function closest(el, selector) {
    const matchesSelector =
        el.matches ||
        el.webkitMatchesSelector ||
        el.mozMatchesSelector ||
        el.msMatchesSelector;

    while (el) {
        if (matchesSelector.call(el, selector)) {
            return el;
        }

        el = el.parentElement;
    }

    return null;
}

export const onWrapTouchStart = e => {
    // fix touch to scroll background page on iOS
    if (!/iPhone|iPod|iPad/i.test(navigator.userAgent)) {
        return;
    }

    const pNode = closest(e.target, '.am-modal-content');

    if (!pNode) {
        e.preventDefault();
    }
};

/**
 * @param  {string} ...className
 * 解构react的className数组
 */
export function reactClassNameJoin(...className) {
    return className.join(' ');
}

export function isJudge(value) {
    return (trued, falsed) => {
        if (value) {
            return trued;
        } else {
            return falsed;
        }
    };
}

/**
 * @param  {number} num
 * @param  {number} fixed  保留小数的位数，默认保留两位小数
 * 金额数目千分位显示
 */
export function getThousandNum(num, fixed = 0) {
    if (typeof num !== "number") {
        num = parseFloat(num);
    }
    const reg = /\B(?=(\d{3})+$)/g;
    num = num.toString().split(".");
    //fixed = fixed === undefined ? 0 : fixed;

    num[0] = num[0].replace(reg, ",");
    num[1] = num[1] ? num[1].substr(0, fixed) : "00000000000000000".substr(0, fixed);

    return fixed ? num.join(".") : num[0];
}

export function go(path) {
    if (isNaN(path)) {
        history.push(path);
    } else {
        history.go(path);
    }
}

export function formatDate(date) {
    return dayjs(date).format("YYYY-MM-DD")
}

export function formatStartDateTime(date) {
    return dayjs(date).format("YYYY-MM-DD") + ' 00:00:00';
}

export function formatEndateTime(date) {
    return dayjs(date).format("YYYY-MM-DD") + ' 23:59:59';
}

export function open(url) {
    if (!window.$dgtxEnv) {  //如果是H5
        return window.open(url, '_blank', 'location=yes');
    } else {   //如果是app
        return window.cordova.InAppBrowser.open(url, '_blank', 'location=yes');
    }
};


// 查询时间更新为包含当周在内的两个自然周
export function calculateWeek() {
    if (dayjs().day() === 0) {
        return dayjs().subtract(13, 'day').toDate();
    }

    return dayjs().subtract(dayjs().day() + 6, 'day').toDate();
};

export function deepCopy(inObject) {
    let outObject, value, key;

    if (typeof inObject !== "object" || inObject === null) {
        return inObject;
    }

    outObject = Array.isArray(inObject) ? [] : {};

    for (key in inObject) {
        value = inObject[key];
        outObject[key] = deepCopy(value);
    }

    return outObject;
}