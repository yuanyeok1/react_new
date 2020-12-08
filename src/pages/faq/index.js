import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import '@/assets/svgsprite/helper.js';
import SvgIcon from '@/components/svgIcon';
import { imgSuffix } from '@/utils/';
import { useTranslation } from 'react-i18next';
// import Loadable from 'react-loadable';
import Content from './content';
import OtherContent from './otherContent';
const helpTopBg = require('@/assets/images/helper/helper-top.png' + imgSuffix);
const lineTop = require('@/assets/images/helper/line-top.png' + imgSuffix);
const bg = require('@/assets/images/helper/wenli.png' + imgSuffix);
const dtBg = require('@/assets/images/helper/tag-bg.png' + imgSuffix);
const Wrapper = styled.div`
    .helper-content {
        overflow: hidden;
        background: url(${bg}) #0a0a0a repeat;
        .helper-top {
            height: 429px;
            background: url(${helpTopBg}) center/100% 100% no-repeat;
            box-sizing: border-box;
            padding-top: 41px;
        }
        .title {
            width: 1200px;
            margin: auto;
            font-size: 30px;
            line-height: 30px;
            font-family: Arial-BoldMT;
            color: #b0b0b0;
        }
    }
`;

const Inner = styled.div`
    width: 1200px;
    margin: -330px auto 30px;
    position: relative;
    background-color: #191a1b;
    display: flex;
    color: #fff;
    &::after {
        display: block;
        content: '';
        width: 100%;
        height: 21px;
        position: absolute;
        left: 0;
        top: -21px;
        background: url(${lineTop}) center no-repeat;
    }
    .help-aside-nav {
        width: 309px;
        
        dl {
            margin-bottom: 0;
            dt {
                padding-left: 32px;
                height: 70px;
                line-height: 70px;
                cursor: pointer;
                margin-bottom: 0px;
                color: #fff;
                font-size: 14px;
                background: url(${dtBg}) center no-repeat;
                .svg-icon {
                    margin-right: 12px;
                }
            }
            dd {
                padding-left: 32px;
                height: 70px;
                line-height: 70px;
                cursor: pointer;
                margin-bottom: 0px;
                color: ${props => props.theme.userCenter.fontColor};
                font-size: 14px;
                background-color: #252627;
            }
            dd.helper-nav-active {
                color: #cf2a2a;
            }
        }
    }
    .help-content {
        flex: 1;
        color: ${props => props.theme.userCenter.fontColor};
        a {
            color: #cf2a2a;
        }
    }
`;
const Page = (props) => {
    const { t } = useTranslation();
    const navigation = {
        question: {
            title: t('helper.nav.question.title'),
            iconName: 'question',
            id: 'Question',
            content: [
                { title: t('helper.nav.question.content.Account'), id: 'Account', parentId: 'Question' },
                { title: t('helper.nav.question.content.TradeQuestion'), id: 'TradeQuestion', parentId: 'Question' },
                { title: t('helper.nav.question.content.LotteryQuestion'), id: 'LotteryQuestion', parentId: 'Question' },
                { title: t('helper.nav.question.content.LotteryRule'), id: 'LotteryRule', parentId: 'Question' },
            ]
        },
        aboutus: {
            title: t('helper.nav.aboutus.title'),
            iconName: 'about',
            id: 'Aboutus',
            content: [
                { title: t('helper.nav.aboutus.content.Userment'), id: 'Userment', parentId: 'Aboutus' },
                { title: t('helper.nav.aboutus.content.GameRespon'), id: 'GameRespon', parentId: 'Aboutus' },
                { title: t('helper.nav.aboutus.content.Privacy'), id: 'Privacy', parentId: 'Aboutus' },
                { title: t('helper.nav.aboutus.content.Concatus'), id: 'Concatus', parentId: 'Aboutus' },
            ]
        }
    }
    const content = {
            Account:t('helper.content.Account'),
            TradeQuestion: t('helper.content.TradeQuestion'),
            LotteryQuestion: t('helper.content.LotteryQuestion'),
            LotteryRule: {
                introduce: t('helper.content.LotteryRule.introduce'),
                lottery: t('helper.content.LotteryRule.lottery', {returnObjects: true})
            },
            Userment: t("helper.content.Userment"),
            GameRespon: t("helper.content.GameRespon"),
            Privacy: t("helper.content.Privacy"),
            Concatus: t("helper.content.Concatus")   
    };
    const [newHash, setNewHash] = useState('');
    const [type, setType] = useState([]);
    useEffect(() => {
        let nowHash = window.location.hash.split('#')[1] ? window.location.hash.split('#')[1] : 'Account';
        window.location.hash = nowHash;
        if (/Account|TradeQuestion|LotteryQuestion|LotteryRule/.test(nowHash)) {
            setType([true, false]);
        } else if (/Userment|GameRespon|Privacy|Concatus/.test(nowHash)) {
            setType([false, true]);
        }
        setNewHash(nowHash);
    }, [newHash]);
    const tabPage = (helpHash) => {
        setNewHash(helpHash);
        window.location.hash = helpHash;
    }
    const getNewHash = (helpHash) => {
        setNewHash(helpHash);
    }
    return (
        <Wrapper>
            <div className="helper-content">
                <div className="helper-top">
                    <h1 className="title">{t('helper.title')}</h1>
                </div>
                <Inner>
                    <ul className="help-aside-nav">
                        {
                            Object.keys(navigation).map((item, index) => {
                                return (
                                    <li className="helper-nav-quesition" key={navigation[item].id}>
                                        <dl className={["helper-nav", type[index] === true ? "helper-nav-" + navigation[item].id + "-active" : ''].join(' ')}>
                                            <dt onClick={() => {
                                                tabPage(navigation[item].content[0].id);
                                            }}>
                                                <SvgIcon link={navigation[item].iconName} color="#FFF" size="20" />
                                                {navigation[item].title}
                                            </dt>
                                            {
                                                navigation[item].content.map((con, i) => {
                                                    return (
                                                        <dd onClick={() => {
                                                            tabPage(con.id);
                                                        }} key={con.id} className={con.id === newHash ? 'helper-nav-active' : ''}>
                                                            {con.title}
                                                        </dd>
                                                    )
                                                })
                                            }
                                        </dl>

                                    </li>
                                )
                            })
                        }
                    </ul>
                    <main className="help-content">
                        {
                            newHash !== 'LotteryRule'
                                ?
                                <Content name={{ newHash, content }} getNewHash={getNewHash}/>
                                :
                                <OtherContent name={{ newHash, content }} getNewHash={getNewHash} />

                        }
                    </main>
                </Inner>
            </div>
        </Wrapper>
    )
};

export default Page;