import React, {useEffect,useState, useReducer} from 'react';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import MyButton from '@/components/buttons/myButton';
import { PaneWrapper } from '../style'
import {
    MyRangePicker,
    MySelect,
    MyTable,
    PageItemRender
} from '@/components/usercenter/myComponents';

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
        case 'setLotteryList':
            return {
                ...state,
                lotteryList: action.payload,
                currentLottery: action.payload[0].value
            };
        case 'setLottery':
            return {
                ...state,
                currentLottery: action.payload
            };
        case 'setList':
            return {
                ...state,
                list: action.payload,
                totalPage: action.payload.length,
                currentPage: 1
            };
        case 'setCurrentPage':
            return {
                ...state,
                currentPage: action.payload
            };
        default:
            throw new Error();
    }
}

export default function TransactionsWithdrawlPane () {
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
        },
        {
            label: t('personCenter.transactions.statusText.pending'),
            value: '0'
        }
    ]
    
    const columns = [
        {
            title: t('personCenter.transactions.tableColumn.date'),
            dataIndex: 'withdrawl_time',
            align: 'center'
        },
        {
            title: t('personCenter.transactions.tableColumn.order'),
            dataIndex: 'withdrawl_order',
            align: 'center'
        },
        {
            title: t('personCenter.transactions.tableColumn.withdrawlCard'),
            dataIndex: 'withdrawl_card',
            align: 'center'
        },
        {
            title: t('personCenter.transactions.tableColumn.amount'),
            dataIndex: 'withdrawl_amount',
            align: 'center'
        },
        {
            title: t('personCenter.transactions.tableColumn.status'),
            dataIndex: 'withdrawl_status',
            ellipsis: true,
            align: 'center',
            render: (text) => statusList.find(item => item.value === text).label
        },
        {
            title: t('personCenter.transactions.tableColumn.note'),
            dataIndex: 'withdrawl_note',
            ellipsis: true,
            align: 'center'
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

    const onLotteryChange = (value) => {
        dispatch({
            type: 'setLottery',
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
                        status = '0' 
                }
                temp.push({
                    $index: i,
                    withdrawl_time: '2020-10-10  10:10:10',
                    withdrawl_order: 'A_202008111346375194404',
                    withdrawl_card: 'XXXX',
                    withdrawl_amount: '100.00',
                    withdrawl_status: status,
                    withdrawl_note: '-'
                });
            }
            console.log('查询条件: ', obj, temp);
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

                <MySelect defaultValue="all"  onChange={onLotteryChange} style={{ width: 120 }}>
                    {
                        statusList.map(item => (
                            <Option value={item.value} key={item.value}>{item.label}</Option>
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
                    rowKey={({$index}) => `withdrawl-row-${$index}`}
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
                {t('personCenter.transactions.tip.withdrawl')}
            </div>
        </PaneWrapper>
    )
};
