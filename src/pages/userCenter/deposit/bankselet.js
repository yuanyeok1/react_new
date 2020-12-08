/*
 * @Author: your name
 * @Date: 2020-11-13 14:05:53
 * @LastEditTime: 2020-11-23 17:17:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \winlott\src\pages\userCenter\deposit\bankselet.js
 */
import React from 'react';

import { Select } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Content from '@/components/usercenter/content';
import { useTranslation } from 'react-i18next';
// import { useStores } from '@/hooks/useStores';
// import {useObserver} from 'mobx-react-lite'

const InputWrapper=styled.div`
    .select_div{
        padding-top:28px;
        padding-left:30px;
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
`
const Bankselet=()=>{ 
    
    const { Option } = Select;
    const handleChange=()=>{
        
    }
    const {t}=useTranslation()
  return(
    <InputWrapper>
        <Content title={t('personCenter.deposit.selectBank')}>
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
        </Content>
    </InputWrapper>
  )
}

export default Bankselet