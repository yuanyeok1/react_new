import React, {useState, useEffect, useReducer} from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import MyButton from '@/components/buttons/myButton';
import {
    MyRangePicker,
    MySelect,
    MyTable,
    PageItemRender
} from '@/components/usercenter/myComponents';

const { Option } = MySelect;

const Wrapper = styled.div`
    width: 100%;
    padding: 25px 20px;

    .toolbar {
        height: 35px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        jusitfy-content: flex-start;

        .text {
            font-size: 12px;
            color: ${props => props.theme.userCenter.fontColor};
            margin: 0 10px;

            &:first-child {
                margin-left: 0;
            }
        }

        .search {
            margin-left: 10px;
            cursor: pointer;
        }
    }

    .table-zone {
        margin-top: 20px;

        .ant-pagination {
            margin-top: 20px;
        }
    }
`;

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

const columns = [
    {
        title: '追号时间',
        dataIndex: 'zhuihaoshijian',
        width: 110,
        align: 'center'
    },
    {
        title: '彩种',
        dataIndex: 'caizhong',
        width: 70,
        align: 'center'
    },
    {
        title: '玩法',
        dataIndex: 'wanfa',
        width: 90,
        align: 'center'
    },
    {
        title: '开始期号',
        dataIndex: 'kaishiqihao',
        width: 120,
        align: 'center'
    },
    {
        title: '追号内容',
        dataIndex: 'zhuihaoneirong',
        width: 90,
        ellipsis: true,
        align: 'center'
    },
    {
        title: '追号进度',
        dataIndex: 'zhuihaojindu',
        width: 90,
        ellipsis: true,
        align: 'center'
    },
    {
        title: '追号总金额',
        dataIndex: 'zhuihaozongjine',
        width: 110,
        align: 'center'
    },
    {
        title: '状态',
        dataIndex: 'zhuangtai',
        width: 70,
        align: 'center'
    }
];

const Trace = () => {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [state, dispatch] = useReducer(reducer, '', init);

    useEffect(() => {
        dispatch({
            type: 'setLotteryList',
            payload: [
                {text: '全部', value: 'all'},
                {text: t('pages.jisucai'), value: 'jisucai'},
                {text: t('pages.north'), value: 'beibu'},
                {text: t('pages.middle'), value: 'zhongbu'},
                {text: t('pages.south'), value: 'nanbu'}
            ]
        });
    }, [t]);

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
            endDate: state.endDate,
            lottery: state.currentLottery,
            currentPage: state.currentPage
        };

        console.log('查询条件: ', obj);

        setLoading(true);

        let st = setTimeout(() => {
            let temp = [];

            for (let i = 0; i < 99; i++) {
                temp.push({
                    xuhao: i,
                    zhuihaoshijian: '2020/11/20 16:40:20',
                    caizhong: '极速彩',
                    wanfa: '包组/包二星/复式',
                    kaishiqihao: '20201120001',
                    zhuihaoneirong: '01,02',
                    zhuihaojindu: '1/10',
                    zhuihaozongjine: 1000,
                    zhuangtai: '已中奖'
                });
            }

            dispatch({
                type: 'setList',
                payload: temp
            });

            setLoading(false);

            window.clearTimeout(st);
        }, 2000);
    };

    return (
        <Wrapper className="bets">
            <div className="toolbar">
                <div className="text">时间</div>

                <MyRangePicker
                    startDate={state.startDate}
                    endDate={state.endDate}
                    onChange={onDateChanged}
                />

                <div className="text">彩种</div>

                <MySelect defaultValue="all"  onChange={onLotteryChange} style={{ width: 120 }}>
                    {
                        state.lotteryList.map(item => (
                            <Option value={item.value} key={item.value}>{item.text}</Option>
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
                    pagination={{
                        position:['bottomCenter'],
                        itemRender: PageItemRender,
                        total: state.totalPage,
                        current: state.currentPage,
                        showSizeChanger: false,
                        onChange: onCurrentPageChanged
                    }}
                    rowKey={record => record.xuhao}
                />
            </div>
        </Wrapper>
    )
};

export default Trace;