import React from 'react';
import '@/styles/components/backToTop.scss';

const BackToTop = () => {
    const goTo = () => {
        const bodyBox = document.getElementById('root');

        // 解决ios版本10以下不支持element.scrollTo()方法的问题
        const scrollToTop = window.setInterval(() => {
            const pos = bodyBox.scrollTop;

            if (pos > 0) {
                bodyBox.scrollTop = pos - 20;
            } else {
                window.clearInterval(scrollToTop);
            }
        }, 2);
    };

    return (
        <div className="my-back-to-top">
            <a className="back-arrow" onClick={goTo} />
        </div>
    );
};

export default BackToTop;