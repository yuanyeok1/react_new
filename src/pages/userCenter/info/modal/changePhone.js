import React, { /* useState */ } from 'react';
import { useTranslation } from 'react-i18next'
import { Form, Input } from 'antd'
import InfoModel from '@/components/dialogs/winLottModel/'
import MyForm from '@/components/usercenter/myForm'

export default function InfoModalPhone (props) {
    const { t } = useTranslation()
    const [refForm] = Form.useForm()
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const onOk = () => {
        refForm.validateFields()
            .then(value => {
                
            })
            .catch(err => {})
    }
    const getVerifycode = () => {
        refForm.validateFields(['phone'])
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
                    requiredMark={false}
                    className="myForm"
                    initialValues={{
                        phone: '',
                        verifyCode: ''
                    }}
                >
                    <Form.Item
                        label={t('personCenter.info.label.phone')}
                        name="phone"
                        rules={[
                            {
                                required: true,
                                message: t('personCenter.info.errMsg.no_phone')
                            },
                            () => ({
                                validator(rule, value) {
                                    // 越南手機規則 10位纯数字，首位为0
                                    const phoneRule = new RegExp(/[0]+[0-9]{9}/)
                                    if(!value || phoneRule.test(value)) {
                                        return Promise.resolve()
                                    }
                                    return Promise.reject(t('personCenter.info.errMsg.no_match_phone'))
                                }
                            })
                        ]}
                    >
                        <Input placeholder={t('personCenter.info.placeholder.phone')} />
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
