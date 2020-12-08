import React from 'react';
import styled from 'styled-components';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { imgSuffix } from '@/utils/';
// import SvgIcon from '@/components/svgIcon';
import { go } from '@/utils';
let msg_1 = require('@/assets/images/home/message_1.png' + imgSuffix);
let msg_2 = require('@/assets/images/home/message_2.png' + imgSuffix);
const AnnouncementZone = styled.div`
    .widthSet{
        position:relative;
        width: 1200px;
        margin: 0 auto;
        padding:  0 50px;
        .msg_1{
            position: absolute;
            top: 0;
            left: 0;
            width: 24px;
            height: 24px;
            background: url(${msg_1});
            background-size: 100% 100%;
            opacity: 0.7;
        }
        .msg_2{
            position: absolute;
            top: 0;
            right: 0;
            padding-left: 20px;
            cursor: pointer;
            color: ${props => props.theme.uiColor};
            &:before{
                content: '';
                display: inline-block;
                position: absolute;
                top: 5px;
                left: 0;
                width: 15px;
                height: 15px;
                background: url(${msg_2}) ;
                background-size: 100% 100%;
                opacity: 0.7;
            }
        }
        .box{
            color: ${props => props.theme.uiColor};
        }
    }
    .swiper-container{
        height: 50px;
        .slideA{
            display: inline-block;
            cursor: pointer;
        }
    }
`;
const annList = [
    {
        title: "最新的活动2",
        id: 2,
        content: '反对撒发射点发到付222222'
    },{
        title: "最新的活动3",
        id: 3,
        content: '反对撒发射点发到付333333'
    },{
        title: "最新的活动4",
        id: 4,
        content: '反对撒发射点发到付4444444'
    }
];

SwiperCore.use([Autoplay]);
const Announcement = () => {
    const linkTo = () => {
        go('/userCenter/messages');
    }
    const linkToDetail = (id) => {
        go('/userCenter/messages?id='+id);
    }
    return (
        <AnnouncementZone>
            <div className="widthSet">
                {/* <SvgIcon color="#0f0" className="message" link="moreMessageIcon" size={16} /> */}
                <div className="msg_1"></div>
                <div className="box">
                    <Swiper autoplay loop={true} speed={400} slidesPerView={1} direction="vertical">
                        {annList.map( (item,index)=> {
                            return(
                                <SwiperSlide key={index} >
                                    <span onClick={()=> linkToDetail(item.id)} className="slideA">{item.content}</span>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className="msg_2" onClick={linkTo}>more</div>
            </div>
        </AnnouncementZone>
    )
};
export default Announcement;