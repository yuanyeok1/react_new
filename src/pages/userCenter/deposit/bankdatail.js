/*
 * @Author: your name
 * @Date: 2020-11-11 18:15:17
 * @LastEditTime: 2020-11-24 10:27:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \winlott\src\pages\userCenter\deposit\bankdatail.js
 */
import React ,{useState}from 'react';
import styled from 'styled-components';
import { useStores } from '@/hooks/useStores';
import { imgSuffix } from '@/utils/';
import {Centerdiv,CentBtn} from '@/components/usercenter/';
import { Radio } from 'antd';
import QRCode from "react-qr-code";
import { useTranslation } from 'react-i18next';
const contentBg = require('@/assets/images/center/bgsprit.png'+imgSuffix);

const BankDataildiv=styled.div`
    background:#191a1b;
    height:858px;
    h5{
        color:#fff;
        border-bottom:1px solid #383a3c;
        line-height:54px;
        font-size:14px;
        cursor: pointer;
        i{
            display:inline-block;
            width: 14px;
            height: 24px;
            margin:0 20px;
            background:url(${contentBg}) no-repeat;
            background-position: -218px 0px;
            vertical-align:middle;
        }
    }
    .dcenter{
      width:100%;
      .losdingIcon{
        width: 140px;
	      height: 140px;
        background:url(${contentBg}) no-repeat;
        background-position: -52px -525px;
        display:block;
        margin:111px auto 10px
      }
      h4{
        font-size: 24px;
        color:#fff;
        padding:0;
        margin-top:21px ;
        margin-bottom:37px;
        text-align:center;
      }
      ul{
        width: 580px;
        height: 100px;
        background-color: #252627;
        border-radius: 10px;
        margin:0 auto;
        li{
          width: 100%;
          height: 50px;
          &:first-child{
            height: 49px;
            border-bottom:1px solid #383a3c;
          }
          span{
            display:inline-block;
            font-size:14px;
            padding:16px 0;
            &:first-child{
              width:140px;
              padding-left:30px;
              color:#8c8d8d;
              font-size:14px;
            }
            &:last-child{
              margin-left:48px;
              color:#fff;
              font-size:14px;
            }
          }
        }
      }
      .d-tip{
        width: 580px;
        margin:10px auto;
        color:#8c8d8d;
        font-size:12px;
      }
    }
`

