import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import DrawZone from './drawZone';
import Plate from './plates';
import IssueHistory from './issueHistory';
import HistoryZone from './historyZone';
import '@/assets/svgsprite/lottery.js';
import { imgSuffix } from '@/utils/';

const LotteryBg = require('@/assets/images/lottery/lottery-bg.jpg' + imgSuffix);

const Wrapper = styled.div`
    width: 100%;
    background-color: #000;
    background-image: url(${LotteryBg});
    background-size: cover;
    padding-top: 20px;
    padding-bottom: 100px;
`;

const Inner = styled.div`
    width: 1200px;
    margin: 0 auto;
    min-height: 600px;

    .play-zone {
        background-color: #191A1B;
        width: 100%;
        height: 824px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;

        .left-part {
            width: 860px;
        }

        .right-part {
            margin-left: 4px;
            width: 336px;

        }
    }
`;

const Page = () => {
    const [method, setMethod] = useState('--');

    const onMethodChanged = useCallback((value) => {
        setMethod(value);
    }, []);

    return (
        <Wrapper className="lottery-page">
            <Inner>
                <DrawZone currentMethod={method}/>

                <div className="play-zone">
                    <div className="left-part">
                        <Plate onMethodChanged={onMethodChanged}/>
                    </div>

                    <div className="right-part">
                        <IssueHistory />
                    </div>
                </div>

                <HistoryZone />
            </Inner>
        </Wrapper>
    )
};

export default Page;