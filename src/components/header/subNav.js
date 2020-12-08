import React from 'react';
import styled from 'styled-components';
import { imgSuffix } from '@/utils/';
import '@/assets/svgsprite/home.js';
//import SvgIcon from '@/components/svgIcon';
import '@/assets/svgsprite/home.js';
let img_sports = require('@/assets/images/home/img_sports.png' + imgSuffix);
let img_live = require('@/assets/images/home/img_live.png' + imgSuffix);
let img_esports = require('@/assets/images/home/img_esports.png' + imgSuffix);
let img_slots = require('@/assets/images/home/img_slots.png' + imgSuffix);
let small_bg = require('@/assets/images/home/small_bg.png' + imgSuffix);
let jisu_bg = require('@/assets/images/home/jisu_bg.png' + imgSuffix);
let subNav_btn_bg = require('@/assets/images/home/subNav_btn_bg.png' + imgSuffix);

const Wrapper = styled.div`
    width: 100%;
`;
const sportList = [
    {
        name: 'SBOBET 体育',
        type: 'sbobet',
    },
    {
        name: 'SBO 体育',
        type: 'sbo',
    },
    {
        name: 'IM 体育',
        type: 'im',
    },
];
const liveList = [
    {
        name: 'Sexy 真人',
        type: 'sexy',
    },
    {
        name: 'AG 真人',
        type: 'ag',
    },
    {
        name: 'ebet 真人',
        type: 'ebet',
    },
    {
        name: 'CQ9 真人',
        type: 'cq9',
    },
];
const slotsList = [
    {
        name: 'PP 电子',
        type: 'pp',
    },
    {
        name: 'PT 电子',
        type: 'pt',
    },
    {
        name: 'SW 电子',
        type: 'sw',
    },
    {
        name: 'CQ9 电子',
        type: 'cq9',
    },
];
const esportList = [
    {
        name: '沙巴 电竞',
        type: 'sb',
    },
    {
        name: 'IM 电竞',
        type: 'im',
    },
]
const list = {
    sports: sportList,
    live: liveList,
    slots: slotsList,
    esports: esportList,
};

const SubNav = ({ type }) => {
    return (
        <Wrapper>
            <SwitchDom type={type}></SwitchDom>
        </Wrapper>
    )
};

const SwitchDom = ( {type} ) => {
    if(type === 'sports' || type === 'esports' || type === 'slots' || type === 'live'){
        return <Picture type={type} ></Picture>
    }else if(type === 'jisucai'){
        return <Jisucai></Jisucai>
    }else{
        return <LotteryList type={type}></LotteryList>;
    }
}

const PictureWrapper =  styled.div`
    text-align: center;
    .item{
        display: inline-block;
        width: 288px;
        height: 200px;
        margin: 40px 10px;
        padding-top: 185px;
        .btn{
            width: 275px;
            height: 46px;
            line-height: 38px;
            color: #fff;
            &:hover{
                background: url(${subNav_btn_bg}) no-repeat;
                background-size: 100% 100%;
            }
        }
    }
    &.sports{
        .item{
            background: url(${img_sports}) no-repeat;
            background-position: 54px 0;
            &.sbo{ background-position: -195px 0;}
            &.im{ background-position: -434px 0;}
        }
    }
    &.live{
        .item{
            background: url(${img_live}) no-repeat;
            background-position: 45px 0;
            &.ag{ background-position: -207px 0; }
            &.ebet{ background-position: -449px 0; }
            &.cq9{ background-position: -700px 0; }
        }
    }
    &.slots{
        .item{
            background: url(${img_slots}) no-repeat;
            background-position: 62px 0;
            &.pt{background-position: -176px 0;}
            &.sw{background-position: -425px 0;}
            &.cq9{background-position: -668px 0;}
        }
    }
    &.esports{
        .item{
            background: url(${img_esports}) no-repeat;
            background-position: 30px 0; 
            &.im{ background-position: -240px 0; }
        }
    }
    
`;
const Picture = ( {type} ) => {
    let items = list[type];
    return(
        <PictureWrapper className={type}>
            {items.map( (item,index) => {
                return(
                    <div key={index} className={'item '+(item.type)}>
                        <div className="btn">{item.name}</div>
                    </div>
                )
            })}
        </PictureWrapper>
    )
}

