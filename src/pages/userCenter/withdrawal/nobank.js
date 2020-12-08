/*
* @Author: your name
* @Date: 2020-10-26 16:07:04
 * @LastEditTime: 2020-11-26 14:01:48
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: \winlott\src\pages\userCenter\transfer\index.js
*/
import React  from 'react';
import styled from 'styled-components';
import '@/assets/svgsprite/bank.js';
import {CentBtn,Centerdiv} from '@/components/usercenter/';
import SvgIcon from '@/components/svgIcon';
import { useTranslation } from 'react-i18next';
const NobakDive=styled.div`
    .t-bottom{
        height:228px;
    }
    .tcenter{
        padding-top:18px;
        >div{
            width:66px;
            height:50px;
            margin:0 auto;
        }
        >p{
            text-align:center;
            color:#8c8d8d;
            margin-top:18px;
        }
    }
    .bank_btn{
        width:352px;
        margin:0 auto;
    }
`
const  Nobank=()=>{
    const {t}=useTranslation()
    return(
        <NobakDive>
            <Centerdiv  width={850} top={20}>
                <div className='t-bottom'>
                    <span className='title'>{t('personCenter.withdrawal.bank')}</span>     
                    <div className='tcenter'>
                        <div>
                            <SvgIcon link='bank-data' style={{height:'50px',width:'66px'}}  color='#fff'/>
                        </div>
                        <p>{t("personCenter.withdrawal.nobanktip")}</p>
                    </div>
                    <div className='bank_btn'>
                    <CentBtn width='352' height='33' x='0' y='-189' x1='0' y1='-222' >{t("personCenter.withdrawal.go")}</CentBtn>
                    </div>
                </div>
            </Centerdiv>
        </NobakDive>
    );
}

export default Nobank;