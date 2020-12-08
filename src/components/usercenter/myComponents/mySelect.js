import styled from 'styled-components';
import { Select } from 'antd';

const MySelect = styled(Select)`
    .ant-select-selector {
        background-color: #383a3c !important;
        border-radius: 18px !important;
        border: 0 !important;
        box-shadow: none !important;

        .ant-select-selection-item {
            color: ${props => props.theme.userCenter.fontColor};
        }
    }

    .ant-select-arrow {
        color: ${props => props.theme.userCenter.fontColor};
    }
`;

export default MySelect;

