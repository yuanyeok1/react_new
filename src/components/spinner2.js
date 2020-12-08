import React from 'react';
import ClockLoader from "react-spinners/ClockLoader";
import styled from 'styled-components';

const Wrapper = styled.div`
    background: ${props => (!props.global && props.backgroundColor)? props.backgroundColor : 'transparent'};
    width: 100%;
    height: ${props => props.global? '800px' : (props.height? props.height + 'px' : '100%')};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 99999;
`;

const Mask = styled.div`
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 99998;
    pointer-events: none;
`;

/**
 ** spinner有两种情况：
 ** 1. 全局的, 会带Mask。 （props传参方法： global={true}，必传）
 ** 2. 局部的，不带Mask。  (props传参方法： height={必传，spinner所加载部分的高度} backgroundColor={可选，默认为transparent})
 */
const Loading = (props) => {
    return (
        <React.Fragment>
            <Wrapper {...props}>
                <ClockLoader
                    size={60}
                    color={"#cf2a2a"}
                    loading={true}
                />
            </Wrapper>

            {
                props.global && <Mask />
            }
        </React.Fragment>
    );
};

export default Loading;