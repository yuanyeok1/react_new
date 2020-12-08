import React from 'react';
import styled from 'styled-components'
//import SvgIcon from '@/components/svgIcon';
import { imgSuffix } from '@/utils/';
import Banner from './banner';
import Announcement from './announcement';
import LotteryModule from './lottery';
import LocalGame from './localGame';
import HotGame from './hotGame';

let bgWrapper = require('@/assets/images/home/bg.png' + imgSuffix);
let module_bg = require('@/assets/images/home/module_bg.png' + imgSuffix);

const HomeZone = styled.div`
    width: 100%;
    .banner{
        height: 520px;
        background: blue;
    }
    p{
        margin: 0;
    }
    .bgWrapper{
        width: 100%;
        background-color: #191a1b;
        background-image: url(${bgWrapper});
        .widthSet{
            width: 1200px;
            margin: 20px auto;
            color: ${props => props.theme.uiColor};
        }
        .title{
            display: flex;
            position: relative;
            width: 100%;
            height: 60px;
            line-height: 60px;
            margin: 20px 0;
            justify-content: center;
            &::before,&::after{
                content: '';
                position: absolute;
                top: 0;
                left: -100px;
                width: 396px;
                height: 60px;
                background: url(${module_bg});
                background-position: -2px -50px;
            }
            &::after{
                left: unset;
                right: -100px;
                transform: rotate(-180deg);
            }
            &.lotteryTitle span:before{
                width: 50px;
                background-position: 0px 0px;
            }
            span{
                position: relative;
                padding-left: 50px;
                font-size: 30px;
                &:before{
                    content: '';
                    position: absolute;
                    top: 6px;
                    left: -50px;
                    width: 44px;
                    height: 50px;
                    background: url(${module_bg});
                    background-position: -53px 0px;
                    opacity: 0.6;
                }
            }
        }
    }
    
`;

const Home = () => {
    return (
        <HomeZone>
           
            <Banner />
            <div className="bgWrapper">   
                <div className="widthSet">
                    <Announcement />

                    <LotteryModule />

                    <LocalGame />

                    <HotGame />
                </div>
            </div>
            
            
        </HomeZone>
    )
};

export default Home;