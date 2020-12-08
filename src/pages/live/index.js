import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getLiveUrl } from './ajax';
import { imgSuffix } from '@/utils/';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useTranslation } from 'react-i18next';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const agLiveBg = require('@/assets/images/live/zr_bj_4.jpg' + imgSuffix);
const sexyLiveBg = require('@/assets/images/live/zr_bj_1.jpg' + imgSuffix);
const ebetLiveBg = require('@/assets/images/live/zr_bj_2.jpg' + imgSuffix);
const cq9LiveBg = require('@/assets/images/live/zr_bj_3.jpg' + imgSuffix);
const liveBgs = [agLiveBg, sexyLiveBg, ebetLiveBg, cq9LiveBg];
const agLogoBg = require('@/assets/images/live/zr_bj_4_logo.png' + imgSuffix);
const sexyLogoBg = require('@/assets/images/live/zr_bj_1_logo.png' + imgSuffix);
const ebetLogoBg = require('@/assets/images/live/zr_bj_2_logo.png' + imgSuffix);
const cq9LogoBg = require('@/assets/images/live/zr_bj_3_logo.png' + imgSuffix);
const liveLogos = [agLogoBg, sexyLogoBg, ebetLogoBg, cq9LogoBg];
const btnImg = require('@/assets/images/live/ty_bj_4.png' + imgSuffix);
const navImg = require('@/assets/images/live/nav_logo.png' + imgSuffix);

const agLiveWoman = require('@/assets/images/live/zr_bj_4_1.png' + imgSuffix);
const agLiveDesk = require('@/assets/images/live/zr_bj_4_2.png' + imgSuffix);

const sexyLiveWoman = require('@/assets/images/live/zr_bj_1_1.png' + imgSuffix);
const sexyLiveDesk = require('@/assets/images/live/zr_bj_1_2.png' + imgSuffix);

const ebetLiveWoman = require('@/assets/images/live/zr_bj_2_1.png' + imgSuffix);
const ebetLiveDesk = require('@/assets/images/live/zr_bj_2_2.png' + imgSuffix);

const cq9LiveWoman = require('@/assets/images/live/zr_bj_3_1.png' + imgSuffix);
const cq9LiveDesk = require('@/assets/images/live/zr_bj_3_2.png' + imgSuffix);

