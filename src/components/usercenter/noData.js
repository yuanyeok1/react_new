import React from 'react';
import styled from 'styled-components';

import SvgIcon from '@/components/svgIcon'
import '@/assets/svgsprite/bank.js';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: ${props => props.height + 'px'};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    .noData-text {
        margin: 6px 0;
        font-size: 14px;
        letter-spacing: 0;
        color: #8c8d8d;
    }
`

export default function NoData(props) {
    return (
        <Wrapper className={props.className} height={props.height}>
            <SvgIcon link='bank-data' style={{height:'50px',width:'66px'}}  color="#8c8d8d" />
            <p className="noData-text">{props.title}</p>
            {props.children}
        </Wrapper>
    )
}