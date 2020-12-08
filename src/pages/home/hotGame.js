import React from 'react';
import styled from 'styled-components';
import { imgSuffix } from '@/utils/';
//import SvgIcon from '@/components/svgIcon';
import { go } from '@/utils';
let module_bg = require('@/assets/images/home/module_bg.png' + imgSuffix);
let hotGame_img = require('@/assets/images/home/hotGame_img.png' + imgSuffix);
const HotGameWrapper = styled.div`
    padding: 50px 0;
    .items{
        .item{
            display: inline-block;
            position: relative;
            width: 569px;
            height: 188px;
            margin: 40px 60px 0 0;
            padding: 40px 0 0 50px;
            background: url(${module_bg});
            background-position: 0 -606px;
            /* &:hover{
                background-position-y: -794px;
            } */
            &:nth-child(2n){
                margin-right: 0;
            }
            .img{
                position: absolute;
                top: -33px;
                right: 0px;
                background: url(${hotGame_img});
                &.live{
                    width: 238px;
                    height: 218px;
                    background-position: -14px 4px;
                }
                &.elec{
                    top: -29px;
                    width: 188px;
                    height: 208px;
                    background-position: -66px -219px;
                }
                &.sport{
                    top: -29px;
                    width: 188px;
                    height: 208px;
                    background-position:-72px -438px;
                }
                &.game{
                    top: -29px;
                    width: 218px;
                    height: 210px;
                    background-position: -37px -656px;
                }
                &.fish{
                    top: -29px;
                    width: 229px;
                    height: 210px;
                    background-position: -28px -875px;
                }
                &.local{
                    top: -15px;
                    width: 255px;
                    height: 194px;
                    background-position: 1px -1103px;
                }
            }

            .name{
                font-size: 18px;
            }
            .content{
                margin: 4px 0 20px 0;
                font-size: 14px;
                color: #8c8d8d;
            }
            .btn{
                width: 150px;
                height: 32px;
                text-align: center;
                perspective: 300px;
                cursor: pointer;
                &:hover .shape{
                    transform: rotateX(180deg);
                }
                .shape{
                    width: 100%;
                    height: 100%;
                    transition: transform 0.3s;
                    transform-style: preserve-3d;
                    &:hover{
                        transform: rotateX(89deg);
                    }
                }
                .firstShape,.secondShape{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    backface-visibility: hidden;
                    background: blue;
                }
                .firstShape{
                    transform: perspective(300px) rotateX(180deg);
                }
                .secondShape{
                    background: red;
                    transform: perspective(300px) rotateX(0deg);
                }
            }
        }
        
    }
`;
const gameList = [
    {
        title: '真人',
        type: 'live',
        url: '/live',
        content: '一款非常好的游戏',
    },
    {
        title: '电子游戏',
        type: 'slots',
        url: '/slots',
        content: '一款非常好的游戏',
    },
    {
        title: '体育',
        type: 'sport',
        url: '/sport',
        content: '一款非常好的游戏',
    },
    {
        title: '电子竞技',
        type: 'esports',
        url: '/esports',
        content: '一款非常好的游戏',
    },
    {
        title: '捕鱼',
        type: 'fish',
        url: '/fish',
        content: '一款非常好的游戏',
    },
    {
        title: '民间游戏',
        type: 'local',
        url: '/local',
        content: '一款非常好的游戏',
    }
];
const HotGame = () => {
    return (
        <HotGameWrapper>
            <div className="title"><span>热门游戏</span></div>
            
            <div className="items">
                {gameList.map( (item,index) => (
                    <div className="item" key={index}>
                        <div className={"img "+(item.type)}></div>
                        <div className="name">{item.title}</div>
                        <div className="content">{item.content}</div>
                        <div className="btn" onClick={ ()=>go(item.url)}>
                            <div className="shape">
                                <div className="firstShape">
                                    1
                                    {/* <SvgIcon svgAsBackground={true} link="button"color="#cf2a2a"
                                        textStyle={{height: '30px',fontSize: '14px',color: '#fff'}}
                                        style={{width: '140px',height: '32px'}}>
                                        进入
                                    </SvgIcon> */}
                                </div>
                                <div className="secondShape">
                                    2
                                    {/* <SvgIcon svgAsBackground={true} link="button"color="#cf2a2a"
                                        textStyle={{height: '30px',fontSize: '14px',color: '#fff'}}
                                        style={{width: '140px',height: '32px'}}>
                                        进入
                                    </SvgIcon> */}
                                </div>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </HotGameWrapper>
    )
};

export default HotGame;