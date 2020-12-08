import { setLotteryLocation } from '../actions';
import {setFilter1, setFilter2, setFilter3} from '../actions/filters';
import {setBalls, setActions} from '../actions/plate1';
import {setContent} from '../actions/plate2';
import {setChuanGuanNumbers} from '../actions/plate3';
import {setPlate4Animal} from '../actions/plate4';
import {setBetTimes, setOdds} from '../actions/editZone';
import {addRecordToCart, deleteRecordFromCart, deleteAllRecordsFromCart} from '../actions/cart';

const plate1Reducers = (state, action) => {
    switch (action.type) {
        case 'setLotteryLocation':
            return setLotteryLocation(state, action);

        case 'setFilter1':
            return setFilter1(state, action);

        case 'setFilter2':
            return setFilter2(state, action);

        case 'setFilter3':
            return setFilter3(state, action);

        case 'setBalls':   
            return setBalls(state, action);

        case 'setActions':
            return setActions(state, action);

        case 'setContent':
            return setContent(state, action);

        case 'setChuanGuanNumbers':
            return setChuanGuanNumbers(state, action);

        case 'setPlate4Animal':
            return setPlate4Animal(state, action);

        case 'setBetTimes':
            return setBetTimes(state, action);

        case 'setOdds':
            return setOdds(state, action);

        case 'addRecordToCart':
            return addRecordToCart(state, action);

        case 'deleteRecordFromCart':
            return deleteRecordFromCart(state, action);

        case 'deleteAllRecordsFromCart':
            return deleteAllRecordsFromCart(state, action);

        default:
            throw new Error();
    }
};

export default plate1Reducers;