import React, { useEffect, useState, useReducer } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { imgSuffix } from '@/utils/';

const itemBg2 = require('@/assets/images/lottery/countdown-item2.png' + imgSuffix);
const itemBg3 = require('@/assets/images/lottery/countdown-item3.png' + imgSuffix);

const Wrapper = styled.div`
    width: 350px;
    display: flex;
    align-items: center;
    justify-content: center;

    .hour, .min, .sec {
        width: 67px;
        height: 75px;
        line-height: 75px;
        background-image: url(${itemBg2});
        background-size: 100% 100%;
        font-size: 32px;
        font-family: Arial;
        font-weight: bold;
        color: #FFFFFF;
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.75);
        text-align: center;
    }

    .big {
        width: 80px;
        height: 75px;
        line-height: 75px;
        background-image: url(${itemBg3});
        background-size: 100% 100%;
    }

    .divider {
        margin: 0 20px;
        color: #FFF;
        font-size: 24px;
    }
`;

const initialState = {
    hour: 0,
    min: 0,
    sec: 0
};

function reducer(state, action) {
    switch (action.type) {
        case 'setHour':
            return {
                ...state,
                hour: action.payload
            };
        case 'setMin':
            return {
                ...state,
                min: action.payload
            };
        case 'setSec':
            return {
                ...state,
                sec: action.payload
            };
        case 'setAll':
            return {
                ...state,
                ...action.payload
            };
        default:
            throw new Error();
    }
}

const Page = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const end = dayjs('2020-12-03T23:00:00').unix();
    const start = dayjs().unix();
    const [gap, setGap] = useState(end - start);

    //console.log(dayjs().format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]'));
    //console.log(dayjs('2020-11-02T23:00:00').format('[YYYYescape] YYYY-MM-DDTHH:mm:ssZ[Z]'));

    useEffect(() => {
        const timer = setInterval(() => {
            let h = Math.floor(gap / 3600);
            let temp1 = gap - h * 3600;
            let m = Math.floor(temp1 / 60);
            let s = temp1 - m * 60;

            dispatch({
                type: 'setAll', 
                payload: {
                    hour: h,
                    min: m,
                    sec: s
                } 
            });

            setGap(c => c - 1);
        }, 1000);

        return () => clearInterval(timer)
    }, [gap]);

    return (
        <Wrapper>
            <div className={state.hour > 99 ? 'hour big' : 'hour'}>
                {
                    state.hour < 10 ? '0' + state.hour : state.hour
                }
            </div>

            <div className="divider">:</div>

            <div className="min">
                {
                    state.min < 10 ? '0' + state.min : state.min
                }
            </div>

            <div className="divider">:</div>

            <div className="sec">
                {
                    state.sec < 10 ? '0' + state.sec : state.sec
                }
            </div>
        </Wrapper>
    )
};

export default Page;