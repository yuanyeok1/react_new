import { useReducer } from 'react';
import { formatStartDateTime, formatEndateTime } from '@/utils';
import dayjs from 'dayjs';

let Today = dayjs().format("YYYY-MM-DD");

const initDates = {
    startDate: Today + ' 00:00:00',
    endDate: Today + ' 23:59:59'
};

function datesReducer(state, action) {
    switch (action.type) {
        case 'setStartDate':
            return {
                ...state,
                startDate: action.payload
            };
        case 'setEndDate':
            return {
                ...state,
                endDate: action.payload
            };
        default:
            throw new Error();
    }
}

const useDates = () => {
    const [dates, dispatch] = useReducer(datesReducer, initDates);

    const setStartDate = (startDate) => {
        dispatch({type: 'setStartDate', payload: formatStartDateTime(startDate)}); 
    };

    const setEndDate = (endDate) => {
        dispatch({type: 'setEndDate', payload: formatEndateTime(endDate)}); 
    };

    return [
        dates,
        setStartDate,
        setEndDate
    ]
};

export default useDates;