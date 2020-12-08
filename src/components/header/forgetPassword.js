import React, { useState } from 'react';
import styled from 'styled-components';
import '@/assets/svgsprite/home.js';
import { Modal,Steps } from 'antd';
import { imgSuffix } from '@/utils/';
import SvgIcon from '@/components/svgIcon';
const forgetPswProcess_bg1 = require('@/assets/images/home/forgetPswProcess_bg1.png' + imgSuffix);
const forgetPswProcess_bg2 = require('@/assets/images/home/forgetPswProcess_bg2.png' + imgSuffix);
const forgetPswProcess_btn_1 = require('@/assets/images/home/forgetPswProcess_btn_1.png' + imgSuffix);
const forgetPswProcess_btn_2 = require('@/assets/images/home/forgetPswProcess_btn_2.png' + imgSuffix);
const forgetPsw_step2Bg = require('@/assets/images/home/forgetPsw_step2Bg.png' + imgSuffix);

const icon_question = require('@/assets/images/home/icon_question.png' + imgSuffix);
const icon_email = require('@/assets/images/home/icon_email.png' + imgSuffix);
const icon_service = require('@/assets/images/home/icon_service.png' + imgSuffix);



const Step = Steps.Step;
const ForgetPassword =  styled(Modal)`
    .ant-modal-content {
        height: 522px;
        border: 1px solid #cf2a2a;
        background: unset;
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }
        input[type="number"]{
            -moz-appearance: textfield;
        }
        .ant-modal-header{
            background: #742223;
            border: 0;
            .ant-modal-title{
                color: ${props => props.theme.uiColor};
            }
        }
        .anticon-close{
            transition: all .3s linear;
            &:hover{
                transform: rotate(90deg);
            }
            svg{
                color: ${props => props.theme.uiColor};
                font-size: 20px;
            }
        }
         
        .ant-modal-body{
            height: 467px;
            box-sizing: border-box;
            background: #191a1b;
            .ant-steps-item-title{
                color: ${props => props.theme.uiColor};
            }
            .ant-steps-item-wait .ant-steps-item-icon{
                background: linear-gradient(135deg,transparent 3px, #383a3c 0) top left,
                            linear-gradient(-45deg,transparent 3px, #383a3c 0) bottom right;
                background-size: 100% 50%;
                background-repeat: no-repeat;
            }
            .ant-steps-item-icon{
                border-radius: 0;
                border: 0;
                background: linear-gradient(135deg,transparent 3px, #cf2a2a 0) top left,
                            linear-gradient(-45deg,transparent 3px, #cf2a2a 0) bottom right;
                background-size: 100% 50%;
                background-repeat: no-repeat;
                .ant-steps-icon{
                    color: #fff;
                }
            }
            .ant-steps-item-finish .ant-steps-item-tail{
                background: url(${forgetPswProcess_bg2}) no-repeat;
                background-size: 100% 100%;
            }
            .ant-steps-item-tail{
                height: 13px;
                width: 118px;
                margin-left: 108px;
                background: url(${forgetPswProcess_bg1}) no-repeat;
                background-size: 100% 100%;
                &:after{
                    display: none;
                }
            }
        }
        .contentWrapper{
            color: #fff;
            .info{
                width: 100%;
                margin: 30px 0;
                text-align: center;
                color: ${props => props.theme.uiColor};
            }
            .formBox{
                width: 300px;
                margin: 0 auto;
                .item{
                    position: relative;
                    height: 46px;
                    line-height: 46px;
                    margin: 36px 0;
                    &.btn{
                        height: 46px;
                        width: 300px;
                        margin-top: 45px;
                        text-align: center;
                        cursor: pointer;
                        background: url(${forgetPswProcess_btn_1}) no-repeat;
                        background-size: 100% 100%;
                    }
                    .nameBox{
                        position: absolute;
                        top: 0;
                        left: -100px;
                        width: 100px;
                        height: 46px;
                        line-height: 46px;
                        padding-right: 20px;
                        text-align: right;
                        color: ${props => props.theme.uiColor};
                    }
                    .warning{
                        display: none;
                        position: absolute;
                        bottom: -50px;
                        left: 0;
                        padding-left: 10px;
                        font-size: 13px;
                        color: #f12;
                        &.active{
                            display: inline-block;
                        }
                    }
                }
                input{
                    width: 100%;
                    height: 46px;
                    line-height: 46px;
                    padding-left: 20px;
                    background: #383a3c;
                    border-radius: 30px;
                    border: 0;
                    color: #fff;
                }
            }
        }
    }
`;

