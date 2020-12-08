/*
* @Author: your name
* @Date: 2020-10-26 16:07:04
 * @LastEditTime: 2020-12-04 13:02:31
 * @LastEditors: Please set LastEditors
* @Description: In User Settings Edit
* @FilePath: \winlott\src\pages\userCenter\transfer\index.js
*/
import React from 'react';
import styled from 'styled-components';
import '@/assets/svgsprite/bank.js';
import Content from '@/components/usercenter/content.js';
import Loadable from 'react-loadable';
import Loading from '@/components/spinner';
import SvgIcon from '@/components/svgIcon';
import { useTranslation } from 'react-i18next';
import { imgSuffix } from '@/utils/';
import RightHead from '@/components/usercenter/rightHead.js'

const contentBg = require('@/assets/images/center/bgsprit.png'+imgSuffix);
// const Nobank =Loadable({
//     loader: () => import('./nobank'),
//     loading: Loading,
// });

const Usdtlist =Loadable({
    loader: () => import('./usdtlist'),
    loading: Loading,
});
// const Banklist =Loadable({
//     loader: () => import('./banklist'),
//     loading: Loading,
// });
const Wrapper = styled.div`
   background:#191a1b;
   .t-top{
       position:relative
   }
`;

const Inner = styled.div`
    ul.tcountlist{
        height:85px;
        overflow:hidden;
        transition:all 0.2s;
        margin-top:20px;
        margin-bottom:0;
        li{
            width:145px;
            height:85px;
            display:inline-block;
            background-image:url(${contentBg});
            background-repeat:no-repeat;
            background-position:0 -218px;
            margin-left:18px;
            vertical-align: middle;
            position: relative;
            cursor: pointer;
            >div{
                margin : 17px auto 0px;
                height:36px;
                width:36px;
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
    }
`;


const Page = () => {
    const {t} =useTranslation()
   return (
       <Wrapper>
           <Inner>
                <RightHead title={t('personCenter.withdrawal.name')} />
                <Content title={t('personCenter.withdrawal.withdrawfn')} >
                   <div className='t-top'>  
                       <ul className='tcountlist'>
                            <li className='active'>
                                <i className='icon'></i>
                                <div>   
                                    <SvgIcon link='bank-bank' style={{height:'36px'}} size="36px" color='#fff'/>
                                </div>  
                                <p>{t('personCenter.wdMethod.bankCard')}</p>
                            </li>
                            <li>
                                <i className='icon'></i>    
                                <div>   
                                    <SvgIcon link='bank-usdt' style={{height:'36px'}} size="36px" color='#fff'/>
                                </div>  
                                <p>USDT</p>
                            </li>
                       </ul>
                   </div>
               </Content>
               <Usdtlist></Usdtlist>
              
           </Inner>
       </Wrapper>
   )
};

export default Page;