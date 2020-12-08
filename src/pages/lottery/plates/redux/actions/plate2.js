import { AMOUNT_PER_BET } from '../utils';

export function setContent(state, action) {
    let content = action.payload;
    let arr = content.split('|');
    let betCounts = arr.length;
    let betAmount = betCounts * AMOUNT_PER_BET * state.betTimes;

    return {
        ...state,
        content,
        betCounts,
        betAmount
    };
};