import React from 'react';
import styled from 'styled-components';
import { imgSuffix } from '@/utils/';

const contentBg = require('@/assets/images/center/bgsprit.png'+imgSuffix);
const Wrapper = styled.div`
    color: ${props => props.theme.userCenter.fontColor};
    border-bottom:1px solid #383a3c;
    line-height:54px;
    font-size:16px;
    .rh-icon{
        display:inline-block;
        width:10px;
        height:16px;
        margin:0 12px 0 20px;
        background:url(${contentBg}) no-repeat;
        background-position: -168px 0px;
        vertical-align:middle;
    }
    .rh-icon,
    .title{
        vertical-align:middle;
    }
`;

const RightHead = ({children,...props}) => {

    return (
        <Wrapper>
            {
                children?children:<i className="rh-icon"></i>
            }
            <span className="title">{props.title}</span>
        </Wrapper>   
    );
};

export default RightHead;