import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Wrapper = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0;

    .item {
        width: 50px;
        height: 50px;
        line-height: 50px;
        text-align: center;
        margin-left: 17px;
        background: linear-gradient(0deg, #5B5D5E 0%, #FFFFFF 100%);
        border-radius: 50%;
        color: #191A1B;
        font-size: 26px;
        font-weight: 400;
        color: #191A1B;

        &:first-child {
            margin-left: 0;
        }
    }
`;

function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        default: 
            return 0; 
    }
}

const min = 0;
const max = 99;
const changeTimes = 20;

const DrawBall = ({animationFlag, result}) => {
    const [num1, setNum1] = useState({value: result[0], count: 0});
    const [num2, setNum2] = useState({value: result[1], count: 0});
    const [num3, setNum3] = useState({value: result[2], count: 0});
    const [num4, setNum4] = useState({value: result[3], count: 0});
    const [num5, setNum5] = useState({value: result[4], count: 0});
    const [num6, setNum6] = useState({value: result[5] || '--', count: 0});
    const [showNum6, setShowNum6] = useState(false);
    const query = useQuery();

    useEffect(() => {
        let flag = query.get('type') !== 'north';
        flag !== showNum6 && setShowNum6(flag);
    }, [query, showNum6]);

    useEffect(() => {
        let timer;

        if (animationFlag && num1.count <= changeTimes) {
            timer = setInterval(() => {
                if (num1.count < changeTimes) {
                    setNum1({
                        value: randomNum(min, max),
                        count: num1.count + 1
                    });
                } else {
                    setNum1({
                        value: result[0],
                        count: num1.count + 1
                    });
                }
            }, 200);
        } else if (!animationFlag && num1.count > 0) {
            setNum1({
                ...num1,
                count: 0
            });
        }

        return () => timer && clearInterval(timer);
    }, [animationFlag, num1, result]);

    useEffect(() => {
        let timer;

        if (animationFlag && num2.count <= changeTimes) {
            timer = setInterval(() => {
                if (num2.count < changeTimes) {
                    setNum2({
                        value: randomNum(min, max),
                        count: num2.count + 1
                    });
                } else {
                    setNum2({
                        value: result[1],
                        count: num2.count + 1
                    });
                }
            }, 200);
        } else if (!animationFlag && num2.count > 0) {
            setNum2({
                ...num2,
                count: 0
            });
        }

        return () => timer && clearInterval(timer);
    }, [animationFlag, num2, result]);

    useEffect(() => {
        let timer;

        if (animationFlag && num3.count <= changeTimes) {
            timer = setInterval(() => {
                if (num3.count < changeTimes) {
                    setNum3({
                        value: randomNum(min, max),
                        count: num3.count + 1
                    });
                } else {
                    setNum3({
                        value: result[2],
                        count: num3.count + 1
                    });
                }
            }, 200);
        } else if (!animationFlag && num3.count > 0) {
            setNum3({
                ...num3,
                count: 0
            });
        }

        return () => timer && clearInterval(timer);
    }, [animationFlag, num3, result]);

    useEffect(() => {
        let timer;

        if (animationFlag && num4.count <= changeTimes) {
            timer = setInterval(() => {
                if (num4.count < changeTimes) {
                    setNum4({
                        value: randomNum(min, max),
                        count: num4.count + 1
                    });
                } else {
                    setNum4({
                        value: result[3],
                        count: num4.count + 1
                    });
                }
            }, 200);
        } else if (!animationFlag && num4.count > 0) {
            setNum4({
                ...num4,
                count: 0
            });
        }

        return () => timer && clearInterval(timer);
    }, [animationFlag, num4, result]);

    useEffect(() => {
        let timer;

        if (animationFlag && num5.count <= changeTimes) {
            timer = setInterval(() => {
                if (num5.count < changeTimes) {
                    setNum5({
                        value: randomNum(min, max),
                        count: num5.count + 1
                    });
                } else {
                    setNum5({
                        value: result[4],
                        count: num5.count + 1
                    });
                }
            }, 200);
        } else if (!animationFlag && num5.count > 0) {
            setNum5({
                ...num5,
                count: 0
            });
        }
        return () => timer && clearInterval(timer);
    }, [animationFlag, num5, result]);

    useEffect(() => {
        let timer;

        if (showNum6) {
            if (animationFlag && num6.count <= changeTimes) {
                timer = setInterval(() => {
                    if (num6.count < changeTimes) {
                        setNum6({
                            value: randomNum(min, max),
                            count: num6.count + 1
                        });
                    } else {
                        setNum6({
                            value: result[5],
                            count: num6.count + 1
                        });
                    }
                }, 200);
            } else if (!animationFlag && num6.count > 0) {
                setNum6({
                    ...num6,
                    count: 0
                });
            }
        }

        return () => timer && clearInterval(timer);
    }, [showNum6, animationFlag, num6, result]);

    return (
        <Wrapper className="items">
            <li className="item" key={1}> {num1.value} </li>
            <li className="item" key={2}> {num2.value} </li>
            <li className="item" key={3}> {num3.value} </li>
            <li className="item" key={4}> {num4.value} </li>
            <li className="item" key={5}> {num5.value} </li>
            {
                showNum6 && <li className="item" key={6}> {num6.value} </li>
            }
        </Wrapper>
    )
};

export default DrawBall;