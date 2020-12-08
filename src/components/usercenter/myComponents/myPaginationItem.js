import React from 'react';
import styled from 'styled-components';

const PageItem = styled.div`
    border: 0;
    width: 40px;
    height: 35px;
    line-height: 35px;
    color:  ${props => props.theme.userCenter.fontColor};
    text-align: center;
`;

function PageItemRender(current, type, originalElement) {
    if (type === 'prev') {
        return <PageItem>&lt;</PageItem>;
    } else if (type === 'next') {
        return <PageItem>&gt;</PageItem>;
    } else if (type === 'page') {
        return <PageItem>{current}</PageItem>;
    }

    return originalElement;
}

export default PageItemRender;
