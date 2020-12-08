/*
 * @Author: your name
 * @Date: 2020-11-10 16:52:03
 * @LastEditTime: 2020-11-24 11:05:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \winlott\src\pages\userCenter\deposit\bankfn.js
 */
import React ,{useState}from 'react';
import {CentBtn} from '@/components/usercenter/';
import { Input } from 'antd';
import styled from 'styled-components';
import {Reg} from '@/utils/regex';
import { useStores } from '@/hooks/useStores';
import { imgSuffix } from '@/utils/';
import {useObserver} from 'mobx-react-lite';
import Content from '@/components/usercenter/content.js';
import { useTranslation } from 'react-i18next';
const bgsprit=require('@/assets/images/center/bgsprit.png'+imgSuffix);

const InputWrapper=styled.div`
    .bank_input{
      padding-left:15px;
      margin-top:30px;
      .t1{
        >span{
          width: 90px;
          height: 36px;
          line-height:36px;
          background-color: #383a3c;
          color:#fff;
          border-radius: 18px;
          display:inline-block;
          text-align:center;
          margin-left:18px;
          cursor: pointer;
        }
        .on{
          background-color: #cf2a2a;
        }
      }
      .ant-input-affix-wrapper{
        width: 350px;
        height: 36px;
        background-color: #383a3c;
        border-radius: 18px;
        margin-top:20px;
        margin-left:20px;
        .ant-input{
          color:#fff;
          padding-left:15px
        }
        .ant-input-suffix{
          color:#fff;
        }
      }
    }
    .bank_btn{
      margin-top:20px;
      margin-left:35px;
    }
`

const Bankinput=()=>{ 
  const btnvalue =[10000,20000,50000,100000,200000]
  
  const {t}=useTranslation();
  const [btnNum,setBtnNum] = useState()
  const changeNum=v=>{
    const n=Reg.regInt(v.target.value,0)
    setBtnNum(n)
  }
  const { DepositStore} =  useStores();
  const goDatail=()=>{
    DepositStore.setDatil(2)
  }
  return(
    <InputWrapper>
      <Content title={t("personCenter.deposit.rechargeCash")}>
        <div className='bank_input'>
          <div className='t1'>
            {
                btnvalue && btnvalue.map((v)=>{
                  return  <span key={v} onClick={()=>setBtnNum(v)} className={v===btnNum?'on':''} >{v}</span>
              })
            }
          </div>
          <Input  suffix="VND" bordered={false} placeholder={t("personCenter.deposit.inputCash")} value={btnNum} onChange={changeNum}/>
        </div> 
        <div className='bank_btn'>
            <CentBtn width='352' height='33' x='0' y='-189' x1='0' y1='-222'  onClick={goDatail}>{t("personCenter.deposit.fastRecharge")}</CentBtn>
        </div>
      </Content>
    </InputWrapper>
  )
}
const Cashdiv=styled.div`
    .bank_input{
      .icon{
        display:block;
        width:50px;
        height:50px;
        background-image:url(${bgsprit});
        background-repeat:no-repeat;
        background-position:-192px -575px;
        margin:22px auto;
      }
      >p{
        text-align:center;
        color:#8c8d8d;
      }
    }
    .bank_btn{
      width:352px;
      margin: 0 auto;
    }
`;
const Cash=()=>{
  const { DepositStore} =  useStores();
  const {t}=useTranslation();
  const goDatail=()=>{
    DepositStore.setDatil(2)
  }
  return(
    <Cashdiv>
      <Content title={t("personCenter.deposit.nowcard")}>
        <div className='bank_input'>
          <i className='icon'></i>
          <p>{t("personCenter.deposit.clicksave")}</p>
        </div> 
        <div className='bank_btn'>
            <CentBtn width='352' height='33' x='0' y='-189' x1='0' y1='-222'  onClick={goDatail}>{t("personCenter.deposit.fastRecharge")}</CentBtn>
        </div>
      </Content>
    </Cashdiv>
  )
}
const Usdtdiv=styled.div`
    .bank_input{
      margin-top:20px;
      margin-left:30px;
      .ant-input{
        width: 350px;
        height: 36px;
        background-color: #383a3c;
        border-radius: 18px;
        color:#fff;
        padding-left:15px;
        display:inline-block;
      }
      i{
        padding-left:9px;
        color: #8c8d8d;
      }
      .p1{
        width: 350px;
        height: 36px;
        margin-top:20px;
        background-color: #383a3c;
        border-radius: 18px;
        text-align:center;
        line-height:36px;
        color:#fff;
      }
    }
    .bank_btn{
      margin-top:20px;
      margin-left:35px;
    }
`;

const Usdt=()=>{
  const { DepositStore} =  useStores();
  const [btnNum,setBtnNum] = useState();
  const {t}=useTranslation();
  const changeNum=v=>{
    const n=Reg.regInt(v.target.value,0)
    setBtnNum(n)
  }
  const goDatail=()=>{
    DepositStore.setDatil(2)
  }
  return(
    <Usdtdiv>
      <Content title={'USDT'}>
        <div className='bank_input'>
          <div>
            <Input   bordered={false} placeholder={t("personCenter.deposit.inputCash")} value={btnNum} onChange={changeNum}/>
            <i>{t("personCenter.deposit.huilv")}： 1.00 UDST = 10000 VND</i>
          </div>
          <p className='p1'>{t("personCenter.deposit.pay")} 1000 USDT</p>
        </div> 
        <div className='bank_btn'>
            <CentBtn width='352' height='33' x='0' y='-189' x1='0' y1='-222'  onClick={goDatail}>{t("personCenter.deposit.fastRecharge")}</CentBtn>
        </div>
      </Content>
    </Usdtdiv>
  )
}
const Inner=styled.div`
  .tip{
    margin:10px auto 0;
    width:850px;
    p{
      margin:0;
      padding:0;
      font-size:12px;
      color:#8c8d8d;
      i{
        color:#e94f4f
      }
    }
  }
`;
const Bankcenter = () => {
    const { DepositStore} =  useStores();
    const {t}=useTranslation();
    return  useObserver(()=>(
          <Inner>
              {DepositStore.changBanknum === 'bank' && <Bankinput/>}
              {DepositStore.changBanknum === 'other' && <Bankinput/>}
              {DepositStore.changBanknum === 'cash' && <Cash/>}
              {DepositStore.changBanknum === 'usdt' && <Usdt/>}
              {/* <Bankinput/> */}
              {/* <Cash /> */}
              {/* <Usdt /> */}
            <div className='tip'>
              <p>{t('personCenter.deposit.precautions')}:</p>
              <p>1.{t('personCenter.deposit.low1')} <i>0</i> VND，{t('personCenter.deposit.low2')} 1000 VND，{t('personCenter.deposit.low3')} <i>50%</i> {t('personCenter.deposit.low4')}</p>
              <p>2.{t('personCenter.deposit.kefu')}<i>{t('personCenter.deposit.ckefu')}</i></p>
            </div>
          </Inner>
      )
    )
};


export default Bankcenter