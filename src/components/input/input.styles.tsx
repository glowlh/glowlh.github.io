import styled, { css } from 'styled-components';
import { Design } from './input';

interface BoxProps {
    design: Design;
    invalid: boolean;
}

const resetInput = () => {
    return css`
        border: none;
        outline: none;
        background: none;
        padding: 0;
    `;
}

export const Box = styled.div`
    font-style: normal;
    display: flex;
    flex-direction: column-reverse;
    gap: 6px;
    position: relative;
    padding-top: 26px;
`;

export const Label = styled.label<{ displayed: boolean }>`
    font-size: 14px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    ${({ displayed }) => !displayed && css`display: none;`}
    user-select: none;
`;

export const Message = styled.span<{ invalid: boolean }>`
    font-size: 14px;
    line-height: 20px;
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
    ${({ invalid }) => invalid && css`
        color: #D13D35;
    `}
`;

const useDesign = (props: BoxProps) => {
    const { design } = props;

    if (design === 'native') {
        return css`
            background: #FFFFFF;
            border: 2px solid #000000;
            border-radius: 5px;
            padding: 14px 19px;
        `;
    }

    if (design === 'material') {
        return css`
            padding: 14px 0px;
            border-bottom: 2px solid #000000;

            &:focus + ${Label} {
                display: block;
            }
        `;
    }
}

export const InputBox = styled.input<BoxProps>`
    ${resetInput}
    ${useDesign}

    ${({ invalid }) => invalid && css`
        border-color: #D13D35;
    `}
    
    flex: none;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    &:focus:not(:focus-visible) {
        outline: 0;
    }

    &:focus,
    &:focus-visible {
        border-color: #338FFC;
    }
`;
