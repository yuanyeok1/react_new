import React, { useRef } from 'react';
import { observer } from 'mobx-react-lite';
import md5 from 'md5'

import MyForm from '@/components/usercenter/myForm'
import { Form, Input } from 'antd'
import WinLottModal from '@/components/dialogs/winLottModel'

import { useTranslation } from 'react-i18next'
import dialogStore from '@/mobx/dialogStore';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
}

function PayPassword() {
    const { t } = useTranslation()
    const [refForm] = Form.useForm()
    const refModal = useRef(null)
    function onOk() {
        refForm.validateFields()
            .then(values => {
                const { payPassword } = values
                const apiQuery = {
                    payPassword: md5(payPassword)
                }
                console.log(refForm)
                // refForm.setFields([
                //     {
                //         name: 'payPassword',
                //         errors: [t('dialogs.payPassword.rule', {returnOnject: true})[1]]
                //     }
                // ])
                dialogStore.payPromise.resolve(true)
                console.log(JSON.stringify(apiQuery, null, 2))
            })
            .catch(err => {})
        }
    return (
        <WinLottModal
            ref={refModal}
            title={t('dialogs.payPassword.title')}
            visible={dialogStore.isShowPayPasswordDialog}
            onOk={onOk}
            onCancel={() => dialogStore.hidePayPasswordDialog()}
        >
            <MyForm>
                <Form
                    className="myForm"
                    {...layout}
                    requiredMark={false}
                    preserve={false} // 是否保留字段
                    form={refForm}
                    initialValues={{
                        payPassword: ''
                    }}
                >
                    <Form.Item
                        label={t('dialogs.payPassword.label')}
                        name="payPassword"
                        rules={[
                            {
                                required: true,
                                message: t('dialogs.payPassword.rule',{returnObjects: true})[0]
                            }
                        ]}
                    >
                        <Input.Password placeholder={t('dialogs.payPassword.placeholder')} />
                    </Form.Item>
                </Form>
            </MyForm>
        </WinLottModal>
    )
}

export default observer(PayPassword)