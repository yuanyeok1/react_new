import React, { useEffect,useReducer,useState  } from 'react';
//import {useQuery} from 'react-query';
import styled from 'styled-components';
import SvgIcon from '@/components/svgIcon';
import { imgSuffix } from '@/utils/';
import '@/assets/svgsprite/register.js';
import {getRegister,getImageCode} from './ajax.js';
import { useTranslation } from 'react-i18next';
import md5 from 'md5';
import { go } from '@/utils';
import { strEnc ,encrypt} from '@/utils/vendor/dec.js'
let bg1 = require('@/assets/images/register/bg.jpg' + imgSuffix);
let girl = require('@/assets/images/register/girl.png' + imgSuffix);
let ball = require('@/assets/images/register/ball.png' + imgSuffix);
let mon_1 = require('@/assets/images/register/mon_1.png' + imgSuffix);
let mon_2 = require('@/assets/images/register/mon_2.png' + imgSuffix);
const RegisterWrapper = styled.div`
    width: 100%;
    height: 800px;
    background: url(${bg1});
    background-size: 100% 100%;
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    input[type="number"]{
        -moz-appearance: textfield;
    }
    .widthSet{
        position: relative;
        width: 1200px;
        height: 800px;
        margin: 0 auto;
        color: ${props => props.theme.uiColor};
    }
    .imgs{
        position: relative;
        float: left;
        width: 600px;
        height: 460px;
        margin: 100px 0 0 -50px;
        background: url(${girl});
        background-size: 100% 100%;
        .ball,.mon_1,.mon_2{
            position: absolute;
            top: 300px;
            left: -40px;
            width: 52px;
            height: 52px;
            background: url(${ball});
            background-size: 100% 100%;
            animation: doudong 4s infinite;
        }
        .mon_1{
            top: -40px;
            left: 480px;
            width: 38px;
            height: 43px;
            background: url(${mon_1});
            animation-duration: 3s;
        }
        .mon_2{
            top: 140px;
            right: -40px;
            left: unset;
            width: 33px;
            height: 24px;
            background: url(${mon_2});
            animation-duration: 6s;
        }
        @keyframes doudong{
            0%,100%,20%,50%,80% {
                transition-timing-function: cubic-bezier(0.215,.61,.355,1);
                transform: translate3d(0,0,0); 
            }
            40%,43%{
                transition-timing-function: cubic-bezier(0.755,0.50,0.855,0.060);
                transform: translate3d(0,-30px,0);
            }
            70%{
                transition-timing-function: cubic-bezier(0.755,0.050,0.855,0.060);
                transform: translate3d(0,-15px,0);
            }
            90%{
                transform: translate3d(0,-4px,0);
            }
        }
    }
    .registerBox{
        position: absolute;
        top: 100px;
        right: 100px;
        width: 400px;
        height: 400px;
        .item{
            position: relative;
            padding: 16px 0 10px 0;
            margin-bottom: 10px;
            border-bottom: 1px solid ${props => props.theme.uiColor};
            &>div{
                display: inline-block;
                input{
                    width: 300px;
                    height: 34px;
                    border: none;
                }
            }
            .left{
                width: 100px;
                svg{
                    float: left;
                }
                span{
                    margin-left: 10px;
                }
            }
            .right{
                position: relative;
                img{
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 90px;
                    height: 34px;
                }
            }
            .warning{
                display: none;
                position: absolute;
                bottom: -30px;
                left: 0;
                width: 100%;
                height: 14px;
                padding-left: 10px;
                color: #f12;
                font-size: 13px;
                &.active{
                    display: inline-block;
                }
                svg{
                    float: left;
                    margin-top: 4px;
                    margin-right: 10px;
                }
            }
        }
        .btn{
            height: 56px;
            margin-top: 40px;
            cursor: pointer;
        }
        .tips{
            width: 100%;
            margin-top: 20px;
            &>div{
                display: inline-block;
                width: 60px;
            }
            .switchIcon{
                float: left;
                width: 18px;
                height: 18px;
                cursor: pointer;
                border: 1px solid #f12;
                .agree{
                    vertical-align: unset;
                }
            }
            .txt{
                width: 350px;
            }
        }
    }
`;

const formList = [
    {
        type: 'account',
        name:  '用户名',
        placeholder: '用户名',
    },{
        type: 'psw',
        placeholder: '密码',
        name:  '密码',
    },{
        type: 'phone',
        placeholder: '手机号',
        name:  '手机号',
    },{
        type: 'invite',
        placeholder: '邀请码',
        name:  '邀请码',
    },{
        type: 'safe',
        placeholder: '验证码',
        name:  '验证码',
    }
];

