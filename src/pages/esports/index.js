import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { imgSuffix } from '@/utils/';
import { useSpring, animated } from 'react-spring';
import { useTranslation } from 'react-i18next';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const saSportBg = require('@/assets/images/eleSport/dj_bj_1.jpg' + imgSuffix);
const imeSportBg = require('@/assets/images/eleSport/dj_bj_2.jpg' + imgSuffix);
const esportBgs = [saSportBg, imeSportBg];
const saLogoBg = require('@/assets/images/eleSport/dj_bj_1_logo.png' + imgSuffix);
const imeLogoBg = require('@/assets/images/eleSport/dj_bj_2_logo.png' + imgSuffix);
const esportLogos = [saLogoBg, imeLogoBg];
const btnImg = require('@/assets/images/live/ty_bj_4.png' + imgSuffix);
const navImg = require('@/assets/images/live/nav_logo.png' + imgSuffix);

const saSportMan1 = require('@/assets/images/eleSport/dj_bj_1_1.png' + imgSuffix);
const saSportMan2 = require('@/assets/images/eleSport/dj_bj_1_2.png' + imgSuffix);
const saSportLight1 = require('@/assets/images/eleSport/dj_bj_1_3.png' + imgSuffix);
const saSportLight2 = require('@/assets/images/eleSport/dj_bj_1_4.png' + imgSuffix);

const imeSportMan = require('@/assets/images/eleSport/dj_bj_2_1.png' + imgSuffix);
const imeSportCoin = require('@/assets/images/eleSport/dj_bj_2_2.png' + imgSuffix);
const imeSportLight = require('@/assets/images/eleSport/dj_bj_2_3.png' + imgSuffix);

const esportIframeBg = require('@/assets/images/eleSport/esport_iframe_bg.jpg' + imgSuffix);

const Wrapper = styled.div`
    position: relative;
    .swiper-container {
        height: 725px;

        .swiper-slide {
            background: url(${esportBgs[0]}) center/100% 100% no-repeat;
            &:first-child {
                .sportsman1 {
                    width: 474px;
                    height: 410px;
                    position: absolute;
                    left: 7.34%;
                    top: 395px;
                    background: url(${saSportMan1}) center no-repeat;
                    will-change: transform;
                }
                .sportsman2 {
                    width: 1000px;
                    height: 679px;
                    position: absolute;
                    left: 28px;
                    top: 128px;
                    background: url(${saSportMan2}) center no-repeat;
                    will-change: transform;
                }
                .light1 {
                    width: 873px;
                    height: 380px;
                    position: absolute;
                    left: 35.89%;
                    top: 334px;
                    background: url(${saSportLight1}) center no-repeat;
                    will-change: transform;
                }
                .light2 {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    left: 0;
                    top: 0;
                    background: url(${saSportLight2}) center no-repeat;
                }
            }
            &:nth-child(2) {
                background-image: url(${esportBgs[1]});
                .sportsman {
                    width: 99.48%;
                    height: 88.97%;
                    position: absolute;
                    left: 10px;
                    top: 160px;
                    background: url(${imeSportMan}) center/100% 100% no-repeat;
                    will-change: transform;
                }
                .coin {
                    width: 77px;
                    height: 49px;
                    position: absolute;
                    left: 34.74%;
                    top: 606px;
                    background: url(${imeSportCoin}) center no-repeat;
                    will-change: transform;
                }
                .light {
                    width: 91.3%;
                    height: 82.9%;
                    position: absolute;
                    left: 12px;
                    top: 204px;
                    background: url(${imeSportLight}) center/100% 100% no-repeat;
                    will-change: transform;
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
                    background: url(${navImg}) left -1px top -149px no-repeat;
                }

                &:nth-child(2) {
                    .ag-icon {
                        background-position: -75px -149px;
                    }
                }

                &:nth-child(3) {
                    .ag-icon {
                        background-position: -149px -75px;
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
            width: 216px;
            height: 103px;
            background: url(${esportLogos[0]}) center no-repeat;
            margin-bottom: 30px;
        }
        .ag-logo2 {
            width: 316px;
            height: 55px;
            background-image: url(${esportLogos[1]})
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
const EsportWrappwer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    background: url(${esportIframeBg}) center/100% 100% no-repeat;
    .esport-iframe {
        display: block;
        margin: 12px auto 13px;
    }
`;
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 16 }px,${y / 16 }px,0)`;
const trans3 = (x, y) => `translate3d(${x / 18 }px,${y / 18 }px,0)`;
const Page = () => {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
    const { t } = useTranslation();
    const agText = {
        'sabasports': t('esport.sabasports'),
        'imsports': t('esport.imsports'),
        'startgame': t('esport.startgame')
    };
    const [type, setType] = useState('');
    const [isShow,setIsShow] = useState(false);
    const initType = () => {
        setType('sabasports');
    }
    useEffect(() => {
        console.log('type:', type);
    }, [type]);
    const StartGame = (e) => {
        console.log(e);
        console.log('type123:',type);
        setIsShow(true);
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
                                txt = 'SABA E-sports';
                                break;
                            default:
                                txt = 'IM E-sports';
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
                                setType('sabasports');
                            },1000)
                            break;
                        default:
                            setTimeout(() => {
                                setType('imsports');
                            },1000)
                            break;
                    }
                }}

            >
                {
                    esportBgs.map((i, el) => {
                        return <SwiperSlide key={el} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                            {
                                el === 0?
                                <>
                                    <animated.div className="sportsman1" style={{ transform: props.xy.interpolate(trans1) }}></animated.div>
                                    <animated.div className="sportsman2" style={{ transform: props.xy.interpolate(trans3) }}></animated.div>
                                    <animated.div className="light1" style={{ transform: props.xy.interpolate(trans2) }}></animated.div>
                                    <div className="light2"></div>
                                </>
                                :
                                <>
                                    <animated.div className="sportsman" style={{ transform: props.xy.interpolate(trans3) }}></animated.div>
                                    <animated.div className="coin" style={{ transform: props.xy.interpolate(trans1) }}></animated.div>
                                    <animated.div className="light" style={{ transform: props.xy.interpolate(trans2) }}></animated.div>
                                </> 
                             }
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
            {
                isShow?
                <EsportWrappwer>
                    <iframe 
                        src="https://www.baidu.com" 
                        title="体育"
                        width="1200"
                        height="700"
                        frameborder="0"
                        border="0"
                        marginWidth="0"
                        marginHeight="0"
                        allowTransparency="yes"
                        scrolling="no"
                        className='esport-iframe'
                    >

                    </iframe>
                </EsportWrappwer>
                :
                ''
            }
        </Wrapper>
    )
};

export default Page;