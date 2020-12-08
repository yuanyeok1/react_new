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
        platformList: [{text: '全部', value: 'all'}],
        currentPlatform: 'all',
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
        case 'setPlatformList':
            return {
                ...state,
                platformList: action.payload,
                currentPlatform: action.payload[0].value
            };
        case 'setPlatform':
            return {
                ...state,
                currentPlatform: action.payload
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
        title: '投注时间',
        dataIndex: 'touzhushijian',
        width: 110,
        align: 'center'
    },
    {
        title: '单号',
        dataIndex: 'danhao',
        width: 100,
        align: 'center'
    },
    {
        title: '游戏',
        dataIndex: 'youxi',
        width: 90,
        align: 'center'
    },
    {
        title: '投注金额',
        dataIndex: 'touzhujine',
        width: 120,
        align: 'center'
    },
    {
        title: '有效投注',
        dataIndex: 'youxiaotouzhu',
        width: 90,
        ellipsis: true,
        align: 'center'
    },
    {
        title: '派奖金额',
        dataIndex: 'paijiangjine',
        width: 90,
        ellipsis: true,
        align: 'center'
    },
    {
        title: '盈亏金额',
        dataIndex: 'yingkuijine',
        width: 110,
        align: 'center'
    }
];

const Trace = () => {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [state, dispatch] = useReducer(reducer, '', init);

    useEffect(() => {
        dispatch({
            type: 'setPlatformList',
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

    const onPlatformChange = (value) => {
        dispatch({
            type: 'setPlatform',
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
            platform: state.currentPlatform,
            currentPage: state.currentPage
        };

        console.log('查询条件: ', obj);

        setLoading(true);

        let st = setTimeout(() => {
            let temp = [];

            for (let i = 0; i < 99; i++) {
                temp.push({
                    xuhao: i,
                    touzhushijian: '2020/11/20 16:40:20',
                    danhao: 'AFC322423424234242',
                    youxi: '极速彩',
                    touzhujine: 1000,
                    youxiaotouzhu: 1000,
                    paijiangjine: 1000000,
                    yingkuijine: 200000,
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

                <div className="text">平台</div>

                <MySelect defaultValue="all"  onChange={onPlatformChange} style={{ width: 120 }}>
                    {
                        state.platformList.map(item => (
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