// -------------------------------------------【方法1：定时器实现】缺点：需要用定时器去刷，动画跑起来很不自然。----------------------------------------
// import React, { useState, useRef } from 'react';
// import Styles from '@/styles/components/marquee.module.scss';
// import useInterval from '@/hooks/useInterval';

// const Marquee = ({speed = 2, children}) => {
//     const outerRef = useRef(null);
//     const innerRef = useRef(null);
//     const [pos, setPos] = useState();

//     useInterval(() => {
//         let nextPos = pos;

//         function getInitPos () {
//             return outerRef.current.clientWidth;
//         }

//         if (!nextPos) {
//             nextPos = getInitPos();
//         }

//         if (pos < 0 - innerRef.current.clientWidth) {
//             nextPos = getInitPos();
//         } else {
//             nextPos -= speed;
//         }

//         setPos(nextPos);
//     }, 100);

//     return (
//         <div className={Styles.myMarquee} ref={outerRef}>
//             <div className={Styles.runner} style={{transform: `translateX(${pos}px)`}} ref={innerRef}>
//                 {
//                     children
//                 }
//             </div>
//         </div>
//     );
// };

// export default Marquee;

// -------------------------【方法2：css animation实现】缺点：无法实现。当文本内容特别长的时候，我们没法在js中动态修改keyframes的起始位置的值--------------------

// import React, { useState, useRef, useEffect } from 'react';
// import Styles from '@/styles/components/marquee.module.scss';

// const Marquee = ({children}) => {
//     const innerRef = useRef(null);
//     const [innerStyle, setInnerStyle] = useState({});

//     useEffect(() => {
//         let innerWidth = innerRef.current.clientWidth;
//         let duration = innerWidth / 25; //每秒跑25个px

//         setInnerStyle({
//             animation: `${duration}s linear 0s infinite normal none running ${Styles.hehe}`
//         });
//     }, [children]);

//     return (
//         <div className={Styles.myMarquee}>
//             <div className={Styles.runner} style={innerStyle} ref={innerRef}>
//                 {
//                     children
//                 }
//             </div>
//         </div>
//     );
// };

// export default Marquee;

// ------------------------------------------------------【方法3：css transtion实现】缺点：css transition依然会造成页面抖动------------------------------------------------------
// import React, { useState, useRef, useEffect, useCallback } from 'react';
// import Styles from '@/styles/components/marquee.module.scss';
// import useInterval from '@/hooks/useInterval';

// const Marquee = ({children, speed = 50}) => {
//     const outterRef = useRef(null);
//     const innerRef = useRef(null);
//     const [innerStyle, setInnerStyle] = useState({});
//     const [duration, setDuration] = useState(5);

//     const startAnimation = useCallback(() => {
//         let outterWidth = outterRef.current.clientWidth;
//         let innerWidth = innerRef.current.clientWidth;
//         let d = (innerWidth + outterWidth) / speed; 

//         setInnerStyle({
//             left: `${outterWidth}px`,
//             transitionDuration: '0s'
//         });

//         let st = setTimeout(() => {
//             setInnerStyle({
//                 left: `-${innerWidth}px`,
//                 transitionDuration: `${d}s`
//             });

//             clearTimeout(st);
//         }, 100);
//     }, [speed]);

//     useEffect(() => {
//         startAnimation();

//         let outterWidth = outterRef.current.clientWidth;
//         let innerWidth = innerRef.current.clientWidth;
//         setDuration((innerWidth + outterWidth) / speed);
//     }, [children, startAnimation, speed]);

//     useInterval(() => {
//         startAnimation();
//     }, [duration * 1000]);

//     return (
//         <div className={Styles.myMarquee} ref={outterRef}>
//             <div className={Styles.runner} style={innerStyle} ref={innerRef}>
//                 {
//                     children
//                 }
//             </div>
//         </div>
//     );
// };

// export default Marquee;


// ------------------------------------------------------【方法3：css transform实现】完美，不抖动------------------------------------------------------

import React, { useState, useRef, useEffect } from 'react';
import Styles from '@/styles/components/marquee.module.scss';
import useInterval from '@/hooks/useInterval';

const Marquee = ({children}) => {
    const outterRef = useRef(null);
    const innerRef = useRef(null);
    const [innerStyle, setInnerStyle] = useState({});
    const [x, setX] = useState(0);
    const [innerLen, setInnerLen] = useState(0);

    useEffect(() => {
        setInnerLen(innerRef.current.clientWidth);

        setInnerStyle({
            transform: `translateX(${outterRef.current.clientWidth}px) translateZ(0px)`
        });
    }, [children]);

    useInterval(() => {
        if (innerLen === 0) {
            return;
        }

        setX(x - 1);

        if (x <= 0 - innerLen / 2) {
            setX(0)
        }

        setInnerStyle({
            transform: `translateX(${x}px) translateZ(0px)`
        });
    }, 30);

    return (
        <div className={Styles.myMarquee} ref={outterRef}>
            <div className={Styles.runner} style={innerStyle} ref={innerRef}>
                {
                    children
                }
                {
                    children
                }
            </div>
        </div>
    );
};

export default Marquee;
