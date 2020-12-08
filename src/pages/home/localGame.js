import React from 'react';
import styled from 'styled-components';
import { imgSuffix } from '@/utils/';
import SvgIcon from '@/components/svgIcon';

let module_bg = require('@/assets/images/home/module_bg.png' + imgSuffix);
let local_img = require('@/assets/images/home/local_img.png' + imgSuffix);
const LocalGameWrapper = styled.div`
    .title_local{
        display: flex;
        width: 100%;
        height: 60px;
        line-height: 60px;
        margin: 30px 0;
        justify-content: center;
        span{
            display: inline-block;
            position: relative;
            font-size: 30px;
            &::before,&::after{
                content: '';
                position: absolute;
                top: 26px;
                left: -300px;
                width: 150px;
                height: 10px;
                background: url(${module_bg});
                background-position: -35px -110px;
            }
            &::after{
                left: unset;
                right: -300px;
                transform: rotate(-180deg);
            }
        }
    }
    .items{
        
        .item{
            position: relative;
            display: inline-block;
            width: 288px;
            height: 128px;
            margin-right: 16px;
            padding: 26px 0 0 160px;
            background: url(${module_bg});
            background-position: 0 -478px;
            &:last-child{
                margin-right: 0;
            }
            .img{
                position: absolute;
                top: 22px;
                left: 40px;
                width: 123px;
                height: 86px;
                background: url(${local_img});
                background-position: 1px 0;
                &.bg_1{
                    top: 17px;
                    left: 30px;
                }
                &.bg_2{
                    width: 100px;
                    height: 80px;
                    background-position: -10px -87px;
                }
                &.bg_3{
                    width: 78px;
                    height: 79px;
                    background-position: -22px -173px;
                }
                &.bg_4{
                    width: 102px;
                    height: 75px;
                    background-position: -10px -260px;
                }
            }
            .name{
                font-size: 18px;
                white-space: nowrap;
            }
            .btn{
                width: 103px;
                height: 26px;
                margin-top: 10px;
                cursor: pointer;
            }
        }
    }
`;
const gameList = [
    {
        name: 'Bầu Cua鱼虾蟹',
        bgId: 'bg_1',
        type: 1
    },{
        name: 'Tài Xỉu大底',
        bgId: 'bg_2',
        type: 2
    },{
        name: 'Xóc Đĩa冲击盘',
        bgId: 'bg_3',
        type: 3
    },{
        name: 'Money Blast金钱炸弹',
        bgId: 'bg_4',
        type: 4
    }
];
const LocalGame = () => {
    const goLink = () => {

    }
    return (
        <LocalGameWrapper>
            <div className="title_local"><span>民间游戏</span></div>
            
            <div className="items">
                {gameList.map( (item,index) => {
                    return(
                        <div className="item" key={index}>
                            <div className={"img "+(item.bgId)}></div>
                            <div className="name">{item.name}</div>
                            <div className="btn" onClick={goLink(item.type)}>
                                <SvgIcon svgAsBackground={true} 
                                    textStyle={{fontSize: '13px',color: '#fff'}}
                                    link="button"
                                    color="#cf2a2a"
                                    style={{width: '103px',height: '24px'}}
                                >
                                    进入
                                </SvgIcon>
                            </div>
                        </div>
                    )
                })}
            </div>
        </LocalGameWrapper>
    )
};

export default LocalGame;