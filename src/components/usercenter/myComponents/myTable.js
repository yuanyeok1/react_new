import { Table } from 'antd';
import styled from 'styled-components';

const MyTable = styled(Table)`
    .ant-table {
        height: 550px;
        background: transparent;

        .ant-table-cell {
            background: #252627;
            padding: 0 16px;
            border: 0;
            color: ${props => props.theme.userCenter.fontColor};
        }
    
        .ant-table-thead {
            tr {
                height: 50px;
                
                th {
                    border-bottom: solid 1px #383a3c;
                }
            }
        }
    
        .ant-table-tbody {
            .ant-table-row {
                height: 50px;
    
                &:hover {
                    td {
                        background: #383a3c;
                    }
                }
    
                td {
                    font-size: 12px;
                    border-bottom: solid 1px #383a3c;
                }
            }
        }
    }

    .ant-table-empty {
        .ant-table-tbody {
            .ant-table-cell {
                .ant-empty-normal {
                    .ant-empty-description {
                        color:${props => props.theme.userCenter.fontColor};
                    }
                }
            }

            .ant-table-placeholder {
                &:hover {
                    td {
                        background: #252627;
                    }
                }
            }
        }
    }

    .ant-pagination {
        .ant-pagination-item {
            border: 0;
            background-color: #383a3c;
        }

        .ant-pagination-item-active {
            background-color: #cf2a2a;
        }

        .ant-pagination-prev, .ant-pagination-next, .ant-pagination-jump-prev, .ant-pagination-jump-next {
            .ant-pagination-item-link {
                .ant-pagination-item-ellipsis {
                    color: ${props => props.theme.userCenter.fontColor};
                }

                .ant-pagination-item-link-icon {
                    color: ${props => props.theme.userCenter.fontColor};
                }
            }
        }
    }
`;

export default MyTable;
