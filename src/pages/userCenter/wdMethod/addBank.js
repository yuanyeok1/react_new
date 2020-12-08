import React, { useReducer,useRef } from 'react';
import styled from 'styled-components';
import { Form, Input, Select } from 'antd';
import RightHead from '@/components/usercenter/rightHead.js'
import { useTranslation } from 'react-i18next';
import SvgIcon from '@/components/svgIcon';
import { go } from '@/utils';
import bankList from '@/utils/bankList.config.js';
import { Centerdiv } from '@/components/usercenter/index.js';
import MyButton from '@/components/buttons/myButton';
import { Reg } from '@/utils/regex.js';

const Warpper = styled.div`
    .back-icon{
        margin:0 12px 0 20px;
        cursor:pointer;
    }
    .ant-form-item{
        padding-top:20px;
        margin-bottom:0;
        color:#8c8d8d;
        .radius,
        .ant-select-selector,
        .ant-input-affix-wrapper{
            width: 350px;
            font-size:14px;
            background-color: #383a3c;
            border-radius: 18px;
            border:0;
        }
        input::-webkit-input-placeholder,
        .ant-input,
        .ant-select{
            color:#8c8d8d;
        }
        .ant-input-password-icon,
        .ant-select-suffix{
            color:#ffffff;
        }
        .ant-input,
        .ant-input-affix-wrapper{
            background-color:#383a3c;
        }
        .radius,
        .ant-select-selector{
            padding-left:20px !important;
        }
        .pwd-input{
            padding-left:20px;
            input{
                font-size:14px;
            }
            
        }
    }
    .ant-form-item-label{
        label{
            color:#8c8d8d;
            width:222px;
            padding-left:32px;
        }
    }
    
    .search-btn{
        width:100%;
        padding:29px 0 31px 210px;
    }
    .tips{
        margin:10px 0 0;
        padding:0 20px 15px 232px;
        font-size:12px;
        color:#8c8d8d;
        border-bottom:1px solid #383a3c;      
    }
    .border-b{
        padding:15px 0;
        border-bottom:1px solid #383a3c;
    }
    .ant-form-item-explain-error{
        padding-left:20px;
    }
`


function reducer(state, action) {
    switch (action.type) {
        case "name":
            return {
                ...state,
                ...action.payload
            };
        case "bank":
            return {
                ...state,
                ...action.payload
            };
        case "card":
            return {
                ...state,
                ...action.payload
            };
        case "pwd":
            return {
                ...state,
                ...action.payload
            };
        default:
            throw new Error();
    }
}

