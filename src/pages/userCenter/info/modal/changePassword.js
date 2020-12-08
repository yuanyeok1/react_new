import React, { /*useRef,*/ useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import { Form, Input } from 'antd'
import InfoModel from '@/components/dialogs/winLottModel/'
import MyForm from '@/components/usercenter/myForm'

export default function InfoModalPassword (props) {
    console.log(props,' pp')
    const { t } = useTranslation()
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const [refForm] = Form.useForm()
    useEffect(() => {
        console.log(refForm)
    })
    const onOk = () => {
        refForm.validateFields()
            .then(value => {
                console.log(value,'!@# ok')
                props.refresh()
            })
            .catch(err => {})
        // alert('登录密码ok')
    }
    return (
        <InfoModel
            {...props}
            onOk={onOk}
        >
            <MyForm>
                <Form
                    className="myForm"
                    {...layout}
                    requiredMark={false}
                    initialValues={{
                        curPwd: '',
                        newPwd: '',
                        checkNewPwd: ''    
                    }}
                    form={refForm}
                >
                    <Form.Item
                        label={t('personCenter.info.label.curPwd')}
                        name="curPwd"
                        rules={[
                            {
                                required: true,
                                message: t('personCenter.info.errMsg.no_curPwd')
                            }
                        ]}
                    >
                        <Input.Password placeholder={t('personCenter.info.placeholder.curPwd')} />
                    </Form.Item>
                    <Form.Item
                        label={t('personCenter.info.label.newPwd')}
                        name="newPwd"
                        rules={[
                            {
                                required: true,
                                message: t('personCenter.info.errMsg.no_newPwd')
                            },
                            // () => ({
                            //     validator(rule, value) {
                            //         const passwordRule = new RegExp(/^(?=.*\d.*)(?=.*[a-zA-Z].*).{6,16}$/)
                            //         if(!value || passwordRule.test(value)) {
                            //             return Promise.resolve()
                            //         }
                            //         return Promise.reject('密码需包含数字、字母')
                            //     }
                            // })
                        ]} 
                    >
                        <Input.Password placeholder={t('personCenter.info.placeholder.newPwd')} />
                    </Form.Item>
                    <Form.Item
                        label={t('personCenter.info.label.checkNewPwd')}
                        name="checkNewPwd"
                        rules={[
                            {
                                required: true,
                                message: t('personCenter.info.errMsg.no_checkNewPwd')
                            },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                  if (!value || getFieldValue('newPwd') === value) {
                                    return Promise.resolve();
                                  }
                                  return Promise.reject(t('personCenter.info.errMsg.no_match_pwd'));
                                },
                            })
                        ]}
                    >
                        <Input.Password placeholder={t('personCenter.info.placeholder.checkNewPwd')} />
                    </Form.Item>
                </Form>
            </MyForm>
        </InfoModel>

    )
};