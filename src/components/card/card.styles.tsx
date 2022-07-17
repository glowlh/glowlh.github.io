import styled, { css } from 'styled-components';

export const Box = styled.div`
    background: #FFFFFF;
    border: 1px solid #000000;
    border-radius: 5px;
    width: 31%;
    flex: 1 0 300px;
`;

export const Image = styled.div`
    width: 100%;
    height: 240px;
    background-color: #F5F5F6;
    background-image: url('https://picsum.photos/800/800?grayscale');
    background-repeat: no-repeat;
    background-position: center;
`;

export const Info = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
`;

export const PriceInfo = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;
`;

export const Price = styled.span`
    font-size: 32px;
    line-height: 39px;
    font-weight: 600;
    color: #FF0000;
`;

export const OldPrice = styled.span`
    font-weight: 400;
    font-size: 24px;
    line-height: 1;
    color: #D3D3D3;
    text-decoration: line-through;
`;