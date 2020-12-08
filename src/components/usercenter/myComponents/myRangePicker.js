import React from 'react';
import styled from 'styled-components';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { CalendarOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

const Wrapper = styled(RangePicker)`
    background-color: #383a3c;
    border-radius: 18px;
    border: 0;

    input {
        color: ${props => props.theme.userCenter.fontColor};
    }

    .ant-picker-separator {
        color: ${props => props.theme.userCenter.fontColor};
    }

    .ant-picker-range-separator {
        color: ${props => props.theme.userCenter.fontColor};
    }

    .ant-picker-input {
        input {
            text-align: center;
        }
    }
    .ant-picker-suffix {
        color: ${props => props.theme.userCenter.fontColor};
        cursor: pointer;
    }   
`;

const MyRangePicker = ({startDate, endDate, onChange}) => {
    return (
        <Wrapper
            value={[dayjs(startDate), dayjs(endDate)]}
            format={'YYYY/MM/DD'}
            separator="~"
            allowClear={false}
            suffixIcon={<CalendarOutlined twoToneColor="#FFF" />}
            onChange={onChange}
        />
    );
};

export default MyRangePicker;