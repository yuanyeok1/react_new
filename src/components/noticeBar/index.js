import React from 'react';
import Styles from '@/styles/components/noticeBar.module.scss';
import SvgIcon from '@/components/svgIcon';
import Marquee from './marquee';

const NoticeBar = ({data}) => {
    return (
        <div className={Styles.noticeBar}>
            <div className={Styles.speakerZone}>
                <SvgIcon link="speaker" className={Styles.speaker} color="#5981F8"/>
            </div>
            
            <div className={Styles.tickerZone}>
                <Marquee>
                    {
                        data.map((item, index) => (
                            <span key={index}>
                                {item}
                            </span>
                        ))
                    }
                </Marquee>
            </div>
        </div>
    )
};

export default NoticeBar;