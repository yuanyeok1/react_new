import React from 'react';
import styled from 'styled-components';
import UserCenterRouter from '../../router/userCenter';
import { useTranslation } from 'react-i18next';
import { go } from '@/utils';
// import { useQuery } from 'react-query'
// import { getUserInfo } from './ajax';
// import commonStore from '@/mobx/commonStore';
import { imgSuffix } from '@/utils/';
import { useLocation } from 'react-router-dom';
import '@/assets/svgsprite/userCenter.js';
import HoverSvg from '@/components/hoversvg';
import theme from '@/theme/userCenter.js'
const cbg = require('@/assets/images/center/bg.png'+imgSuffix);
const bgsprit=require('@/assets/images/center/bgsprit.png'+imgSuffix);
const cbg_top = require('@/assets/images/center/bgred.png'+imgSuffix);
const cbgtop= require('@/assets/images/center/cbgtop.png'+imgSuffix);
const cbgbottom = require('@/assets/images/center/cbgbottom.png'+imgSuffix);
const user = require('@/assets/images/center/user.jpg'+imgSuffix);
const minH  = '858px'
const Wrapper = styled.div`
    width: 100%;
    margin: 0 auto;
    background:#000;
    background-image:url(${cbg});
    position: relative;
    padding-top:96px;
    padding-bottom:63px;
    &:after{
        content:'';
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:430px;
        background-image:url(${cbg_top});
        background-repeat:no-repeat;
        z-index:1;
    }
    .center{
        position:relative;
        width:1200px;
        background:#191a1b;
        z-index:2;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: flex-start;;
        justify-content: flex-start;
            
        &::before{
            content:'';
            position:absolute;
            width:100%;
            height:20px;
            top:-20px;
            left:0;
            background-image:url(${cbgtop});
            background-repeat:no-repeat;
        };
        &::after{
            content:'';
            position:absolute;
            width:318px;
            height:33px;
            bottom:-33px;
            left:-8px;
            background-image:url(${cbgbottom});
            background-repeat:no-repeat;
        };
        .left-part {
            width: 310px;
            min-height:${minH};
            position: relative;
            .user{
                width:100%;
                height:334px;
                position: relative;
                border-bottom:1px solid #383a3c;
                .usericon{
                    position:absolute;
                    width:130px;
                    height:130px;
                    border-radius:50%;
                    border:2px solid red;
                    top:-65px;
                    left:50%;
                    margin-left:-65px;
                    background-image:url(${user});
                    background-repeat:no-repeat;
                }
                .username{
                    color:#fff;
                    font-size:18px;
                    padding-top: 78px;
                    text-align:center;
                }
                .userListIcon{
                    width:223px;
                    height:34px;
                    display:flex;
                    justify-content:space-between;
                    margin:0 auto;
                    i{
                        width:32px;
                        height:32px;
                        border-radius:50%;
                        border:1px solid #8c8d8d;
                    } 
                }
                h5{
                    margin-top:38px;
                    font-size: 14px;
                    color:#fff;
                    text-align:center;
                }
                .userblc{
                    color: #fdae3e;
                    font-size:24px;
                    text-align:center;
                }
                .bts{
                    text-align:center;
                    span{
                        display:inline-block;
                    }
                    .smallbtn{
                        width: 87px;
                        height: 24px;
                        background: #252627; 
                        background: url(${bgsprit}) no-repeat;       
                        background-position:0px -32px;
                        text-align:center;
                        color:#fff;
                        font-size:12px;
                        line-height:24px;
                        cursor: pointer;  
                        &.active{
                            background-position:0px -56px;
                        }  
                    }
                    .largerbtn{
                        width: 107px;
                        height: 24px;
                        background: #252627; 
                        background: url(${bgsprit}) no-repeat;       
                        background-position:-87px -32px;
                        text-align:center;
                        color:#fff;
                        font-size:12px;
                        line-height:24px;
                        cursor: pointer;   
                        &.active{
                            background-position:-87px -56px;
                        }  
                    }
                }
            }
            .center-nav {
                width: 100%;
                list-style: none;
                li {
                    height: 70px;
                    line-height: 70px;
                    width: 100%;
                    padding-left:39px;
                    cursor: pointer;
                    color:${props => props.theme.userCenter.fontColor};
                    i{
                        vertical-align:middle;
                    }
                    i:last-child {
                        font-size:16px;
                        margin-left:24px;
                    }
                }
                li.active,
                li:hover {
                    background: url(${bgsprit}) no-repeat;       
                    background-position:1px -80px;
                    color:${props => props.theme.userCenter.hoverColor};
                    svg{
                        color:${props => props.theme.userCenter.hoverColor};
                    }
                }
            }
        }
    }
    

    .right-part {
        min-height:${minH};
        border-left:1px solid #383a3c;
        flex: 1;
        width:890px;
        position: relative;
        &::after{
            content:'';
            position:absolute;
            width:865px;
            height:25px;
            left:-1px;
            bottom:-25px;
            border-left:1px solid #383a3c;
            background:  #191a1b;
        }
        &::before{
            content:'';
            position: absolute;
            right:0;
            bottom:-25px;
            border-left:25px solid #191a1b;
            border-top:25px solid #191a1b;
            border-right:25px solid transparent;
            border-bottom:0;
        }
    }
`;
const pagebtns=[
    {
        name: 'pages.userCenter.deposit',
        path: '/userCenter/deposit'
    },
    {
        name: 'pages.userCenter.transfer',
        path: '/userCenter/transfer'
    },
    {
        name: 'pages.userCenter.withdrawal',
        path: '/userCenter/withdrawal'
    },
]

