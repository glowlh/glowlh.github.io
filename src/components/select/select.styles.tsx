import styled, { css } from 'styled-components';

export const Box = styled.div`
    position: relative;
    font-family: 'Arial';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
`;

export const Label = styled.div`
    margin-bottom: 8px;
    cursor: default;
    user-select: none;
`;

export const Select = styled.div`
    width: 100%;
    height: 50px;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 5px;
    display: inline-flex;
    align-items: center;
    padding: 0 40px 0 20px;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    user-select: none;
    
    &:focus:not(:focus-visible) {
        outline: 0;
    }

    &:focus,
    &:focus-visible {
        outline: 2px solid #338FFC;
        outline-offset: 2px;
    }
`;

export const DropList = styled.div<{ opened: boolean }>`
    position: absolute;
    z-index: 1;
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 0px 0px 5px 5px;
    top: calc(100% + 5px);
    width: 100%;
    max-height: 176px;
    overflow-y: auto;
    ${({ opened }) => !opened && css`display: none;`}
`;

export const Option = styled.div<{ active?: boolean; focused?: boolean }>`
    padding: 12px 20px;
    ${({ active }) => active && css`background: #ccf5ff;`}
    ${({ focused }) => focused && css`background: #E9E9E9;`}
    cursor: pointer;
    user-select: none;

    :hover {
        background: #E9E9E9;
    }
`;

export const Arrow = styled.div`
    position: absolute;
    top: calc(50% + 2px);
    transform: translateY(-50%);
    right: 18px;
`;
