import React from 'react';
import styled from 'styled-components';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 14, color: '#FFF' }} spin />;

const Wrapper = styled.div`
    display: inline-block;
    position: relative;
`;

const SvgWrapper = styled.svg`
    vertical-align: middle;
    width: ${props => props.width};
    height: ${props => props.height};
    fill: ${props => props.color};

    &:hover {
        fill: ${props => props.hoverColor};
        opacity: ${props => props?.hoverStyle?.opacity || 0.6}
    }
`;

const ButtonText = styled.div`
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

    span {
        margin-right: 10px;
    }
`;

const HoverButton  = (props) => {
    const { className, color, hoverColor, hoverStyle, link, width, height, textStyle, onClick, loading, children} = props;
    const widthSize = width && width + (Number.isNaN(+width) ? '' : 'px');
    const heightSize = height && height + (Number.isNaN(+height) ? '' : 'px');
    const BackgroundClass = `my-button ${className || ''}`;

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

            <ButtonText style={textStyle || {}}>
                {/* 使用类名更容易被外部同名css覆盖 毕竟不会时时刻刻了解到本组件使用了text类名*/}
                {/* <span className="text"> {children} </span>  */}
                <span> {children} </span>

                {
                    loading && <Spin indicator={antIcon} size="12" />
                }
            </ButtonText>
        </Wrapper>
    );
};

export default HoverButton;