const ForgetPasswordPopup = ( {status,setForgetPswPopup} ) => {
    const handleCancel = () => {
        setForgetPswPopup(false);
        setCurrent(0)
    };
    const handleOk = () => {
    };
    const [current , setCurrent] = useState(2);
    const step = [{title: '验证用户名'},{title: '选择找回方式'},{title: '设置新密码'},{title: '完成'}];
    
    const goNext = () => {

        setCurrent(current*1 + 1)
    }
    return (
        <ForgetPassword
            visible={status}
            title={step[current].title}
            onOk={handleOk}
            onCancel={handleCancel}
            width={848}
            footer={null}
            height={520}
        >
            <Steps current={current}  labelPlacement="vertical">
                {step.map( (item,index) => <Step key={index} title={item.title}></Step>)}
            </Steps>
            
            <div className="contentWrapper">
                {<StepListDom current={current} funNext={goNext}></StepListDom>}
            </div>
            
        </ForgetPassword>
    )
};
const StepListDom = ( {current,funNext} ) => {
    switch (current) {
        case(0):
            return <Step1 funNext={funNext}></Step1>
        case(1):
            return <Step2 funNext={funNext}></Step2>
        case(2):    
            return <Step3 funNext={funNext}></Step3>
        case(3):    
            return <Step4></Step4>
        default: 
            return 
    }
};
const StepOne =  styled.div`
    .step1{
        .item{
            img{
                position: absolute;
                top: 0;
                right: 0;
                width: 50px;
                height: 30px;
                border: 1px solid #f12;
                cursor: pointer;
            }
        }
    }
`;
const Step1 = ( {funNext} ) => {
    /* const refreshCode = () => {
    } */
    const [userName , setUserName ] = useState('');
    const [code , setCode ] = useState('');
    const [wraningTxt , setWraningTxt ] = useState('');
    const [warningStatus , setWarningStatus ] = useState(0);
    const submit = () => {
        if(userName === '' || userName.length < 6 || userName.length > 16){
            setWraningTxt('请输入正确的用户名');
            setWarningStatus(1)
            return;
        }
        console.log(code)
        if(code === '' || code.length !== 4){
            setWraningTxt('请输入正确的验证码');
            setWarningStatus(2)
            return;
        }
        setWraningTxt('');
        setWarningStatus(0)
        funNext()
    }
    return(
        <StepOne>
            <div className="step1">
                <p className="info">12512512312312</p>
                <div className="formBox">
                    <div className="item">
                        <div className="nameBox">用户名</div>
                        <input type="text" defaultValue={userName}
                            onChange={setUserName} placeholder="请输入用户名" />
                        <p className={"warning "+(warningStatus=== 1?'active':'')}>
                            <SvgIcon color="#f12" className="a123" link="warning" style={{
                                width: 14,height: 14 }} />&nbsp;&nbsp;
                            {wraningTxt}
                        </p>
                    </div>
                    <div className="item">
                        <div className="nameBox">验证码</div>
                        <input type="number" defaultValue={code} 
                            placeholder="请输入验证码" onChange={setCode} />
                        {/* <img src="" alt="" onClick={refreshCode} /> */}
                        <p className={"warning "+(warningStatus=== 2?'active':'')}>
                            <SvgIcon color="#f12" className="a123" link="warning" style={{
                                width: 14,height: 14 }} />&nbsp;&nbsp;
                            {wraningTxt}
                        </p>
                    </div>
                    <div className="item btn" onClick={submit}>下一步</div>
                </div>
            </div>
        </StepOne>
    )
}
const StepTwo = styled.div`
    .step2box{
        display: none;
        &.active{
            display: block;
        }
    }
    .step2{
        .items{
            text-align: center;
        }
        .item{
            display: inline-block;
            width: 205px;
            height: 245px;
            margin: 0 10px;
            background: url(${forgetPsw_step2Bg});
            background-position: 0 0;
            &:hover{
                background-position-x: -205px;
            }
            p{
                color: ${props => props.theme.uiColor};
            }
            .img{
                width: 60px;
                height: 60px;
                margin: 36px auto 24px;
                opacity: 0.6;
                &.question{
                    background: url(${icon_question});
                    background-position: 2px 0;
                    background-repeat: no-repeat;
                }
                &.email{
                    background: url(${icon_email});
                    background-position: 0 0;
                    background-repeat: no-repeat;
                }
                &.online{
                    background: url(${icon_service});
                    background-position: 2px 0;
                    background-repeat: no-repeat;
                }
            }
            p{
                margin-bottom: 28px;
                color: ${props => props.theme.uiColor};
            }
            .btn{
                width: 134px;
                height: 24px;
                line-height: 24px;
                margin: 0 auto;
                background: url(${forgetPswProcess_btn_2}) no-repeat;
                background-size: 100% 100%;
                cursor: pointer;
            }
        }
    }
    .getVerifyCode{
        position: absolute;
        top: 0;
        right: -140px;
        width: 125px;
        height: 44px;
        line-height: 44px;
        text-align: center;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 33px;
        cursor: pointer;
    }
`;
const Step2 = ( {funNext} ) => {
    const [currentBox,setCurrentBox] = useState('step2');
    const itemList = [
        {name: '密保问题',type: "question",icon: 'icon_quesion'},
        {name: '邮箱验证',type: "email",icon: 'icon_email'},
        {name: '在线客服',type: "online",icon: 'icon_service'}
    ]
    const goNext = (type) => {
        setCurrentBox(type)
    }
    const [questionText,setQuestionText] = useState('');
    const [answer,setAnswer] = useState('');
    const [email,setEmail] = useState('');
    const [vertifyCode,setVertifyCode] = useState('');
    const [timeNum,setTimeNum] = useState(null);

    const [wraningTxt , setWraningTxt ] = useState('');
    const [warningStatus , setWarningStatus ] = useState(0);
    const getVerifyCode = () => {
        if(timeNum && timeNum <= 60) return;
        let i = 60;
        let timeDropdown = setInterval( () => {
            --i; 
            if(i < 0){
                setTimeNum(0);
                clearInterval(timeDropdown);
                return;
            }
            setTimeNum(i)
        },1000)
    }
    const submitQuestion = () => {
        if(answer === '' || answer.length < 2 || answer.length > 16){
            setWraningTxt('请输入正确的答案');
            setWarningStatus(1);
            return;
        }
        setWarningStatus(0)
        setWraningTxt('')
        funNext()
    }
    const submitEmail = () => {
        if(email === '' || !/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email)){
            setWraningTxt('请输入正确的邮箱');
            setWarningStatus(2);
            return;
        }
        if(vertifyCode === '' || vertifyCode.length !== 4){
            setWraningTxt('请输入正确的验证码');
            setWarningStatus(3);
            return;
        }
        setWarningStatus(0)
        setWraningTxt('')
        funNext()
    }
    return(
        <StepTwo>
            <div className={"step2box step2 "+(currentBox === 'step2'?"active":'')}>
                <p className="info">12512512312312</p>
                <div className="items">
                    {itemList.map( (item,index) => (
                        <div className="item" key={index}>
                            <div className={"img "+(item.type)}></div>
                            {/* <SvgIcon className="a123" link={item.icon} style={{width: 60 }} /> */}
                            <p>{item.name}</p>
                            <div className="btn" onClick={goNext.bind(this,(item.type))}>进入验证</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={"step2box questionBox "+(currentBox === 'question'?"active":'')}>
                <p className="info">密保问题验证</p> 
                <div className="formBox">
                    <div className="item">
                        <div className="nameBox">问题</div>
                        <input type="text" defaultValue={questionText}
                            onChange={setQuestionText}
                            placeholder="请选择密保问题" 
                        />
                    </div>
                    <div className="item">
                        <div className="nameBox">答案</div>
                        <input type="number" defaultValue={answer} 
                            placeholder="请输入答案" 
                            onChange={setAnswer}
                        />
                        <p className={"warning "+(warningStatus=== 1?'active':'')}>
                            <SvgIcon color="#f12" className="a123" link="warning" style={{
                                width: 14,height: 14 }} />&nbsp;&nbsp;
                            {wraningTxt}
                        </p>
                    </div>
                    <div className="item btn" onClick={submitQuestion}>提交</div>
                </div>              
            </div>
            
            <div className={"step2box emailBox "+(currentBox === 'email'?"active":'')}>
                <div className="formBox">
                    <div className="item">
                        <div className="nameBox">邮箱</div>
                        <input type="text" defaultValue={email} placeholder="请输入邮箱" 
                            onChange={setEmail}
                        />
                        <p className={"warning "+(warningStatus=== 2?'active':'')}>
                            <SvgIcon color="#f12" className="a123" link="warning" style={{
                                width: 14,height: 14 }} />&nbsp;&nbsp;
                            {wraningTxt}
                        </p>
                    </div>
                    <div className="item">
                        <div className="nameBox">验证码</div>
                        <input type="number" defaultValue={vertifyCode} placeholder="请输入验证码" 
                            onChange={setVertifyCode}
                        />
                        <div className="getVerifyCode" onClick={getVerifyCode.bind(this)}>
                            {timeNum ? '当前剩余'+timeNum+'秒' : '获取验证码'}
                        </div>
                        <p className={"warning "+(warningStatus=== 3?'active':'')}>
                            <SvgIcon color="#f12" className="a123" link="warning" style={{
                                width: 14,height: 14 }} />&nbsp;&nbsp;
                            {wraningTxt}
                        </p>
                    </div>
                    <div className="item btn" onClick={submitEmail}>提交</div>
                </div>     
            </div>
        
        </StepTwo>
    )
}
const Step3 = ( {funNext} ) => {

    const [newPsw,setNewPsw] = useState('');
    const [newPswAgain,setNewPswAgain] = useState('');

    const [wraningTxt , setWraningTxt ] = useState('');
    const [warningStatus , setWarningStatus ] = useState(0);

    const submitPsw = () => {
        if(newPsw === '' ||newPsw.length<6||newPsw.length>16){
            setWraningTxt('请输入合法的密码')
            setWarningStatus(1)
            return;
        }
        if(newPswAgain !== newPsw){
            setWraningTxt('两次输入的密码不一致')
            setWarningStatus(2)
            return;
        }
        setWraningTxt('')
        setWarningStatus(0)
        funNext()
    }
    return(
        <div className="step3">
            <p className="info">充值密码</p>
            <div className="formBox">
                <div className="item">
                    <div className="nameBox">新密码</div>
                    <input type="password" defaultValue={newPsw}
                        onChange={setNewPsw} placeholder="请输入新密码" />
                    <p className={"warning "+(warningStatus=== 1?'active':'')}>
                        <SvgIcon color="#f12" className="a123" link="warning" style={{
                            width: 14,height: 14 }} />&nbsp;&nbsp;
                        {wraningTxt}
                    </p>
                </div>
                <div className="item">
                    <div className="nameBox">确认新密码</div>
                    <input type="password" defaultValue={newPswAgain} 
                        placeholder="请再次输入新密码" onChange={setNewPswAgain} />
                    <p className={"warning "+(warningStatus=== 2?'active':'')}>
                        <SvgIcon color="#f12" className="a123" link="warning" style={{
                            width: 14,height: 14 }} />&nbsp;&nbsp;
                        {wraningTxt}
                    </p>
                </div>
                <div className="item btn" onClick={submitPsw}>提交</div>
            </div>
        </div>
    )
}
const Step4 = ( ) => {
    return(
        <div className="step4">

            <p className="info">修改成功</p>
            
        </div>
    )
}

export default React.memo(ForgetPasswordPopup);