/*
 * @Author: your name
 * @Date: 2020-11-10 16:47:32
 * @LastEditTime: 2020-11-17 15:09:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \winlott\src\components\usercenter\usercenter.js
 */
import styled from 'styled-components';
import { imgSuffix } from '@/utils/';
const contentBg = require('@/assets/images/center/centbtn.png'+imgSuffix);
const Centerdiv = styled.div`
    width: ${props => (props.width? props.width : 150)}px;
    background: #252627; 
    background: linear-gradient(135deg, transparent 5px, #252627 0) top left, 
                linear-gradient(-135deg, transparent 0px, #252627 0) top right, 
                linear-gradient(-45deg, transparent 5px, #252627 0) bottom right, 
                linear-gradient(45deg, transparent 0px, #252627 0) bottom left;
    background-size: 50% 50%;            
    background-repeat:no-repeat;
    margin:${props => (props.top? props.top : 0)}px  auto 0px;
`;

const CentBtn=styled.div`
    width: ${props => (props.width? props.width : 150)}px;
    height: ${props => (props.height? props.height : 30)}px;
    background: #252627; 
    background: url(${contentBg}) no-repeat;       
    background-position:${props => (props.x? props.x : 0)}px ${props => (props.y? props.y : 0)}px;
    background-repeat:no-repeat;
    text-align:center;
    color:#fff;
    font-size:14px;
    line-height:${props => (props.height? props.height : 30)}px;;
    cursor: pointer;
    &.dis{
        background-position:${props => (props.x1? props.x1 : 0)}px ${props => (props.y1? props.y1 : 0)}px;
    }
`;
export {
    Centerdiv,
    CentBtn
} ;