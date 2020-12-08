import { makeAutoObservable } from "mobx";

class DialogStore {
    isShowLoginDialog = false;
    isShowPayPasswordDialog = false;
    payPromise = null;
    constructor() {
        makeAutoObservable(this)
    }

    showLoginDialog () {
        this.isShowLoginDialog = true;
    }

    hideLoginDialog () {
        this.isShowLoginDialog = false;
    }
    hidePayPasswordDialog() {
        this.payPromise = null
        this.isShowPayPasswordDialog = false
    }
    checkPayPassword() {
        this.isShowPayPasswordDialog = true
        return new Promise((resolve, reject) => {
            this.payPromise = {resolve, reject}
        }).finally(() => this.hidePayPasswordDialog())
    }

}

export default new DialogStore();
