import React from 'react';
import styled from 'styled-components';

const Arrow = styled.i`
    display: inline-block;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 7px solid #fff;
`

export default (props) => {
    return <Arrow />
}