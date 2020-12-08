import React, { useImperativeHandle } from 'react';
import styled from 'styled-components';
import { Modal } from 'antd'
import WinLottModalFooter from './footer'

const ModalWrap = styled(Modal)`
    .ant-modal-content {
        background-color: #191A1B;
        border: 1px solid #CF2A2A;
        box-shadow: 0px 0px 20px 0px rgba(4, 4, 4, 0.6);
        .ant-modal-close {
            color: #FFF;
            .ant-modal-close-x {
                height: 44px;
                line-height: 44px;
            }
        }

        .ant-modal-header {
            background-color: rgba(207, 42, 42, 0.5);
            padding: 12px 20px;
            border: 0;
            border-radius: 0;
            .ant-modal-title {
                font-size: 16px;
                font-family: Arial;
                font-weight: normal;
                color: #FFFFFF;
                opacity: 1;
            }
        }

        .ant-modal-body {
            padding: 0;
        }
    }
`;
/* 
 * InfoModel props继承于antd的Model
 * 使用方法类似于 Vue的slot功能
 * ModelFooter 为自制组件 只有对接常用的功能
 */
const MyModal = React.forwardRef((props, ref) => {
    useImperativeHandle(ref, () => ({
        ModalWrap: ModalWrap // 曝露原本 Modal方法
    }))
    const handleOk = function() {
        alert('Is default ok')
    }
    const handleClose = () => {
        alert('Is default close')
    }
    return (
        <ModalWrap
            visible={props.visible}
            title={props.title}
            onOk={handleOk}
            onCancel={handleClose}
            width={638}
            footer={null}
            destroyOnClose={true}
            {...props}>
            {props.children}
            <WinLottModalFooter 
                cancelText={props.cancelText}
                handleCancel={props.onCancel}
                okText={props.okText}
                handleConfirm={props.onOk} 
                confirmLoading={props.confirmLoading} />
        </ModalWrap>
    )
})

export default MyModal