const Wrapper = styled.div`
    .swiper-container {
        height: 725px;

        .swiper-slide {
            background: url(${liveBgs[0]}) center/100% 100% no-repeat;
            .woman {
                width: 588px;
                height: 684px;
                background: url(${agLiveWoman}) center/100% 100% no-repeat;
                position: absolute;
                left: 21.875%;
                bottom: 40px;
                animation: womanAnimation 3s infinite linear alternate;
            }
            .desk {
                width: 91.72%;
                height: 202px;
                background: url(${agLiveDesk}) center/100% 100% no-repeat;
                position: absolute;
                left: 0;
                bottom: 0;
            }
            &:nth-child(2) {
                background-image: url(${liveBgs[1]});
                .woman {
                    width: 845px;
                    height: 666px;
                    background-image: url(${sexyLiveWoman});
                    left: 6.875%;
                    bottom: 64px;
                }
                .desk {
                    width: 91.727%;
                    height: 217px;
                    background-image: url(${sexyLiveDesk});
                    left: 0;
                    bottom: 0;
                }
            }
            &:nth-child(3) {
                background-image: url(${liveBgs[2]});
                .woman {
                    width: 407px;
                    height: 638px;
                    background-image: url(${ebetLiveWoman});
                    left: 24.375%;
                    bottom: 62px;
                }
                .desk {
                    width: 92.1875%;
                    height: 276px;
                    background-image: url(${ebetLiveDesk});
                    left: 0;
                    bottom: 0;
                }
            }
            &:nth-child(4) {
                background-image: url(${liveBgs[3]});
                .woman {
                    width: 713px;
                    height: 630px;
                    background-image: url(${cq9LiveWoman});
                    left: 9.93%;
                    bottom: 96px;
                }
                .desk {
                    width: 95.42%;
                    height: 282px;
                    background-image: url(${cq9LiveDesk});
                    left: 0;
                    bottom: 0;
                }
            }
            @keyframes womanAnimation {
                0% {
                    transform: translateX(0);
                }
                100% {
                    transform: translateX(25px);
                }
            }
        }
        .swiper-pagination {
            width: auto;
            left: 96px;
            bottom: 0;
            top: 0;
            margin: auto;  
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .swiper-pagination-bullet {
                width: auto;
                height: auto;
                display: flex;
                margin-bottom: 36px;
                border-radius: 0;
                background: none;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                opacity: 1;

                .ag-icon {
                    width: 73px;
                    height: 73px; 
                    margin-bottom: 17px;
                    background: url(${navImg}) left -1px top -1px no-repeat;
                }

                &:nth-child(2) {
                    .ag-icon {
                        background-position: -75px -1px;
                    }
                }

                &:nth-child(3) {
                    .ag-icon {
                        background-position: -149px -1px;
                    }
                }
                &:nth-child(4) {
                    .ag-icon {
                        background-position: -223px -1px;
                    }
                }
                span {
                    font-size: 18px;
                    color: #fff;
                    font-family: 'ArialMT';
                }
                &:last-child {
                    margin-bottom: 0;
                }
            }
            .swiper-pagination-bullet-active {
                .ag-icon {
                    position: relative;
                    &::after {
                        display: block;
                        content: '';
                        position: absolute;
                        left: -6px;
                        top: -6px;
                        width: 85px;
                        height: 85px;
                        border-radius: 50%;
                        border: 1px solid rgba(255,255,255,0.5);
                        animation: myAnimation 1.5s infinite linear;
                    }
                }
            }
            @keyframes myAnimation {
                0% {
                    border-color: rgba(255,255,255,0.5)
                }
                100% {
                    border-color: rgba(255,255,255,1)
                }
            }
        }
    }
`;
const Inner = styled.div`
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 157px;
    text-align: right;
    position: relative;
    z-index: 10;

    .content {
        display: inline-block;
        width: 400px;

        .ag-logo {
            width: 224px;
            height: 76px;
            background: url(${liveLogos[0]}) center no-repeat;
            margin-bottom: 30px;
        }
        .ag-logo2 {
            width: 219px;
            height: 83px;
            background-image: url(${liveLogos[1]})
        }
        .ag-logo3 {
            width: 218px;
            height: 75px;
            background-image: url(${liveLogos[2]})
        }
        .ag-logo4 {
            width: 171px;
            height: 86px;
            background-image: url(${liveLogos[3]})
        }
        
        .ag-text {
            font-size: 20px;
            color: #ffede6;
            font-family: 'PingFangSC-Regular,MyriadPro-Regular ';
            text-align: left;
            line-height: 30px;
            margin-bottom: 45px;
        }

        .start-game {
            width: 263px;
            height: 56px;
            line-height: 56px;
            text-align: center;
            background: url(${btnImg}) center no-repeat;
            font-size: 20px;
            color: #ffede6;
            font-family: 'ArialMT ';
            cursor: pointer;
            transition: all 0.3s;
            &:hover {
                transform: rotateX(360deg);
            }
        }
    }
`;
const Page = (props) => {
    console.log('props:', props);
    const { t } = useTranslation();
    const agText = {
        'ag': t('live.aglive'),
        'sexy': t('live.sexylive'),
        'ebet': t('live.ebetlive'),
        'cq9': t('live.cq9live'),
        'startgame': t('live.startgame')
    };
    const [type, setType] = useState('');
    const initType = () => {
        setType('ag');
    }
    useEffect(() => {
        console.log('type:', type);
    }, [type]);
    const StartGame = (e) => {
        console.log(e);
        getLiveUrl({type}).then(res =>{
            console.log('res:',res);
        })
    }
    return (
        <Wrapper>
            <Swiper
                onSwiper={(swiper) => {
                    window.swiper = swiper;
                    initType();
                }}
                pagination={{
                    // el: 'swiper-nav',
                    clickable: true,
                    type: 'bullets',
                    renderBullet: function (index, className) {
                        let txt = '';
                        switch (index) {
                            case 0:
                                txt = 'AG LIVE';
                                break;
                            case 1:
                                txt = 'SEXY LIVE';
                                break;
                            case 2:
                                txt = 'EBET LIVE';
                                break;
                            default:
                                txt = 'CQ9 LIVE';
                                break;
                        }
                        return `<div class='${className}'><i class='ag-icon'></i><span>${txt}</span></div>`
                    }

                }}
                onSlideChange={(props) => {
                    console.log(props.activeIndex);
                    let activeIndex = props.activeIndex;
                    switch(activeIndex) {
                        case 0:
                            setTimeout(() => {
                                setType('ag');
                            },1000)
                            break;
                        case 1:
                            setTimeout(() => {
                                setType('sexy');
                            },1000)
                            break;
                        case 2:
                            setTimeout(() => {
                                setType('ebet');
                            },1000)
                            break;
                        default:
                            setTimeout(() => {
                                setType('cq9');
                            },1000)
                            break;
                    }
                }}
            >
                {
                    liveBgs.map((i, el) => {
                        return <SwiperSlide key={el}>
                            <div className="desk"></div>
                            <div className="woman"></div>
                            <Inner>
                                <div className="content">
                                    <div className={['ag-logo', 'ag-logo' + (el + 1)].join(' ')}></div>
                                    <div className="ag-text">{agText[type]}</div>
                                    <div className="start-game" onClick={StartGame}>{agText['startgame']}</div>
                                </div>
                            </Inner>
                        </SwiperSlide>
                    })
                }
            </Swiper>
        </Wrapper>
    )
};

export default Page;