import styled, { css } from 'styled-components';

export const Input = styled.input`
    user-select: none;
    
    & + label {
        user-select: none;
    }
    
    &:not(:checked),
    :checked {
        position: absolute;
        left: -99999px;
        opacity: 0.01;
    }

    &:not(:checked) + label,
    &:checked + label {
        position: relative;
        display: flex;
        align-items: center;
        padding-left: 32px;
        font-size: 16px;
        line-height: 19px;
        height: 24px;
        cursor: pointer;
    }

    &:not(:checked) + label:before,
    &:checked + label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 24px;
        height: 24px;
        border: 1px solid #aaa;
        background: #FFF;
        border-radius: 4px;
        box-sizing: border-box;
    }

    &:not(:checked) + label:after,
    :checked + label:after {
        content: '✔';
        position: absolute;
        top: 55%;
        left: 5px;
        font-size: 20px;
        color: #323942;
        line-height: 0;
    }

    &:not(:checked) + label:after {
        display: none;
    }

    &:checked + label:after {
        display: block;
    }

    &:focus:not(:focus-visible) + label:before {
        outline: 0;
    }

    &:focus + label:before,
    :focus-visible + label:before {
        outline: 2px solid #338FFC;
        outline-offset: 2px;
    }
    //
    //&:checked:focus + label:before,
    //:not(:checked):focus + label:before {
    //    box-shadow: inset 0 1px 3px rgba(0, 0, 0, .1), 0 0 0 6px rgba(203, 34, 237, .2);
    //}
`;
