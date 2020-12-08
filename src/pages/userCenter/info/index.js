import React, { useReducer } from 'react';
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import Loadable from 'react-loadable';
import Loading from '@/components/spinner';
import SvgIcon from '@/components/svgIcon';
import { CentBtn } from '@/components/usercenter/';
import RightHead from '@/components/usercenter/rightHead'
import Content from '@/components/usercenter/content'
import useTheme from '@/hooks/useTheme'
const ChangeNickname = Loadable({
    loader: () => import('./modal/changeNickname'),
    loading: () => Loading({layout: 'absolute'})
})
const ChangePassword = Loadable({
    loader: () => import('./modal/changePassword'),
    loading: () => Loading({layout: 'absolute'})
})
const ChangeWalletcode = Loadable({
    loader: () => import('./modal/changeWalletcode'),
    loading: () => Loading({layout: 'absolute'})
})
const ChangePwdHint = Loadable({
    loader: () => import('./modal/changePwdHint'),
    loading: () => Loading({layout: 'absolute'})
})
const ChangePhone = Loadable({
    loader: () => import('./modal/changePhone'),
    loading: () => Loading({layout: 'absolute'})
})
const ChangeEmail = Loadable({
    loader: () => import('./modal/changeEmail'),
    loading: () => Loading({layout: 'absolute'})
})

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    /* height: 858px;
    overflow: hidden auto; */
`;

const InfoCell = styled.div`
    position: relative;
    width: 100%;
    border-top: 1px solid #383a3c;
    &:first-child {
        border-top: none;
    }
    .infoCell {
        &-wrapper {
            width: 100%;
            padding: 20px;
            &--noPB {
                padding-bottom: 0;
            }
            &__field {
                /* overflow: hidden; */
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 70px;
                padding: 0 28px;
                margin-top: 0;
                margin-bottom: 3px;
                &:last-child {
                  margin-bottom: 0;  
                }
            }
            &__label {
                width: 200px;
                font-family: 'AdobeHeitiStd-Regular';
                font-size: 14px;
                line-height: 14px;
                font-weight: normal;
                letter-spacing: 0px;
                color: #8c8d8d;
            }
            &__icon {
                width: 273px;
                svg {
                    width: 28px;
                    height: 28px;
                    margin-right: 40px;
                }
                span {
                    height: 16px;
                    line-height: 16px;
                    font-size: 16px;
                    font-family: "ArialMT";
                    font-weight: normal;
                    font-stretch: normal;
                    letter-spacing: 0px;
                    color: ${props => props.theme.userCenter.fontColor};
                }
            }
            &__text {
                flex: 1;
                height: 16px;
                line-height: 16px;
                font-size: 16px;
                font-family: 'ArialMT';
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: ${props => props.theme.userCenter.fontColor};
                &--light {
                    color: #8c8d8d;
                    font-size: 14px;
                    line-height: 14px;
                    height: 14px;
                }
            }
        }
    }
