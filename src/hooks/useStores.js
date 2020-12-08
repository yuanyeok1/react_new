/*
 * @Author: wayson
 * @Date: 2020-11-11 21:52:41
 * @LastEditTime: 2020-11-12 10:35:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \winlott\src\hooks\useStores.js
 */
import React from 'react'
import { StoresContext } from '../context'

export const useStores = () => React.useContext(StoresContext)