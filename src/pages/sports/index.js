import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { imgSuffix } from '@/utils/';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useTranslation } from 'react-i18next';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
const sbSportBg = require('@/assets/images/sport/ty_bj_1.jpg' + imgSuffix);
const saSportBg = require('@/assets/images/sport/ty_bj_2.jpg' + imgSuffix);
const imSportBg = require('@/assets/images/sport/ty_bj_3.jpg' + imgSuffix);
const sportBgs = [sbSportBg, saSportBg, imSportBg];
const sbLogoBg = require('@/assets/images/sport/ty_bj_1_logo.png' + imgSuffix);
const saLogoBg = require('@/assets/images/sport/ty_bj_2_logo.png' + imgSuffix);
const imLogoBg = require('@/assets/images/sport/ty_bj_3_logo.png' + imgSuffix);
const sportLogos = [sbLogoBg, saLogoBg, imLogoBg];
const btnImg = require('@/assets/images/live/ty_bj_4.png' + imgSuffix);
const navImg = require('@/assets/images/live/nav_logo.png' + imgSuffix);

const sbSportPerson1 = require('@/assets/images/sport/ty_bj_1_1.png' + imgSuffix);
const sbSportPerson2 = require('@/assets/images/sport/ty_bj_1_2.png' + imgSuffix);
const sbSportPerson3 = require('@/assets/images/sport/ty_bj_1_3.png' + imgSuffix);

const saSportBall = require('@/assets/images/sport/ty_bj_2_1.png' + imgSuffix);
const saSportPerson = require('@/assets/images/sport/ty_bj_2_2.png' + imgSuffix);

const imSportLight = require('@/assets/images/sport/ty_bj_3_1.png' + imgSuffix);
const imSportBall = require('@/assets/images/sport/ty_bj_3_2.png' + imgSuffix);
const imSportPerson = require('@/assets/images/sport/ty_bj_3_3.png' + imgSuffix);

const sportIframeBg = require('@/assets/images/sport/sport_iframe_bg.jpg' + imgSuffix);

const Wrapper = styled.div`
    position: relative;
    .swiper-container {
        height: 725px;

        .swiper-slide {
            background: url(${sportBgs[0]}) center/100% 100% no-repeat;
            &:first-child {
                .sportsman1 {
                    width: 169px;
                    height: 254px;
                    position: absolute;
                    left: 12.97%;
                    top: 321px;
                    background: url(${sbSportPerson1}) center no-repeat;
                    will-change: transform;
                }
                .sportsman3 {
                    width: 213px;
                    height: 411px;
                    position: absolute;
                    left: 37.24%;
                    top: 255px;
                    background: url(${sbSportPerson3}) center no-repeat;
                    will-change: transform;
                }
                .sportsman2 {
                    width: 596px;
                    height: 696px;
                    position: absolute;
                    left: 12.19%;
                    top: 30px;
                    background: url(${sbSportPerson2}) center no-repeat;
                    will-change: transform;
                }
            }
            &:nth-child(2) {
                background-image: url(${sportBgs[1]});
                .ball {
                    position: absolute;
                    width: 447px;
                    height: 534px;
                    background: url(${saSportBall}) center no-repeat;
                    will-change: transform;
                    left: 18.49%;
                    top: 0;
                }
                .sportsman {
                    position: absolute;
                    width: 653px;
                    height: 725px;
                    background: url(${saSportPerson}) center no-repeat;
                    will-change: transform;
                    left: 10.47%;
                    top: 0;
                }
            }
            &:nth-child(3) {
                background-image: url(${sportBgs[2]});
                .light {
                    position: absolute;
                    width: 745px;
                    height: 518px;
                    background: url(${imSportLight}) center no-repeat;
                    will-change: transform;
                    left: 12.5%;
                    top: 156px;
                }
                .ball {
                    position: absolute;
                    width: 730px;
                    height: 585px;
                    background: url(${imSportBall}) center no-repeat;
                    will-change: transform;
                    left: 13.18%;
                    top: 139px;
                }
                .sportsman {
                    position: absolute;
                    width: 440px;
                    height: 717px;
                    background: url(${imSportPerson}) center no-repeat;
                    will-change: transform;
                    left: 20.26%;
                    top: 35px;
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
                    background: url(${navImg}) left -149px top -75px no-repeat;
                }

                &:nth-child(2) {
                    .ag-icon {
                        background-position: -75px -75px;
                    }
                }

                &:nth-child(3) {
                    .ag-icon {
                        background-position: -1px -75px;
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
        width: 460px;

        .ag-logo {
            width: 276px;
            height: 55px;
            background: url(${sportLogos[0]}) center no-repeat;
            margin-bottom: 30px;
        }
        .ag-logo2 {
            width: 456px;
            height: 104px;
            background-image: url(${sportLogos[1]})
        }
        .ag-logo3 {            
            width: 351px;
            height: 61px;
            background-image: url(${sportLogos[2]})
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
const SportWrappwer = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    background: url(${sportIframeBg}) center/100% 100% no-repeat;
    .sport-iframe {
        display: block;
        margin: 12px auto 13px;
    }
`;
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 15 }px,${y / 15 }px,0)`;
const trans3 = (x, y) => `translate3d(${x / 13 }px,${y / 13 }px,0)`;
const Page = () => {
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
    const { t } = useTranslation();
    const agText = {
        'sbobetsport': t('sport.sbobetsport'),
        'sabasport': t('sport.sabasport'),
        'imsport': t('sport.imsport'),
        'startgame': t('sport.startgame')
    };
    const [type, setType] = useState('');
    const [isShow,setIsShow] = useState(false);
    const initType = () => {
        setType('sbobetsport');
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
                                txt = 'SBOBET SPORT';
                                break;
                            case 1:
                                txt = 'SABA SPORT';
                                break;
                            default:
                                txt = 'IM SPORT';
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
                                setType('sbobetsport');
                            },1000)
                            break;
                        case 1:
                            setTimeout(() => {
                                setType('sabasport');
                            },1000)
                            break;
                        default:
                            setTimeout(() => {
                                setType('imsport');
                            },1000)
                            break;
                    }
                }}

            >
                {
                    sportBgs.map((i, el) => {
                        return <SwiperSlide key={el} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
                            {
                               el === 0?
                               <>
                                   <animated.div className="sportsman1" style={{ transform: props.xy.interpolate(trans1) }}></animated.div>
                                   <animated.div className="sportsman3" style={{ transform: props.xy.interpolate(trans3) }}></animated.div>
                                   <animated.div className="sportsman2" style={{ transform: props.xy.interpolate(trans2) }}></animated.div>
                               </>
                               :
                               '' 
                            }
                            {
                                el === 1?
                                <>
                                    <animated.div className="ball" style={{ transform: props.xy.interpolate(trans1) }}></animated.div>
                                    <animated.div className="sportsman" style={{ transform: props.xy.interpolate(trans2) }}></animated.div>
                                </>
                                :
                                ''
                            }
                            {
                               el === 2?
                               <>
                                   <animated.div className="sportsman" style={{ transform: props.xy.interpolate(trans1) }}></animated.div>
                                   <animated.div className="ball" style={{ transform: props.xy.interpolate(trans3) }}></animated.div>
                                   <animated.div className="light" style={{ transform: props.xy.interpolate(trans2) }}></animated.div>
                               </>
                               :
                               '' 
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
                <SportWrappwer>
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
                        className="sport-iframe"
                    >

                    </iframe>
                </SportWrappwer>
                :
                ''
            }
        </Wrapper>
    )
};

export default Page;