import React, { /* useState */ } from 'react';
import { useTranslation } from 'react-i18next'
import { Form, Input } from 'antd'
import InfoModel from '@/components/dialogs/winLottModel/'
import MyForm from '@/components/usercenter/myForm'

export default function InfoModalWalletcode (props) {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const { t } = useTranslation()
    const [refForm] = Form.useForm()
    const onOk = () => {
        refForm.validateFields()
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
                    className="myForm"
                    form={refForm}
                    requiredMark={false}
                    initialValues={{
                        curPwd: '',
                        newPwd: '',
                        checkNewPwd: ''    
                    }}
                >
                    <Form.Item
                        label={t('personCenter.info.label.curWalletcode')}
                        name="curPwd"
                        rules={[
                            {
                                required: true,
                                message: t('personCenter.info.errMsg.no_curWalletcode')
                            }
                        ]}
                    >
                        <Input.Password placeholder={t('personCenter.info.placeholder.curWalletcode')} />
                    </Form.Item>
                    <Form.Item
                        label={t('personCenter.info.label.newWalletcode')}
                        name="newPwd"
                        rules={[
                            {
                                required: true,
                                message: t('personCenter.info.errMsg.no_newWalletcode')
                            },
                            {
                                type: 'string',
                                min: 6,
                                max: 16,
                                message: t('personCenter.info.errMsg.no_match_walletcode',{min: 6, max: 16})
                            }
                        ]}
                    >
                        <Input.Password placeholder={t('personCenter.info.placeholder.newWalletcode')} />
                    </Form.Item>
                    <Form.Item
                        label={t('personCenter.info.label.checkNewWalletcode')}
                        name="checkNewPwd"
                        rules={[
                            {
                                required: true,
                                message: t('personCenter.info.errMsg.no_checkNewWalletcode')
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                  if (!value || getFieldValue('newPwd') === value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(t('personCenter.info.errMsg.no_match_newWalletcode'));
                                },
                            })
                        ]}
                    >
                        <Input.Password placeholder={t('personCenter.info.placeholder.checkNewWalletcode')} />
                    </Form.Item>
                </Form>
            </MyForm>
        </InfoModel>

    )
};