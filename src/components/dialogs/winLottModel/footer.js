import React from 'react';
import styled from 'styled-components';
import MyButton  from '@/components/buttons/myButton'
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: #252627;
    padding-right: 30px;
    .cancel {
        cursor: pointer;
    }
    .confirm {
        cursor: pointer;
    }
    .isLoading {
        cursor: not-allowed;
    }
`
export default (props) => {
    const { t } = useTranslation()
    const {
        cancelText = t('cancel'),
        handleCancel,
        confirmText = t('ok'),
        handleConfirm,
        confirmLoading
    } = props
    return (
        <Wrapper>
            <MyButton
                className="cancel"
                link="button"
                color="#742223"
                width="134px"
                height="24px"
                style={{ width: '134px', height: '24px' }}
                onClick={handleCancel}>
                {cancelText}
            </MyButton>
            <MyButton
                className={`confirm ${confirmLoading ? 'isLoading' : ''}`}
                link="button"
                color="#cf2a2a"
                width="134px"
                height="24px"
                onClick={handleConfirm} 
                loading={confirmLoading}>
                {confirmText}
            </MyButton>
        </Wrapper>
    )
}
