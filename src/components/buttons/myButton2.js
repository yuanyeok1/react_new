import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 14, color: '#FFF' }} spin />;

const Wrapper = styled.div`
    display: inline-block;
    position: relative;
    cursor: pointer;

    &:hover {
        opacity: 0.6;

        .front-icon {
            top: -5px;
        }
    }
`;

const SvgWrapper = styled.svg`
    vertical-align: middle;
    width: ${props => props.width};
    height: ${props => props.height};
    fill: ${props => props.color};
`;

const ButtonZone = styled.div`
    z-index: 1;
    color: #FFF;
    font-size: 14px;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    font-size: 14px;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;

    .front-icon {
        margin-right: 10px;
        width: 12px;
        height: 12px;
        fill: #FFF;
        position: relative;
        transition: all 0.5s;
    }

    .text {
        margin-right: 10px;
    }
`;

const HoverButton  = (props) => {
    const { 
        className, 
        color, 
        hoverColor, 
        hoverStyle, 
        link, 
        width, 
        height, 
        textStyle, 
        onClick, 
        loading, 
        children,
        frontIcon
    } = props;

    const widthSize = width && width + (Number.isNaN(+width) ? '' : 'px');
    const heightSize = height && height + (Number.isNaN(+height) ? '' : 'px');
    const BackgroundClass = `my-button2 ${className || ''}`;

    const onClicked = () => {
        if (!loading) {
            onClick();
        }
    };

    return (
        <Wrapper className={BackgroundClass} onClick={onClicked}>
            <SvgWrapper width={widthSize} height={heightSize} color={color} hoverColor={hoverColor?hoverColor:color} hoverStyle={hoverStyle}>   
                <use xlinkHref={`#${link}`} />
            </SvgWrapper>

            <ButtonZone style={textStyle || {}}>
                {
                    frontIcon && 
                    <svg className="front-icon">   
                        <use xlinkHref={`#${frontIcon}`} />
                    </svg>
                }

                <span className="text"> {children} </span>

                {
                    loading && <Spin indicator={antIcon} size="12" />
                }
            </ButtonZone>
        </Wrapper>
    );
};

export default HoverButton;