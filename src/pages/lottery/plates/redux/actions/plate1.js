import { AMOUNT_PER_BET } from '../utils';

//排列算法
function permutation (arr) {
    var result = [];
    var results = [];

    function doExchange(arr, index){
        for (var i = 0; i < arr[index].length; i++) {
            result[index] = arr[index][i];

            if (index !== arr.length - 1) {
                doExchange(arr, index + 1)
            } else {
                results.push(result.join(','))
            }
        }
    }

    doExchange(arr, 0);
    console.log('results = ', results);
    return results;
 }

//判断选号求是否选择完成
function isBallsReady(arr, balls) {
    return arr.every(item => balls[item.title].length > 0);
}

// 计算注数和投注内容
function caculate(arr, balls) {
    if (!isBallsReady(arr, balls)) {
        return {
            betCounts: 0,
            betContent: ''
        };
    }

    let n = 1;  //注数
    let temp = [];

    for (let i = 0; i < arr.length; i++) {
        n *= balls[arr[i].title].length;
        temp.push(balls[arr[i].title]);
    }

    return {
        betCounts: n,
        betContent: permutation(temp).join('|')
    };
}

/**
 *  1. 当选号球发生变化的处理函数
 */
export function setBalls(state, action) {
    let temp = {...state.selectedBalls};
    let u = action.payload.unit;
    let v = action.payload.value;
    let pos = temp[u].indexOf(v);

    if (pos === -1) {
        temp[u].push(v);
        temp[u].sort(function(a, b){return a - b});
    } else {
        temp[u].splice(pos,1);
    }
    
    let r = caculate(state.method.arr, temp); //计算一下注数和投注内容

    return {
        ...state,
        selectedBalls: temp,
        content: r.betContent,
        betCounts: r.betCounts,
        betAmount: r.betCounts * AMOUNT_PER_BET * state.betTimes
    }
}

/**
 *  2. 当操作(全大小奇偶清)发生变化的处理函数
 */
export function setActions(state, action) {
    let temp1 = {...state.selectedActions};
    let temp2 = {...state.selectedBalls};
    let u = action.payload.unit;
    let v = action.payload.value;

    if (temp1[u] === v) {  //如果当前操作已经被选中了
        temp1[u] = '';
        temp2[u] = [];
    } else {
        temp1[u] = v;

        switch(v) {
            case 'quan':
                temp2[u] = state.method.arr.find(item => item.title === u).numbers;
                break;
            case 'da':
                temp2[u] = state.method.arr.find(item => item.title === u).numbers.filter(num => num > 4);
                break;
            case 'xiao':
                temp2[u] = state.method.arr.find(item => item.title === u).numbers.filter(num => num <= 4);
                break;
            case 'ji':
                temp2[u] = state.method.arr.find(item => item.title === u).numbers.filter(num => num % 2 !== 0);
                break;
            case 'ou':
                temp2[u] = state.method.arr.find(item => item.title === u).numbers.filter(num => num % 2 === 0);
                break;
            case 'qing':
                temp2[u] = [];
                break;
            default:
                break;
        }
    }

    let r = caculate(state.method.arr, temp2); //计算一下注数和投注内容

    return {
        ...state,
        selectedBalls: temp2,
        selectedActions: temp1,
        content: r.betContent,
        betCounts: r.betCounts,
        betAmount: r.betCounts * AMOUNT_PER_BET * state.betTimes
    };
}