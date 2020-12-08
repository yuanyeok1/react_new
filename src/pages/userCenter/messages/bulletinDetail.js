import React from 'react';
import styled from 'styled-components';
import MyButton from '@/components/buttons/myButton';
import { useTranslation } from 'react-i18next';

const Warpper = styled.div`
    padding:5px 31px 0;
    color: ${props => props.theme.userCenter.fontColor};
    .title{
        font-size:16px;
        padding-bottom: 20px;
        text-align:center;
        border-bottom:1px solid #383a3c;
        position: relative;
        .search{
            position: absolute;
            right:0;
            top:-5px;
            font-size:12px;
            letter-spacing:3px;
            cursor:pointer;
        }
    }
    .content{
        font-size:14px;
        line-height:22px;
        .time{
            margin:14px 0 30px;
            font-size:12px
        }
    }
`


const Detail = (props) => {
    const { t } = useTranslation();

    let { title , content ,createDate } = props.data;

    const back = () =>{
        props.back()
    }
    return (
        <Warpper>
            <div className="title">{title} 
                {/* <span onClick={back}>返回</span> */}
                <MyButton 
                    className="search" 
                    link="button" 
                    color="#cf2a2a" 
                    width="162"
                    height="35"
                    loading={false}
                    onClick={back}
                >
                    {t('back')}
                </MyButton>
            </div>
            <section className="content">
                <p className="time">{t('createTime')}:{createDate}</p>
                {content}
            </section>
        </Warpper>
    )
}

export default Detail