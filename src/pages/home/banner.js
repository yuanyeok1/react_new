import React from 'react';
import styled from 'styled-components'
import { imgSuffix } from '@/utils/';
import { Carousel } from 'antd';

let banner1 = require('@/assets/images/home/banner1.jpg' + imgSuffix);
let banner2 = require('@/assets/images/home/banner2.jpg' + imgSuffix);
let banner3 = require('@/assets/images/home/banner3.jpg' + imgSuffix);
let banner4 = require('@/assets/images/home/banner4.jpg' + imgSuffix);
const bannerList = [{
    src: banner1,
},{
    src: banner2,
},{
    src: banner3,
},{
    src: banner4,
}]
const BannerZone = styled.div`
    width: 100%;
    .banner{
        height: 520px;
        background: blue;
    }
    .slick-dots{
        &>li{
            width: 26px;
            height: 26px;
            margin: 0 10px;
            background: rgba(255,255,255,.5);
            transform: rotate(45deg);
            button{
                height: 100%;
            }
            &.slick-active,&.active{
                width: 26px !important;
            }
        }
        
    }
    
`;

const Banner = () => {
    return (
        <BannerZone>
            <div className="banner">
                <Carousel >
                    {bannerList.map( (item,index) => {
                        return(
                            <div key={index}><img src={item.src} alt="1" /></div>
                        )
                    })}
                </Carousel>
            </div>
            
        </BannerZone>
    )
};

export default Banner;