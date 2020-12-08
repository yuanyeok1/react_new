import React from 'react';
import styled from 'styled-components';

const SvgWrapper = styled.svg`
    width: 1em;
    vertical-align: middle;
    fill: currentColor;
    cursor:pointer;
    &:hover {
        fill: ${props => props?.hoverColor};
    }
`;

const SvgBackground = styled.div`
    display: inline-block;
    position: relative;
`;

const ButtonText = styled.div`
    z-index: 1;
    color: #FFF;
    font-size: 14px;
    width: 100%;
    text-align: center;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -12px !important;
    font-size: 14px;
    height: 24px;
    line-height: 24px;
`;

const SvgIcon = (props) => {
    const { className, color, link, size, fill, onClick, height, style,hoverColor} = props;
    const calcSize = size && size + (Number.isNaN(+size) ? '' : 'px');
    const heightSize = height && height + (Number.isNaN(+height) ? '' : 'px');
    const svgclass = `svg-icon ${className || ''}`;
    const svgStyle = {
        ...(calcSize ? { width: calcSize, height: heightSize ? heightSize : calcSize } : {}),
        ...style,
        ...(fill ? { fill: `url(#${fill})` } : {}),
    };

    if (props.svgAsBackground) {
        return (
            <SvgBackground className={svgclass} onClick={onClick}>
                <SvgWrapper style={svgStyle} color={color} hoverColor={hoverColor?hoverColor:color}>   
                    <use xlinkHref={`#${link}`} />
                </SvgWrapper>

                <ButtonText style={props.textStyle || {}}>
                    {
                        props.children
                    }
                </ButtonText>
            </SvgBackground>
        );
    } else {
        return (
            <SvgWrapper
                className={svgclass}
                style={svgStyle}
                onClick={onClick}
                color={color}
                hoverColor={hoverColor?hoverColor:color}
            >   
                <use xlinkHref={`#${link}`} />
            </SvgWrapper>
        );
    }
};

export default SvgIcon