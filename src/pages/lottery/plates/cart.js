import React, { useState } from 'react';
import styled from 'styled-components';
import SvgIcon from '@/components/svgIcon';
import { useTranslation } from 'react-i18next';
import { Table } from 'antd';
import TraceModal from './traceModal';
import MyModal from '@/components/dialogs/modal';
import MyButton2 from '@/components/buttons/myButton2';

const MyTable = styled(Table)`
    .ant-table-cell {
        background: #191A1B;
        padding: 0 16px;
        border: 0;
        color: ${props => props.theme.lottery.fontColor};
    }

    .ant-table-header {
        tr {
            height: 34px;
        }
    }

    .ant-table-tbody {
        .ant-table-row {
            height: 34px;
    
            &:hover {
                td {
                    background: #252627;
                }
            }
        }

        .ant-empty-normal {
            display: none;
        }
    }
`;

const Wrapper = styled.div`
    height: 350px;
    width: 100%;

    .header {
        background: linear-gradient(0deg, rgba(129, 22, 22, 0.5), rgba(207, 42, 42, 0.5));
        height: 35px;
        line-height: 35px;
        width: 100%;
        font-size: 16px;
        font-weight: bold;
        color: ${props => props.theme.lottery.fontColor};
        text-align: center;
    }

    .table {
        background-color: #191A1B;
        height: 231px;
        width: 100%;
        overflow: hidden;
    }

    .operations {
        background-color: #252627;
        height: 74px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        jusitfy-content: flex-start;

        .summary {
            font-size: 14px;
            font-weight: 400;
            color: ${props => props.theme.lottery.fontColor};
            padding-left: 20px;

            span {
                color: #CF2A2A;
                margin: 0 5px;
            }
        }

        .place-bet {
            margin-left: 92px;
        }

        .trace {
            margin-left: 10px;
        }

        .delete-all {
            margin-left: 20px;
            cursor: pointer;

            span {
                font-size: 14px;
                font-weight: 400;
                color: #8C8D8D;
                margin-left: 4px;
                vertical-align: middle;
            }
        }
    }
`;

const Cart = ({list, dispatch}) => {
    const [showTraceModal, setShowTraceModal] = useState(false);
    const { t } = useTranslation();
    const totalAmount = 10000000000;

    const deleteOne = (item) => {
        dispatch({
            type: 'deleteRecordFromCart',
            payload: item
        })
    };

    const deleteAll = () => {
        dispatch({
            type: 'deleteAllRecordsFromCart',
            payload: []
        })
    };

    const columns = [
        {
            title: t('lottery.xuhao'),
            dataIndex: 'xuhao',
            width: 70,
            align: 'center'
        },
        {
            title: t('lottery.wanfamingcheng'),
            dataIndex: 'wanfamingcheng',
            width: 150,
            align: 'center'
        },
        {
            title: t('lottery.touzhuneirong'),
            dataIndex: 'touzhuneirong',
            width: 90,
            align: 'center',
            ellipsis: true
        },
        {
            title: t('lottery.zongtouzhushu'),
            dataIndex: 'zongtouzhushu',
            width: 100,
            align: 'center'
        },
        {
            title: t('lottery.beishu'),
            dataIndex: 'beishu',
            width: 120,
            align: 'center'
        },
        {
            title: t('lottery.touzhujine'),
            dataIndex: 'touzhujine',
            width: 150,
        },
        {
            title: t('lottery.danzhujiangjin'),
            dataIndex: 'danzhujiangjin',
            width: 150,
            render: (text, record) => (
                <div onClick={() => deleteOne(record)}>
                    <span>{text}</span>
                    <SvgIcon link="delete" color="#8C8D8D" size="16" style={{marginLeft: '10px', cursor: 'pointer'}} />
                </div>
            )
        }
    ];

    const placeBet = () => {
        MyModal.success({
            content: '投注成功!'
        });
    };

    return (
        <Wrapper>
            <div className="header">
                {
                    t('lottery.xuanhaolan')
                }
            </div>

            <div className="table">
                <MyTable  
                    columns={columns} 
                    dataSource={[].concat(list)} 
                    pagination={false} 
                    scroll={{ y: 197 }}
                    rowKey={record => record.xuhao}
                />
            </div>

            <div className="operations">
                <div className="summary">
                    {
                        t('lottery.zongtouzhue')
                    }
                    :
                    <span>
                        { totalAmount } 
                    </span>
                    VND
                </div>

                {/* <div className="btn place-bet" onClick={placeBet}>
                    <span className="text">
                        {
                            t('lottery.lijitouzhu')
                        }
                    </span>
                </div>

                <div className="btn trace" onClick={() => setShowTraceModal(true)}>
                    <span className="text">
                        {
                            t('lottery.zhuihao')
                        }
                    </span>
                </div> */}

                <MyButton2
                    className="place-bet" 
                    link="button" 
                    color="#CF2A2A" 
                    width="192"
                    height="35"
                    onClick={placeBet}
                >
                    {t('lottery.lijitouzhu')}
                </MyButton2>

                <MyButton2
                    className="trace" 
                    link="button" 
                    color="#CF2A2A" 
                    width="192"
                    height="35"
                    onClick={() => setShowTraceModal(true)}
                >
                    {t('lottery.zhuihao')}
                </MyButton2>
                
                <div className="delete-all" onClick={deleteAll}>
                    <SvgIcon link="delete" color="#8C8D8D" size="20" />
                    <span className="text">
                        {
                            t('lottery.qingkongxuanhaolan')
                        }
                    </span>
                </div>
            </div>

            <TraceModal showTraceModal={showTraceModal} setShowTraceModal={setShowTraceModal} />
        </Wrapper>
    )
};

export default Cart;