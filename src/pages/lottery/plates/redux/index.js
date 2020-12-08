import { useReducer } from 'react';
import reducers from './reducers';
import { initFunc } from './utils';

const useLotteryRedux = (lotteryLocation) => {
    const [state, dispatch] = useReducer(reducers, lotteryLocation, initFunc);

    return [state, dispatch];
};

export default useLotteryRedux;