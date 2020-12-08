/*
 * @Author: your name
 * @Date: 2020-11-17 15:22:47
 * @LastEditTime: 2020-12-04 13:06:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \winlott\src\pages\userCenter\withdrawal\usdtlist.js
 */
/*
* @Author: your name
* @Date: 2020-10-26 16:07:04
 * @LastEditTime: 2020-11-17 15:27:44
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: \winlott\src\pages\userCenter\transfer\index.js
*/
import React ,{useState} from 'react';
import styled from 'styled-components';
import { CaretDownOutlined } from '@ant-design/icons';
import '@/assets/svgsprite/bank.js';
import {Input,Select} from 'antd';
import {Reg} from '@/utils/regex';
import {CentBtn} from '@/components/usercenter/';
import Content from '@/components/usercenter/content.js';
import { imgSuffix } from '@/utils/';
import { useTranslation } from 'react-i18next';
const contentBg = require('@/assets/images/center/bgsprit.png'+imgSuffix);
const Banklistdiv=styled.div`
    .t-bottom{
        position:relative;
        .arrow-left{
            content:'';
            display:block;
            position:absolute;
            width:11px;
            height:17px;
            background-image:url(${contentBg});
            background-repeat:no-repeat;
            background-position:-361px 0px;
            top: 66px;
            left: 13px;
            cursor: pointer;
        };
        .arrow-right{
            content:'';
            display:block;
            position:absolute;
            width:11px;
            height:17px;
            background-image:url(${contentBg});
            background-repeat:no-repeat;
            background-position:-371px 0px;
            top: 66px;
            right: 13px;
            cursor: pointer;
        }

    }
    .banklist{
        height:126px;
        width:775px;
        margin:0 auto;
        overflow:hidden;
        position: relative;
    }
    .tcenter{
        padding-top:30px;
        margin-bottom:0;
        position: absolute;
        transition:all 0.2s;
        >li{
            width: 245px;
	        height: 95px;
            display:inline-block;
            background-image:url(${contentBg});
            background-repeat:no-repeat;
            background-position:0px -430px;
            margin-right:18px;
            vertical-align: middle;
            position: relative;
            .icon{
                position:absolute;
                display:none;
                width:16px;
                height:16px;
                top:5px;
                right:5px;
                background-image:url(${contentBg});
                background-repeat:no-repeat;
                background-position:-262px 0px;
            }
            >div{
                display:inline-block;
                >p{
                    margin-bottom:0px;
                    color:#fff;
                    font-size:12px;
                }
            }
            .logo{
                background:#fff;
                width:36px;
                height:36px;
                border-radius:50%;
                margin: 0 20px;
                svg{
                    vertical-align:super
                }
            }
            .centertxt{
                padding-top:15px;
            }
        }
        li.active{
            background-position:-245px -430px;
            .icon{
                display:block;
            }
        }
        
    }
    .inputcenter{
        >p{
            font-size: 12px;
            color: #8c8d8d;
            margin-bottom:0;
            padding-top:30px;
            padding-left:32px;
        }
        .txtinput{
            .ant-input-affix-wrapper{
                    width: 350px;
                    height: 36px;
                    background-color: #383a3c;
                    border-radius: 18px;
                    margin-top:20px;
                    margin-left:20px;
                    font-size:14px;
                .ant-input{
                    color:#fff;
                    padding-left:3px
                }
                .ant-input-suffix{
                    color:#fff;
                }
            }
            i{
                margin-left:10px;
                color: #8c8d8d;
            }
        }
        .select_div{
            padding-top:28px;
            padding-left:20px;
            .ant-select{
                .ant-select-selector{
                    border-radius:18px;
                    background-color: #383a3c !important;
                    color:#8c8d8d;
                }
            }
            .ant-select-item-option-content{
                color:#8c8d8d;
            }
            .ant-select-item-option-selected:not(.ant-select-item-option-disabled){
                background:#252627 !important;
            }
            .ant-select-item-option-active:not(.ant-select-item-option-disabled){
                background:#252627  !important;
            }
            .ant-select-single:not(.ant-select-customize-input) .ant-select-selector{
                height: 36px;
                padding: 2px 11px;
            }
        }
    }
    .bank_btn{
        width:352px;
        margin-top:15px;
        margin-left:20px
    }
`
const  Banklist=()=>{
    const { Option } = Select;
    const {t} =useTranslation()
    const [btnNum,setBtnNum] = useState()
    // let w =796 *2 
    // const [divwith] = useState(w)
    // const [dleft,setdleft] = useState(0)
    const changeNum=v=>{
        const n=Reg.regInt(v.target.value,0)
        setBtnNum(n)
    }
    const handleChange=()=>{
        
    }
    return(
        <Banklistdiv>
            {/* <Content title={t('personCenter.withdrawal.withbag')}>
                <div className='t-bottom'> 
                    <div className='banklist'>
                        <ul className='tcenter' style={{width:divwith+'px',left:`-${dleft}px`}}>
                            <li className='active'>
                                <i className='icon'></i>
                                <div className='logo'>
                                    <SvgIcon link='bank-usdt' size='36px' color='rgb(14, 147, 46)' style={{height:'36px'}}/>
                                </div>
                                <div className='centertxt'>
                                    <p>我的钱包1</p>
                                    <p>1234 ****** 1234</p>
                                    <p>{t('personCenter.withdrawal.xieyi')}： OMNI</p>
                                </div>
                            </li>
                            <li>
                                <i className='icon'></i>
                                <div className='logo'>
                                    <SvgIcon link='bank-usdt' size='36px' color='rgb(14, 147, 46)' style={{height:'36px'}}/>
                                </div>
                                <div className='centertxt'>
                                    <p>我的钱包2</p>
                                    <p>1234 ****** 1234</p>
                                    <p>协议： OMNI</p>
                                </div>
                            </li>
                            <li>
                                <i className='icon'></i>
                                <div className='logo'>
                                    <SvgIcon link='bank-usdt' size='36px' color='rgb(14, 147, 46)' style={{height:'36px'}}/>
                                </div>
                                <div className='centertxt'>
                                    <p>我的钱包2</p>
                                    <p>1234 ****** 1234</p>
                                    <p>协议： OMNI</p>
                                </div>
                            </li>
                            <li>
                                <i className='icon'></i>
                                <div className='logo'>
                                    <SvgIcon link='bank-usdt' size='36px' color='rgb(14, 147, 46)' style={{height:'36px'}}/>
                                </div>
                                <div className='centertxt'>
                                    <p>我的钱包2</p>
                                    <p>1234 ****** 1234</p>
                                    <p>协议： OMNI</p>
                                </div>
                            </li>
                            <li>
                                <i className='icon'></i>
                                <div className='logo'>
                                    <SvgIcon link='bank-usdt' size='36px' color='rgb(14, 147, 46)' style={{height:'36px'}}/>
                                </div>
                                <div className='centertxt'>
                                    <p>我的钱包2</p>
                                    <p>1234 ****** 1234</p>
                                    <p>协议： OMNI</p>
                                </div>
                            </li>
                            <li>
                                <i className='icon'></i>
                                <div className='logo'>
                                    <SvgIcon link='bank-usdt' size='36px' color='rgb(14, 147, 46)' style={{height:'36px'}}/>
                                </div>
                                <div className='centertxt'>
                                    <p>我的钱包2</p>
                                    <p>1234 ****** 1234</p>
                                    <p>协议： OMNI</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <i className='arrow-left' onClick={()=>{setdleft(0)}}></i>
                    <i className='arrow-right' onClick={()=>{setdleft(w/2-15)}}></i>
                </div>
            </Content> */}
            <Content title={t("personCenter.withdrawal.withcash")}>
                <div className='t-bottom2'> 
                    <div className='inputcenter'>
                        <p>{t("personCenter.withdrawal.withltime")}：{t("personCenter.withdrawal.low")}  1000  VND，{t("personCenter.withdrawal.hight")}  100000000 VND</p>
                        <div className='select_div'>
                            <Select style={{ width: 350}}
                                onChange={handleChange} 
                                placeholder={t('personCenter.deposit.pselectBank')} 
                                suffixIcon={()=>(<CaretDownOutlined style={{color: '#8c8d8d' }}/>)}  
                                bordered={false}
                                dropdownStyle={{backgroundColor:'#383a3c',color:'#8c8d8d',borderRadius:'10px',padding:'0'}}
                                getPopupContainer={()=>(document.querySelector('.select_div'))}
                            >
                                <Option value="jack">1</Option>
                                <Option value="lucy">2</Option>
                                <Option value="disabled" disabled>
                                        3
                                </Option>
                                <Option value="Yiminghe">4</Option>
                            </Select>
                        </div>
                        <div className='txtinput'>
                            <Input suffix="VND" bordered={false} placeholder={t("personCenter.deposit.inputCash")} value={btnNum} onChange={changeNum} /> 
                        </div>
                        <div className='txtinput'>
                            <Input suffix="VND" bordered={false} placeholder={t("personCenter.deposit.inputCash")} value={btnNum} onChange={changeNum} />
                        </div>
                    </div>
                    <div className='bank_btn'>
                        <CentBtn width='352' height='33' x='0' y='-189' x1='0' y1='-222'  >{t("personCenter.withdrawal.fast")}</CentBtn>
                    </div>
                </div>
            </Content>
        </Banklistdiv>
    );
}

export default Banklist;