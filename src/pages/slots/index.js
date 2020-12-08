import React,{ useState, useEffect } from 'react';
import styled from 'styled-components';
import { imgSuffix } from '@/utils/';
import {Menu,Modal} from 'antd';
import { useTranslation } from 'react-i18next';
import '@/assets/svgsprite/slot.js';
import SvgIcon from '@/components/svgIcon';
const slotBg = require('@/assets/images/slot/bg.jpg' + imgSuffix);
const navBg = require('@/assets/images/slot/nav-bg.png' + imgSuffix);
const navItem = require('@/assets/images/slot/nav-item.png' + imgSuffix);
const itemActive = require('@/assets/images/slot/nav-active.png' + imgSuffix);
const listImgs = [];
[...Array(6)].map((item,i) =>{
    return [...Array(6)].map(() =>{
        return listImgs.push(require('@/assets/images/slot/games/'+(i+1)+'.png' + imgSuffix))
    })
});
const Wrapper = styled.div`
    height: 1003px;
    background: url(${slotBg}) center/100% 100% no-repeat;
    display: flex;
    .nav {
        width: 326px;
        height: 100%;
        background: url(${navBg}) center no-repeat;
        padding-top: 40px;
        li {
            display: flex;
            height: 97px;           
            font-size: 16px;
            font-family: Arial;
            font-weight: bold;
            color: #fff;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            box-sizing: border-box;
            border-bottom: 1px solid #383A3C;
            transition: all 0.5s;
            &:hover {
                background: url(${itemActive}) center no-repeat;
            }
            .icon-game {
                width: 73px;
                height: 73px;
                background: url(${navItem}) -11px -11px no-repeat;
                margin-right: 20px;
            }
            &:nth-child(2) {
                .icon-game {
                    background-position: -11px -95px;
                }
            }
            &:nth-child(3) {
                .icon-game {
                    background-position: -11px -179px;
                }
            }
            &:nth-child(4) {
                .icon-game {
                    background-position: -11px -263px;
                }
            }
            &:nth-child(5) {
                .icon-game {
                    background-position: -11px -347px;
                }
            }
            &:nth-child(6) {
                .icon-game {
                    background-position: -11px -431px;
                }
            }
            &:nth-child(7) {
                .icon-game {
                    background-position: -11px -515px;
                }
            }
            span {
                width: 80px;
            }
        }
        li.active {
            background: url(${itemActive}) center no-repeat;
        }

    }
    .main {
        flex: 1;
        height: 100%;
        padding: 40px; 0 0 65px;
        font-family: Arial;
        .menu {
            width: 83.56%;
            height: 40px;
            display: flex;
            align-items: center;
            margin-bottom: 40px;
            .svg-icon {
                margin-right: 6px;
            }
            .game-name {
                width: 230px;            
                font-size: 30px;
                margin-right: 7px;
                line-height: 40px;
                font-weight: bold;
                color: #FFFFFF;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .menu-con {
                flex: 1;
                height: 100%;
                display: flex;
                justify-content: space-between;
                .ant-menu-horizontal {
                    line-height: 38px;
                    background: none;
                    border: 0;
                    color: #fff;
                    font-size: 14px;
                    font-family: Arial;
                    .ant-menu-item {
                        margin: 0 40px 0 0;
                        &:hover {
                            color: #CF2A2A;
                            border-bottom: 2px solid #CF2A2A;
                            .svg-icon {
                                use {
                                    fill: #CF2A2A;
                                }
                            }
                        }
                        .svg-icon {
                            use {
                                fill: #fff;
                                transition: all 0.3s;
                            }
                        }
                    }
                    .ant-menu-item-selected {
                        color: #CF2A2A;
                        border-bottom: 2px solid #CF2A2A;
                        .svg-icon {
                            use {
                                fill: #CF2A2A;
                            }
                        }
                    }
                }
                .search {
                    width: 40.55%;
                    position: relative;
                    input {
                        width: 100%;
                        height: 38px;
                        border-radius: 19px;                      
                        background: #232425;
                        border: 1px solid #8C8D8D;
                        opacity: 0.5;
                        font-size: 14px;                       
                        color: #8C8D8D;
                        padding: 11px 24px;
                        box-sizing: border-box;
                    }
                    .svg-icon {
                        position: absolute;
                        right: 20px;
                        top: 0;
                        bottom: 0;
                        margin: auto;
                        cursor: pointer;
                    }
                }
            }
        }
        .content {
            width: 90%;
            display: flex;
            flex-wrap: wrap;
            height: 640px;
            overflow-y: scroll;
            &::-webkit-scrollbar {
                width: 8px;
                background-color: rgba(25, 26, 27, 0.5);
            }
            &::-webkit-scrollbar-thumb {
                border-radius: 4px;
                background-color: #8c8d8d;
            }
            li {
                margin: 0 40px 20px 0;
                cursor: pointer;
                position: relative;               
                background: #191A1B;
                box-sizing: border-box;
                border: 1px solid rgba(25, 26, 27, 0);
                transition: all 0.3s;
                &:hover {
                    border-color: #CF2A2A;
                    background: #CF2A2A;
                    .img-box {
                        transform: rotateY(360deg);
                    }
                }
                .img-box {
                    width: 180px;
                    height: 120px;
                    transition: all 0.3s;
                }
                .game-name {
                    display: block;
                    width: 180px;
                    line-height: 40px;
                    text-align: center;                   
                    font-size: 14px;
                    font-family: Arial;
                    color: #fff;
                    margin-bottom: 0;
                }
                .svg-icon {
                    position: absolute;
                    top: 4px;
                    right: 4px;
                    use {
                        fill: #fff;
                    }
                }
                .active {
                    use {
                        fill: #fdae3e;
                    }
                }
            }
        }
    }
    .my-modal {
        box-shadow: 0px 0px 20px 0px rgba(4, 4, 4, 0.6);
        font-size: 16px;        
        font-family: Arial;
        .ant-modal-content {
            height: 176px;
            background: #191A1B;
            border: 1px solid #cf2a2a;
            .ant-modal-header {           
                background: rgba(207, 42, 42, 0.5);
                border: 0;
                .ant-modal-title {
                    font-family: Arial;
                    font-weight: bold;
                    color: #fff;
                }           
            }
            .ant-modal-body {
                color: ${props => props.theme.userCenter.fontColor};
                text-align: left;
                padding: 40px 110px 0;
                line-height: 24px;
            }
            .anticon-close{
                transition: all .3s linear;
                &:hover{
                    transform: rotate(90deg);
                }
                svg{
                    color: ${props => props.theme.uiColor};
                    font-size: 20px;
                }
            }
        }
    }
`;
const menuIcons = ['all','recommend','star'];
const Page = () => {
    const { t } = useTranslation();
    const nav = [t('slot.nav.all'),t('slot.nav.ptdianzi'),t('slot.nav.swdianzi'),t('slot.nav.cq9dianzi'),t('slot.nav.ppdianzi'),t('slot.nav.buyudianzi'),t('slot.nav.gpi')];
    const menu = [t('slot.menu.all'),t('slot.menu.tuijian'),t('slot.menu.shoucang')];
    const placeholder = t('slot.placeholder');
    let list = [true,false,false,false,false,false,false];
    const [navList,setNavList] = useState(list);
    // const [gameName,setGameName] = useState(nav[0]);
    const [current,setCurrent] = useState('0');
    const [searchValue,setSearchValue] = useState('');
    const [modalIsShow,setModalIsShow] = useState(false);
    const [navIndex,setNavIndex] = useState(0);
    useEffect(() => {
        console.log('navIndex:',navIndex);
        console.log('nav',nav);
    });
    const changeGame = (index) => {
        let newNavList = [false,false,false,false,false,false,false];
        setNavList(newNavList);
        newNavList[index] = true;
        setNavList(newNavList);
        setNavIndex(index);
        // setGameName(nav[index]);
        console.log('点击左侧导航');
    }
    const menuClick = (e) => {
        console.log('click:',e);
        setCurrent(e.key);
    }
    const collect = (e) => {
        console.log('e:',e);
    }
    const searchClick = () => {
        console.log('searchValue:',searchValue);
        setModalIsShow(true);
    }
    const closeModal = () => {
        setModalIsShow(false);
    }
    return (
        <Wrapper>
            <div className="nav">
                <ul>
                    {
                        nav.map((item,index) =>{
                            return <li key={index} className={navList[index]?'active':''}
                                        onClick = {() => {
                                            changeGame(index);
                                        }}
                                    >
                                        <i className="icon-game"/>
                                        <span>{item}</span>
                                    </li>  
                        })
                    }
                </ul>
            </div>
            <div className="main">
                <div className="menu">
                    <SvgIcon link="arrow" style= {{width: '16px',height: '23px'}} color="#CF2A2A"/>
                    <span className="game-name">{nav[navIndex]}</span>
                    <div className="menu-con">
                                <Menu onClick={menuClick} selectedKeys={current} mode="horizontal">
                                    {
                                        menu.map((item,index) =>{
                                            return (
                                                    <Menu.Item  key={index}>
                                                        <SvgIcon link={menuIcons[index]} size="15" />
                                                        {item}
                                                    </Menu.Item>)
                                        })
                                    }
                                </Menu>
                                <div className="search">
                                    <input type="text" value={searchValue} onChange={({target}) => setSearchValue(target.value)} placeholder={placeholder}/>
                                    <SvgIcon link="search" onClick={searchClick} style= {{width: '19px',height: '19px'}} color="#fff"/>
                                </div>
                    </div>
                </div>
                <ul className="content">
                    {
                        listImgs.map((img,i) =>{
                            return (
                                <li key={i}>
                                    <div className="img-box" style={{background: 'url('+img+') center no-repeat'}}></div>
                                    <a className="game-name" href={'https://www.baidu.com'} target="_blank" rel="noopener noreferrer">Cung hoàng đạo</a>
                                    <SvgIcon link="star" style= {{width: '22px',height: '22px'}} className={true?'active':''} onClick={() =>{
                                        collect(img);
                                    }}/>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <Modal
                title={t('slot.modal.title')}
                visible={modalIsShow}
                onCancel={closeModal}
                footer={null}
                centered={true}
                width="620px"
                height="176px"
                className="my-modal"
                getContainer={false}
            >
                <p dangerouslySetInnerHTML={{__html: t('slot.modal.content')}} />
            </Modal>
        </Wrapper>
    )
};

export default Page;