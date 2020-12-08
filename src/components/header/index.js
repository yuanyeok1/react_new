import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { go } from '@/utils';
import commonStore from '@/mobx/commonStore';
import dialogStore from '@/mobx/dialogStore';
import { observer } from 'mobx-react-lite';
import { imgSuffix } from '@/utils/';
import '@/assets/svgsprite/home.js';
import SvgIcon from '@/components/svgIcon';
import MyModal from '@/components/dialogs/modal/index.js';
import ForgetPasswordPopup from './forgetPassword';
import SubNav from './subNav';
import { Radio } from 'antd';
const navBg = require('@/assets/images/home/navBg.jpg' + imgSuffix);
const question_icon = require('@/assets/images/home/question_icon.png' + imgSuffix);
const Wrapper = styled.div`
    width: 100%;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"]{
        -moz-appearance: textfield;
    }
`;
const Top = styled.div`
    width: 100%;
    background-color: #0e0e0f;
    height: 55px;
    .logo{
        float: left;
        width: 146px;
        height: 38px;
        margin: 10px 0 0 10px;
        .logoSvg{
            width: 146px;
            height: 38px;
        }
    }
    .funZone{
        float: right;
        &>div{
            float: right;
            height: 55px;
            margin-left: 30px;
            padding-top: 16px;
        }
        .userName{
            position: relative;
            padding: 16px 16px 0 0;
            color: ${props => props.theme.uiColor};
            
            span{
                display: block;
                position: relative;
                text-align: center;
                i{
                    position: absolute;
                    top: 10px;
                    right: -16px;
                    width: 0;
                    height: 0;
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                    border-top: 7px solid ${props => props.theme.uiColor};
                }
            }
            &:hover .funPopup{
                display: block;
            }
            .funPopup{
                z-index: 11;
                display: none;
                position: absolute;
                top: 55px;
                left: -40px;
                width: 216px;
                padding: 10px 0;
                text-align: center;
                background: #191a1b;
                font-size: 14px;
                box-shadow: 0px 0px 20px 0px rgba(4, 4, 4, 0.6);
                border: solid 1px #cf2a2a;
                &:before{
                    content: '';
                    display: block;
                    position: absolute;
                    top: -6px;
                    left: 50%;
                    width: 0;
                    height: 0;
                    margin-left: -5px;
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                    border-bottom: 5px solid #cf2a2a;
                }
                span{
                    display: block;
                    width: 100%;
                    height: 34px;
                    line-height: 34px;
                    cursor: pointer;
                    &:hover{
                        background-image: linear-gradient(-90deg,#cf2a2a 0%, #811616 100%);
                    }
                }
                p{
                    display: inline-block;
                    width: 180px;
                    height: 28px;
                    line-height: 28px;
                    margin: 10px auto;
                    background: #383a3c;
                    border-radius: 14px;
                    cursor: pointer;
                }
            }
        }
        .balance{
            color: ${props => props.theme.uiColor};
        }
        .funList{
            span{
                padding: 4px 20px;
                margin: 10px;
                border: 1px solid ${props => props.theme.uiColor};
                color: ${props => props.theme.uiColor};
                border-radius: 16px;
                cursor: pointer;
                &:hover{
                    background: #cf2a2a;
                    border-color: #cf2a2a;
                }
            }
        }
    }
    .loginZone{
        float: right;
        margin-top: 14px;
        &>div{
            float: right;
            margin-left: 20px;
        }
        .input{
            position: relative;
            width: 200px;
            height: 28px;
            line-height: 28px;
            input{
                float: left;
                width: 100%;
                height: 28px;
                padding-left: 10px;
                outline: none;
                border: 0;
                color: ${props => props.theme.uiColor};
                border: 1px solid ${props => props.theme.uiColor};;
                border-radius: 20px;
                &:focus{
                    border: 1px solid #cf2a2a;
                }
            }
            .forgetPsw{
                position: absolute;
                top: 6px;
                right: 6px; 
                width: 15px;
                height: 15px;
                background: url(${question_icon});
                background-size: 100% 100%;
                cursor: pointer;
            }
        }
        .btn{
            width: 134px;
            height: 24px;
            cursor: pointer;
        }
    }
`;
const Nav = styled.div`
    position: relative;
    width: 100%;
    height: 90px;
    background-image: linear-gradient(0deg, #0c0d0d 0%,#1d1d1e 100%),linear-gradient(#0e0e0f, #0e0e0f);
    .navList{
        width: 1360px;
        height: 100%;
        margin: 0 auto;
        .navItem{
            display: inline-block;
            height: 90px;
            padding: 30px 12px 0 12px;
            font-size: 16px;
            color: ${props => props.theme.uiColor};
            cursor: pointer;
            &.jisucai,&.north,&.south,&.middle{
                position: relative;
                .subPopup{
                    left: 43px;
                    width: unset;
                    height: unset;
                    background: linear-gradient(-45deg,transparent 15px, rgba(0,0,0,0.90) 0);
                }
            }
            &.jisucai .subPopup{
                left: -23px;
                background: rgba(0,0,0,0);
            }
            &.north,&.south,&.middle{
                .subPopup{
                    width: 580px;
                    padding-bottom: 25px;
                }
            }
           
            &:hover{
                background: url(${navBg});
                background-size: 100% 100%;
                .subPopup{
                    display: block;
                }
            }
            .arrow{
                display: inline-block;
                width: 0;
                height: 0;
                margin-left: 10px;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
                border-top: 7px solid ${props => props.theme.uiColor};
            }
            
            .subPopup{
                z-index: 11;
                display: none;
                position: absolute;
                top: 90px;
                left: 0;
                width: 100%;
                height: 340px;
                background: rgba(0,0,0,0.90);
            }
        }
    }

`;

