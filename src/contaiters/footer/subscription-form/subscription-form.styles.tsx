import styled, { css } from 'styled-components';

export const FormField = styled.div`
    display: flex;
    gap: 16px;
    align-items: baseline;
    position: relative;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const CheckboxBox = styled.div`
    left: 0;
    top: calc(100% + 24px);
    position: absolute;
`;
