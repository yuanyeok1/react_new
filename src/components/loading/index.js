import React from 'react';
import ReactDOM from 'react-dom';
import Spinner from '@/components/spinner';

const loading = {
    show() {
        const modal = document.getElementById('loadingModal');
        if (modal) {
            return
        }
        this.holder = document.createElement('div');
        this.holder.setAttribute('id', 'loadingModal');
        this.holder.style.cssText =
            'position: fixed;top: 0;height: 100%;width: 100%;background:rgba(0,0,0,0.1);z-index:10000;';
        document.body.appendChild(this.holder);
        ReactDOM.render(<Spinner />, this.holder);
    },
    close() {
        const modal = document.getElementById('loadingModal');
        if (modal) {
            document.body.removeChild(modal);
        }
        // if (this.holder) {
        //     document.body.removeChild(this.holder);
        // } else if (modal) {
        //     document.body.removeChild(modal);
        // }
    }
};

export default loading;
