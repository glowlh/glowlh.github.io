import styled, { css } from 'styled-components';

export const Box = styled.div`
    box-sizing: border-box;
`;

export const TabsList = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 16px;
`;

export const Tab = styled.button<{ active: boolean }>`
    padding: 8px 16px;
    border: none;
    background: none;
    border-bottom: 2px solid #E9E9E9;
    flex: none;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    cursor: pointer;
    
    &:hover {
        background: #EBECED;
    }
    
    ${({ active }) => active && css`
        border-color: #323942;
    `}

    &:focus:not(:focus-visible) {
        outline: 0;
    }

    &:focus,
    &:focus-visible {
        outline: 2px solid #338FFC;
    }
`;

export const TabsItem = styled.div<{ value: string; label: string }>`
    font-size: 16px;
    line-height: 19px;
    max-width: 1000px;
`;

export const TabPanel = styled.div`
    padding: 0 16px;
    &:focus:not(:focus-visible) {
        outline: 0;
    }

    &:focus,
    &:focus-visible {
        outline: 2px solid #338FFC;
    }
`;