const pageItems = [
    {
        name: 'pages.userCenter.info',
        path: '/userCenter/info',
        icon: 'info',
        size:'24',
        height:'20'
        
    },
    {
        name: 'pages.userCenter.wdMethod',
        path: '/userCenter/wdMethod/index',
        pathName:'/userCenter/wdMethod',
        icon: 'wd-method',
        size:'24',
        height:'21'
    },
    {
        name: 'pages.userCenter.transactions',
        path: '/userCenter/transactions',
        icon: 'transactions',
        size:'24',
        height:'24'
    },
    {
        name: 'pages.userCenter.gameRecords',
        path: '/userCenter/gameRecords',
        icon: 'game-records',
        size:'24',
        height:'21'
    },
    {
        name: 'pages.userCenter.messages',
        path: '/userCenter/messages',
        icon: 'messages',
        size:'24',
        height:'22'
    }
];

const UserCenter = () => {
    const { t } = useTranslation();

    /**
     *  请求数据：useEffect版
     */
    // useEffect(() => {
    //     if (commonStore.isLogin) {
    //         getUserInfo();
    //     }
    // }, []);

    // const { isLoading, isError, error } = useQuery('getUserInfo', getUserInfo, {enabled: commonStore.isLogin});

    // if (isLoading) {
    //     return <span>Loading...</span>
    // }

    // if (isError) {
    //     return <span>Error: {error.message}</span>
    // }
    const location = useLocation();
    return (
        <Wrapper>
            <div className='center'>
                    <div className="left-part">
                        <div className='user'>
                            <div className='usericon'></div>
                            <p className='username'>asdasdas</p>
                            <div className='userListIcon'>
                                <i>
                                    <HoverSvg link="iphone" size="32" color={theme.fontColor} hoverColor={theme.hoverColor}/>
                                </i>
                                <i>
                                    <HoverSvg link="email" size="32" color={theme.fontColor} hoverColor={theme.hoverColor}/>
                                </i>
                                <i>
                                    <HoverSvg link="bank-icon" size="32" color={theme.fontColor} hoverColor={theme.hoverColor}/>
                                </i>
                                <i>
                                    <HoverSvg link="user" size="32" color={theme.fontColor} hoverColor={theme.hoverColor}/>
                                </i>
                            </div>
                            <h5>主账户</h5>
                            <p className='userblc'>123123131越南盾 <HoverSvg link="pr" size="18" color={theme.fontColor}/></p>
                            <div className='bts'>
                                {
                                    pagebtns&&pagebtns.map((item,i) => {
                                            let cn = location.pathname.indexOf(item.path)>-1?'active':''
                                            
                                            if(i===1){
                                                return <span  onClick={() => go(item.path)} key={i} className={`largerbtn ${cn}`}>
                                                    {t(item.name)}
                                                </span>
                                            }
                                            return  <span  onClick={() => go(item.path)} key={i} className={`smallbtn ${cn}`}>
                                                    {t(item.name)}
                                                </span>
                                        }
                                    )
                                }
                            </div>
                        </div>
                        <ul className="center-nav">
                            {
                                pageItems.map(item => {
                                    let cn = location.pathname.indexOf(item.pathName?item.pathName:item.path)>-1?'active':''
                                    return (
                                        <li className={cn} key={item.name} onClick={() => go(item.path)}>
                                            <i><HoverSvg link={item.icon} size={item.size} height={item.height} color={theme.fontColor} hoverColor={theme.hoverColor}/></i>
                                            <i>{t(item.name)}</i>
                                        </li>
                                        
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className="right-part">
                        <UserCenterRouter />
                    </div>
                </div>
        </Wrapper>
    );
};

export default UserCenter;