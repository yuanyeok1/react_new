import { makeAutoObservable } from "mobx"
import { logout } from '@/api';
import { Modal } from 'antd';
import { go } from '@/utils/';

class LotteryStore {
    isLogin = false;

    constructor() {
        makeAutoObservable(this)
    }

    setLoginStatus (flag) {
        this.isLogin = flag;
    }

    openService = () => {
        window.open('http://www.baidu.com', '_blank');
    };

    doLogout = () => {
        logout().then(rs => {
            Modal.confirm({
                title: '退出通知',
                content: '退出成功！',
                okText: '确认',
                cancelText: '取消',
                onOk: () => {
                    this.setLoginStatus(false);
                    go('/home');
                }
            });
        })
    }
}

export default new LotteryStore();
