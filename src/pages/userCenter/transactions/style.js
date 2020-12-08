import styled from 'styled-components';

export const PaneWrapper = styled.div`
    width: 100%;
    padding: 25px 20px;
    .toolbar {
        height: 35px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;

        .text {
            font-size: 12px;
            font-weight: normal;
            color: ${props => props.theme.userCenter.fontColor};
            margin: 0 10px;

            &:first-child {
                margin-left: 0;
            }
        }

        .search {
            margin-left: 10px;
            cursor: pointer;
        }
    }

    .table-zone {
        height: 100%;
        margin-top: 20px;
        background-color: #252627;
        margin-bottom: 10px;
        .ant-pagination {
            margin-top: 20px;
        }
    }
    .tip {
        font-family: ArialMT;
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        line-height: 18px;
        letter-spacing: 0px;
        color: #8c8d8d;
    }
`