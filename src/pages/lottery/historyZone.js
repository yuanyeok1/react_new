import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Table } from 'antd';

const MyTable = styled(Table)`
    width: 1118px;
    height: 255px;
    margin: 0 auto;

    .ant-table-cell {
        background: #191A1B;
        padding: 0 16px;
        border: 0;
        color: ${props => props.theme.lottery.fontColor};
    }

    .ant-table-header {
        tr {
            height: 54px;

            th {
                border-bottom: 1px solid #252627;
            }
        }
    }

    .ant-table-tbody {
        .ant-table-row {
            height: 34px;

            td {
                border-bottom: 1px solid #252627;

                &:first-child {
                    border-left: 1px solid #252627;
                }

                &:last-child {
                    border-right: 1px solid #252627;
                }
            }
    
            &:hover {
                td {
                    background: #252627;
                }
            }
        }
    }
`;

const Wrapper = styled.div`
    background-color: #191A1B;
    width: 100%;
    height: 319px;
    margin-top: 20px;

    .header {
        width: 100%;
        height: 44px;
        line-height: 44px;
        background: linear-gradient(0deg, rgba(129, 22, 22, 0.5), rgba(207, 42, 42, 0.5));
        text-align: center;
        font-size: 16px;
        font-family: Arial;
        font-weight: bold;
        color: ${props => props.theme.lottery.fontColor};
    }
`;

const data = [];

for (let i = 0; i < 10; i++) {
    data.push({
        key: i,
        qihao: '2020-11-27',
        kaijianghaoma: '0,1,2,3,4,5,6',
        touzhumoshi: "复式",
        touzhushijian:  '2020-11-27 13:20:56',
        touzhujine: '1000,000 VND',
        zhuangtai: '已完成'
    });
}

const HistoryZone = () => {
    const { t } = useTranslation();

    const columns = [
        {
            title: t('lottery.qihao'),
            dataIndex: 'qihao',
            width: 150,
            align: 'center'
        },
        {
            title: t('lottery.kaijianghaoma'),
            dataIndex: 'kaijianghaoma',
            width: 200,
            align: 'center'
        },
        {
            title: t('lottery.touzhumoshi'),
            dataIndex: 'touzhumoshi',
            width: 100,
            align: 'center'
        },
        {
            title: t('lottery.touzhushijian'),
            dataIndex: 'touzhushijian',
            width: 200,
            align: 'center'
        },
        {
            title: t('lottery.touzhujine'),
            dataIndex: 'touzhujine',
            width: 200,
            align: 'center'
        },
        {
            title: t('lottery.zhuangtai'),
            dataIndex: 'zhuangtai',
            width: 150,
        }
    ];

    return (
        <Wrapper>
            <div className="header">
                {
                    t('lottery.touzhujilu')
                }
            </div>

            <MyTable  
                columns={columns} 
                dataSource={data} 
                pagination={false} 
                scroll={{ y: 197 }}
            />
        </Wrapper>
    )
};

export default HistoryZone;