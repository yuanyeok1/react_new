import styled from 'styled-components';
import { Tabs } from 'antd';

const MyTabs = styled(Tabs)`
    .ant-tabs-nav {
        height: 56px;

        .ant-tabs-nav-list {
            .ant-tabs-tab {
                margin: 0 30px;
                color: ${props => props.theme.userCenter.fontColor};

                &:hover {
                    color: #FFF;
                }

                .ant-tabs-tab-btn:focus, .ant-tabs-tab-remove:focus, .ant-tabs-tab-btn:active, .ant-tabs-tab-remove:active {
                    color: #FFF;
                }
            }

            .ant-tabs-tab-active {
                .ant-tabs-tab-btn {
                    color: #FFF;
                    font-weight: 500;
                }
            }

            .ant-tabs-ink-bar {
                background: #cf2a2a
            }
        }
    }

    & > .ant-tabs-nav::before, & > div > .ant-tabs-nav::before {
        border-bottom: 1px solid #383a3c;
    }

    & > .ant-tabs-nav, & > div > .ant-tabs-nav {
        margin: 0;
    }
`;

export default MyTabs;
