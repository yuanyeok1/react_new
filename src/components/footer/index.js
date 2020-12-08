import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import '@/assets/svgsprite/home.js';
import { imgSuffix } from '@/utils/';
import { go } from '@/utils';

const footerBg = require('@/assets/images/home/footerBg.png' + imgSuffix);
const footerLogo = require('@/assets/images/home/footerLogo.png' + imgSuffix);
const footerIcon = require('@/assets/images/home/footerIcon.png' + imgSuffix);


const FooterWrapper = styled.div`
    position: relative;
    width: 100%;
    padding-top: 50px;
    background: #191a1b;
    color: ${props => props.theme.uiColor};
    &:before{
        content: '';
        display: block;
        position: absolute;
        top: -20px;
        left: 0;
        width: 100%;
        height: 34px;
        background: url(${footerBg});
    }
    .widthSet{
        width: 1200px;
        margin: 0 auto;
        text-align: center;
    }
    .navList{
        margin: 50px 0;
        &>div{
            display: inline-block;
            padding: 0 30px;
            border-right: 1px solid ${props => props.theme.uiColor};
            i{
                cursor: pointer;
            }
            &:last-child{
                border: 0;
            }
        }
    }
    .bottom{
        height: 60px;
        background: #000;
        p{
            display: inline-block;
            float: left;
            margin-top: 20px;
        }
        .footerIcon{
            float: right;
            width: 205px;
            height: 29px;
            margin-top: 15px;
            background: url(${footerIcon});
        }
    }
`;

const navMapList = [
    {
        name: '账户问题',
        pathname: '/helpercenter#Account'
    },
    {
        name: '充提问题',
        pathname: '/helpercenter#TradeQuestion',
    },
    {
        name: '彩票问题',
        pathname: '/helpercenter#LotteryQuestion'
    },
    {
        name: '彩票规则',
        pathname: '/helpercenter#LotteryRule'
    },
    {
        name: '关于我们',
        pathname: '/helpercenter#Userment'
    }
];

const Footer = () => {
    
    return (
        <FooterWrapper>
            <div className="widthSet">
                <div style={{opacity: 0.6}}><img src={footerLogo} alt="" /></div>
                <div className="navList">
                    {navMapList.map( (item,index) => (
                        <div key={index}><i onClick={() => go(item.pathname)} >{item.name}</i></div>
                    ))}
                </div>
            </div>
            <div className="bottom">
                <div className="widthSet">
                    <p>BẢN QUYỀN © 2020 Winlott Mọi quyền được bảo lưu. Chứng nhận cấp phép trò chơi FCLRC của chính phủ Philippines</p>
                    <div className="footerIcon"></div>
                </div>
            </div>
        </FooterWrapper>
    )
};
export default observer(Footer);