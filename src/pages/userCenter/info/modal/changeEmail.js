import React, { /* useState */ } from 'react';
import { useTranslation } from 'react-i18next'
import { Form, Input } from 'antd'
import InfoModel from '@/components/dialogs/winLottModel/'
import MyForm from '@/components/usercenter/myForm'

export default function InfoModalEmail (props) {
    const { t } = useTranslation()
    const [refForm] = Form.useForm()
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const onOk = () => {
        refForm.validateFields()
            .then(values => {

            })
            .catch(err => {})
    }
    const getVerifycode = () => {
        refForm.validateFields(['email'])
            .then(value => {

            })
            .catch(err => {})
    }
    return (
        <InfoModel
            {...props}
            onOk={onOk}
        >
            <MyForm>
                <Form
                    {...layout}
                    form={refForm}
                    className="myForm"
                    requiredMark={false}
                    initialValues={{
                        email: '',
                        verifyCode: ''
                    }}
                >
                    <Form.Item
                        label={t('personCenter.info.label.email')}
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: t('personCenter.info.errMsg.no_email'),   
                            },
                            {
                                type: 'email',
                                message: t('personCenter.info.errMsg.no_match_email')
                            }
                        ]}
                    >
                        <Input placeholder={t('personCenter.info.placeholder.email')} />
                    </Form.Item>
                    <Form.Item
                        label={t('personCenter.info.label.verifycode')}
                        name="verifyCode"
                        rules={[
                            {
                                required: true,
                                message: t('personCenter.info.errMsg.no_verifyCode')
                            }
                        ]}
                    >
                        <div className="verify">
                            <Input placeholder={t('personCenter.info.placeholder.verifycode')} />
                            <div className="verify-btn" onClick={() => getVerifycode()}>{t('personCenter.info.btnText.getVerifycode')}</div>
                        </div>
                    </Form.Item>
                </Form>
            </MyForm>
        </InfoModel>
    )
};
