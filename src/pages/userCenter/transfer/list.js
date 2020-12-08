/*
 * @Author: your name
 * @Date: 2020-11-17 10:21:54
 * @LastEditTime: 2020-11-24 14:06:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \winlott\src\pages\userCenter\transfer\list.js
 */
/*
 * @Author: your name
 * @Date: 2020-10-26 16:07:04
 * @LastEditTime: 2020-11-17 10:20:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \winlott\src\pages\userCenter\transfer\index.js
 */
import React from 'react';
import styled from 'styled-components';
import { imgSuffix } from '@/utils/';
import { RedoOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
const contentBg = require('@/assets/images/center/bgsprit.png'+imgSuffix);


const Wrapper = styled.div`
        display:inline-block;
        .lidiv{
            width:185px;
            height:125px;
            padding-top: 20px;
            background-image:url(${contentBg});
            background-repeat:no-repeat;
            background-position:-185px -305px;
            margin-left:18px;
            margin-bottom:17px;
            vertical-align: middle;
            position: relative;
            cursor: pointer;
            &.important{
                background-position:0px -305px;
            }
            >div{
                height:36px;
                img{
                    width:36px;
                    display:block;
                    margin:0 auto;
                }
                .AG{
                    padding-top: 10px;
                }
                .CQ9{
                    width:57px;
                    padding-top: 10px;
                }
            }
            .icon{
                position:absolute;
                display:none;
                width:16px;
                height:16px;
                top:5px;
                right:5px;
                background-image:url(${contentBg});
                background-repeat:no-repeat;
                background-position:-262px 0px;
            }
            p{
                color:#fff;
                text-align:center;
                font-size:14px;
                margin-bottom:0
            }
            .bl{
                color:#fdae3e;

            }
        }
`;


const List = (props) => {
    const {t} =useTranslation()
    const {data}= props
    return (
        <Wrapper>
            <div className={data.id === 'lottery'?'lidiv important':'lidiv '}>
                <i className='icon'></i>
                <div>   
                    <img src={data.src}  className={data.id} alt=''/>
                </div>  
                <p>{t(data.name)}</p>
                <p className='bl'>123123 VND <RedoOutlined  style={{color:'#8c8d8d'}}/></p>
            </div>
        </Wrapper>
    )
};

export default List;