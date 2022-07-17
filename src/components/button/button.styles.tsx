import styled, { css } from 'styled-components';

export const Box = styled.button<{ disabledView: boolean; size: string }>`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    background: #323942;
    border-radius: 5px;
    color: #fff;
    width: ${({ size }) => size};
    height: 56px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
    box-sizing: border-box;
    cursor: pointer;
    border: none;
    padding: 0 20px;
    
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
    
    &:active {
        ${({ disabledView }) => !disabledView && css`
            transform: translateY(2px);
        `}
    }

    ${({ disabledView }) => disabledView && css`
        background: #495563;
        color: #636E7A;
        pointer-events: none;
    `}
`;
