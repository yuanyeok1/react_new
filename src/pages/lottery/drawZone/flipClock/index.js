import React, { useState, useEffect, useReducer } from 'react';
import styled, { keyframes } from 'styled-components';
import dayjs from 'dayjs';
import { imgSuffix } from '@/utils/';

const ClockItemBg = require('@/assets/images/lottery/clockItem.png' + imgSuffix);

const frontFlipDown = keyframes`
    0% {
        transform: perspective(160px) rotateX(0deg);
    }

    100% {
        transform: perspective(160px) rotateX(-180deg);
    }
`;

const backFlipDown = keyframes`
    0% {
        transform: perspective(160px) rotateX(180deg);
    }

    100% {
        transform: perspective(160px) rotateX(0deg);
    }
`;

const frontFlipUp = keyframes`
    0% {
        transform: perspective(160px) rotateX(0deg);
    }

    100% {
        transform: perspective(160px) rotateX(180deg);
    }
`;

const backFlipUp = keyframes`
    0% {
        transform: perspective(160px) rotateX(-180deg);
    }

    100% {
        transform: perspective(160px) rotateX(0deg);
    }
`;

const Wrapper = styled.div`
    .colon {
        display: inline-block;
        color: #FFF;
        width: 20px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        vertical-align: middle;
    }

    .flip {
        display: inline-block;
        position: relative;
        width: 37px;
        height: 70px;
        line-height: 70px;
        border: solid 1px #000;
        border-radius: 10px;
        font-size: 30px;
        color: #fff;
        box-shadow: 0 0 6px rgba(0, 0, 0, .5);
        text-align: center;
        font-family: "Helvetica Neue";
        position: relative;
        vertical-align: middle;

        .line {
            height: 2px;
            width: 20px;
            background-color: #696969;
            position: absolute;
            top: 50%;
            margin-top: -1px;
            left: 8px;
            z-index: 1000;
        }

        &.down {
            .front {
                &:before {
                    z-index: 3;
                }

                &:after {
                    z-index: 1;
                }
            }

            .back {
                &:before {
                    z-index: 1;
                }

                &:after {
                    z-index: 2;
                    transform-origin: 50% 0%;
                    transform: perspective(160px) rotateX(180deg);
                }
            }
        }

        &.down.go {
            .front {
                &:before {
                    transform-origin: 50% 100%;
                    animation: ${frontFlipDown} 0.6s ease-in-out both;
                    box-shadow: 0 -2px 6px rgba(255, 255, 255, 0.3);
                    backface-visibility: hidden;
                }
            }

            .back {
                &:after {
                    animation: ${backFlipDown} 0.6s ease-in-out both;
                }
            }
        }

        &.up.go {
            .front {
                &:after {
                    transform-origin: 50% 0;
                    animation: ${frontFlipUp} 0.6s ease-in-out both;
                    box-shadow: 0 2px 6px rgba(255, 255, 255, 0.3);
                    backface-visibility: hidden;
                }
            }

            .back {
                &:before {
                    animation: ${backFlipUp} 0.6s ease-in-out both;
                }
            }
        }

        &.up {
            .front {
                &:before {
                    z-index: 1;
                }

                &:after {
                    z-index: 3;
                }
            }

            .back {
                &:before {
                    z-index: 2;
                    transform-origin: 50% 100%;
                    transform: perspective(160px) rotateX(-180deg);
                }

                &:after {
                    z-index: 1;
                }
            }
        }

        .digital {
            &:before, &:after {
                content: "";
                position: absolute;
                left: 0;
                right: 0;
                overflow: hidden;
                box-sizing: border-box;
                background-image: url(${ClockItemBg});
                background-size: 100% 200%
            }

            &:before {
                top: 0;
                bottom: 50%;
                background-position: 0 0;
            }

            &:after {
                top: 50%;
                bottom: 0;
                background-position: 0 -35px;
                line-height: 0;
            }
        }

        .number0 {
            &:before, &:after {
                content: "0";
            }
        }

        .number1 {
            &:before, &:after {
                content: "1";
            }
        }

        .number1 {
            &:before, &:after {
                content: "1";
            }
        }

        .number2 {
            &:before, &:after {
                content: "2";
            }
        }

        .number3 {
            &:before, &:after {
                content: "3";
            }
        }

        .number4 {
            &:before, &:after {
                content: "4";
            }
        }

        .number5 {
            &:before, &:after {
                content: "5";
            }
        }

        .number6 {
            &:before, &:after {
                content: "6";
            }
        }

        .number7 {
            &:before, &:after {
                content: "7";
            }
        }

        .number8 {
            &:before, &:after {
                content: "8";
            }
        }

        .number9 {
            &:before, &:after {
                content: "9";
            }
        }
    }
`;

