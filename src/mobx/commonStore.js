import { makeAutoObservable } from "mobx"
import { logout } from '@/api';
import { Modal } from 'antd';
import { go } from '@/utils/';

class CommonStore {
    isLogin = localStorage.getItem('logined') || false;

    isSetPwd = false; //是否设置资金密码;
    
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
        logout({cn:'philipdzs1'}).then(rs => {
            Modal.confirm({
                title: '退出通知',
                content: '退出成功！',
                okText: '确认',
                cancelText: '取消',
                onOk: () => {
                    localStorage.removeItem('logined');
                    this.setLoginStatus(false);
                    go('/home');
                }
            });
        })
    }
}

export default new CommonStore();