const BankDatail = () => {
   const stroe = useStores()
   const { DepositStore} = stroe;
   const goDatail=()=>{
      DepositStore.setDatil(1)
   };
   const {t}=useTranslation()
    return (
      <BankDataildiv>
            <h5 onClick={goDatail}><i></i>{t("personCenter.deposit.thirdParty")}</h5>   
            <div className='dcenter'>
                <i className='losdingIcon'></i>
                <h4>{t("personCenter.deposit.tip")}</h4>
                <ul>
                  <li>
                    <span>{t("personCenter.deposit.rechargefn")}：</span><span>asdasdsad</span>
                  </li>
                  <li>
                    <span>{t("personCenter.deposit.rechargeCash")}：</span><span>1231 VND</span>
                  </li>
                </ul>
                <p className='d-tip'>
                  {t("personCenter.deposit.tip2")}
                </p>
            </div>
      </BankDataildiv>
    )
};
const UsdtDataildiv= styled.div`
    background:#191a1b;
    height:858px;
    h5{
        color:#fff;
        border-bottom:1px solid #383a3c;
        line-height:54px;
        font-size:14px;
        cursor: pointer;
        i{
            display:inline-block;
            width: 14px;
            height: 24px;
            margin:0 20px;
            background:url(${contentBg}) no-repeat;
            background-position: -218px 0px;
            vertical-align:middle;
        }
    }
    .dcenter{
      width: 850px;
      margin:0 auto;
      h4{
        font-size: 24px;
        color:#fff;
        padding:0;
        margin-top:30px ;
        margin-bottom:27px;
      }
      ul{
        li{
          padding:13px 0;
          display:flex;
          &:first-child{
            border-bottom:1px solid #383a3c;
          }
          &:last-child{
            border-top:1px solid #383a3c;
          }
          >span{
            font-size:14px;
            color:#fff;
            height:24px;
            line-height:24px;
            &:first-child{
              width:115px;
              color:#8c8d8d;
              padding-left:30px;
              margin-right:112px;
            }
            &:nth-child(2){
              width:400px;
              margin-right:50px;
            }
            .ant-radio-inner{
              background-color: #191a1b;
              border-color: #8c8d8d;
              border-width: 3px;
            }
            .ant-radio-inner::after{
              background-color: transparent;
            }
            .ant-radio-checked .ant-radio-inner{
              border-color: #cf2a2a;
            }
          }
          .qr{
            width: 138px;
	          height: 138px;
            svg{
              border-radius:10px;
            }
          }
          .btnCopy{
            width: 144px;
            height: 24px;
          }
          .qrbtn{
            height: 138px;
            padding-top: 52px;
          }
        }
      }
      
      .d-tip{
            color:#8c8d8d;
            font-size:12px;
            margin-top:5px;
            p{
              margin-bottom:5px
            }
      }
    }

`;
const UsdtDatail = ()=>{
    const [value,setValue] = useState(1)
    const stroe = useStores()
    const { DepositStore } = stroe;
    const {t}=useTranslation()
    const goDatail=()=>{
      DepositStore.setDatil(1)
    }
    const onChange=(e)=>{
      setValue(e.target.value)
    }
    const radioStyle = {
      height: '30px',
      lineHeight: '30px',
      color:'#fff'
    };
     return (
       <UsdtDataildiv>
             <h5 onClick={goDatail}><i></i> {t("personCenter.deposit.numpay")}</h5>   
             <div className='dcenter'>
               <h4>{t("personCenter.deposit.payscuess")}</h4>
               <Centerdiv width={850} height={320}>
                  <ul>
                    <li className='list-one'>
                      <span>{t("personCenter.deposit.protocol")}：</span>
                      <span>
                          <Radio.Group onChange={onChange} value={value} >
                              <Radio  value={1} style={radioStyle}>
                                OMNI
                              </Radio>
                              <Radio  value={2} style={radioStyle}>
                                ERC20
                              </Radio>
                          </Radio.Group>
                      </span>
                      <span className='btnCopy'>
                          <CentBtn width='135' height='24' x='0' y='-24' x1='0' y1='-48'>
                          {t("personCenter.deposit.copy")}
                          </CentBtn>
                      </span>
                    </li>
                    <li>
                      <span>{t("personCenter.deposit.address")}：</span>
                      <span>0x003E7bD934D59b9d9d16281988aF9F194ee88342</span>
                      <span className='btnCopy'>
                          <CentBtn width='135' height='24' x='0' y='-24' x1='0' y1='-48'>
                          {t("personCenter.deposit.copy")}
                          </CentBtn>
                      </span>
                    </li>
                    <li>
                      <span></span>
                      <span className='qr'>
                        <QRCode value='www.baidu.com' size={138}></QRCode>
                      </span>
                      <span className='btnCopy qrbtn'>
                          <CentBtn width='135' height='24' x='0' y='-24' x1='0' y1='-48'>
                          {t("personCenter.deposit.refresh")}
                          </CentBtn>
                      </span>
                    </li>
                    <li>
                      <span> {t("personCenter.deposit.needtransfer")}：</span>
                      <span>123213 USDT</span>
                      <span className='btnCopy'>
                          <CentBtn width='135' height='24' x='0' y='-24' x1='0' y1='-48'>
                          {t("personCenter.deposit.copy")}
                          </CentBtn>
                      </span>
                    </li>
                  </ul>
                </Centerdiv>  
                <div className='d-tip'>
                  <p>{t("personCenter.deposit.tips")}：</p>
                  <p>1.{t("personCenter.deposit.tip3")}</p>
                </div>
             </div>
       </UsdtDataildiv>
     )
}
const CashDateaildiv=styled.div`
    background:#191a1b;
    height:858px;
    h5{
        color:#fff;
        border-bottom:1px solid #383a3c;
        line-height:54px;
        font-size:14px;
        cursor: pointer;
        i{
            display:inline-block;
            width: 14px;
            height: 24px;
            margin:0 20px;
            background:url(${contentBg}) no-repeat;
            background-position: -218px 0px;
            vertical-align:middle;
        }
    }
    .dcenter{
      width:100%;
      .losdingIcon{
        width: 140px;
	      height: 140px;
        background:url(${contentBg}) no-repeat;
        background-position: -52px -525px;
        display:block;
        margin:111px auto 10px
      }
      h4{
        width: 100%;
        font-size: 24px;
        color:#fff;
        padding:0;
        margin:21px auto;
        margin-bottom:37px;
        text-align:center;
      }
    }
   `;
