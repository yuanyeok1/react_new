import styled from 'styled-components';

export default styled.div`
    .myForm {
        padding: 20px 96px 20px 0;
        .ant-form-item {
            margin-bottom: 20px;
            &:last-child {
                margin-bottom: 0;
            }
        }
        .ant-form-item-label {
            label {
                color: ${props => props.theme.userCenter.fontColor};
                letter-spacing: 0;
                height: 36px;
                line-height: 36px;
                font-size: 14px;
                font-weight: normal;
	            font-stretch: normal;
                font-family: 'ArialMT';
                margin-right: 20px;
            }
        }
        .ant-form-item-explain.ant-form-item-explain-error {
            padding-left: 20px;
        }
        .ant-empty {
            color: ${props => props.theme.userCenter.fontColor};
        }
        .ant-select {
            &-selection-search {
                padding-left: 8px;
            }
            &-selector {
                border-radius:18px;
                border-color: transparent;
                background-color: #383a3c !important;
                color: ${props => props.theme.userCenter.fontColor};
            }
            &-selection-placeholder {
                color: #8c8d8d;
            }
            &-focused {
                .ant-select-selector {
                    border-color: #cf2a2a;
                    box-shadow: 0 0 0 2px rgba(207, 42, 42, 0.2); 
                }
            }
            &-item {
                padding: 5px 18px;
            }
            &-dropdown {
                border: 1px solid #cf2a2a;
            }
            &-arrow {
                color: ${props => props.theme.userCenter.fontColor};
            }
            &-item-option-content {
                color:#8c8d8d;
            }
            &-item-option-selected:not(.ant-select-item-option-disabled) {
                background: #252627 !important;
            }
            &-item-option-active:not(.ant-select-item-option-disabled) {
                background: #252627  !important;
            }
            &-single:not(.ant-select-customize-input) .ant-select-selector {
                height: 36px;
                padding: 2px 18px;
                padding-right: 32px;
            }
        }
        .verify {
            display: flex;
            .ant-input {
                width: 190px;
                margin-right: 10px;
            }
            &-btn {
                flex-shrink: 0;
                width: 120px;
                height: 36px;
                line-height: 36px;
                background-color: #cf2a2a;
                border-radius: 18px;
                opacity: 0.6;
                transition: opacity 300ms ease-in-out;
                text-align: center;
                font-size: 12px;
                color: ${props => props.theme.userCenter.fontColor};
                cursor: pointer;
                &:hover {
                    opacity: 1;
                }                
            }
        }
        .ant-input-affix-wrapper {
            border-radius: 18px;
            background-color: #383a3c;
            border: none;
            height: 36px;
            padding: 0 11px;
        }
        .ant-input-password-icon {
            color: ${props => props.theme.userCenter.fontColor};
        }
        .ant-input {
            width: 320px;
            height: 36px;
            padding: 10px 20px;
            border-radius: 18px;
            background-color: #383a3c;
            border: none;
            color: ${props => props.theme.userCenter.fontColor};
            &:hover {
                border-color: #cf2a2a;
            }
            &:focus {
                box-shadow: none;                 
            }
            &::-webkit-input-placeholder {
                font-family: ArialMT;
                font-size: 14px;
                font-weight: normal;
                font-stretch: normal;
                letter-spacing: 0px;
                color: #8c8d8d;                
            }
        }
    }
`;