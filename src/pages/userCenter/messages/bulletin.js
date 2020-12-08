import React, { useState, useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import MyButton from '@/components/buttons/myButton';
import SvgIcon from '@/components/svgIcon';
import { MyTable, PageItemRender } from '@/components/usercenter/myComponents';
import Detail from './bulletinDetail.js'

const Wrapper = styled.div`
    width: 100%;
    padding: 25px 20px;

    .toolbar {
        height: 35px;
        width: 100%;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        jusitfy-content: flex-start;

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

    .look-detail{
        cursor: pointer;
    }

    .status{
        display:block;
        width:25px;
        height:25px;
        position: relative;
        background:#575d63;
        border-radius:13px;
        i{
            position: absolute;
            right:-6px;
            top:2px;
            width:5px;
            height:5px;
            border-radius:3px;
            background:#e94f4f;
        }
    }
`;



function init() {

    return {
        detail:null,
        list: [],
        totalPage: 0,
        currentPage: 0
    };
}

function reducer(state, action) {
    switch (action.type) {
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
        case 'detail':
            return {
                ...state,
                ...action.payload
            };
        default:
            throw new Error();
    }
}



const Index = () => {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);
    const [state, dispatch] = useReducer(reducer, '', init);

    const onCurrentPageChanged = (page, pageSize) => {
        console.log(page)
        dispatch({
            type: 'setCurrentPage',
            payload: page
        });
    };
    

    const search = () => {
        const obj = {
            currentPage: state.currentPage
        };

        console.log('查询条件: ', obj);

        setLoading(true);

        let st = setTimeout(() => {
            let temp = [].concat(state.list);

            for (let i = 0; i < 99; i++) {
                temp.push({
                    auditOperator: "maydee",
                    content: "干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂",
                    createDate: "2020-08-04 19:59:42",
                    createOperator: "maydee",
                    id: 2 + i,
                    msgState: i,
                    msgType: 0,
                    remark: " 1",
                    state: 1,
                    title: "干饭人，干饭魂"+i,
                    userLevel: 0,
                });
            }

            dispatch({
                type: 'setList',
                payload: temp
            });

            setLoading(false);

            window.clearTimeout(st);
        }, 500);
    };
    const handleDetail = (p) => {
        dispatch({
            type: 'detail',
            payload: {
                detail:p
            }
        });
    } 
    const back = () => {
        dispatch({
            type: 'detail',
            payload: {
                detail:null
            }
        });
    }
    const columns = [
        {
            title: '状态',
            dataIndex: 'msgState',
            width: 90,
            align: 'center',
            render: (p) => { //1已读，否则未读
                return (
                    <div className="status">
                        <SvgIcon link="msg" size="13" color='#ffffff' />
                        {/* { p === 0 && <i></i> } */}
                    </div>
                )
            }
        },
        {
            title: '标题',
            dataIndex: '',
            align: 'center',
            render: (p) => {
                return (
                    <div className="look-detail" onClick={() => handleDetail(p)}>{p.title}</div>
                )
            }
        },
        {
            title: '时间',
            dataIndex: 'createDate',
            width: 190,
            align: 'center'
        },
    ];
    useEffect(() => {
        dispatch({
            type:'setList',
            payload:[{
                auditOperator: "maydee",
                content: "干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂干饭人，干饭魂",
                createDate: "2020-08-04 19:59:42",
                createOperator: "maydee",
                id: 1,
                msgState: 1,
                msgType: 0,
                remark: " 1",
                state: 1,
                title: "年轻人不讲武德",
                userLevel: 0,
            }]
        })
    }, []);
    
    let msg = t('personCenter.messages', { returnObjects: true });
    return (
        <Wrapper className="bets">
            {
                state.detail !== null ?<Detail data={state.detail} back={back}/>:
                <>
                    <div className="toolbar">
                        <MyButton
                            className="search"
                            link="button"
                            color="#cf2a2a"
                            width="162"
                            height="35"
                            loading={loading}
                            onClick={search}
                        >
                            {msg[2]}
                        </MyButton>
                    </div>

                    <div className="table-zone">
                        <MyTable
                            columns={columns}
                            showHeader={false}
                            dataSource={state.list.length > 0 ? [].concat(state.list) : null}
                            pagination={{
                                position: ['bottomCenter'],
                                itemRender: PageItemRender,
                                total: state.totalPage,
                                current: state.currentPage,
                                showSizeChanger: false,
                                onChange: onCurrentPageChanged
                            }}
                            rowKey={record => record.id}
                        />
                    </div>
                </>
            }
            
        </Wrapper>
    )
};

export default Index;