const CashDateil=()=>{
  const stroe = useStores()
  const { DepositStore} = stroe;
  const {t}=useTranslation()
  const goDatail=()=>{
     DepositStore.setDatil(1)
  }
   return (
     <CashDateaildiv>
           <h5 onClick={goDatail}><i></i>{t("personCenter.deposit.cashrecharge")}</h5>   
           <div className='dcenter'>
               <i className='losdingIcon'></i>
               <h4>{t("personCenter.deposit.tip4")}</h4>
           </div>
     </CashDateaildiv>
   )
}
const TbankDateildiv=styled.div`
    background:#191a1b;
    height:858px;
    h5{
        color:#fff;
        border-bottom:1px solid #383a3c;
        line-height:54px;
        font-size:14px;
        cursor: pointer;
        i{
            display:inline-block;
            width: 14px;
            height: 24px;
            margin:0 20px;
            background:url(${contentBg}) no-repeat;
            background-position: -218px 0px;
            vertical-align:middle;
        }
    }
    .dcenter{
      width: 850px;
      margin:0 auto;
      h4{
        font-size: 24px;
        color:#fff;
        padding:0;
        margin-top:30px ;
        margin-bottom:27px;
      }
      ul{
        li{
          padding:13px 0;
          display:flex;
          border-bottom:1px solid #383a3c;
          &:last-child{
            border-bottom:0px;
            padding-top:30px;
            padding-left:249px;
          }
          >span{
            font-size:14px;
            color:#fff;
            height:24px;
            line-height:24px;
            &:first-child{
              width:115px;
              color:#8c8d8d;
              padding-left:30px;
              margin-right:112px;
            }
            &:nth-child(2){
              width:400px;
              margin-right:50px;
            }
          }
          .btnCopy{
            width: 144px;
            height: 24px;
          }
        }
      }
      .d-tip{
            color:#8c8d8d;
            font-size:12px;
            margin-top:5px;
            p{
              margin-bottom:5px
            }
      }
    }
`;
const TbankDateil=()=>{
  const stroe = useStores()
  const {t}=useTranslation()
  const { DepositStore} = stroe;
  const goDatail=()=>{
     DepositStore.setDatil(1)
  }
   return (
     <TbankDateildiv>
           <h5 onClick={goDatail}><i></i>{t("personCenter.deposit.onlinebank")}</h5>   
           <div className='dcenter'>
               <i className='losdingIcon'></i>
               <h4>{t("personCenter.deposit.onlinetip")}</h4>
               <Centerdiv width={850} height={357}>
                  <ul>
                    <li className='list-one'>
                      <span>{t("personCenter.deposit.transferCash")}：</span>
                      <span>
                          300.00 VND
                      </span>
                      <span className='btnCopy'>
                          <CentBtn width='135' height='24' x='0' y='-24' x1='0' y1='-48'>
                            {t("personCenter.deposit.copy")}
                          </CentBtn>
                      </span>
                    </li>
                    <li>
                      <span>{t("personCenter.deposit.receivingBank")}：</span>
                      <span>西贡通天银行</span>
                    </li>
                    <li>
                      <span>{t("personCenter.deposit.receivingnum")}</span>
                      <span>
                        0602 2065 4551
                      </span>
                      <span className='btnCopy '>
                          <CentBtn width='135' height='24' x='0' y='-24' x1='0' y1='-48'>
                          {t("personCenter.deposit.copy")}
                          </CentBtn>
                      </span>
                    </li>
                    <li>
                      <span> {t("personCenter.deposit.receivingname")}：</span>
                      <span>VO VAN AN</span>
                      <span className='btnCopy'>
                          <CentBtn width='135' height='24' x='0' y='-24' x1='0' y1='-48'>
                          {t("personCenter.deposit.copy")}
                          </CentBtn>
                      </span>
                    </li>
                    <li>
                      <span>{t("personCenter.deposit.transferRemarks")}：</span>
                      <span>VO VAN AN</span>
                      <span className='btnCopy'>
                          <CentBtn width='135' height='24' x='0' y='-24' x1='0' y1='-48'>
                          {t("personCenter.deposit.copy")}
                          </CentBtn>
                      </span>
                    </li>
                    <li>
                        <CentBtn width='352' height='33' x='0' y='-189' x1='0' y1='-223px'>
                        {t("personCenter.deposit.websitetotransfer")}
                        </CentBtn>
                    </li>
                  </ul>
                </Centerdiv>  
                <div className='d-tip'>
                  <p> {t("personCenter.deposit.tips")}：</p>
                  <p>1.{t("personCenter.deposit.transfertip1")}</p>
                </div>
           </div>
     </TbankDateildiv>
   )
}

const Dateail=()=>{
  return(
    <div>
      <BankDatail></BankDatail>
      <UsdtDatail></UsdtDatail>
      <CashDateil></CashDateil>
      <TbankDateil></TbankDateil>
    </div>
  )
}

export default Dateail