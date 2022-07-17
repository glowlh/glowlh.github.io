import styled, { css } from 'styled-components';

const resetStyles = () => {
    return css`
        line-height: 1;
        margin: 0;
        font-size: 24px;
        font-weight: 400;
    `;
};

const useSize = ({ size }: HeadingProps) => {
    switch (size) {
        case 'xl': {
            return css`
                font-size: 42px;
                line-height: 1.5;
                margin-bottom: 30px;
            `;
        }
        case 'l': {
            return css`
                font-size: 32px;
                line-height: 1.5;
                margin-bottom: 20px;
            `;
        }
        case 'm': {
            return css`
                font-size: 30px;
                line-height: 1.5;
                margin-bottom: 16px;
            `;
        }
        case 's': {
            return css`
                font-size: 24px;
                line-height: 1.5;
                margin-bottom: 8px;
            `;
        }
        default: return;
    }
};

type size = 's' | 'm' | 'l' | 'xl';
interface HeadingProps {
    size?: size;
}

export const H1 = styled.h1<HeadingProps>`
    ${resetStyles}
    ${useSize}
`;

export const H2 = styled.h2<HeadingProps>`
    ${resetStyles}
    ${useSize}
`;

export const H3 = styled.h3<HeadingProps>`
    ${resetStyles}
    ${useSize}
`;