const AddBank = () => {
    const { t } = useTranslation();

    function init() {
        return {
            name: '',
            nameValidateStatus: "success",
            nameHelp: null,
            bank: t('bankList.YNNN'),
            card: '',
            cardValidateStatus: "success",
            cardHelp: null,
            pwd: '',
            pwdValidateStatus: "success",
            pwdHelp: null,
            loading:false
        }
    }
    const inputName = useRef(null);
    const inputCard = useRef(null);
    const inputPwd = useRef(null);
    const [state, dispatch] = useReducer(reducer, null, init);
    let {
        name,
        nameValidateStatus,
        nameHelp,
        bank,
        card,
        cardValidateStatus,
        cardHelp,
        pwd,
        pwdValidateStatus,
        pwdHelp,
        loading
    } = state;

    const search = () => {
        name = Reg.regRemoveFES(name);
        card = Reg.regRemoveFES(card);
        pwd = Reg.regRemoveFES(pwd);
        if(name === ''){
            inputName.current.focus();
            dispatch({
                type:'name',
                payload:{
                    name:'',
                    nameValidateStatus:'error',
                    nameHelp:'tipS'
                }
            })
        }else if(card === ''){
            inputCard.current.focus();
            dispatch({
                type:'card',
                payload:{
                    card:'',
                    cardValidateStatus:'error',
                    cardHelp:'tipC'
                }
            })
        }else if(pwd === ''){
            inputPwd.current.focus();
            dispatch({
                type:'pwd',
                payload:{
                    pwd:'',
                    pwdValidateStatus:'error',
                    pwdHelp:'tipP'
                }
            })
        }else{
            console.log('ok')
        }
    };

    const changeInput = (e,type) => {
        let value = e.target.value,
            status,
            help;
        value = Reg.regRemoveFS(value); //第一个字符不能是空格
        switch(type){
            case 'name': //输入名称时校验输入规则
                if(value){ 
                    value = Reg.regRemoveFES(value);
                    status = 'success'
                    help = null
                }else{
                    value = '';
                    status = 'error'
                    help = 'tipS'
                }
                break;
            case 'card': //输入银行卡时校验输入规则,纯数字，范围为8-16位，
                if(value){ 
                    value = Reg.regBank(value,16);
                    status = 'success'
                    help = null
                }else{
                    value = '';
                    status = 'error'
                    help = 'tipC'
                }
                break;
            case 'pwd': //输入资金密码时校验输入规则
                if(value){ 
                    value = Reg.regRemoveAllS(value);
                    status = 'success'
                    help = null
                }else{
                    value = '';
                    status = 'error'
                    help = 'tipP'
                }
                break;
            default:
                throw new Error();
        }
        setTimeout(()=>{
            dispatch({
                type,
                payload:{
                    [type]:value,
                    [type+'ValidateStatus']:status,
                    [type+'Help']:help
                }
            })
        },50)
        
    }

    const changeBank = (e) => {
        dispatch({
            type: 'bank',
            payload:{
                bank: e
            }
        });
    }

    return (
        <Warpper>
            <RightHead title={t('personCenter.wdMethod.addBank')}>
                <i className="back-icon" onClick={() => go(-1)}><SvgIcon link="back" size="14" /></i>
            </RightHead>
            <Centerdiv width={850} top={20}>
                <div>
                    <Form
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 10 }}
                        size="large"
                    >
                        <Form.Item
                            label={t('personCenter.wdMethod.name')}
                            validateStatus={nameValidateStatus}
                            help={nameHelp!==null?t(`personCenter.wdMethod.${nameHelp}`):null}
                        >
                            <Input 
                                value={name} 
                                className="radius" 
                                placeholder={t('personCenter.wdMethod.inputName')} 
                                onChange={e=>changeInput(e,'name')}
                                ref={inputName}
                            />

                        </Form.Item>
                        <div className="tips">{t('personCenter.wdMethod.tipName')}</div>

                        <Form.Item
                            className="border-b"
                            label={t('personCenter.wdMethod.bankName')}
                        >
                            <Select defaultValue={bank} onChange={changeBank}>
                                {
                                    Object.keys(bankList).map(item => {
                                        return (
                                            <Select.Option key={item} value={item}>{t('bankList.' + item)}</Select.Option>
                                        )
                                    })
                                }

                            </Select>
                        </Form.Item>

                        <Form.Item
                            label={t('personCenter.wdMethod.cardNum')}
                            validateStatus={cardValidateStatus}
                            help={cardHelp!==null?t(`personCenter.wdMethod.${cardHelp}`):null}
                        >
                            <Input 
                                value={card} 
                                className="radius" 
                                placeholder={t('personCenter.wdMethod.inputCard')} 
                                onChange={e=>changeInput(e,'card')}
                                ref={inputCard}
                            />
                        </Form.Item>
                        <div className="tips">{t('personCenter.wdMethod.tipCard')}</div>

                        <Form.Item
                            className="border-b"
                            label={t('personCenter.wdMethod.pwd')}
                            validateStatus={pwdValidateStatus}
                            help={pwdHelp!==null?t(`personCenter.wdMethod.${pwdHelp}`):null}
                        >
                            <Input.Password 
                                value={pwd} 
                                className="pwd-input" 
                                placeholder={t('personCenter.wdMethod.inputPwd')} 
                                onChange={e=>changeInput(e,'pwd')}
                                ref={inputPwd}
                            />
                        </Form.Item>

                        <div className="search-btn">
                            <MyButton 
                                className="search" 
                                link="btn350" 
                                color="#cf2a2a" 
                                width="350"
                                height="35"
                                loading={loading}
                                onClick={search}
                            >
                                {t('ok')}
                            </MyButton>
                        </div>
                    </Form>
                </div>
            </Centerdiv>
        </Warpper>
    )
}

export default AddBank