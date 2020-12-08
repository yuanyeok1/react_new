import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Table, Checkbox} from 'antd';
import { useTranslation } from 'react-i18next';
import Stepper from '@/components/stepper';
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
            height: 36px;

            .ant-table-cell {
                background: #252627;
            }
        }
    }

    .ant-table-tbody {
        .ant-table-row {
            height: 34px;

            .ant-table-cell {
                padding: 0;
            }
    
            &:hover {
                td {
                    background: #252627;
                }
            }
        }

        tr.ant-table-row-selected {
            td {
                background: #191A1B;
                border: 0;
            }
        }
    }
`;

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
                justify-content: space-between;
                align-items: center;
                padding: 0;

                .left-part {
                    flex: 1;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;

                    .text1 {
                        font-size: 14px;
                        font-family: Arial;
                        font-weight: 400;
                        color: ${props => props.theme.lottery.fontColor};
                        margin-right: 10px;
                        margin-left: 20px;
                    }
    
                    .text2 {
                        font-size: 14px;
                        font-family: Arial;
                        font-weight: 400;
                        color: ${props => props.theme.lottery.fontColor};
                        margin-right: 10px;
                        margin-left: 20px;
                    }
                }

                .right-part {
                    width: 200px;
                    height: 100%;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;

                    .make-trace-plan {
                        width: 140px;
                        height: 28px;
                        line-height: 28px;
                        text-align: center;
                        border: 1px solid #252627;
                        border-radius: 14px;
                        font-size: 14px;
                        font-family: Arial;
                        font-weight: 400;
                        color: #8C8D8D;
                        cursor: pointer;
                        margin-right: 20px;
                    }
                }
            }

            .actions {
                margin-top: 24px;
                height: 77px;
                background: #252627;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;

                .left-part {
                    flex: 1;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    .row1 {
                        width: 100%;
                        text-align: left;
                        font-size: 14px;
                        font-family: Arial;
                        font-weight: 400;
                        color: ${props => props.theme.lottery.fontColor};
                        padding-left: 20px;                 
                    }

                    .row2 {
                        width: 100%;
                        text-align: left;
                        padding-left: 20px;
                        margin-top: 5px;
                        
                        .ant-checkbox-wrapper {
                            font-size: 14px;
                            font-family: Arial;
                            font-weight: 400;
                            color: ${props => props.theme.lottery.fontColor};
                        }
                    }
                }

                .right-part {
                    flex: 1;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .ok {
                        margin-left: 10px;
                    }
                }
            }
        }
    }
`;

const data = [];

for (let i = 0; i < 10; i++) {
    data.push({
        key: i,
        qishu: '2020-11-12-0001',
        kaijiangshijian: '2020-11-12 13:20:20',
        touzhujine: '3000000000 VND'
    });
}

const TraceModal = ({ showTraceModal, setShowTraceModal}) => {
    const { t } = useTranslation();
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [selectedRows, setSelectedRows] = useState([]);

    const columns = [
        {
            title: t('lottery.qishu'),
            dataIndex: 'qishu',
            width: 160,
            align: 'center'
        },
        {
            title: t('lottery.beishu'),
            width: 130,
            align: 'center',
            render: (text, record) => (
                <Stepper />
            )
        },
        {
            title: t('lottery.kaijiangshijian'),
            dataIndex: 'kaijiangshijian',
            width: 180,
            align: 'center'
        },
        {
            title: t('lottery.touzhujine'),
            dataIndex: 'touzhujine',
            width: 160,
            align: 'center'
        }
    ];

    const onSelectChange = (keys, rows) => {
        setSelectedRowKeys(keys);
        setSelectedRows(rows);
        //console.log('selectedRows: ', rows);
    };

    const onCheckboxChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };
    
    const handleCancel = () => {
        setShowTraceModal(false);
    };

    const handleOk = () => {
        console.log('selectedRows = ', selectedRows);
    };

    const makeTracePlan = () => {
        alert('生成追号计划！')
    };

    return (
        <Wrapper
            visible={showTraceModal}
            title={'越南乐透5分'}
            onOk={handleOk}
            onCancel={handleCancel}
            width={708}
            footer={null}
        >
                <div className="bar">
                    <div className="left-part">
                        <span className="text1">
                            {t('lottery.qishibeishu')}:
                        </span>

                        <Stepper />

                        <span className="text2">
                            {t('lottery.zhuihaoqishu')}:
                        </span>

                        <Stepper />
                    </div>

                    <div className="right-part">
                        <div className="make-trace-plan" onClick={makeTracePlan}>
                            {t('lottery.shengchengzhuihaojihua')}
                        </div>
                    </div>
                </div>

                <MyTable  
                    columns={columns} 
                    rowSelection={{
                        selectedRowKeys: selectedRowKeys,
                        onChange: onSelectChange
                    }}
                    dataSource={data} 
                    pagination={false} 
                    scroll={{ y: 197 }}
                />

                <div className="actions">
                    <div className="left-part">
                        <div className="row1">
                            {
                                t('lottery.zhuihaoqishuhejine', {n1: 5, n2: 100000000})
                            }
                        </div>

                        <div className="row2">
                            <Checkbox onChange={onCheckboxChange}>
                                {t('lottery.zhongjiangjiting')}
                            </Checkbox>
                        </div>
                    </div>

                    <div className="right-part">
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
                </div>
        </Wrapper>
    )
};

export default TraceModal;