const initialState = {
    h1Current: 0,
    h1Next: 0,
    h1go: '',
    h2Current: 0,
    h2Next: 0,
    h2go: '',
    m1Current: 0,
    m1Next: 0,
    m1go: '',
    m2Current: 0,
    m2Next: 0,
    m2go: '',
    s1Current: 0,
    s1Next: 0,
    s1go: '',
    s2Current: 0,
    s2Next: 0,
    s2go: ''
};

function reducer(state, action) {
    switch (action.type) {
        case 'setAll':
            return {
                ...state,
                ...action.payload
            };
        default:
            throw new Error();
    }
}

const FlipClock = ({type="down"}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const end = dayjs().add(3, 'day').unix();
    const start = dayjs().unix();
    const [gap, setGap] = useState(end - start - 51);

    useEffect(() => {
        const timer = setInterval(() => {
            let h = Math.floor(gap / 3600);
            let temp1 = gap - h * 3600;
            let m = Math.floor(temp1 / 60);
            let s = temp1 - m * 60;

            let h1 = Math.floor(h / 10);
            let h2 = h % 10;
            let m1 = Math.floor(m / 10);
            let m2 = m % 10;
            let s1 = Math.floor(s / 10);
            let s2 = s % 10;

            let s2Current = s2;
            let s2Next = s2 - 1 < 0 ? 9 : s2 - 1;
            let s1Current = s1;
            let s1Next = s1 - 1 < 0 ? 5 : s1 - 1;
            let m2Current = m2;
            let m2Next = m2 - 1 < 0 ? 9 : m2 - 1;
            let m1Current = m1;
            let m1Next = m1 - 1 < 0 ? 5 : m1 -1;
            let h2Current = h2;
            let h2Next = h2 - 1 < 0 ? 9 : h2 - 1;
            let h1Current = h1;
            let h1Next = h1 - 1 < 0 ? 9 : h1 - 1;

            let payload = {
                h1Current, h1Next, 
                h2Current, h2Next,
                m1Current, m1Next,
                m2Current, m2Next,
                s1Current, s1Next,
                s2Current, s2Next, s2go: 'go'
            } 

            if (s2Next === 9) {
                payload.s1go = 'go';
            }

            if (s2Next === 9 && s1Next === 5) {
                payload.m2go = 'go';
            }

            if (m2Next === 9) {
                payload.m1go = 'go';
            }

            if (m2Next === 9 && m1Next === 5){
                payload.h2go = 'go';
            }

            if (h2Next === 9) {
                payload.h1go = 'go';
            }

            dispatch({
                type: 'setAll', 
                payload
            });

            const st = setTimeout(() => {
                let payload2 = {
                    s1go: '',
                    s2go: '',
                    m1go: '',
                    m2go: '',
                    h1go: '',
                    h2go: '',
                    s2Current: s2Next
                };

                if (payload.s1go) payload2.s1Current = s1Next;
                if (payload.m2go) payload2.m2Current = m2Next;
                if (payload.m1go) payload2.m1Current = m1Next;
                if (payload.h2go) payload2.h2Current = h2Next;
                if (payload.h1go) payload2.h1Current = h1Next;

                dispatch({
                    type: 'setAll', 
                    payload: payload2
                });

                clearTimeout(st);
            }, 600);

            setGap(c => c - 1);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [gap]);

    return (
        <Wrapper>
            <div className={"flip " + type + ` ${state.h1go}`}>
                <div className={"digital front number" + state.h1Current}></div>
                <div className={"digital back number" + state.h1Next}></div>
                <div className="line"></div>
            </div>

            <div className={"flip " + type + ` ${state.h2go}`}>
                <div className={"digital front number" + state.h2Current}></div>
                <div className={"digital back number" + state.h2Next}></div>
                <div className="line"></div>
            </div>

            <div className="colon">：</div>

            <div className={"flip " + type + ` ${state.m1go}`}>
                <div className={"digital front number" + state.m1Current}></div>
                <div className={"digital back number" + state.m1Next}></div>
                <div className="line"></div>
            </div>

            <div className={"flip " + type + ` ${state.m2go}`}>
                <div className={"digital front number" + state.m2Current}></div>
                <div className={"digital back number" + state.m2Next}></div>
                <div className="line"></div>
            </div>

            <div className="colon">：</div>

            <div className={"flip " + type + ` ${state.s1go}`}>
                <div className={"digital front number" + state.s1Current}></div>
                <div className={"digital back number" + state.s1Next}></div>
                <div className="line"></div>
            </div>

            <div className={"flip " + type + ` ${state.s2go}`}>
                <div className={"digital front number" + state.s2Current}></div>
                <div className={"digital back number" + state.s2Next}></div>
                <div className="line"></div>
            </div>
        </Wrapper>
    );
};

export default FlipClock;