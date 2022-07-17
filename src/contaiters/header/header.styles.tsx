import styled, { css } from 'styled-components';

export const Box = styled.header`
    width: 100%;
    background: #F5F5F6;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 2px 12px rgba(50, 57, 66, 0.08);
`;

export const List = styled.ul`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`;

export const Item = styled.li`
    margin:0;
    padding: 0;
    text-indent: 0;
    list-style-type: none;
`;

export const Link = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    text-decoration: none;
    
    &:hover {
        
    }
`;
