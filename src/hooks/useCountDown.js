import React, { useState } from 'react';
import useInterval from '@/hooks/useInterval';

/**
 *  【1】此Hook接收2个参数：
 *       1.组件
 *       2.组件的props
 * 
 *  【2】此Hook返回增强版的组件，
 */
const useCountDown = (Component, props) => {
    const [count, setCount] = useState(60);

    useInterval(() => {
        if (count <= 0) {
            props.callback();
        } else {
            setCount(count - 1);
        }
    }, 1000);

    return () => <Component {...props} count={count} />;
};

export default useCountDown;