import styled from 'styled-components';

const MyButton = styled.div`
    width: ${props => (props.width? props.width : 150)}px;
    height: ${props => (props.height? props.height : 30)}px;
    line-height: ${props => (props.height? props.height : 30)}px;
    background: linear-gradient(136deg, #5981f8 0%, #112bc2 100%);
    border-radius: 20px;
    color: #fff;
    font-size: 16px;
    text-align: center;
    cursor: pointer;

    &:hover {
        color: red;
    }
`;

export default MyButton;