import styled from 'styled-components';

export const Box = styled.a`
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    background: #323942;
    border-radius: 5px;
    color: #fff;
    height: 56px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: none;
    box-sizing: border-box;
    cursor: pointer;
    border: none;
    position: absolute;
    top: -200px;
    left: 2px;
    transition: top 0.2s;
    padding: 0 16px;
    z-index: 1;

    &:hover {
        background: #272C33;
    }

    &:focus:not(:focus-visible) {
        outline: 0;
    }
    
    &:focus {
        top: 20px;
        left: 50px;
    }

    &:focus,
    &:focus-visible {
        outline: 2px solid #338FFC;
        outline-offset: 2px;
    }

    &:active {
        transform: translateY(2px);
    }
`;