const navList = [
    {
        name: 'pages.home',
        pathname: '/home',
        type: 'home'
    },
    {
        name: 'pages.jisucai',
        pathname: '/lottery?type=jisucai',
        lotteryList: [{
            title: '牛逼彩1',
            name: 'niubi1'
        },{
            title: '牛逼彩2',
            name: 'niubi2'
        }],
        type: 'jisucai'
    },
    {
        name: 'pages.north',
        pathname: '/lottery?type=north',
        type: 'north'
    },
    {
        name: 'pages.middle',
        pathname: '/lottery?type=middle',
        type: 'middle'
    },
    {
        name: 'pages.south',
        pathname: '/lottery?type=south',
        type: 'south'
    },
    {
        name: 'pages.sports',
        pathname: '/sports',
        type: 'sports'
    },
    {
        name: 'pages.live',
        pathname: '/live',
        type: 'live'
    },
    {
        name: 'pages.slots',
        pathname: '/slots',
        type: 'slots'
    },
    {
        name: 'pages.esports',
        pathname: '/esports',
        type: 'esports'
    }
];
const options = [
    { label: '越南文', value: 'vi' },
    { label: '中文', value: 'zh' },
    { label: '英文', value: 'en' },
];
const userCenterList = [
    {
        name:'pages.userCenter.info', 
        path:'/userCenter/info'
    },
    {
        name:'pages.userCenter.wdMethod',
        path:'/userCenter/wdMethod/index'
    },
    {
        name:'pages.userCenter.transactions',
        path:'/userCenter/transactions'
    },
    {
        name:'pages.userCenter.gameRecords',
        path:'/userCenter/gameRecords'
    },
    {
        name:'pages.userCenter.messages',
        path:'/userCenter/messages'
    },
]
const userCenterCTZ = [
    {
        name:'pages.userCenter.deposit', 
        path:'/userCenter/deposit'
    },
    {
        name:'pages.userCenter.transfer',
        path:'/userCenter/transfer'
    },
    {
        name:'pages.userCenter.withdrawal',
        path:'/userCenter/withdrawal'
    }
]

