import config from '../config';

export const AMOUNT_PER_BET = 1000;  //每注金额

/**
 * @export
 * @description: 初始化plate1的当前所选择的号码球
 * @returns
 */
export function getInitSelectedBalls (arr) {
    let temp = [];

    for(let i = 0; i < arr.length; i++) {
        temp[arr[i].title] = [];
    }

    return temp;
}

/**
 * @export
 * @description: 初始化plate1的当前所选择的操作
 * @returns
 */
export function getInitSelectedActions (arr) {
    let temp = {};

    for(let i = 0; i < arr.length; i++) {
        temp[arr[i].title] = '';
    }

    return temp;
}

export function getFilters1 (data) {
    return Object.keys(data);
}

export function getFilters2 (data, f1) {
    return Object.keys(data[f1]);
}

export function getFilters3 (data, f1, f2) {
    return Object.keys(data[f1][f2].child);
}

/**
 * 
 * @param {单式玩法输入的字符串} text 
 * @param {该单式玩法每组号码的规定长度} ruleLen 
 */
export function computeDanshi (text, ruleLen) {
    //先替换所有的非数字成分号
    let val = text.replace(/[^\d]/g, ';');
    //将连续的多个分号替换为一个分号
    val = val.replace(/;+/g, ';');
    //如果以分号结尾，去除最后一个分号
    val = val.replace(/;$/gi, '');
    //数组去重
    let tempArr = [...new Set(val.split(';'))]

    let content = '';
    let arr  = []

    //去掉数组中长度不等于规定长度的号码
    tempArr.forEach(item => {
        if (item.length === ruleLen) {
            if (content) {
                content += '|' + item.split('').join(',');
            } else {
                content += item.split('').join(',');
            }

            arr.push(item);
        }
    });

    return {arr, content};
}

/**
 * 
 * @param {单式玩法输入的字符串： 12&34， 或者12&34&56} text 
 * @param {该单式玩法每对数字的规定长度：串2和串3都是2} ruleLen 
 * @param {每注有多少对数字，串2是2对，串3是3对} arrLen 
 */
export function computeDanshiForChuanGuan (text, ruleLen, arrLen) {
    //先替换除了&之外所有的非数字字符成分号
    let val = text.replace(/[^&\d]/g, ';');
    //将连续的多个分号替换为一个分号
    val = val.replace(/;+/g, ';');
    //将连续的多个&号替换为一个&号
    val = val.replace(/&+/g, '&');
    //如果以分号结尾，去除最后一个分号
    val = val.replace(/;$/gi, '');

    //数组去重
    let tempArr = [...new Set(val.split(';'))]

    let content = '';
    let arr  = []

    tempArr.forEach(item => {
        if (item.indexOf('&') !== -1) {
            let m = item.split('&');

            if (m.length === arrLen) {
                if (m.every(item2 => item2.length === ruleLen)) {
                    if (content) {
                        content += '|' + item;
                    } else {
                        content += item;
                    }

                    arr.push(item);
                }
            }
        }
    });

    return {arr, content};
}

/**
 *
 * @export
 * @param {初始化彩票页或者切换彩种时的配置} data
 * @returns
 */
export function initFunc (lotteryLocation = 'north') {
    let data              = config[lotteryLocation];
    let filters1          = getFilters1(data);
    let filter1           = filters1[0];
    let filters2          = getFilters2(data, filter1);
    let filter2           = filters2[0];
    let filters3          = getFilters3(data, filter1, filter2);
    let filter3           = filters3[0];
    let method            = data[filter1][filter2].child[filter3];
    let description       = data[filter1][filter2].description;
    let selectedBalls     = getInitSelectedBalls(method.arr);
    let selectedActions   = getInitSelectedActions(method.arr); 

    return {
        lotteryLocation,
        data,
        filters1,
        filter1,
        filters2,
        filter2,
        filters3,
        filter3,
        method,                                        //当前玩法数据
        description,                                   //玩法描述
        name: filter1 + '|' + filter2 + '|' +filter3,  //玩法名称
        odds: 1000,                                    //赔率
        selectedBalls,                                 //plate1专用：选中的球
        selectedActions,                               //plate1专用：选中的操作：全大小奇偶清
        selectedNumbers: [],                           //plate3串关专用：选中的号码
        selectedAnimals: [],                           //plate4鱼虾蟹专用：选中的动物
        content: '',                                   //投注内容
        betCounts: 0,                                  //投注注数
        betAmount: 0,                                  //投注金额
        betTimes: 1,                                   //投注倍数
        cartList: []                                   //选号篮列表
    }
};