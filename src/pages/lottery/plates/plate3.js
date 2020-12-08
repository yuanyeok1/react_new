import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 670px;
    height: 160px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 20px;
    margin-top: 10px;

    .cube {
        width: 24px;
        height: 24px;
        line-height: 24px;
        background-color: #383A3C;
        text-align: center;
        font-size: 14px;
        font-family: Arial;
        font-weight: 400;
        color: #8C8D8D;
        margin-right: 10px;
        margin-top: 10px;
        cursor: pointer;

        &:nth-child(20n) {
            margin-right: 0;
        }
    }

    .active {
        background-color: #CF2A2A;
        color: #FFF;
    }

    .disabled {
        background-color: #191a1b;
        border: 1px solid #252627;
        color: #252627;
    }
`;

var numbers = [];

for(var i = 0; i < 100; i++){
    numbers.push(i);
}

function getClass(arr, arrLimit, item) {
    if (arr.indexOf(item) !== -1) {
        return "cube active";
    }

    if (arr.length < arrLimit) {
        return "cube";
    }

    return "cube disabled";
}

const Plate3 = ({data, dispatch}) => {
    const onCubeClicked = (value) => {
        dispatch({
            type: 'setChuanGuanNumbers',
            payload: value
        });
    };

    return (
        <Wrapper className="plate3">
            {
                numbers.map(item => (
                    <div    className={getClass(data.selectedNumbers, data.method.arrLen, item)}
                            onClick={() => onCubeClicked(item)}
                            key={item} >
                        {
                            item < 10 ? '0' + item : '' + item
                        }
                    </div>
                ))
            }
        </Wrapper>
    )
};

export default Plate3;