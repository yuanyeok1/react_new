import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import { Form, Input, Select } from 'antd'
import InfoModel from '@/components/dialogs/winLottModel/'
import MyForm from '@/components/usercenter/myForm'
import Arrow from '@/components/usercenter/arrow'

const hintOpts = [
    {
        label: '你的座号',
        value: 'q1'
    },
    {
        label: '你最爱的宠物',
        value: 'q2'
    },
    {
        label: '你最爱的演员名字',
        value: 'q3'
    },
    {
        label: '你的出生地',
        value: 'q4'
    },
    {
        label: '你小学最好朋友的名字',
        value: 'q5'   
    },
    {
        label: '你最爱的食物',
        value: 'q6'
    },
    {
        label: '你最喜欢的歌曲',
        value: 'q7'
    }
]
export default function InfoModalPwdHint (props) {
    const { t } = useTranslation()
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    }
    const [refForm] = Form.useForm()
    const [selected, setSelected] = useState([])
    useEffect(() => {
        console.log(refForm.getFieldsValue(['hint_1', 'hint_2', 'hint_3']))
    })
    const handleSelected = () => {
        const selectedArr = ['hint_1', 'hint_2', 'hint_3'].map(item => refForm.getFieldValue(item))
        setSelected(selectedArr)
    }
    const onOk = () => {
        refForm.validateFields()
            .then(values => {
                console.log(values,'?')
            })
            .catch(err => {
                console.log(err, '?')
            })
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
                        hint_1: null,
                        hint_1_ans: '',
                        hint_2: null,
                        hint_2_ans: '',
                        hint_3: null,
                        hint_3_ans: ''
                    }}
                >
                    <Form.Item 
                        label={t('personCenter.info.label.pwdHint')}
                        name="hint_1"
                        rules={[
                            {
                                required: true,
                                message: t('personCenter.info.errMsg.no_pwdHint')
                            }
                        ]}>
                            <Select
                                style={{ width: 320 }}
                                placeholder={t('personCenter.info.placeholder.pwdHint')}
                                showSearch
                                optionFilterProp="label"
                                getPopupContainer={triggerNode => triggerNode.parentElement}
                                suffixIcon={Arrow}
                                onChange={() => handleSelected()}
                                dropdownStyle={{backgroundColor:'#383a3c',color:'#8c8d8d',borderRadius:'10px',padding:'0'}}
                                options={hintOpts.filter(item => (item.value === selected[0]) || !selected.includes(item.value))} />
                    </Form.Item>
                    <Form.Item 
                        label={t('personCenter.info.label.pwdHintAns')}
                        name="hint_1_ans"
                        rules={[
                            {
                                required: true,
                                message: t('personCenter.info.errMsg.no_pwdAns')
                            },
                            {
                                type: 'string',
                                min: 4,
                                max: 20,
                                message: t('personCenter.info.errMsg.no_match_pwdAns', {min: 4, max: 20})
                            }
                        ]}>
                        <Input placeholder={t('personCenter.info.placeholder.pwdHintAns')} />
                    </Form.Item>
                    <Form.Item 
                        label={t('personCenter.info.label.pwdHint')}
                        name="hint_2"
                        rules={[
                            {
                                required: true,
                                message: t('personCenter.info.errMsg.no_pwdHint')
                            }
                        ]}>
                            <Select
                                style={{ width: 320 }}
                                placeholder={t('personCenter.info.placeholder.pwdHint')}
                                showSearch
                                optionFilterProp="label"
                                getPopupContainer={triggerNode => triggerNode.parentElement}
                                suffixIcon={Arrow}
                                onChange={() => handleSelected()}
                                dropdownStyle={{backgroundColor:'#383a3c',color:'#8c8d8d',borderRadius:'10px',padding:'0'}}
                                options={hintOpts.filter(item => (item.value === selected[1]) || !selected.includes(item.value))} />
                    </Form.Item>
                    <Form.Item 
                        label={t('personCenter.info.label.pwdHintAns')}
                        name="hint_2_ans"
                        rules={[
                            {
                                required: true,
                                message: t('personCenter.info.errMsg.no_pwdAns')
                            },
                            {
                                type: 'string',
                                min: 4,
                                max: 20,
                                message: t('personCenter.info.errMsg.no_match_pwdAns', {min: 4, max: 20})
                            }
                        ]}>
                        <Input placeholder={t('personCenter.info.placeholder.pwdHintAns')} />
                    </Form.Item>
                    <Form.Item 
                        label={t('personCenter.info.label.pwdHint')}
                        name="hint_3"
                        rules={[
                            {
                                required: true,
                                message: t('personCenter.info.errMsg.no_pwdHint')
                            }
                        ]}>
                            <Select
                                style={{ width: 320 }}
                                placeholder={t('personCenter.info.placeholder.pwdHint')}
                                showSearch
                                optionFilterProp="label"
                                getPopupContainer={triggerNode => triggerNode.parentElement}
                                suffixIcon={Arrow}
                                onChange={() => handleSelected()}
                                dropdownStyle={{backgroundColor:'#383a3c',color:'#8c8d8d',borderRadius:'10px',padding:'0'}}
                                options={hintOpts.filter(item => (item.value === selected[2]) || !selected.includes(item.value))} />
                    </Form.Item>
                    <Form.Item 
                        label={t('personCenter.info.label.pwdHintAns')}
                        name="hint_3_ans"
                        rules={[
                            {
                                required: true,
                                message: t('personCenter.info.errMsg.no_pwdAns')
                            },
                            {
                                type: 'string',
                                min: 4,
                                max: 20,
                                message: t('personCenter.info.errMsg.no_match_pwdAns', {min: 4, max: 20})
                            }
                        ]}>
                        <Input placeholder={t('personCenter.info.placeholder.pwdHintAns')} />
                    </Form.Item>
                </Form>
            </MyForm>
        </InfoModel>
    )
};
