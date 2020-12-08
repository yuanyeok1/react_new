import React, { useReducer,useRef } from 'react';
import styled from 'styled-components';
import { Form, Input, Select } from 'antd';
import RightHead from '@/components/usercenter/rightHead.js'
import { useTranslation } from 'react-i18next';
import SvgIcon from '@/components/svgIcon';
import { go } from '@/utils';
import { Centerdiv } from '@/components/usercenter/index.js'
import { Reg } from '@/utils/regex.js';
import MyButton from '@/components/buttons/myButton';

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
        .search{
            cursor: pointer;
            width:350px;
            background:url()
        }
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

function init() {
    return {
        name: '',
        nameValidateStatus: "success",
        nameHelp: null,
        pact: '',
        adress: '',
        adressValidateStatus: "success",
        adressHelp: null,
        pwd: '',
        pwdValidateStatus: "success",
        pwdHelp: null,
        loading:false,
        pactObj: [
            {
                id:1,
                name:'ERC20'
            },
            {
                id:2,
                name:'OMNI'
            }
        ]
    }
}

function reducer(state, action) {
    switch (action.type) {
        case "name":
            return {
                ...state,
                ...action.payload
            };
        case "pact":
            return {
                ...state,
                ...action.payload
            };
        case "adress":
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
    const inputName = useRef(null);
    const inputAdress = useRef(null);
    const inputPwd = useRef(null);
    const [state, dispatch] = useReducer(reducer, null, init);
    let {
        name,
        nameValidateStatus,
        nameHelp,
        adress,
        adressValidateStatus,
        adressHelp,
        pwd,
        pwdValidateStatus,
        pwdHelp,
        pactObj,
        loading
    } = state;

    const search = () => {
        name = Reg.regRemoveFES(name);
        adress = Reg.regRemoveFES(adress);
        pwd = Reg.regRemoveFES(pwd);
        if(name === ''){
            inputName.current.focus();
            dispatch({
                type:'name',
                payload:{
                    name:'',
                    nameValidateStatus:'error',
                    nameHelp:'tipB'
                }
            })
        }else if(adress === ''){
            inputAdress.current.focus();
            dispatch({
                type:'adress',
                payload:{
                    adress:'',
                    adressValidateStatus:'error',
                    adressHelp:'inputUsdtAdress'
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
                    help = 'tipB'
                }
                break;
            case 'adress': //输入钱包地址时校验输入规则,不为空就好
                if(value){ 
                    status = 'success'
                    help = null
                }else{
                    value = '';
                    status = 'error'
                    help = 'inputUsdtAdress'
                }
                break;
            case 'pwd': //输入资金密码时校验输入规则,前端校验不为空就好
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

    const changePact = (e) => {
        dispatch({
            type: 'pact',
            payload:{
                pact: e
            }
        });
    }

    return (
        <Warpper>
            <RightHead title={t('personCenter.wdMethod.addUsdt')}>
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
                            className="border-b"
                            label={t('personCenter.wdMethod.usdtPact')}
                        >
                            <Select defaultValue={pactObj[0].id} onChange={changePact}>
                                {
                                    pactObj.map(item => {

                                        return (
                                            <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
                                        )
                                    })
                                }

                            </Select>
                        </Form.Item>

                        <Form.Item
                            className="border-b"
                            label={t('personCenter.wdMethod.usdtName')}
                            validateStatus={nameValidateStatus}
                            help={nameHelp!==null?t(`personCenter.wdMethod.${nameHelp}`):null}
                        >
                            <Input 
                                value={name} 
                                className="radius" 
                                placeholder={t('personCenter.wdMethod.inputUsdtName')} 
                                onChange={e=>changeInput(e,'name')}
                                ref={inputName}
                            />
                        </Form.Item>

                        <Form.Item
                            label={t('personCenter.wdMethod.usdtAdress')}
                            validateStatus={adressValidateStatus}
                            help={adressHelp!==null?t(`personCenter.wdMethod.${adressHelp}`):null}
                        >
                            <Input 
                                value={adress} 
                                className="radius" 
                                placeholder={t('personCenter.wdMethod.inputUsdtAdress')} 
                                onChange={e=>changeInput(e,'adress')}
                                ref={inputAdress}
                            />
                        </Form.Item>
                        <div className="tips">{t('personCenter.wdMethod.tipUsdtAd')}</div>

                        <Form.Item
                            className="border-b"
                            label={t('personCenter.wdMethod.pwd')}
                            validateStatus={pwdValidateStatus}
                            help={ pwdHelp!==null?t(`personCenter.wdMethod.${pwdHelp}`):null}
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