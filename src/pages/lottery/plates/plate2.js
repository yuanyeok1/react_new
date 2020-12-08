import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { computeDanshi, computeDanshiForChuanGuan } from './redux/utils';

const Wrapper = styled.div`
    padding-top: 25px;
    padding-left: 20px;

    textarea {
        width: 680px;
        height: 130px;
        background: #252627;
        border: 1px solid #252627;
        font-size: 14px;
        color: #8C8D8D;
    }
`;

function reducers (state, action) {
    switch (action.type) {
        case 'setData':
            return {
                ...state,
                ...action.payload
            };

        default:
            throw new Error();
    }
}

const Plate2 = ({data, dispatch}) => {
    const { t } = useTranslation();
    const [selfData, selfDispatch] = useReducer(reducers, {
        text: '',
        isUserInput: false
    });

    //向购彩篮子添加一条数据后，需要清空textarea
    useEffect(() => {
        !data.content && selfDispatch({
            type: 'setData',
            payload: {
                text: '',
                isUserInput: false
            }
        });
    }, [data.content]);
    
    useEffect(() => {
        let handler;

        if (selfData.isUserInput) {
            let r;
            let temp;
            let content;
            let gapTime;

            if (data.method.isChuanGuan) {
                r = computeDanshiForChuanGuan(selfData.text, data.method.ruleLen, data.method.arrLen);
                content = r.content;
                temp = content.replace(/\|/g, ';');
                gapTime = 3000;  //串关输入的数字比较长，复杂，所需的格式化等待时间加长
            } else {
                r = computeDanshi(selfData.text, data.method.ruleLen);
                content = r.content;
                temp = content.replace(/,/g, '');
                temp = temp.replace(/\|/g, ';');
                gapTime = 1000;
            }

            //显示在textarea中的字符串和最终提交到购彩篮的content的格式是不一样
            handler = setTimeout(() => {
                selfDispatch({
                    type: 'setData',
                    payload: {
                        text: temp? temp + ';' : '',
                        isUserInput: false
                    }
                });

                dispatch({
                    type: 'setContent',
                    payload: content
                });
            }, gapTime);
        }

        return () => {
            handler && clearTimeout(handler)
        }
    }, [selfData.text, selfData.isUserInput, data.method, dispatch]);

    const handleChange = (e) => {
        selfDispatch({
            type: 'setData',
            payload: {
                text: e.target.value,
                isUserInput: true
            }
        });
    };

    return (
        <Wrapper className="plate2">
            <textarea placeholder={t('lottery.' + data.method.placeholder)} value={selfData.text} onChange={e => handleChange(e)} />
        </Wrapper>
    )
};

export default React.memo(Plate2);