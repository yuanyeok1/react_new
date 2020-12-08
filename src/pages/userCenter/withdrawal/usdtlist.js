/*
 * @Author: your name
 * @Date: 2020-11-17 15:22:47
 * @LastEditTime: 2020-12-04 13:08:41
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
import '@/assets/svgsprite/bank.js';
import {Input,Select} from 'antd';
import {Reg} from '@/utils/regex';
import {CentBtn} from '@/components/usercenter/';
import Content from '@/components/usercenter/content.js';
import { CaretDownOutlined } from '@ant-design/icons';
import { imgSuffix } from '@/utils/';
import { useTranslation } from 'react-i18next';
const contentBg = require('@/assets/images/center/bgsprit.png'+imgSuffix);
const Usdtlistdiv=styled.div`
    .t-bottom{
        height:206px;
    }
    .t-bottom2{
        height:345px;
    }
    .usdtlist{
        overflow:hidden;
    }
    .tcenter{
        padding-top:18px;
        >li{
            width: 245px;
	        height: 95px;
            display:inline-block;
            background-image:url(${contentBg});
            background-repeat:no-repeat;
            background-position:0px -430px;
            margin-left:18px;
            margin-bottom:17px;
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
                    padding-left:0;
                .ant-input{
                    color:#fff;
                    padding-left:15px
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
        .txttip{
            >span{
                display:inline-block;
                width: 350px;
                height: 36px;
                background-color: #383a3c;
                border-radius: 18px;
                margin-top:20px;
                margin-left:20px;
                color:#fff;
                font-size:14px;
                line-height:36px;
                padding-left:14px
            }
            i{
                margin-left:10px;
                color: #8c8d8d;
            }
        }
    }
    .bank_btn{
        width:352px;
        margin-top:15px;
        margin-left:20px
    }
`
const  Usdtlist=()=>{
    const {t}=useTranslation()
    const { Option } = Select;
    const [btnNum,setBtnNum] = useState()
    const changeNum=v=>{
        const n=Reg.regInt(v.target.value,0)
        setBtnNum(n)
    }
    const handleChange=()=>{
        
    }
    return(
        <Usdtlistdiv>
            {/* <Centerdiv  width={850} top={20}>
                <div className='t-bottom'>
                    <span className='title'>{t('personCenter.withdrawal.withbag')}</span>     
                    <div className='usdtlist'>
                        <ul className='tcenter'>
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
                        </ul>
                    </div>
                </div>
            </Centerdiv> */}
            <Content  title={t("personCenter.withdrawal.withcash")}>
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
                            <Input suffix="VND" bordered={false} placeholder={t("personCenter.deposit.inputCash")}  value={btnNum} onChange={changeNum} /> <i>*{t("personCenter.withdrawal.hl")}： 1.00 UDST = 10000 VND</i>
                        </div>
                        <div className='txttip'>
                            <span>{t("personCenter.withdrawal.target")} 100 USDT</span><i>*{t("personCenter.withdrawal.tipcash")}：100 USDT</i>
                        </div>
                        <div className='txtinput'>
                            <Input suffix="VND" bordered={false} placeholder={t("personCenter.deposit.inputCash")}  value={btnNum} onChange={changeNum} />
                        </div>
                    </div>
                    <div className='bank_btn'>
                        <CentBtn width='352' height='33' x='0' y='-189' x1='0' y1='-222'  >{t("personCenter.withdrawal.fast")}</CentBtn>
                    </div>
                </div>
            </Content>
        </Usdtlistdiv>
    );
}

export default Usdtlist;