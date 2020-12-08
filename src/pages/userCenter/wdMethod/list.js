import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useTranslation } from 'react-i18next';
import { go } from '@/utils';

import RightHead from '@/components/usercenter/rightHead.js'
import Content from '@/components/usercenter/content'
import MyModal from '@/components/dialogs/modal';
import NoData from '@/components/usercenter/noData'
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';
import BankLogo from './bankLogo'

import dialogStore from '@/mobx/dialogStore';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    .card {
        &-wrap {
            position: relative;
            width: 100%;
            padding: 20px 20px 0 20px;
        }
        &-content {
            margin: 0;
            padding: 0;
            &:first-child {
                margin-bottom: 20px;
            }
        }
        &-header {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            padding: 0 20px;
            color: #b0b0b0;
            border-bottom: 1px solid #383a3c;
            &__title {
                flex: 1;
                font-size: 14px;
                letter-spacing: 0;
            }
            &__tool {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                font-size: 12px;
                letter-spacing: 0;
                cursor: pointer;
                transition: color 300ms ease-in;
                &--disable {
                    cursor: not-allowed;
                }
                &:hover {
                    color: #fff;
                }
                .card-icon {
                    transition: none;
                }
            }
        }
        &-icon {
            margin-left: 10px;
            font-size: 16px;
            transition: color 300ms ease-in;
            &:hover {
                color: #fff;
            }
        }
        &-table {
            width: 100%;
            &__th {
                padding: 0 20px;
                width: 100%;
                height: 30px;
                display: flex;
                align-items: center;
                text-align: center;
                color: #8c8d8d;
                font-size: 12px;
                border-bottom: 1px solid #383a3c;
                div {
                    flex: 1;
                    &:first-child {
                        flex: 1.5;
                        text-align: left;
                    }
                }
            }
            &__tbody {
                width: 100%;
                min-height: 350px;
            }
            &__tr {
                padding: 12px 20px;
                border-bottom: 1px solid #383a3c;
                width: 100%;
                height: 70px;
                display: flex;
                &:last-child {
                    border-bottom: none;
                }
            }
            &__trItem {
                display: flex;
                align-items: center;
                justify-content: center;
                flex: 1;
                text-align: center;
                color: #b0b0b0;
                .tr-logo {
                    margin-right: 15px;
                }
                &:first-child {
                    flex: 1.5;
                    justify-content: flex-start;
                }
            }
        }
    }
