import React, { /* useState, */ useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Input } from 'antd'
import InfoModel from '@/components/dialogs/winLottModel/'
import MyForm from '@/components/usercenter/myForm'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

export default function InfoModalNickname (props) {
    const { t } = useTranslation()
    const [refForm] = Form.useForm()
    const onOk = () => {
        refForm.validateFields()
            .then(values => {
                const { nickname } = values
                const apiQuery = {
                    nickname: nickname.trim()
                }
                alert(JSON.stringify(apiQuery, null, 2))
            })
            .catch(err => {})
    }
    useEffect(() => {
        console.log(refForm, 'ref?', props)
    })
    return (
        <InfoModel
            {...props}
            onOk={onOk}
            confirmLoading={true}
        >
            <MyForm>
                <Form
                    className="myForm"
                    {...layout}
                    requiredMark={false}
                    form={refForm}
                    initialValues={{
                        nickname: ''
                    }}
                >
                    <Form.Item
                        label={t('personCenter.info.label.nickname')}
                        name="nickname"
                        // getValueFromEvent={(e) => e.target.value.toString().toUpperCase()}
                        rules={[
                            {
                                required: true,
                                message: t('personCenter.info.errMsg.no_nickname')
                            }
                        ]}
                    >
                        <Input placeholder={t('personCenter.info.placeholder.nickname')} />
                    </Form.Item>
                </Form>
            </MyForm>
        </InfoModel>
    )
};
