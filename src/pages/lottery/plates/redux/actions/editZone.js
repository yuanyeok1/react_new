import { AMOUNT_PER_BET } from '../utils';

export function setBetTimes(state, action) {
    return {
        ...state,
        betTimes: action.payload,
        betAmount: state.betCounts * AMOUNT_PER_BET * action.payload
    };
}

export function setOdds(state, action) {
    return {
        ...state,
        odds: action.payload
    };
}