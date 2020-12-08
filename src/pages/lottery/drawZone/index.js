import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SvgIcon from '@/components/svgIcon';
import { imgSuffix } from '@/utils/';
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';
import DrawBalls from './drawBalls';
import FlipClock from './flipClock';

const HeaderBg = require('@/assets/images/lottery/draw-zone-header.png' + imgSuffix);
const contentBg = require('@/assets/images/lottery/draw-zone-content-bg.png' + imgSuffix);

const Wrapper = styled.div`
    width: 100%;
    height: 172px;

    .header {
        width: 100%;
        height: 64px;
        background: linear-gradient(0deg, #811616, #CF2A2A);
        background-image: url(${HeaderBg});
        background-size: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .left-part {
            flex: 2;
            height: 64px;
            line-height: 64px;
            text-align: left;
            padding-left: 18px;
            font-family: Arial;
            font-weight: bold;
            font-size: 24px;
            color: #FFFFFF;
        }

        .middle-part {
            height: 100%;
            flex: 3;
            display: flex;
            align-items: center;
            justify-content: center;

            .issue-time {
                font-size: 16px;
                font-family: Arial;
                font-weight: 400;
                color: #FFFFFF;
                margin-left: 4px;
            }
        }

        .right-part {
            height: 100%;
            flex: 3;
            display: flex;
            align-items: center;
            justify-content: center;

            .last-issue {
                font-size: 16px;
                font-family: Arial;
                font-weight: 400;
                color: #FFFFFF;
                margin-left: 4px;
            }
        }
    }

    .content {
        width: 100%;
        height: 108px;
        background-image: url(${contentBg});
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .left-part {
            flex: 2;
            height: 64px;
            line-height: 64px;
            text-align: left;
            padding-left: 18px;
            font-size: 16px;
            font-family: Arial;
            font-weight: 400;
            color: #8C8D8D;
        }

        .middle-part {
            height: 100%;
            flex: 3;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .right-part {
            height: 100%;
            flex: 3;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const DrawZone = ({currentMethod}) => {
    const { t } = useTranslation();
    const dict = {
        jisucai: t('pages.jisucai'),
        north: t('pages.north'),
        middle: t('pages.middle'),
        south: t('pages.south')
    };
    const query = useQuery();
    const [nums, setNums] = useState(['--', '--', '--', '--', '--', '--']);
    const [animationFlag, setAnimationFlag] = useState(false);
    const methodNameArr = currentMethod.split('|'); 

    useEffect(() => {
        setNums(['01', '02', '03', '04', '05', '06']);
    }, []);

    return (
        <Wrapper>
            <div className="header">
                <div className="left-part">
                    {
                        dict[query.get("type")]
                    }
                </div>

                <div className="middle-part">
                    <SvgIcon link="count-down" color="#FFF" size="16" />

                    <div className="issue-time">
                        第 20200816 期投注截止还有
                    </div>
                </div>

                <div className="right-part">
                    <SvgIcon link="star" color="#FFF" size="16" />
                    
                    <div className="last-issue">
                        第 20200815 期开奖号码
                    </div>

                    <Button type="primary" style={{marginLeft: '10px'}} onClick={() => {
                        setAnimationFlag(false);

                        const st = setTimeout(() => {
                            setAnimationFlag(true);
                            window.clearTimeout(st);
                        }, 100);
                    }}>
                        开始开奖
                    </Button>
                </div>
            </div>

            <div className="content">
                <div className="left-part">
                    {
                        t('lottery.' + methodNameArr[0]) + ' > ' + t('lottery.' + methodNameArr[1]) + ' > ' + t('lottery.' + methodNameArr[2])
                    }
                </div>

                <div className="middle-part">
                    <FlipClock />
                </div>

                <div className="right-part">
                    <DrawBalls animationFlag={animationFlag} result={nums} />
                </div>
            </div>
        </Wrapper>
    )
};

export default DrawZone;