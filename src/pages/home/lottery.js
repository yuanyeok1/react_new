import React from 'react';
import styled from 'styled-components';
import { imgSuffix } from '@/utils/';
import SvgIcon from '@/components/svgIcon';

let module_bg = require('@/assets/images/home/module_bg.png' + imgSuffix);

const Lottery = styled.div`
    .bigBox{
        display: inline-block;
        width: 590px;
        height: 358px;
        padding: 43px 0 0 42px;
        background: url(${module_bg});
        background-position: 0 -120px;
        &:last-child{
            float: right;
        }
        .subItem{
            display: inline-block;
            width: 230px;
            height: 260px;
            margin-right: 54px;
            text-align: center;
            &:last-child{
                margin-right: 0;
            }
            .name{
                font-size: 24px;
            }
            .dateNum{
                width: 190px;
                height: 24px;
                line-height: 24px;
                margin: 10px auto;
                text-align: center;
                border-radius: 12px;
                border: 1px solid #919191;
                color: #8c8d8d;
            }
            .openNum{
                 
                span{
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                    margin: 10px 3px;
                    text-align: center;
                    background: linear-gradient(0deg,#5b5c5e 0%, #ffffff 100%);;
                    border-radius: 50%;
                    color: #191a1b;
                }
            }
            .tick{
                margin: 10px auto;
                font-size: 24px;
            }
            .d{
                color: #8c8d8d;
            }
            .btn{
                width: 194px;
                height: 24px;
                margin: 10px auto;
                cursor: pointer;
            }
        }
    }
`;
const lotteryList = [
    {
        list: [
            {
                name: '胡志明',
                code: 'hu',
                openNum: [1,2,3,4,5,7]
            },
            {
                name: '河内',
                code: 'he',
                openNum: [1,2,3,4,5,7]
            }
        ]
    },
    {
        list: [
            {
                name: '极速1分彩',
                code: 'ji1',
                openNum: [1,2,3,4,5,7]
            },
            {
                name: '极速5分彩',
                code: 'ji5',
                openNum: [1,2,3,4,5,7]
            }
        ]
    }
];
const LotteryModule = () => {
    const goLink = (code) => {
        //console.log(code)
    }
    return (
        <Lottery>
            <div className="title lotteryTitle"><span>热门游戏</span></div>
            
            <div className="items">
                {lotteryList.map( (item,i) => {
                    return(
                        <div className="bigBox" key={i}>
                            {item.list.map( (subItem,k) => {
                                return(
                                    <div className="subItem" key={k}>
                                        <div className="name">{subItem.name}</div>
                                        <div className="dateNum">1231231231231231231</div>
                                        <div className="openNum">
                                            {subItem.openNum.map( (nums,n) => {
                                                return(
                                                    <span key={n}>{nums}</span>
                                                )
                                            })}
                                        </div>
                                        <div className="tick">23:11:11</div>
                                        <div className="d">124124123截止</div>
                                        <div className="btn" onClick={goLink(subItem.code)}>
                                        <SvgIcon svgAsBackground={true} 
                                            textStyle={{fontSize: '14px',color: '#fff'}}
                                            link="button"
                                            color="#cf2a2a"
                                            style={{width: '194px',height: '24px'}}
                                        >
                                            立即游戏
                                        </SvgIcon>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            
        </Lottery>
    )
};

export default LotteryModule;