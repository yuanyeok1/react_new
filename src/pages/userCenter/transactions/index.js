import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'
import { useLocation } from "react-router-dom";
import { go } from '@/utils';
import { MyTabs } from '@/components/usercenter/myComponents';
import Deposit from './panes/deposit'
import Transfer from './panes/transfer'
import Withdrawl from './panes/withdrawl'
const { TabPane } = MyTabs;

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Wrapper = styled.div`
    width: 100%;
    height: 858px;
    background-color: #191a1b;
    color: #FFF;
`;

export default function UserCenterTransaction (props) {
    const { t } = useTranslation()
    const query = useQuery();
    const [currentTab, setCurrentTab] = useState(1);

    useEffect(() => {
        let tab = query.get('tab');

        if (!tab) {
            go('/userCenter/transactions?tab=1');
        } else {
            setCurrentTab(tab);
        }
    }, [setCurrentTab, query]);

    const onTabChanged = (value) => {
        go('/userCenter/transactions?tab=' + value);
    };
    
    return (
        <Wrapper>
            <MyTabs activeKey={currentTab} onChange={onTabChanged}>
                <TabPane tab={t('personCenter.transactions.title.depositRecord')} key="1">
                    <Deposit />
                </TabPane>

                <TabPane tab={t('personCenter.transactions.title.transferRecord')} key="2">
                    <Transfer />
                </TabPane>

                <TabPane tab={t('personCenter.transactions.title.withdrawlRecord')} key="3">
                    <Withdrawl />
                </TabPane>
            </MyTabs>
        </Wrapper>
    )
};
