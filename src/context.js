/*
 * @Author: wayson
 * @Date: 2020-11-11 21:04:11
 * @LastEditTime: 2020-11-12 10:35:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \winlott\src\context.js
 */
import React from 'react'
import  DepositStore  from './mobx/depositStore'
const lstore={
    DepositStore,
};
export const StoresContext = React.createContext(lstore)