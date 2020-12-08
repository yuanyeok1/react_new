import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.ul`
    list-style: none;

    li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;

        .title {
            width: 80px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            color: ${props => props.theme.lottery.fontColor};
        }

        .numbers {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            .ball {
                width: 30px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                margin-left: 10px;
                border: 1px solid #8C8D8D;
                border-radius: 50%;
                font-size: 14px;
                color: #8C8D8D;
                cursor: pointer;

                &:first-child {
                    margin-left: 0;
                }
            }

            .active {
                background: linear-gradient(0deg, #811616, #CF2A2A);
                border: 1px solid #CF2A2A;
                border-radius: 50%;
                color: #FFF;
            }
        }

        .actions {
            width: 356px;
            display: flex;
            align-items: center;
            justify-content: center;

            ul {
                width: 316px;
                height: 28px;
                padding: 0 13px;
                background-color: #252627;
                border-radius: 14px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                text-align: center;

                li {
                    display: block;
                    width: 50px;
                    font-size: 14px;
                    color: ${props => props.theme.lottery.fontColor};
                    height: 28px;
                    line-height: 28px;
                    text-align: center;
                    cursor: pointer;
                    margin-top: 0;
                }

                .active {
                    background-color: #191A1B;
                    border: 1px solid #252627;
                    border-radius: 13px;
                    color: #CF2A2A;
                }
            }
        }
    }
`;

const Plate1 = ({data, dispatch}) => {
    const { t } = useTranslation();
    /**
     *  当从包二星切换到包三星时，因为plateType没有变化，一直为1，所以plate1组件不会被销毁。
     *  就会出现这样的情况： data里面的arr的长度变了（比如从2变到3），但是selectedBalls的长度没有变化。
     *  这样，我们在渲染数字盘的时候就被出bug。
     */
    // if (data.arr.length !== Object.keys(selectedBalls).length) {
    //     setSelectedBalls(getInitSelectedBalls(data.arr));
    //     setSelectedActions(getInitSelectedActions(data.arr));
    //     return;
    // }

    const onBallClicked = (unit, value) => {
        dispatch({
            type: 'setBalls',
            payload: {unit, value}
        })
    };

    const onActionClicked = (unit, value) => {
        dispatch({
            type: 'setActions',
            payload: {unit, value}
        })
    };

    return (
        <Wrapper className="plate1">
            {
                data.method.arr.map((item, index) => (
                    <li key={index}>
                        <div className="title">
                            {
                                t('lottery.' + item.title)
                            }
                        </div>

                        <div className="numbers">
                            {
                                item.numbers.map(num => (
                                    <div className={data.selectedBalls[item.title].indexOf(num) === -1 ? "ball" : "ball active"} 
                                        key={num} 
                                        onClick={() => onBallClicked(item.title, num)}>

                                        {
                                            num
                                        }
                                    </div>
                                ))
                            }
                        </div>

                        <div className="actions">
                            <ul>
                                {
                                    item.actions.map(action => (
                                        <li key={action}
                                            className={data.selectedActions[item.title] === action ? 'active' : ''}
                                            onClick={() => onActionClicked(item.title, action)}>
                                            
                                            {
                                                t('lottery.' + action)
                                            }
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                ))
            }
        </Wrapper>
    )
};

export default Plate1;