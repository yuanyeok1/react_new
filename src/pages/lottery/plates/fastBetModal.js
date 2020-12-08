import React from 'react';
import styled from 'styled-components';
import { Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import MyButton2 from '@/components/buttons/myButton2';

const Wrapper =  styled(Modal)`
    .ant-modal-content {
        background-color: #191A1B;
        border: 1px solid #CF2A2A;
        box-shadow: 0px 0px 20px 0px rgba(4, 4, 4, 0.6);

        .ant-modal-close {
            color: ${props => props.theme.lottery.fontColor};

            .ant-modal-close-x {
                height: 44px;
                line-height: 44px;
                transition: transform 0.4s;

                &:hover {
                    transform: rotate(-90deg);
                }
            }
        }

        .ant-modal-header {
            background-color: rgba(207, 42, 42, 0.5);
            padding: 11px 19px;
            border: 0;
            border-radius: 0;

            .ant-modal-title {
                font-size: 16px;
                font-family: Arial;
                font-weight: 400;
                color: ${props => props.theme.lottery.fontColor};
                opacity: 1;
            }
        }

        .ant-modal-body {
            padding: 0;

            .bar {
                height: 48px;
                width: 100%;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                padding: 0;

                .text1, .value1, .text2, .value2 {
                    font-size: 14px;
                    font-family: Arial;
                    font-weight: 400;
                    color: ${props => props.theme.lottery.fontColor};
                }

                .text1 {
                    margin-right: 10px;
                    margin-left: 20px;
                }

                .text2 {
                    margin-right: 10px;
                    margin-left: 20px;
                }
            }

            .table {
                border-top: 1px solid #CA2929;
                border-left: 1px solid #CA2929;
                width: 718px;
                margin: 0 auto;

                .row {
                    width: 100%;
                    display: flex;
                    justify-content: flex-start;
                    align-items: center;

                    .td {
                        width: 100px;
                        font-size: 14px;
                        font-family: Arial;
                        font-weight: 400;
                        border-right: 1px solid #CA2929;
                        border-bottom: 1px solid #CA2929;
                        text-align: center;
                    }

                    .td1 {
                        width: 150px;
                    }

                    .td2 {
                        width: 117px;
                        overflow: hidden;
                    }
                    
                    .td4 {
                        width: 50pxs;
                    }
                }

                .row1 {
                    .td {
                        color: #8C8D8D;
                        height: 30px;
                        line-height: 30px;
                    }
                }

                .row2 {
                    .td {
                        color: ${props => props.theme.lottery.fontColor};
                        height: 48px;
                        line-height: 48px;
                    }
                }
            }

            .actions {
                width: 100%;
                height: 65px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;

                .ok {
                    margin-left: 10px;
                    margin-right: 42px;
                }
            }
        }
    }
`;

const FastBetModal = ({ data, showFastBetModal, setShowFastBetModal}) => {
    const { t } = useTranslation();

    const handleCancel = () => {
        setShowFastBetModal(false);
    };

    const handleOk = () => {
    };

    return (
        <Wrapper
            visible={showFastBetModal}
            title={t('lottery.kuaisutouzhu')}
            onOk={handleOk}
            onCancel={handleCancel}
            width={757}
            footer={null}
        >
                <div className="bar">
                    <span className="text1">
                        {t('lottery.touzhushijian')}:
                    </span>

                    <span className="value1">
                        08/25/2020,13:52
                    </span>

                    <span className="text2">
                        {t('lottery.touzhujine')}:
                    </span>

                    <span className="value2">
                        {data.touzhujine} VND
                    </span>
                </div>

                <div className="table">
                    <div className="row row1">
                        <div className="td td1">{t('lottery.wanfamingcheng')}</div>
                        <div className="td td2">{t('lottery.touzhuneirong')}</div>
                        <div className="td td3">{t('lottery.zongtouzhushu')}</div>
                        <div className="td td4">{t('lottery.beishu')}</div>
                        <div className="td td5">{t('lottery.touzhujine')}</div>
                        <div className="td td6">{t('lottery.danzhujiangjin')}</div>
                        <div className="td td7">{t('lottery.peilv', { returnObjects: true })[0]}</div>
                    </div>

                    <div className="row row2">
                        <div className="td td1">{data?.wanfamingcheng}</div>
                        <div className="td td2">{data?.touzhuneirong}</div>
                        <div className="td td3">{data?.zongtouzhushu}</div>
                        <div className="td td4">{data?.beishu}</div>
                        <div className="td td5">{data?.touzhujine}</div>
                        <div className="td td6">{data?.danzhujiangjin}</div>
                        <div className="td td7">{data?.peilv}</div>
                    </div>
                </div>

                <div className="actions">
                    <MyButton2
                        className="cancel" 
                        link="button" 
                        color="#CF2A2A" 
                        width="134"
                        height="24"
                        onClick={handleCancel}
                    >
                        {t('cancel')}
                    </MyButton2>

                    <MyButton2
                        className="ok" 
                        link="button" 
                        color="#CF2A2A" 
                        width="134"
                        height="24"
                        onClick={handleOk}
                    >
                        {t('ok')}
                    </MyButton2>
                </div>
        </Wrapper>
    )
};

export default FastBetModal;