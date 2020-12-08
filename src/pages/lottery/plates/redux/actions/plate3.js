import { AMOUNT_PER_BET } from '../utils';

export function setChuanGuanNumbers(state, action) {
    let arr = [...state.selectedNumbers];
    let arrLen = state.method.arrLen;
    let num = action.payload;
    let pos = arr.indexOf(num);

    if (pos === -1 && arr.length === arrLen) {
        return state;
    }

    if (pos === -1) {
        arr.push(num);
    } else {
        arr.splice(pos,1);
    }

    let betCounts = arr.length === arrLen ? 1 : 0;
    let betAmount = betCounts * AMOUNT_PER_BET * state.betTimes;
    let content = arr.length === arrLen ? arr.join('&') : ''

    return {
        ...state,
        selectedNumbers: arr,
        betCounts,
        betAmount,
        content
    };
};
