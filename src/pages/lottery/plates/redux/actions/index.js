import { initFunc } from '../utils';

export function setLotteryLocation(state, action) {
    const r = initFunc(action.payload);

    return {
        ...state,
        ...r
    };
};