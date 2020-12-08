import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom";
import SvgIcon from '@/components/svgIcon';
import Loadable from 'react-loadable';
import Loading from '@/components/spinner';
import EditZone from './editZone';
import Cart from './cart';
import useLotteryRedux from './redux';
import { imgSuffix } from '@/utils/';

const TabSelectedBg = require('@/assets/images/lottery/tab-selected.png' + imgSuffix);

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Plate1 = Loadable({
    loader: () => import('./plate1'),
    loading: () => <Loading height={160} />
});

const Plate2 = Loadable({
    loader: () => import('./plate2'),
    loading: () => <Loading height={160} />
});

const Plate3 = Loadable({
    loader: () => import('./plate3'),
    loading: () => <Loading height={160} />
});

const Plate4 = Loadable({
    loader: () => import('./plate4'),
    loading: () => <Loading height={160} />
});

const Wrapper = styled.div`
    width: 100%;

    .filters1 {
        width: 100%;
        height: 44px;
        background: linear-gradient(0deg, #0D0D0D, #1D1D1E);
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .filter1-item {
            font-size: 16px;
            font-weight: 400;
            color: ${props => props.theme.lottery.fontColor};
            padding: 0 20px;
            cursor: pointer;
            height: 44px;
            line-height: 44px;
            cursor: pointer;
        }

        .active {
            color: #FFF;
            background-image: url(${TabSelectedBg});
            background-size: cover;
            background-position: center;
        }
    }

    .filters2 {
        flex: 1;
        height: 52px;
        width: 100%;
        background-color: #191A1B;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .left-part {
            display: flex;
            align-items: center;
            justify-content: flex-start;

            .filter2-item {
                height: 32px;
                line-height: 32px;
                color: #8C8D8D;
                font-size: 14px;
                background: transparent;
                color: #CF2A2A;
                padding: 0 20px;
                cursor: pointer;
            }

            .active {
                background: linear-gradient(90deg, #811616 0%, #CF2A2A 100%);
                color: #FFF;
            }
        }

        .right-part-odds {
            display: block;
            height: 28px;
            line-height: 28px;
            width: 230px;
            color: #8C8D8D;
            text-align: center;
            border: 1px solid #2D2D2D;
            border-radius: 14px;
            vertical-align: middle;

            span {
                color: #CF2A2A;
                margin: 0 3px;
                vertical-align: middle;
            }
        }
    }

    .filters3 {
        height: 32px;
        width: 100%;
        background-color: #191A1B;
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .filter3-item {
            height: 32px;
            line-height: 32px;
            color: #8C8D8D;
            font-size: 14px;
            background: transparent;
            color: #CF2A2A;
            padding: 0 20px;
            cursor: pointer;
        }

        .active {
            background: #252627;
            border: 1px solid #252627;
            color: #8C8D8D;
        }
    }

    .board {
        background-color: #191A1B;
        border: 1px solid #252627;
        border-left: 0;
        border-right: 0;
        width: 100%;
        height: 260px;
        
        .rule-description {
            width: 100%;
            font-size: 14px;
            color: ${props => props.theme.lottery.fontColor};
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 10px 20px;

            .svg-icon {
                position: relative;
                top: 5px;
                width: 12px;
            }

            .text {
                flex: 1;
                padding: 0 6px;
            }
        }
    }
`;

const Plates = ({onMethodChanged}) => {
    const { t } = useTranslation();
    const query = useQuery();
    const [state, dispatch] = useLotteryRedux(query.get('type'));

    useEffect(() => {
        onMethodChanged(state.name);
    }, [state.name, onMethodChanged]);

    useEffect(() => {
        let type = query.get('type');

        if (state.lotteryLocation !== type) {
            dispatch({type: 'setLotteryLocation', payload: query.get('type')});
        }
    }, [query, dispatch, state.lotteryLocation]);

    //console.log('state = ', state);

    return (
        <Wrapper>
            <div className="filters1">
                {
                    state.filters1.map(item => (
                        <div    className={item === state.filter1? "filter1-item active" : "filter1-item"}
                                key={item}
                                onClick={() => dispatch({
                                    type: 'setFilter1',
                                    payload: item
                                })}>
                            {
                                t('lottery.' + item)
                            }
                        </div>
                    ))
                }
            </div>

            <div className="filters2">
                <div className="left-part">
                    {
                        state.filters2.map(item => (
                            <div    className={item === state.filter2? "filter2-item active" : "filter2-item"} 
                                    key={item} 
                                    onClick={() => dispatch({
                                        type: 'setFilter2',
                                        payload: item
                                    })}>
                                {
                                    t('lottery.' + item)
                                }
                            </div>
                        ))
                    }
                </div>

                <div className="right-part-odds">
                    {
                        t('lottery.peilv', { returnObjects: true })[0]
                    }
                    ：
                    <span>1</span>
                    {
                        t('lottery.peilv', { returnObjects: true })[1]
                    }
                    <span>
                        {
                            state.odds
                        }
                    </span>
                </div>
            </div>

            <div className="filters3">
                {
                    state.filters3.map(item => (
                        <div    className={item === state.filter3? "filter3-item active" : "filter3-item"}
                                key={item} 
                                onClick={() => dispatch({
                                    type: 'setFilter3',
                                    payload: item
                                })}>
                            {
                                t('lottery.' + item)
                            }
                        </div>
                    ))
                }
            </div>

            <div className="board">
                <div className="rule-description">
                    <SvgIcon link="question" color="#b0b0b0" size="12" />

                    <p className="text">
                        {
                            t('lottery.' + state.description)
                        }
                    </p>
                </div>

                { state.method.plateType === 1 &&  <Plate1 data={state} dispatch={dispatch} /> }
                { state.method.plateType === 2 &&  <Plate2 data={state} dispatch={dispatch} /> }
                { state.method.plateType === 3 &&  <Plate3 data={state} dispatch={dispatch} /> }
                { state.method.plateType === 4 &&  <Plate4 data={state} dispatch={dispatch} /> }
            </div>

            <EditZone data={state} dispatch={dispatch} />

            <Cart list={state.cartList} dispatch={dispatch} />
        </Wrapper>
    )
};

export default Plates;