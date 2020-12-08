import React, { useState } from 'react';
import styled from 'styled-components'
import { Modal, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { login } from './ajax';
import commonStore from '@/mobx/commonStore';
import dialogStore from '@/mobx/dialogStore';
import md5 from 'md5';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';

const Wrapper =  styled(Modal)`
`;

const LoginModal = () => {
    const { t } = useTranslation();
    const [loading, setLoading] = useState(false);

    const handleCancel = () => {
        dialogStore.hideLoginDialog();
    };

    const handleOk = () => {
        setLoading(true);

        login({
            password: md5('mj1234567'),
            way: 'pwd',
            from: 'portal',
            cn: 'philipdzs1',
            appId: 5
        }).then(rs => {
            setLoading(false);
            localStorage.setItem('logined',true);
            commonStore.setLoginStatus(true);
            dialogStore.hideLoginDialog();

            Modal.confirm({
                title: '接口返回通知',
                icon: <ExclamationCircleOutlined />,
                content: JSON.stringify(rs.data.user, null, 4),
                okText: t('ok'),
                cancelText: t('cancel')
            });
        });
    };

    return (
        <Wrapper
            visible={dialogStore.isShowLoginDialog}
            title={t('login')}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    {t('cancel')}
                </Button>,

                <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                    {t('ok')}
                </Button>,
            ]}
        >
                <p>1. 这种全局弹框放到组件的顶层2</p>
                <p>2. 使用styled-components可以改写ant-design的Modal的样式</p>
                <p>3. 点击确定执行登录操作</p>
        </Wrapper>
    )
};

export default observer(LoginModal);