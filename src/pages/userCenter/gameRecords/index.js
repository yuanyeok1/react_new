import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Bets from './bets';
import Trace from './trace';
import Third from './third';
import { useLocation } from "react-router-dom";
import { go } from '@/utils';
import {MyTabs} from '@/components/usercenter/myComponents';

const { TabPane } = MyTabs;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Wrapper = styled.div`
    width: 100%;
    height: 858px;
    background-color: #191a1b;
    color:${props => props.theme.userCenter.fontColor};
`;

const Page = () => {
    const query = useQuery();
    const [currentTab, setCurrentTab] = useState(1);

    useEffect(() => {
        let tab = query.get('tab');

        if (!tab) {
            go('/userCenter/gameRecords?tab=1');
        } else {
            setCurrentTab(tab);
        }
    }, [setCurrentTab, query]);

    const onTabChanged = (value) => {
        go('/userCenter/gameRecords?tab=' + value);
    };
    
    return (
        <Wrapper>
            <MyTabs activeKey={currentTab} onChange={onTabChanged}>
                <TabPane tab="彩票投注" key="1">
                    <Bets />
                </TabPane>

                <TabPane tab="彩票追号" key="2">
                    <Trace />
                </TabPane>

                <TabPane tab="三方平台" key="3">
                    <Third />
                </TabPane>
            </MyTabs>
        </Wrapper>
    )
};

export default Page;