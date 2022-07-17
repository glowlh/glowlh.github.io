import styled, { css } from 'styled-components';

export const Box = styled.a`
    width: 40px;
    height: 40px;
    flex: none;
    border-radius: 50%;
    background: #323942;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: #fff;
    text-decoration: none;

    &:hover {
        background: #272C33;
    }

    &:focus:not(:focus-visible) {
        outline: 0;
    }

    &:focus,
    &:focus-visible {
        outline: 2px solid #338FFC;
        outline-offset: 2px;
    }
`;
