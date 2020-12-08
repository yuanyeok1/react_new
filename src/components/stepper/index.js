import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100px;

    // &:hover {
    //     height: 104px;

    //     .row2 {
    //         display: block;
    //         position: relative;
    //         z-index: 20;
    //     }       
    // }

    .row1 {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        background-color: #252627;

        .minus, .plus {
            width: 24px;
            height: 24px;
            line-height: 24px;
            background-color: #252627;
            text-align: center;
            color: ${props => props.theme.lottery.fontColor};
            cursor: pointer;
            font-size: 14px;
        }
    
        .number {
            width: 80px;
            height: 24px;
            line-height: 24px;
            overflow: hidden;
    
            input {
                font-size: 14px;
                color: ${props => props.theme.lottery.fontColor};
                text-align: center;
                width: 100%;
                outline: none;
                border: 0;
                background-color: #191A1B;
                height: 20px;
            }

            input::-webkit-outer-spin-button,
            input::-webkit-inner-spin-button {
              -webkit-appearance: none;
            }

            input[type="number"]{
              -moz-appearance: textfield;
            }
        }
    }

    .row2 {
        width: 100%;
        height: 80px;
        list-style: none;
        text-align: center;
        display: none;

        // &:hover {
        //     display: block;
        // }

        li {
            height: 20px;
            line-height: 20px;
            width: 100%;
            border: 1px solid #252627;
            border-top: 0;
            color: #FFF;
            background-color: #252627;
            cursor: pointer;
        }
    }
`;

const Stepper = ({ value, callback }) => {
    const onMinus = () => {
        if (value > 1) {
            callback(value - 1);
        }
    };

    const onPlus = () => {
        callback(value + 1);
    };

    const onChange = (e) => {
        callback(Number(e.target.value));
    };

    return (
        <Wrapper>
            <div className="row1">
                <div className="minus" onClick={onMinus}>-</div>

                <div className="number">
                    <input type="number" min="1" max="999999" value={value} onChange={onChange} />
                </div>

                <div className="plus" onClick={onPlus}>+</div>
            </div>

            {/* <ul className="row2">
                {
                    list.map(item => (
                        <li key={item} onClick={() => setNum(Number(item))}>
                            {
                                item
                            }
                        </li>
                    ))
                }
            </ul> */}
        </Wrapper>
    )
};

export default Stepper;