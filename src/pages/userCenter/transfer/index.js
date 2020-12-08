/*
 * @Author: your name
 * @Date: 2020-10-26 16:07:04
 * @LastEditTime: 2020-11-24 14:14:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \winlott\src\pages\userCenter\transfer\index.js
 */
import React ,{useState} from 'react';
import styled from 'styled-components';
import {Input,Select} from 'antd'
import {CentBtn} from '@/components/usercenter/';
import { SwapOutlined ,CaretDownOutlined,CaretUpOutlined} from '@ant-design/icons';
import {Reg} from '@/utils/regex';
import List from './list';
import { imgSuffix } from '@/utils/';
import { useTranslation } from 'react-i18next';
import RightHead from '@/components/usercenter/rightHead.js'
import Content from '@/components/usercenter/content.js'

const Wrapper = styled.div`
    background:#191a1b;
    .tcenter{
        padding-top:30px;
        >p{
            padding-left:32px;
            color: #8c8d8d;
            font-size: 12px;
        }
        .ant-input-affix-wrapper{
            width: 350px;
            height: 36px;
            background-color: #383a3c;
            border-radius: 18px;
            margin-left:30px;
            .ant-input{
                color:#fff;
                padding-left:15px
            }
            .ant-input-suffix{
                color:#fff;
            }
        }
        .sl{
            width:100%;
            height:100%;
            margin-top:20px;
            margin-left:30px;
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
        .bank_btn{
            margin-top:20px;
            margin-left:35px;
        }
    }
`;

const Inner = styled.div`
    height:170px;
    .gcountlist{
        margin-top:20px;
        width:100%;
        background-repeat:no-repeat;
        transition:all .2s;
        position: absolute;
        z-index:10;
        background: #252627; 
        background: linear-gradient(135deg, transparent 5px, #252627 0) top left, 
                    linear-gradient(-135deg, transparent 0px, #252627 0) top right, 
                    linear-gradient(-45deg, transparent 5px, #252627 0) bottom right, 
                    linear-gradient(45deg, transparent 0px, #252627 0) bottom left;
        background-size: 50% 50%;  
        .listdiv{
            height:158px;
            overflow:hidden;
            transition:all 0.2s;
            margin-bottom:10px;
            position: relative;
        }
        .more{
            width: 80px;
            font-size: 14px;
            color: #8c8d8d;
            margin:0 auto;
            position: relative;
            bottom:0px;
            cursor: pointer;
            margin-bottom:10px;
        }

    }
    
`;


const Page = () => {
    const {t} =useTranslation()
    const [btnNum,setBtnNum] = useState()
    const { Option } = Select;
    const changeNum=v=>{
        const n=Reg.regInt(v.target.value,0)
        setBtnNum(n)
    }
    const handleChange=()=>{
        
    }
    const [hvaule,gethvaule] = useState('125px');
    const [hstate,gethstate] = useState(true)
    const morebank=()=>{
        gethstate(!hstate)
        if(hstate){
            gethvaule('350px')
        }else{
            gethvaule('125px')
        }
    }
    const list =[
        {id:'lottery',src:require('@/assets/images/transfer/lottery.png'+imgSuffix),name:"personCenter.transfer.lottery"},
        {id:'AG',src:require('@/assets/images/transfer/AG.png'+imgSuffix),name:"AG Gameing"},
        {id:'CQ9',src:require('@/assets/images/transfer/CQ9.png'+imgSuffix),name:"CQ9 Gameing"},
    ]
    return (
        <Wrapper>
                <RightHead title={t('personCenter.transfer.name')} />
                <Content title={t('personCenter.transfer.game')}>
                    <Inner>
                        <div className='gcountlist' >
                            <div className='listdiv' style={{'height':hvaule}}>
                                {
                                    list && list.map((v)=>(
                                        <List data={v} key={v.id}/>
                                    ))
                                }
                                
                            </div>
                            <div className='more' onClick={morebank} >
                                {t('personCenter.deposit.more')}  
                                    {hstate && <CaretDownOutlined  />}
                                    {!hstate && <CaretUpOutlined  />}
                            </div>   
                            
                        </div>
                    </Inner>
                </Content>
                <Content title={t('personCenter.deposit.transferCash')}>
                    <div className='tcenter'>
                        <p>{t("personCenter.transfer.notransfer")}</p>
                        <Input suffix="VND" bordered={false} placeholder={t('personCenter.deposit.inputCash')} value={btnNum} onChange={changeNum} />
                        <div className='sl'>
                            <Select style={{ width: 350}}
                                onChange={handleChange} 
                                placeholder={t('personCenter.deposit.pselectBank')} 
                                suffixIcon={()=>(<CaretDownOutlined style={{color: '#ffffff' }}/>)}  
                                bordered={false}
                                dropdownStyle={{backgroundColor:'#383a3c',color:'#8c8d8d',borderRadius:'10px',padding:'0'}}
                                getPopupContainer={()=>(document.querySelector('.sl'))}
                            >
                                <Option value="jack">1</Option>
                                <Option value="lucy">2</Option>
                                <Option value="disabled" disabled>
                                        3
                                </Option>
                                <Option value="Yiminghe">4</Option>
                            </Select> 
                            <SwapOutlined style={{fontSize:'20px',color:'#8c8d8d','margin':'0px 10px'}}/>
                            <Select style={{ width: 350}}
                                onChange={handleChange} 
                                placeholder={t('personCenter.deposit.pselectBank')} 
                                suffixIcon={()=>(<CaretDownOutlined style={{color: '#ffffff' }}/>)}  
                                bordered={false}
                                dropdownStyle={{backgroundColor:'#383a3c',color:'#8c8d8d',borderRadius:'10px',padding:'0'}}
                                getPopupContainer={()=>(document.querySelector('.sl'))}
                            >
                                <Option value="jack">1</Option>
                                <Option value="lucy">2</Option>
                                <Option value="disabled" disabled>
                                        3
                                </Option>
                                <Option value="Yiminghe">4</Option>
                            </Select> 
                        </div>
                        <div className='bank_btn'>
                            <CentBtn width='352' height='33' x='0' y='-189' x1='0' y1='-222' >{t('personCenter.transfer.fastTransfer')}</CentBtn>
                        </div>
                    </div>
                </Content>
        </Wrapper>
    )
};

export default Page;