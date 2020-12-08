import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Inner = styled.div`
    width: 1200px;
    margin: 0 auto;
`;

const Page = () => {
    return (
        <Wrapper>
            <Inner>
                <h1>我是忘记密码页</h1>
            </Inner>
        </Wrapper>
    )
};

export default Page;