function init() {
    return {
        account: '',
        psw: '',
        phone: '',
        invite: '',
        safe: '',
        wraningTxt: '',
        warningStatus: {
            account: false,
            psw: false,
            phone: false,
            invite: false,
            safe: false,
        },

        agree: false
    };
}
function reducer(state,action){
    switch (action.type) {
        case 'account':
            return {
                ...state,
                ...action.payload
            };
        case 'psw': 
            return {
                ...state,
                psw:action.psw
            }
        case 'phone': 
            return {
                ...state,
                ...action.payload
            }
        case 'invite': 
            return {
                ...state,
                ...action.payload
            }
        case 'safe': 
            return {
                ...state,
                ...action.payload
            }
        case 'wraningTxt': 
            return {
                ...state,
                ...action.payload
            }
        case 'agree': 
            return {
                ...state,
                ...action.payload
            }
        default:
            throw new Error();
    }
}
const Register = () => {
    const { t } = useTranslation();
    //const { t, i18n } = useTranslation();
    const [state, dispatch] = useReducer(reducer, '', init);
    const [imgUrl,setImgUrl] = useState(`/sso/imageCode?date=${new Date()}`);
    const setInputValue = (type,value) => {
        switch (type){
            case 'account':
                dispatch({
                    type: 'account',
                    payload: { account: value }
                })
                break;
            case 'psw':
                dispatch({
                    type: 'psw',
                    psw: value 
                })
                break;
            case 'phone':
                dispatch({
                    type: 'phone',
                    payload: { phone: value }
                })
                break;
            case 'invite':
                dispatch({
                    type: 'invite',
                    payload: { invite: value }
                })
                break;
            case 'safe':
                dispatch({
                    type: 'safe',
                    payload: { safe: value }
                })
                break;
            default: 
                break;
        }
    }    
    const registerBtn = () => {
        if(state.account === '' || (state.account.length > 15 || state.account.length < 6) ){
            dispatch({
                type: 'wraningTxt',
                payload: {
                    wraningTxt: '请输入正确的用户名',
                    warningStatus: { account: true }
                }
            })
            return;
        }
        if(state.psw === '' || (state.psw.length > 15 || state.psw.length < 6) ){
            dispatch({
                type: 'wraningTxt',
                payload: {
                    wraningTxt: '请输入正确的密码',
                    warningStatus: { psw: true }
                }
            })
            return;
        }
        if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(state.phone))){ 
            dispatch({
                type: 'wraningTxt',
                payload: {
                    wraningTxt: '请输入正确的手机号',
                    warningStatus: { phone: true }
                }
            })
            return;
        } 
        if( state.safe === ''){ 
            dispatch({
                type: 'wraningTxt',
                payload: {
                    wraningTxt: '请输入正确的验证码',
                    warningStatus: { safe: true }
                }
            })
            return;
        } 
        dispatch({
            type: 'wraningTxt',
            payload: {
                wraningTxt: '',
                warningStatus: { account:false,psw: false,phone: false,safe: false }
            }
        })
        const params = {
            cn:state.account,
            password: md5(state.psw),
            encryptPassword: encrypt(state.psw, 'regist'),
            desPassword: strEnc(state.psw, '1', '2', '3'),
            phone:state.phone,
            authCode: state.safe,
            registerLinkCode: state.invite
        };
        getRegister(params).then(({data})=>{
            console.log(data)
            if(data.code === 0){
                go('/home')
            }else{

            }
            
        })
    }
    const refreshCode = () => {
        setImgUrl(`/sso/imageCode?date=${new Date()}`)
    }
    const agreeBtn = () => {
        dispatch({
            type: 'agree',
            payload: {
                agree: !state.agree,
            }
        })
    }
    useEffect( () => { 
        /* getImageCode().then( (res) => { //dom加载完后请求一次。
            console.log(res)
        } ) */
    },[]) 
    // const { data } = useQuery("getImageCode", () => getImageCode());这样写，每次提出注册都会触发
    return (
        <RegisterWrapper>
            <div className="widthSet">
                <div className="imgs">
                    <div className="mon_1"></div><div className="mon_2"></div><div className="ball"></div>
                </div>
                <div className="registerBox">
                    <div>{t('register')}</div>
                    <div className="items">
                        {formList.map( (item,index) => {
                            let inputType = item.type === 'account' ? 'text' : item.type === 'psw' ? 'password' : 'number';
                            return(
                                <div className="item" key={index}>
                                    <div className="left  12">
                                        <SvgIcon color="#b0b0b0" className={item.type} link={item.type} style={{
                                            width: 19,height: 21 }} />
                                        <span>{item.name}</span>
                                    </div>
                                    <div className="right">
                                        <input type={inputType} value={state[item.type]} placeholder={item.placeholder} 
                                            onChange={v => setInputValue(item.type,v.target.value)} />
                                        {item.type === 'safe' ?<img onChange={ () => refreshCode} src={imgUrl} alt="132" />:""}
                                    </div>
                                    <p className={"warning "+(state.warningStatus[item.type]?'active':'')}>
                                        <SvgIcon color="#f12" className="a123" link="warning" style={{
                                            width: 14,height: 14 }} />
                                        {state.wraningTxt}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                                
                    <div className="btn" onClick={registerBtn}>
                        <SvgIcon svgAsBackground={true} 
                            textStyle={{fontSize: '16px',color: '#fff'}}
                            link="button"
                            color="#cf2a2a"
                            style={{width: '400px',height: '56px'}}>
                            注册
                        </SvgIcon> 
                    </div>
                    <div className="tips">
                        <div className="switchIcon" onClick={agreeBtn}>
                            {state.agree ? <SvgIcon color="#fff" className="agree" link="agree1" style={{
                                width: 16,height: 16}} />  : ''} 
                        </div>
                        <div className="txt">一长串的文本，好像是带链接的文本一长串的文本，好像是带链接的文本一长串的文本，好像是带链接的文本
                        </div>
                    </div>
                </div>
            </div>
        </RegisterWrapper>
    )
};
export default Register;
