/*
 * @Author: your name
 * @Date: 2020-10-26 16:07:04
 * @LastEditTime: 2020-11-23 16:52:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \winlott\src\pages\userCenter\deposit\index.js
 */
import React from 'react';
import Loadable from 'react-loadable';
import {useObserver} from 'mobx-react-lite'
import Loading from '@/components/spinner';
import styled from 'styled-components';
import '@/assets/svgsprite/bank.js';
import { useStores } from '@/hooks/useStores';
import { useTranslation } from 'react-i18next';
import RightHead from '@/components/usercenter/rightHead.js'

const Bankdatail =Loadable({
    loader: () => import('./bankdatail'),
    loading: Loading,
});

const Bankfn =Loadable({
    loader: () => import('./bankfn'),
    loading: Loading,
});
const Bankcenter =Loadable({
    loader: () => import('./bankcenter'),
    loading: Loading,
});
const Bankselet =Loadable({
    loader: () => import('./bankselet'),
    loading: Loading,
});
const Wrapper = styled.div`
    background:#191a1b;
`;

const Inner = styled.div`
    height:858px;
    .dp-bankList {
        margin-top: 20px;
    }
    .dp-bankcenter{
        margin-top:20px;
    };
`;

const Page =  () => {
    const stroe = useStores()
    const { t } = useTranslation();
    const { DepositStore} = stroe;
    return useObserver(()=>(
        <Wrapper className="deposit-page">
            {DepositStore.isDatil===1 && 
                <Inner>
                    <RightHead title={t('personCenter.deposit.recharge')} />    
                    <div className="dp-bankList">
                        <Bankfn />
                    </div>
                    <div className="dp-bankcenter">
                        <Bankselet/>
                    </div>
                    <div className="dp-bankcenter">
                        <Bankcenter />
                    </div>
                </Inner>
            }
            {
                DepositStore.isDatil === 2
                &&
                <Bankdatail></Bankdatail>
            }
        </Wrapper>
    ))
};

export default Page;