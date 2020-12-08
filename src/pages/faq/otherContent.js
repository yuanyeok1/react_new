import React, { useEffect } from 'react';
import styled from 'styled-components';
import {List} from 'antd';

const Inner = styled.div`
    width: 100%;
    height: 100%;
    line-height: 25px;
    padding: 33px 22px;
    font-size: 16px;
    font-family: 'ArialMT ';

    .ant-table {
        background-color: #252627;
        color: #fff;
        font-size: 14px;

        .ant-table-tbody > tr.ant-table-row:hover > td {
            background: none;
        }
        .ant-table-thead > tr > th {
            border-bottom: 0;
        }
        .ant-table-tbody > tr > td {
            border-bottom: 0;
        }
        .ant-table-cell {
            height: 49px;
        }
        .ant-table-thead {
            .ant-table-cell {
                background-color: #383a3c;
                color: #fff;
            }
        }
        .ant-table-tbody {
            .ant-table-row {
                position: relative;
                &::after {
                    display: block;
                    content: '';
                    width: 86%;
                    height: 1px;
                    background-color: #383a3c;
                    position: absolute;
                    left: 7%;
                }
                &:first-child {
                    &::after {
                        display: none;
                    }
                }
            }

        }
        &:nth-child(1) {
            .ant-table-thead {
                .ant-table-cell {
                    width: 33.33%;
                }
            }
        }
    }

    .ant-list {
        color: #fff;
        .ant-list-header {
            padding: 0;
            line-height: 49px;
            text-align: center;
            background-color: #383a3c;
            border: 0;
        }
        .ant-list-item {
            color: #fff;
            padding: 0 7%;
            line-height: 49px;
            position: relative;
            border: 0;
            background: #252627;
            display: flex;
            &::after {
                display: block;
                content: '';
                width: 86%;
                height: 1px;
                background: #383a3c;
                position: absolute;
                left: 7%;
                bottom: 0;
            }
            &:last-child {
                &::after {
                    display: none;
                }
            }
            div {
                text-align: center;
            }
        }
    }
    .my-list1 {
        .ant-list-item {
            div {
                flex: 1;
                text-align: left;
                &:nth-child(3n-1) {
                    text-align: center;
                }
                &:nth-child(3n) {
                    text-align: right;
                }
            }
            &:first-child {
                background-color: #383a3c;
            }
        }
    }
    .my-list2 {
        .ant-list-item {
            div {
                width: 55px;
            }
        }
    }
    .my-list3 {
        .ant-list-item {
            div {
                flex: 1;
                text-align: left;
                padding-left: 15px;
            }
        }
    }
    .my-list4 {
        .ant-list-item {
            div {
                flex: 1;
                text-align: left;
                &:nth-child(3n-1) {
                    text-align: left;
                }
                &:nth-child(3n) {
                    text-align: left;
                }
            }
        }
    }
    .my-list5 {
        .ant-list-item {
            div {
                flex: 1;
                text-align: left;               
            }
            &:nth-child(1) {
                div {
                    text-align: left;
                }
            }
        }
    }
    h3 {
        color: #fff;
        line-height: 40px;
        padding: 8px 0;
        margin-top: 18px;
        margin-bottom: 0;
    }
`;

const Page = (props) => {
    console.log('props:',props);
    let {content} = props.name;
    let nowHash = window.location.hash.split('#')[1];
    useEffect(() => {
        getNewHash(nowHash);
    });
    const getNewHash = (nowHash) => {
        props.getNewHash(nowHash);
    }
    const data = content[nowHash];
    if(nowHash !== 'LotteryRule') {
        return (
            <Inner></Inner>
        )
    }else {

        return (
            <Inner >
                <div dangerouslySetInnerHTML={{__html: data['introduce']}}></div>
                    {
                        data['lottery'].map((tab,i) =>{
                            let ele = '';
                            ele =  
                                    <div key={i}>
                                        {
                                            tab.tit?
                                            <h3 dangerouslySetInnerHTML={{__html: tab.tit}}></h3>
                                            :
                                            ''
                                        }
                                        <List
                                            header={tab.title?<div>{tab.title}</div>:''}
                                            className={tab.class}
                                        >
                                            {
                                                tab['content'].map((item,index) =>
                                                        <List.Item key={index}>
                                                            {
                                                                item.award?
                                                                <div>{item.award}</div>
                                                                :
                                                                ''
                                                            }
                                                            {
                                                                item.number.map((con,n) => 
                                                                    <div key={n}>{con}</div>
                                                                )
                                                            }
                                                        </List.Item>
                                                )
                                            }
                                        </List>
                                    </div>
                            
                            return ele;
                        })
                    }
            </Inner>
        )
    }
};

export default Page;