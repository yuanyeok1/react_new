/*
 * @Author: your name
 * @Date: 2020-11-11 19:09:23
 * @LastEditTime: 2020-11-23 17:09:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \winlott\src\mobx\depositStore.js
 */
import { makeAutoObservable } from "mobx";
import { imgSuffix } from '@/utils/';
class DepositStore {
    isDatil = 1;
    pnglist=[
        {
            id:'bank',
            othername:'bank',
            'name':'personCenter.deposit.bank',
            'src':require('@/assets/images/bank/bank.png'+imgSuffix)
        },
        {
            id:'cash',
            othername:'cash',
            'name':'personCenter.deposit.cash',
            'src':require('@/assets/images/bank/cash.png'+imgSuffix)
        },
        {
            id:'usdt',
            othername:'usdt',
            'name':'personCenter.deposit.usdt',
            'src':require('@/assets/images/bank/USDT.png'+imgSuffix)
        },
        {
            id:'other',
            othername:'momopay',
            'name':'personCenter.deposit.momopay',
            'src':require('@/assets/images/bank/momopay.png'+imgSuffix)
        },
    ]
    changBanknum=this.pnglist[0].id
    constructor() {
        makeAutoObservable(this)
    }
    setDatil(v){
        this.isDatil=v
    }
    setChangeBnak(v){
        this.changBanknum=v
    }
}

export default new DepositStore();
