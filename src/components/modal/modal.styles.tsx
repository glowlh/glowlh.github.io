import styled, { css } from 'styled-components';

export const Backdrop = styled.div`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
`;

export const Box = styled.div`
    min-width: 200px;
    padding: 44px 62px;
    background: #fff;
    position: relative;
    flex: none;
`;

export const CloseIcon = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    right: 15px;
    top: 20px;
`;
