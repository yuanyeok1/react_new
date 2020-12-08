import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: ${props => (props.width? props.width : '850px')};
    margin:${props => (props.margin? props.margin : '20px auto 0')};
    padding:${props => (props.padding? props.padding : '0 0 30px 0')};
    background: #252627; 
    background: linear-gradient(135deg, transparent 5px, #252627 0) top left, 
                linear-gradient(-135deg, transparent 0px, #252627 0) top right, 
                linear-gradient(-45deg, transparent 5px, #252627 0) bottom right, 
                linear-gradient(45deg, transparent 0px, #252627 0) bottom left;
    background-size: 50% 50%;            
    background-repeat:no-repeat;
    position: relative;
    .title{
        display:block;
        padding:15px 20px;
        border-bottom:1px solid #383a3c;
        font-size:14px;
        color:#fff;
    }
    
    
`;

const Content = ({children,...props}) => {
    return (
        <Wrapper {...props}>
            {props.title ? <span className='title'>{props.title}</span> : null}
            {children ? children : null}
        </Wrapper>   
    );
};

export default Content;