const Header = () => {
    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState('');
    const changeLanguage = e => {
        setLang(e.target.value);
        localStorage.setItem('lang',e.target.value);
        i18n.changeLanguage(e.target.value);
    };
    const goLogout = () => {
        MyModal.confirm({
            title: '确认',
            content: '确定退出！',
            okText: t('ok'),
            cancelText: t('cancel'),
            onOk:()=>{
                localStorage.removeItem('logined');
                commonStore.setLoginStatus(false)
            }
        });
    };
    const [passwordVal , setPasswordVal] = useState('');
    const [userName , setUserName] = useState('');
    const [forgetPswPopup , setForgetPswPopup] = useState(false);
    const [verCode , setVerCode] = useState('');
    const [verCodeStatus , setVerCodeStatus] = useState(false);
    const openForgetPswPopup = () => {
        setForgetPswPopup(true)
        setVerCodeStatus(true)
    }
    const goLogin = () => {
        /* if(userName === ''){
            MyModal.error({
                content: '请输入正确的用户名',
            })
            return;
        }
        if(passwordVal === ''){
            MyModal.error({
                content: '请输入正确的密码',
            })
            return;
        }
        if(verCodeStatus && verCode=== ''){
            MyModal.error({
                content: '请输入正确的验证码',
            })
            return;
        } */
        //dialogStore.showLoginDialog()
    }
    return (
        <Wrapper>
            <Top>
                <div className="logo"><SvgIcon className="logoSvg" link="logo" /></div>
                {commonStore.isLogin ? 
                    <div className="funZone">
                        <div className="funList">
                            {userCenterCTZ.map(item=>{
                                return (
                                    <span key={item.name} onClick={()=>go(item.path)}>{t(item.name)}</span>
                                )
                            })}
                        </div> 
                        <div className="balance">余额：<span>53241123123</span> VND <i className="refresh"></i></div>
                        <div className="userName">
                            <span>demaxiya<i className="active"></i></span>
                            <div className="funPopup">
                                {userCenterList.map(item=>{
                                    return (
                                        <span key={item.name} onClick={()=>go(item.path)}>{t(item.name)}</span>
                                    )
                                })}
                                <p onClick={goLogout}>退出登录</p>
                            </div>
                        </div>
                    </div> 
                    : 
                    <div className="loginZone">
                        <div className="btn register" onClick={() => go('/register')}>
                            <SvgIcon svgAsBackground={true} textStyle={{fontSize: '14px',color: '#fff'}}
                                link="button" color="#fdae3e" style={{width: '134px',height: '24px'}}>
                                {t('register')}
                            </SvgIcon>
                        </div>
                        <div className="btn login" onClick={goLogin}>
                            <SvgIcon svgAsBackground={true} textStyle={{fontSize: '14px',color: '#fff'}}
                                link="button" color="#cf2a2a" style={{width: '134px',height: '24px'}} >
                                {t('login')}
                            </SvgIcon>
                        </div>
                        {verCodeStatus ? 
                            <div className="input">
                                <input type="number" placeholder = "请输入验证码" value = {verCode}
                                    onChange = { v => { setVerCode(v.target.value) }} />
                                {/* <img alt="" src="" /> */}
                            </div> : ''
                        }
                        <div className="input">
                            <input type="password" placeholder = "请输入密码" value = {passwordVal}
                                onChange = { v => { setPasswordVal(v.target.value) }}/>
                                <i className="forgetPsw" onClick={openForgetPswPopup}></i>
                            {/* <SvgIcon color="#fff"  className="forgetPsw"  link="iconQuesion" 
                                size={16} onClick={openForgetPswPopup}/> */}
                        </div>
                        <div className="input">
                            <input type="text" placeholder="请输入用户名" 
                                value = {userName} onChange = { v => { setUserName(v.target.value) }}
                            />
                        </div>
                        <div>
                            <Radio.Group
                                options={options}
                                onChange={changeLanguage}
                                value={lang || i18n.language}
                                optionType="button"
                            />
                        </div>
                    </div>
                }
            </Top>
            <Nav>
                <div className="navList">
                    {navList.map(item => (
                        <div className={"navItem "+(item.type)} key={item.name} onClick={() => go(item.pathname)}>
                            {t(item.name)}
                            <i className="arrow"></i>
                            {item.type !== 'home' ? 
                                <div className="subPopup">
                                    <SubNav type={item.type} />
                                </div> : ''
                            }
                            
                        </div>
                    ))}
                </div>
            </Nav>
            
            <ForgetPasswordPopup status={forgetPswPopup}  setForgetPswPopup={setForgetPswPopup} />

            
            {/* <Inner>
                <div></div>
                    <div className="middle-part">
                        <Button type="primary" size='large' onClick={() => dialogStore.showLoginDialog()}>
                            {t('login')}
                        </Button>
                        {commonStore.isLogin?
                            <Button type="primary" danger size='large' onClick={goLogout}>
                                {t('logout')}
                            </Button> : null
                        }
                        <Button type="primary" size='large' onClick={() => go('/register')}>
                            {t('register')}
                        </Button>
                        <Button type="primary" size='large' onClick={() => go('/userCenter')}>
                            {t('userCenter')}
                        </Button> 
                    </div>
            </Inner> */}
        </Wrapper>
    )
};

export default observer(Header);