/*
 * @Author: your name
 * @Date: 2020-11-10 16:52:03
 * @LastEditTime: 2020-11-23 17:09:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \winlott\src\pages\userCenter\deposit\bankfn.js
 */
import React, { useState } from 'react';
import Content from '@/components/usercenter/content'
import styled from 'styled-components';
import { CaretDownOutlined,CaretUpOutlined } from '@ant-design/icons';
import { useStores } from '@/hooks/useStores';
import { imgSuffix } from '@/utils/';
import { useTranslation } from 'react-i18next';
const contentBg = require('@/assets/images/center/bgsprit.png'+imgSuffix);
const Wrapper = styled.div`
    position:relative;
    height:150px;
    .banklist{
        position:absolute;
        top:35px;
        left:0px;
        width:100%;
        background: #252627; 
        background: linear-gradient(135deg, transparent 5px, #252627 0) top left, 
                        linear-gradient(-135deg, transparent 0px, #252627 0) top right, 
                        linear-gradient(-45deg, transparent 5px, #252627 0) bottom right, 
                        linear-gradient(45deg, transparent 0px, #252627 0) bottom left;
        background-size: 50% 50%;            
        background-repeat:no-repeat;
        z-index:10;
        ul{
           height:85px;
           overflow:hidden;
           transition:all 0.2s
        }
        li{
            width:145px;
            height:85px;
            display:inline-block;
            background-image:url(${contentBg});
            background-repeat:no-repeat;
            background-position:0 -218px;
            margin-left:18px;
            margin-bottom:17px;
            vertical-align: middle;
            position: relative;
            cursor: pointer;
            >div{
                margin : 17px auto 0px;
                height:36px;
                img{
                    width:36px;
                    display:block;
                    margin:0 auto;
                    &.bank{
                        padding-top:5px;
                    }
                    &.cash{
                        padding-top:4px;
                    }
                }
            }
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
            p{
                color:#fff;
                text-align:center;
                font-size:14px;
            }
        }
        li.active{
            background-position:-145px -218px;
            .icon{
                display:block;
            }
        }   
        .more{
            width: 80px;
            font-size: 14px;
            color: #8c8d8d;
            margin:0 auto;
            position: relative;
            bottom:0;
            cursor: pointer;
        }
    }
    
`;

const Bankfn = () => {
    const [hvaule,gethvaule] = useState('85px');
    const [hstate,gethstate] = useState(true)
    const [bank,getBank] = useState('bank')
    const { DepositStore} =  useStores();
    const {t} =useTranslation()
    const morebank=()=>{
        gethstate(!hstate)
        if(hstate){
            gethvaule('180px')
        }else{
            gethvaule('85px')
        }
    }
    const changeBank=(v,i)=>{
        getBank(v.othername)
        DepositStore.setChangeBnak(v.id)
    }
    const { pnglist }=DepositStore;
    return (
      <Content title={t('personCenter.deposit.selectRechargefn')}>
          <Wrapper>
            <div  className='banklist'>
                <ul style={{'height':hvaule}}>
                    {
                        pnglist && pnglist.map((v,i)=>(
                            <li key={i} className={v.othername===bank?'active':''} onClick={()=>{changeBank(v,i)}} >
                                <i className='icon'></i>
                                <div>   
                                    <img src={v.src} className={v.othername} alt=''/>
                                </div>  
                                <p>{t(v.name)}</p>
                            </li>
                        ))
                    }
                </ul>
                <div className='more' onClick={morebank}>
                    {t('personCenter.deposit.more')} 
                    {hstate && <CaretDownOutlined  />}
                    {!hstate && <CaretUpOutlined  />}
                </div>
            </div>
          </Wrapper>
      </Content>
    )
}

export default Bankfn