import React, { FC, SVGAttributes } from 'react';
import { Telegram, Mail } from 'vienna.icons';
import { H2, RoundIconLink } from '../../components';
import { Box, Wrapper, Socials } from './footer.styles';
import { SubscriptionForm } from './subscription-form';

export interface FacebookProps extends SVGAttributes<SVGElement> {
    [key: string]: any;
    size?: 'xs' | 's' | 'm' | 'l' | 'xl' | number;
    color?: string;
}

const sizes: any = { xs: 12, s: 16, m: 20, l: 24, xl: 32 };
export const Facebook: React.FC<FacebookProps> = (props): JSX.Element => {
    const { color = 'currentColor', size = 'm', ...attrs } = props;
    const d = sizes[size] || size;

    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 20' width={d} height={d} fill={color} {...attrs}>
            <defs />
            <path d='M11 9v3a1 1 0 00.293.707l2 2 1.414-1.414L13 11.586V9h-2z' />
            <path
                fillRule='evenodd'
                d='M9 2C6.79086 2 5 3.79086 5 6V8.5C5 9.05229 4.55228 9.5 4 9.5H2V11.5H4C4.55228 11.5 5 11.9477 5 12.5V18H7V12.5C7 11.9477 7.44772 11.5 8 11.5H10.2192L10.7192 9.5H8C7.44772 9.5 7 9.05229 7 8.5V6C7 4.89543 7.89543 4 9 4H11V2H9ZM3 6C3 2.68629 5.68629 0 9 0H12C12.5523 0 13 0.447715 13 1V5C13 5.55228 12.5523 6 12 6H9V7.5H12C12.3079 7.5 12.5987 7.64187 12.7882 7.88459C12.9777 8.1273 13.0448 8.44379 12.9701 8.74254L11.9701 12.7425C11.8589 13.1877 11.4589 13.5 11 13.5H9V19C9 19.5523 8.55228 20 8 20H4C3.44772 20 3 19.5523 3 19V13.5H1C0.447715 13.5 0 13.0523 0 12.5V8.5C0 7.94772 0.447715 7.5 1 7.5H3V6Z'
                clipRule='evenodd'
            />
        </svg>
    );
};

export const Footer: FC = () => {
    return (
        <Box>
            <Wrapper>
                <div>
                    <H2 size='l' id='socials'>Социнальные сети</H2>
                    <Socials role='group' aria-labelledby='socials'>
                        <RoundIconLink href='mailto:mail@gmail.com' aria-label='Почта'><Mail /></RoundIconLink>
                        <RoundIconLink href='https://t.me/neiskluchenie' aria-label='Telegram'><Telegram /></RoundIconLink>
                        <RoundIconLink href='https://www.facebook.com/' aria-label='Facebook'><Facebook /></RoundIconLink>
                    </Socials>
                </div>
                <SubscriptionForm />
            </Wrapper>
        </Box>
    )
}
