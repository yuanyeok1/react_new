import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Stepper from '@/components/stepper';
import { Select, Modal } from 'antd';
import FastBetModal from './fastBetModal';
import { AMOUNT_PER_BET } from './redux/utils';
import MyModal from '@/components/dialogs/modal';
import MyButton2 from '@/components/buttons/myButton2';

const { Option } = Select;

/**
 * 覆盖ant design的Select的样式
 */
const MySelect = styled(Select)`
    .ant-select-selector {
        background-color: #252627 !important;
        height: 30px !important;
        color: ${props => props.theme.lottery.fontColor} !important;
        border: 0 !important;
        outline: none !important;
        box-shadow: none !important;
    }

    .ant-select-arrow {
        .anticon {
            svg {
                fill: ${props => props.theme.lottery.fontColor} !important;
            }
        }
    }
`;

const Wrapper = styled.div`
    width: 100%;
    height: 94px;
    background-color: #191A1B;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    .left-part {
        width: 463px !important;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        padding-left: 20px;

        .row1 {
            height: 30px;
            width: 100%;
            display: flex;
            algin-items: center;
            justify-content: flex-start;

            .title {
                height: 30px;
                line-height: 30px;
                font-size: 14px;
                color: ${props => props.theme.lottery.fontColor};
                margin-right: 10px;
            }

            .title2 {
                margin-left: 25px;
            }
        }

        .row2 {
            height: 30px;
            line-height: 30px;
            width: 100%;
            color: ${props => props.theme.lottery.fontColor};

            span {
                vertical-align: middle;
            }

            .red {
                color: #CF2A2A;
            }
        }
    }

    .right-part {
        flex: 1 !important;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        .add-to-cart {
            margin-left: 10px;
        }
    }
`;

const EditZone = ({data, dispatch}) => {
    const [showFastBetModal, setShowFastBetModal] = useState(false);
    const [fastBetData, setFastBetData] = useState({});
    const [betModelList, setBetModelList] = useState([]);
    const [currentBetModel, setCurrentBetModel] = useState('');
    const { t } = useTranslation();

    useEffect(() => {
        let arr = ['0%~99', '22%~77.22'];
        let arr2 = arr[0].split('~');

        setBetModelList(arr);
        setCurrentBetModel(arr[0]);
        dispatch({
            type: 'setOdds',
            payload: arr2[1]
        });
    }, [dispatch]);

    const onBonusModelChanged = (value) => {
        let arr = value.split('~');

        setCurrentBetModel(value);
        dispatch({
            type: 'setOdds',
            payload: arr[1]
        });
    };

    const addToCart = () => {
        if (data.betCounts < 1) {
            Modal.confirm({
                title: '警告',
                content: '请先下注！',
                okText: t('ok'),
                cancelText: t('cancel')
            });
        } else {
            let temp = data.name.split('|');
            let payload = {
                wanfamingcheng: t('lottery.' + temp[0]) + '|' + t('lottery.' + temp[1]) + '|' + t('lottery.' + temp[2]),
                touzhuneirong: data.content,
                zongtouzhushu: data.betCounts,
                beishu: data.betTimes,
                touzhujine: data.betAmount,
                danzhujiangjin: data.odds * AMOUNT_PER_BET
            };

            dispatch({type: 'addRecordToCart', payload})
        }
    };

    const onBeishuChanged = (value) => {
        dispatch({
            type: 'setBetTimes',
            payload: value
        })
    };

    const plateBet = () => {
        let temp = data.name.split('|');

        if (!data.content || data.betCounts < 1) {
            MyModal.confirm({
                title: '警告',
                content: '请先下注！',
                okText: t('ok'),
                cancelText: t('cancel')
            });

            return;
        }

        let payload = {
            wanfamingcheng: t('lottery.' + temp[0]) + '|' + t('lottery.' + temp[1]) + '|' + t('lottery.' + temp[2]),
            touzhuneirong: data.content,
            zongtouzhushu: data.betCounts,
            beishu: data.betTimes,
            touzhujine: data.betAmount,
            danzhujiangjin: data.odds * AMOUNT_PER_BET,
            peilv: data.odds
        };
        
        setShowFastBetModal(true);
        setFastBetData(payload);
    };

    return (
        <Wrapper className="edit-zone">
            <div className="left-part">
                <div className="row1">
                    <div className="title">
                        { t('lottery.beishu') } :
                    </div>

                    <Stepper value={data.betTimes} callback={onBeishuChanged} />

                    <div className="title title2">
                        { t('lottery.touzhumoshi') } :
                    </div>

                    <MySelect value={currentBetModel} style={{ width: 120 }} onChange={onBonusModelChanged}>
                        {
                            betModelList.map(item => (
                                <Option value={item} key={item}>
                                    {item}
                                </Option>
                            ))
                        }
                    </MySelect>
                </div>

                <div className="row2">
                    <span>{t('lottery.yixuanze')}: </span>
                    <span className="red">{ data.betCounts }</span>
                    <span>{t('lottery.gehaoma')}, </span>
                    <span>{t('lottery.xiazhujine')}: </span>
                    <span className="red">{ data.betAmount } </span>
                    <span>VND</span>
                </div>
            </div>

            <div className="right-part">
                <MyButton2
                    className="place-bet" 
                    link="button" 
                    frontIcon="flash"
                    color="#CF2A2A" 
                    width="192"
                    height="35"
                    onClick={plateBet}
                >
                    {t('lottery.kuaisutouzhu')}
                </MyButton2>

                <MyButton2
                    className="add-to-cart" 
                    link="button" 
                    frontIcon="add"
                    color="#CF2A2A" 
                    width="192"
                    height="35"
                    onClick={addToCart}
                >
                    {t('lottery.tianjiaxuanhao')}
                </MyButton2>

                {/* <div className="btn place-bet" onClick={plateBet}>
                    <SvgIcon link="flash" color="#FFF" size="12" />
                    <span className="text">{t('lottery.kuaisutouzhu')}</span>
                </div>

                <div className="btn add-to-cart" onClick={addToCart}>
                    <SvgIcon link="add" color="#FFF" size="12" />
                    <span className="text">{t('lottery.tianjiaxuanhao')}</span>
                </div> */}
            </div>

            <FastBetModal data={fastBetData} showFastBetModal={showFastBetModal} setShowFastBetModal={setShowFastBetModal}/>
        </Wrapper>
    )
};

export default React.memo(EditZone);