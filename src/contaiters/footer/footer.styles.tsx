import styled, { css } from 'styled-components';

export const Box = styled.footer`
    width: 100%;
    background: #F5F5F6;
    height: 300px;
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0px 2px 12px rgba(50, 57, 66, 0.08);
`;

export const Wrapper = styled.div`
    max-width: 1200px;
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
`;

export const Socials = styled.div`
    display: flex;
    gap: 24px;
`;
