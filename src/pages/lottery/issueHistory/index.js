import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import styled, { createGlobalStyle } from 'styled-components';
import SvgIcon from '@/components/svgIcon';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next';
import drawData from './data/data2';
import {deepCopy} from '@/utils';

const { Option } = Select;

const MyHeader1 = styled(Select)`
    width: 100%;
    color: ${props => props.theme.lottery.fontColor} !important;
    font-size: 16px !important;
    font-weight: bold !important;

    .ant-select-selector {
        background: linear-gradient(0deg,#0D0D0D,#1D1D1E);
        border: 0 !important;
        height: 44px !important;
        line-height: 44px !important;
        box-shadow: none !important;
        padding: 0 32px !important;

        .ant-select-selection-placeholder {
            line-height: 44px !important;
        }

        .ant-select-selection-item {
            line-height: 44px !important;
        }

        .ant-select-selection-search-input {
            outline: none;
            border: 0;
        }
    }

    .ant-select-arrow {
        right: 32px !important;
    }

    &.ant-select-open {
        .ant-select-arrow {
            right: 32px !important;

            .svg-icon {
                transform: rotate(180deg) !important;
                transition: all .3s !important;
            }
        }
    }
`;

const GlobalMySelectStyle = createGlobalStyle`
    body {
        .my-lottery-select {
            background: #191A1B;;
            padding: 0;
            max-height: 382px;
            width: 100%;

            .ant-select-item-option {
                font-size: 14px;
                font-family: Arial;
                font-weight: 400;
                color: #8C8D8D;
                width: 100%;
                height: 36px;
                line-height: 36px;
                text-align: center;
                padding: 0;
            }

            .ant-select-item-option-selected {
                background: #191A1B;
                color: #8C8D8D;
            }

            .ant-select-item-option-active {
                background: #252627;
                color: #FFF;
            }
        }
    }
`;

const Wrapper = styled.div`
    width: 100%;
    height: 822px;
    background-color: #191A1B;

    .my-select {
        background: red;
    }

    .body1 {
        height: 438px;
        width: 100%;
        box-shadow: 0px 0px 18px 2px rgba(0, 0, 0, 0.25);

        .row {
            border-bottom: 1px solid #252627;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            .col1, .col2 {
                font-size: 14px;
                font-family: Arial;
                font-weight: 400;
                color: #8C8D8D;
                text-align: center
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 9px 0;
            }

            .col1 {
                width: 138px;
                text-align: center;
            }

            .col2 {
                flex: 1;
                text-align: left;
                overflow: hidden;
                word-wrap:break-word; 
                word-break:break-all; 
                padding-right: 20px;

                .full-part {
                    margin-right: 4px;

                    span {
                        vertical-align: middle;
                        font-size: 14px;
                        color: #8c8d8d;
                    }

                    .highlight {
                        color: #CF2A2A;
                    }

                    .active {
                        display: inline-block;
                        width: 18px;
                        height: 18px;
                        line-height: 18px;
                        text-align: center;
                        background-color: #FFF;
                        border-radius: 50%;
                        color: #CF2A2A;
                    }
                }
            }
        }
    }

    .header2 {
        width: 100%;
        height: 36px;
        background: linear-gradient(0deg, #0D0D0D, #1D1D1E);
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .col1, .col2 {
            height: 36px;
            line-height: 36px;
            font-size: 16px;
            font-family: Arial;
            font-weight: bold;
            color: ${props => props.theme.lottery.fontColor};
            text-align: center;
        }

        .col1 {
            width: 138px;
            text-align: center;
        }

        .col2 {
            flex: 1;
        }
    }

    .body2 {
        width: 100%;
        height: 305px;
        box-shadow: 0px 0px 18px 2px rgba(0, 0, 0, 0.25);

        .row {
            height: 30px;
            border-bottom: 1px solid #252627;
            display: flex;
            align-items: center;
            justify-content: flex-start;

            &:last-child {
                border-bottom: 0;
            }

            &:hover {
                background-color: #252627;
            }

            .col1, .col2 {
                font-size: 14px;
                font-family: Arial;
                font-weight: 400;
                color: #8C8D8D;
                height: 30px;
                line-height: 30px;
                text-align: center
            }

            .col1 {
                width: 138px;
            }

            .col2 {
                flex: 1
            }
        }
    }
`;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const list1ForOther = [
    {key: 'tedengjiang', value: []},
    {key: 'yidengjiang', value: []},
    {key: 'erdengjiang', value: []},
    {key: 'sandengjiang', value: []},
    {key: 'sidengjiang', value: []},
    {key: 'wudengjiang', value: []},
    {key: 'liudengjiang', value: []},
    {key: 'qidengjiang', value: []},
    {key: 'badengjiang', value: []}
];

