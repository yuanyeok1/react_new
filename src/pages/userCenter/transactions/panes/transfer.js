import React, {useEffect,useState, useReducer} from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import MyButton from '@/components/buttons/myButton';
import {
    MyRangePicker,
    MySelect,
    MyTable,
    PageItemRender
} from '@/components/usercenter/myComponents';
import { PaneWrapper } from '../style'

const { Option } = MySelect;


function init() {
    let endDate = dayjs().format('YYYY/MM/DD');
    let startDate = dayjs().subtract(7, 'day').format('YYYY/MM/DD');

    return {
        startDate,
        endDate,
        lotteryList: [{text: '全部', value: 'all'}],
        currentLottery: 'all',
        list: [],
        totalPage: 0,
        currentPage: 0
    };
}

function reducer(state, action) {
    switch (action.type) {
        case 'setDates':
            return {
                ...state,
                ...action.payload
            };
        case 'setList':
            return {
                ...state,
                list: action.payload,
                totalPage: action.payload.length,
                currentPage: 1
            };
        case 'setStatus':
            return {
                ...state
            }
        case 'setCurrentPage':
            return {
                ...state,
                currentPage: action.payload
            };
        default:
            throw new Error();
    }
}

export default function TransactionsTransferPane () {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [state, dispatch] = useReducer(reducer, '', init);
    const statusList = [
        {
            label: t('personCenter.transactions.statusText.all'),
            value: 'all'
        },
        {
            label: t('personCenter.transactions.statusText.success'),
            value: '1'
        },
        {
            label: t('personCenter.transactions.statusText.fail'),
            value: '-1'
        }
    ]
    
    const columns = [
        {
            title: t('personCenter.transactions.tableColumn.date'),
            dataIndex: 'transfer_time',
            align: 'center'
        },
        {
            title: t('personCenter.transactions.tableColumn.order'),
            dataIndex: 'transfer_order',
            align: 'center'
        },
        {
            title: t('personCenter.transactions.tableColumn.transfer_to'),
            dataIndex: 'transfer_to',
            align: 'center'
        },
        {
            title: t('personCenter.transactions.tableColumn.transfer_from'),
            dataIndex: 'transfer_from',
            align: 'center'
        },
        {
            title: t('personCenter.transactions.tableColumn.amount'),
            dataIndex: 'transfer_amount',
            width: 'auto',
            align: 'center'
        },
        {
            title: t('personCenter.transactions.tableColumn.status'),
            dataIndex: 'transfer_status',
            ellipsis: true,
            align: 'center',
            render: (text) => statusList.find(item => item.value === text).label
        }
    ];
    useEffect(() => {

    }, [t])

    const onDateChanged = (date, dateString) => {
        dispatch({
            type: 'setDates',
            payload: {
                startDate: dateString[0],
                endDate: dateString[1]
            }
        })
    };

    const onStatusChange = (value) => {
        dispatch({
            type: 'setStatus',
            payload: value
        });
    };

    const onCurrentPageChanged = (page, pageSize) => {
        dispatch({
            type: 'setCurrentPage',
            payload: page
        });  
    };

    const search = () => {
        const obj = {
            startDate: state.startDate,
            endDate: state.endDate
        };
        console.log('查询条件: ', obj);
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            let temp = [];

            for (let i = 0; i < 99; i++) {
                let status
                switch(true) {
                    case (i % 2) === 0:
                        status = '1'
                        break
                    case (i % 3) === 0:
                        status = '-1'
                        break
                    default: 
                        status = '1' 
                }
                temp.push({
                    $index: i,
                    transfer_time: '2020-10-10  10:10:10',
                    transfer_order: 'A_202008111346375194404',
                    transfer_to: 'AG钱包',
                    transfer_from: '沙巴钱包',
                    transfer_amount: '100.00',
                    transfer_status: status
                });
            }
            dispatch({
                type: 'setList',
                payload: temp
            });
        },1000);
    };

    return (
        <PaneWrapper className="bets">
            <div className="toolbar">
                <div className="text">{t('personCenter.transactions.label.date')}</div>

                <MyRangePicker
                    startDate={state.startDate}
                    endDate={state.endDate}
                    onChange={onDateChanged}
                />

                <div className="text">{t('personCenter.transactions.label.status')}</div>

                <MySelect defaultValue="all"  onChange={onStatusChange} style={{ width: 120 }}>
                    {
                        statusList.map((item, index) => (
                            <Option value={item.value} key={`transfer-opt-${index}`}>{item.label}</Option>
                        ))
                    }
                </MySelect>

                <MyButton 
                    className="search" 
                    link="button" 
                    color="#cf2a2a" 
                    width="162"
                    height="35"
                    loading={loading}
                    onClick={search}
                >
                        {t('personCenter.transactions.btnText.search_now')}
                </MyButton>
            </div>

            <div className="table-zone">
                <MyTable  
                    columns={columns} 
                    dataSource={state.list.length > 0 ? [].concat(state.list) : null} 
                    rowKey={({$index}) => `transfer-row-${$index}`}
                    pagination={{
                        position:['bottomCenter'],
                        itemRender: PageItemRender,
                        total: state.totalPage,
                        current: state.currentPage,
                        showSizeChanger: false,
                        onChange: onCurrentPageChanged
                    }}
                />
            </div>
            <div className="tip">
                {`${t('personCenter.transactions.tip.title')}:`}<br/>
                {t('personCenter.transactions.tip.transfer')}
            </div>
        </PaneWrapper>
    )
};
