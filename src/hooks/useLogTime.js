import { useState, useEffect } from 'react';

const useLogTime = (data = {log: true, time: true}) => {
    const [count, setCount] = useState(0);

    /*
    ** 默认情况下，useEffect会在每轮渲染完成之后执行!
    */
    useEffect(() => {
        data.log && console.log('组件渲染完成!');
        let timer = null;

        if (data.time) {
            timer = setInterval(() => {
                setCount(c => c+1);
            }, 1000);
        }

        /*
        ** 清除函数会在组件卸载之前执行!
        */
        return () => {
            data.log && console.log('组件即将卸载...');
            data.time && clearInterval(timer);
        }
    });
};

export default useLogTime;