`;

function init () {
    return {
        showModal: false,
        modalType: '',
        userInfo: {}
    }
}

function reducer(state, action) {
    switch(action.type) {
        case 'openModal':
            return {
                ...state,
                showModal: true,
                modalType: action.payload
            }
        case 'closeModal':
            return {
                ...state,
                showModal: false,
                modalType: ''
            }
        default: 
            throw new Error('check reducer case is matched')
    }
}
export default function UserCenterInfo (props) {
    const theme = useTheme('userCenter')
    const { t } = useTranslation()
    const [state, dispatch] = useReducer(reducer, {}, init)
    const refresh = () => {
        window.alert('refect it')
    }
    const getModal = (type) => {
        const baseProps = {
            visible: state.showModal,
            onCancel: () => {dispatch({type: 'closeModal'})},
            refresh: () => refresh()
        }
        switch(type) {
            case 'nickname':
                return <ChangeNickname title={t('personCenter.info.title.nickname')} {...baseProps} />
            case 'password':
                return <ChangePassword title={t('personCenter.info.title.password')} {...baseProps} />
            case 'walletcode':
                return <ChangeWalletcode title={t('personCenter.info.title.walletcode')} {...baseProps} />
            case 'pwdHint':
                return <ChangePwdHint title={t('personCenter.info.title.pwdHint')} {...baseProps} />
            case 'phone':
                return <ChangePhone title={t('personCenter.info.title.phone')} {...baseProps} />
            case 'email':
                return <ChangeEmail title={t('personCenter.info.title.email')} {...baseProps} />
            default: 
                console.error('请确认是否有对应的case')
                return null
        }
    }
    const infoList = [
        {
            title: t('personCenter.info.label.username'),
            content: 'JEAN001',
            action: {
                type: null,
                text: ''
            }
        },
        {
            title: t('personCenter.info.label.nickname'),
            content: 'jean001',
            action: {
                type: 'nickname',
                text: t('personCenter.info.btnText.update')
            }
        },
        {
            title: t('personCenter.info.label.realname'),
            content: '王**',
            action: {
                type: null,
                text: ''
            }
        },
        {
            title: t('personCenter.info.label.last_login'),
            content: '2020-10-10   10:10:10',
            action: {
                type: null,
                text: ''
            }
        },
        {
            title: t('personCenter.info.label.register_time'),
            content: '2020-10-10   10:10:10',
            action: {
                type: null,
                text: ''
            }
        }
    ]

    const securityList = [
        {
            icon: 'userinfo-changepwd',
            title: t('personCenter.info.label.password'),
            content: '',
            action: {
                text: t('personCenter.info.btnText.update'),
                type: 'password'
            }
        },
        {
            icon: 'userinfo-walletcode',
            title: t('personCenter.info.label.walletcode'),
            content: t('personCenter.info.placeholder.no_bind'),
            action: {
                text: t('personCenter.info.btnText.bind'),
                type: 'walletcode'
            }
        },
        {
            icon: 'userinfo-pwdhint',
            title: t('personCenter.info.label.pwdhint'),
            content: t('personCenter.info.placeholder.no_set'),
            action: {
                text: t('personCenter.info.btnText.set'),
                type: 'pwdHint'
            }
        },
        {
            icon: 'userinfo-phone',
            title: t('personCenter.info.label.phone'),
            content: '138*******',
            action: {
                text: t('personCenter.info.btnText.verify'),
                type: 'phone'
            }
        },
        {
            icon: 'userinfo-email',
            title: t('personCenter.info.label.email'),
            content: t('personCenter.info.placeholder.no_set'),
            action: {
                text: t('personCenter.info.btnText.set'),
                type: 'email'
            }
        },
        // {
        //     icon: 'userinfo-google',
        //     title: t('personCenter.info.label.google_verify'),
        //     content: t('personCenter.info.placeholder.no_bind'),
        //     action: {
        //         text: t('personCenter.info.btnText.verify_now'),
        //         fn: null
        //     }
        // }
    ]
    return (
        <Wrapper>
            <InfoCell>
                <RightHead title={t('personCenter.info.title.profile')} />
                <div className="infoCell-wrapper">
                    {
                        infoList.map((item, index) => (
                            <Content className="infoCell-wrapper__field" key={`info-${index}`}>
                                <span className="infoCell-wrapper__label">{`${item.title}：`}</span>
                                <span className="infoCell-wrapper__text">{item.content}</span>
                                {
                                    item.action.text !== '' &&
                                    <CentBtn 
                                        onClick={() => dispatch({
                                            type: 'openModal',
                                            payload: item.action.type
                                        })}
                                        width='194' height='24' x='0' y='-155' x1='0' y1='-222'>{item.action.text}</CentBtn>
                                }
                            </Content>
                        ))
                    }
                </div>
            </InfoCell>
            <InfoCell>
                <RightHead title={t('personCenter.info.title.security')} />
                <div className="infoCell-wrapper infoCell-wrapper--noPB">
                    {
                        securityList.map((item, index) => (
                            <Content className="infoCell-wrapper__field" key={`security-${index}`}>
                                <span className="infoCell-wrapper__icon">
                                    <SvgIcon link={item.icon} color={theme.fontColor} />
                                    <span>{`${item.title}`}</span>
                                </span>
                                <span className="infoCell-wrapper__text infoCell-wrapper__text--light">{item.content}</span>
                                <CentBtn onClick={() => dispatch({
                                            type: 'openModal',
                                            payload: item.action.type
                                        })}
                                        width='194' height='24' x='0' y='-155' x1='0' y1='-222'>{item.action.text}</CentBtn>
                            </Content>
                        ))
                    }
                </div>
            </InfoCell>
            {
                state.showModal && getModal(state.modalType)
            }
        </Wrapper>
    )
};
