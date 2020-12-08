import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Bulletin from './bulletin';
import Letter from './letter';
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
    color: ${props => props.theme.userCenter.color};
`;

const Page = () => {
    const { t } = useTranslation();
    const query = useQuery();
    const [currentTab, setCurrentTab] = useState(1);

    useEffect(() => {
        let tab = query.get('tab');

        if (!tab) {
            go('/userCenter/messages?tab=1');
        } else {
            setCurrentTab(tab);
        }
    }, [setCurrentTab, query]);

    const onTabChanged = (value) => {
        go('/userCenter/messages?tab=' + value);
    };
    
    let msg = t('personCenter.messages', { returnObjects: true });
    return (
        <Wrapper>
            <MyTabs activeKey={currentTab} onChange={onTabChanged}>
                <TabPane tab={msg[0]} key="1">
                    <Bulletin />
                </TabPane>

                <TabPane tab={msg[1]} key="2">
                    <Letter />
                </TabPane>
            </MyTabs>
        </Wrapper>
    )
};

export default Page;