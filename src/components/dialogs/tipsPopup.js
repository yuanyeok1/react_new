import React, { useState } from 'react';
import styled from 'styled-components'
import { Modal, Button } from 'antd';
import dialogStore from '@/mobx/dialogStore';
import { observer } from 'mobx-react-lite';

const Wrapper =  styled(Modal)`

`;

const tipsPopup = () => {
    const handleOk = () => {
        
    }
    const handleCancel = () => {

    }
    return (
        <Wrapper
            visible={dialogStore.isShowLoginDialog}
            title={""}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={""}
        >
                <p>1. 这种全局弹框放到组件的顶层</p>
                <p>2. 使用styled-components可以改写ant-design的Modal的样式</p>
                <p>3. 点击确定执行登录操作</p>
        </Wrapper>
    )
};

export default React.memo(tipsPopup);