`
const MockDigitalList = [
    {
        id: 'abc123',
        bank_code: '_binance',
        card_number: '123******123',
        create_time: '26-11-2020 03:25:23 PM'
    },
    {
        id: 'abc456',
        bank_code: '_gateio',
        card_number: '123******123',
        create_time: '26-11-2020 03:25:23 PM'
    },
    {
        id: 'abc789',
        bank_code: '_huobi',
        card_number: '123******123',
        create_time: '26-11-2020 03:25:23 PM'
    },
    {
        id: 'abc321',
        bank_code: '_okex',
        card_number: '123******123',
        create_time: '26-11-2020 03:25:23 PM'
    },
    {
        id: 'abc654',
        bank_code: '_tether',
        card_number: '123******123',
        create_time: '26-11-2020 03:25:23 PM'
    }
]
const MockCardList = [
    {
        id: 'dgi123',
        bank_code: 'APYH',
        card_number: '**** **** **** 9478',
        create_time: '26-11-2020 03:25:23 PM'
    },
    {
        id: 'dgi456',
        bank_code: 'BKYH',
        card_number: '**** **** **** 9478',
        create_time: '26-11-2020 03:25:23 PM'
    },
    {
        id: 'dgi789',
        bank_code: 'KJSY',
        card_number: '**** **** **** 9478',
        create_time: '26-11-2020 03:25:23 PM'
    },
    {
        id: 'dgi321',
        bank_code: 'NAYH',
        card_number: '**** **** **** 9478',
        create_time: '26-11-2020 03:25:23 PM'
    },
    {
        id: 'dgi654',
        bank_code: 'DNYYH',
        card_number: '**** **** **** 9478',
        create_time: '26-11-2020 03:25:23 PM'
    }
]

export default function WdMethodList () {
    const { t } = useTranslation();
    const [cardList, setCardList] = useState([])
    const [digitalList, setDigitalList] = useState([])

    useEffect(() => {
        setCardList(MockCardList)
        setDigitalList(MockDigitalList)
    }, [])

    const add = (type)=>{
        // type:String addBank, addUsdt
        //先校验是否设置资金密码 ,接口获取，先模拟
        let isSetPwd = 1;
        if(!isSetPwd) {
            MyModal.confirm({
                title: t('tipsTitle'),
                content: t('notSetPwd'),
                okText: t('goSet'),
                cancelText: t('cancel'),
                onOk:()=>{
                    go('/userCenter/info')
                }
            });
            return 
        }
        if(type === 'addBank' && cardList.length === 5) {
            MyModal.warning({
                title: t('tipsTitle'),
                content: '银行卡最多绑定5个'
            });
            return
        }
        if(type === 'addUsdt' && digitalList.length === 5) {
            MyModal.warning({
                title: t('tipsTitle'),
                content: '数字钱包最多绑定5个'
            });
            return
        }
        if(isSetPwd){
            go(`/userCenter/wdMethod/${type}`)
        }
    }

    const del = (type, id)=>{
        if(type === 'bank') {
            if(cardList.length === 1) {
                MyModal.warning({
                    title: t('tipsTitle'),
                    content: '银行卡最少绑定一个'
                });
                return
            }
            dialogStore.checkPayPassword().then(result => {
                console.log('list', result)
                if(result) {
                    const sliced = cardList.filter(item => item.id !== id)
                    setCardList(sliced)
                }
            })
            return 
        }
        if(type === 'digital') {
            dialogStore.checkPayPassword().then(result => {
                console.log('list', result)
                if(result) {
                    const sliced = digitalList.filter(item => item.id !== id)
                    setDigitalList(sliced)
                }
            })
            return
        }
    }
    return (
        <Wrapper>
            <RightHead title={t('pages.userCenter.wdMethod')}/>
            <div className="card-wrap">
                <Content className="card-content">
                    <div className="card-header">
                        <span className="card-header__title">{t('personCenter.wdMethod.bankCard')}</span>
                        <span className="card-header__tool" onClick={() => add('addBank')}>
                            {t('personCenter.wdMethod.addBank')}
                            <PlusCircleOutlined className="card-icon" />
                        </span>
                    </div>
                    <div className="card-table">
                        <div className="card-table__th">
                            <div>{t('personCenter.wdMethod.bankName')}</div>
                            <div>{t('personCenter.wdMethod.cardNum')}</div>
                            <div>{t("personCenter.wdMethod.bindCardTime")}</div>
                        </div>
                        <div className="card-table__tbody">
                            {
                                cardList.length === 0 ? 
                                <NoData title={t('personCenter.wdMethod.noBankCard')} height="350"/> :
                                cardList.map((item, index) => (
                                    <div className="card-table__tr" key={`bank-list-${index}`}>
                                        <div className="card-table__trItem">
                                            <BankLogo className="tr-logo" bankCode={item.bank_code}/>
                                            <span>{t(`bankList.${item.bank_code}`)}</span>
                                        </div>
                                        <div className="card-table__trItem">
                                            <span>{item.card_number}</span>
                                        </div>
                                        <div className="card-table__trItem">
                                            <span>{item.create_time}</span>
                                            <MinusCircleOutlined className="card-icon" onClick={() => del('bank', item.id)}/>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Content>
                <Content className="card-content">
                    <div className="card-header">
                        <span className="card-header__title">{t('personCenter.wdMethod.numWallet')}</span>
                        <span className="card-header__tool" onClick={() => add('addUsdt')}>
                            {t('personCenter.wdMethod.addUsdt')}
                            <PlusCircleOutlined className="card-icon" />
                        </span>
                    </div>
                    <div className="card-table">
                        <div className="card-table__th">
                            <div>{t('personCenter.wdMethod.usdtName')}</div>
                            <div>{t('personCenter.wdMethod.usdtAdress')}</div>
                            <div>{t('personCenter.wdMethod.bindCardTime')}</div>
                        </div>
                        <div className="card-table__tbody">
                            {
                                digitalList.length === 0 ? 
                                <NoData title={t('personCenter.wdMethod.noDigitalCard')} height="350" /> :
                                digitalList.map((item, index) => (
                                    <div className="card-table__tr" key={`digital-list-${index}`}>
                                        <div className="card-table__trItem">
                                            <BankLogo className="tr-logo" bankCode={item.bank_code}/>
                                            <span>{t(`bankList.${item.bank_code}`)}</span>
                                        </div>
                                        <div className="card-table__trItem">
                                            <span>{item.card_number}</span>
                                        </div>
                                        <div className="card-table__trItem">
                                            <span>{item.create_time}</span>
                                            <MinusCircleOutlined className="card-icon" onClick={() => del('digital', item.id)}/>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Content>
            </div>
        </Wrapper>
    )
};