const LotteryListWrapper = styled.div`
    position: relative;
    padding-top: 20px;
    &:before{
        content: '';
        display: inline-block;
        position: absolute;
        bottom: -33px;
        left: -65px;
        width: 65px;
        height: 33px;
        background: url(${small_bg}) no-repeat;
    }
    .redBg{
        z-index: 1;
        position: absolute;
        top: 0;
        left: -57px;
        width: 57px;
        height: 100%;
        background: linear-gradient(135deg,transparent 8px, #cf2a2a 0);
    }
    .item{
        position: relative;
        
    }
    .left{
        z-index: 2;
        position: absolute;
        top: 0;
        left: -55px;
        width: 55px;
        text-align: center;
    }
    .right{
        padding-left: 20px;
        .i{
            float: left;
            display: inline-block;
            width: 150px;
            line-height: 30px;
            font-size: 13px;
            &:hover{
                color: #0f0;
            }
        }
    }
`;
const lotteryType = ['z1','z2','z3','z4','z5','z6','zr'];
const lotteryData = {
    'z1': [
        {
            name: '周一彩1',
            type: 'c1'
        },
        {
            name: '周一彩2',
            type: 'c2'
        },
    ],
    'z2': [
        {
            name: '周二彩1',
            type: 'c1'
        },
        {
            name: '周2彩2',
            type: 'c2'
        },
    ],
    'z3': [
        {
            name: '周3彩1',
            type: 'c1'
        },
        {
            name: '周3彩2',
            type: 'c2'
        },
    ],
    'z4': [
        {
            name: '周4彩1',
            type: 'c1'
        },
        {
            name: '周4彩2',
            type: 'c2'
        },
    ],
    'z5': [
        {
            name: '周5彩1',
            type: 'c1'
        },
        {
            name: '周5彩2',
            type: 'c2'
        },
    ],
    'z6': [
        {
            name: '周6彩1',
            type: 'c1'
        },
        {
            name: '周6彩2',
            type: 'c2'
        },
    ],
    'zr': [
        {
            name: '周r彩1',
            type: 'c1'
        },
        {
            name: '周r彩2',
            type: 'c2'
        },
    ],
};
const LotteryList = ( {type} ) => {
    return(
        <LotteryListWrapper>
            <div className="redBg"></div>
            {lotteryType.map( (item,index) => {
                return(
                    <div className="item clearfix"  key={index}>
                        <div className="left">
                            {item}
                        </div>
                        <div className="right">
                            {lotteryData[item].map( (lottery,index) => {
                                return(
                                    <div className="i" key={index}>
                                        {lottery.name}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}

        </LotteryListWrapper>
    )
} 

const JisucaiWrapper = styled.div`
    width: 161px;
    height: 100px;
    padding: 16px 0 0 6px;
    background: url(${jisu_bg}) no-repeat;
    background-size: 100% 100%;
    .item{
        line-height: 30px;
        text-align: center;
    }
`;
const jisuLotteryList = [{
    title: '牛逼彩1',
    name: 'niubi1'
},{
    title: '牛逼彩2',
    name: 'niubi2'
}];
const Jisucai = () => {
    // const [arr,setArr] = useState([])
    // const [s,setS] = useState({})
    // useEffect(()=>{
        
    //     console.log(1)
    //     setTimeout(()=>{
    //         setArr([1,2,3])
    //         setS({x:1})
    //     },1000)
        
    // },[],{})
    return(
        <JisucaiWrapper>
            {jisuLotteryList.map( (item,index) => {
                return(
                    <div className="item" key={index}>{item.title}</div>
                )
            })}
        </JisucaiWrapper>
    )
}

export default React.memo(SubNav);