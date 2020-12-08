import React from 'react';
import styled from 'styled-components';
import SvgIcon from '@/components/svgIcon';

const Wrapper = styled.div`
    width: 400px;
    height: 65px;
    margin-left: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .svg-icon {
        cursor: pointer;
    }
`;

const Plate4 = ({data, dispatch}) => {
    return (
        <Wrapper className="plate4">
            <SvgIcon 
                link={data.selectedAnimals.indexOf('fish') === -1 ? "fish" : "fish-active"} 
                style={{width: '120px', height: '65px'}} 
                onClick={() => dispatch({
                    type: 'setPlate4Animal',
                    payload: 'fish'
                })} 
            />

            <SvgIcon 
                link={data.selectedAnimals.indexOf('lobster') === -1 ? "lobster" : "lobster-active"} 
                style={{width: '120px', height: '65px'}} 
                onClick={() => dispatch({
                    type: 'setPlate4Animal',
                    payload: 'lobster'
                })} 
            />

            <SvgIcon 
                link={data.selectedAnimals.indexOf('crab') === -1 ? "crab" : "crab-active"} 
                style={{width: '120px', height: '65px'}}  
                onClick={() => dispatch({
                    type: 'setPlate4Animal',
                    payload: 'crab'
                })} 
            />
        </Wrapper>
    );
};

export default Plate4;