const list1ForNorth = [
    {key: 'tedengjiang', value: []},
    {key: 'yidengjiang', value: []},
    {key: 'erdengjiang', value: []},
    {key: 'sandengjiang', value: []},
    {key: 'sidengjiang', value: []},
    {key: 'wudengjiang', value: []},
    {key: 'liudengjiang', value: []},
    {key: 'qidengjiang', value: []}
];

const list2Init = [
    {tou: 0, wei: []},
    {tou: 1, wei: []},
    {tou: 2, wei: []},
    {tou: 3, wei: []},
    {tou: 4, wei: []},
    {tou: 5, wei: []},
    {tou: 6, wei: []},
    {tou: 7, wei: []},
    {tou: 8, wei: []},
    {tou: 9, wei: []},
];

function calculateList2 (temp) {
    let temp2 = deepCopy(list2Init);

    temp.forEach(item => {
        if (item.value) {
            let arr1 = item.value;

            for (let i = 0; i < arr1.length; i++) {
                let last2char = arr1[i].slice(-2).split(''); //截取每组数字的后2位,并转换成数组
                let temp2Item = temp2.find(item => item.tou === +last2char[0]); //根据头的数字找到temp中对应的元素

                if (temp2Item.wei.indexOf(+last2char[1]) === -1) {
                    temp2Item.wei.push(+last2char[1]);
                }
            }
        }
    });

    temp2.forEach(item => {
        item.wei.sort();
    });

    return temp2;
};

const Page = () => {
    const { t } = useTranslation();
    const query = useQuery();
    const [list1, setList1] = useState(list1ForOther);
    const [list2, setList2] = useState(list2Init);
    const [issueDate, setIssueDate] = useState(drawData[0].date);
    const [currentTouwei, setCurrentTouwei] = useState([]);
    const lotteryType = query.get('type');

    useEffect(() => {
        if (issueDate) {
            let issueData = drawData.find(item => item.date === issueDate);
            let temp1;
            let temp2;

            if (lotteryType === 'north') {
                temp1 = deepCopy(list1ForNorth);
            } else {
                temp1 = deepCopy(list1ForOther);
            }

            temp1.map(item => {
                item.value = issueData.value[item.key].split('|');
                return item;
            });

            temp2 = calculateList2(temp1);

            setList1(temp1);
            setList2(temp2);
        }
    }, [issueDate, lotteryType]);

    const onIssueDateChanged = (value) => {
        setIssueDate(value);
    };

    const onHover = (e, item) => {
        let arr = [];

        item.wei.forEach(weiItem => {
            arr.push(item.tou + '' + weiItem);
        });
        
        setCurrentTouwei(arr);
    };

    const onBlur = (e) => {
        setCurrentTouwei([]);
    };

    return (
        <Wrapper>
            <GlobalMySelectStyle />

            <MyHeader1 
                suffixIcon={<SvgIcon link="down-arrow" color="#8C8D8D" size="16" />} 
                dropdownClassName="my-lottery-select"
                onChange={onIssueDateChanged}
                value={issueDate}
            >
                <Option value="20201007">Lượt xổ 07-10-2020</Option>
                <Option value="20201008">Lượt xổ 08-10-2020</Option>
            </MyHeader1>

            <div className="body1">
                {
                    list1.map(item => (
                        <div className="row" key={item.key}>

                            <div className="col1">
                                {
                                    t('lottery.' + item.key)
                                }
                            </div>

                            <div className="col2">
                                {
                                    item.value.map(t => {
                                        let fontPartText = t.slice(0, t.length - 2);
                                        let backPartText = t.slice(-2);

                                        return (
                                            <span key={t} className="full-part">
                                                <span>
                                                    { fontPartText }
                                                </span>

                                                <span className={currentTouwei.indexOf(backPartText) !== -1? 'highlight active' : 'highlight'}>
                                                    { backPartText }
                                                </span>
                                            </span>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="header2">
                <div className="col1">
                    {
                        t('lottery.tou')
                    }
                </div>

                <div className="col2">
                    {
                        t('lottery.wei')
                    }
                </div>
            </div>

            <div className="body2" onMouseLeave={onBlur}>
                {
                    list2.map(item => (
                        <div className="row" 
                            onMouseOver={e => onHover(e, item)}
                            key={item.tou + item.wei}>

                            <div className="col1">
                                {
                                    item.tou
                                }
                            </div>

                            <div className="col2">
                                {
                                    item.wei.join(',')
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </Wrapper>
    )
};

export default Page;