/* 
 * 因为Loading的样式 常常使画面抖动
 * 写了一个可变式布局
 * 预设: 会吃上面那一层的布局宽高
 * props: {
 *   layout: 'absolute' | 'fixed' 对应className
 *   minHeight: Number | String, ex: 100 => 100px, '100px' => '100px', '10vw' => '10vw', '100' => '100px'
 *   zIndex: Number | String
 * }
 */

import React from 'react';
import styled from 'styled-components';
import { css } from "@emotion/core";
import ClockLoader from "react-spinners/ClockLoader";

const override = css`
    display: block;
    margin: 20px auto;
`;

const LoadingWrap = styled.div(props => {
    switch (props.layout) {
        case 'absolute':
            return {
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                backgroundColor: 'rgba(25, 26, 27, .8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        case 'fixed':
            return {
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 2000,
                backgroundColor: 'rgba(25, 26, 27, .8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        default:
            return {
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                zIndex: 'auto'
            }
    }
})

const Loading = (props) => {
    const quantifiedMinHeight = isNaN(props.minHeight) ? props.minHeight : `${props.minHeight}px`
    return (
        <LoadingWrap 
            layout={props.layout}
            style={{height: quantifiedMinHeight, zIndex: props.zIndex || ''}}>
            <ClockLoader
                css={override}
                size={60}
                color={"#cf2a2a"}
                loading={true}
            />
        </LoadingWrap>
    );
};

export default Loading;