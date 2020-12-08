import React, { useEffect } from 'react';
import styled from 'styled-components';

const Inner = styled.div`
    width: 100%;
    height: 100%;
    padding: 33px 22px;
    line-height: 25px;
    font-size: 16px;
    font-family: 'ArialMT ';
`;

const Page = (props) => {
    console.log('props:',props);
    let {content} = props.name;
    let nowHash = window.location.hash.split('#')[1];
    useEffect(() => {
        getNewHash(nowHash);
    });
    const getNewHash = (nowHash) => {
        props.getNewHash(nowHash);
    }
    return (
        <Inner dangerouslySetInnerHTML={{__html: content[nowHash]}}>
        </Inner>
    )
};

export default Page;