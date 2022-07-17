import styled, { css } from 'styled-components';

export const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 26px;
    justify-content: space-between;
`;

export const FilterBox = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 26px;
`;

export const SelectBox = styled.div`
    width: 280px;
`;

export const HiddenText = styled.div`
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 500px;
`;

export const Subtitle = styled.div`
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    margin-bottom: 40px;
    color: #323942;
`;