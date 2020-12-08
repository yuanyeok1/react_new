import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'
import { imgSuffix } from '@/utils'
import { bankKey } from '@/utils/bankList.config'
const BankLogoSprite = require('@/assets/images/bankLogo/bankLogoSprite.png' + imgSuffix)

const Wrapper = styled.div`
    .bank-logo {
        display: block;
        width: 70px;
        height: ${props => `${props.height}px`};
        background-image: url(${BankLogoSprite});
        background-repeat: no-repeat;
        background-size: 100% auto;
    }
    ${({height, bankCode}) => (
        `.bank-logo-${bankCode} {
            background-position: 0 -${bankKey[bankCode][1] * height}px
        }`
    )}
`

export default function BankLogo (props) {
    const { t } = useTranslation()
    return (
        <Wrapper className={props.className} height={35} bankCode={props.bankCode}>
            <div className={`bank-logo bank-logo-${props.bankCode}`} title={t(`bankList.${props.bankCode}`)}></div>
        </Wrapper>
    )
}