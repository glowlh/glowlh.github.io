
import React, {FC, HTMLAttributes} from 'react';
import {Box} from './round-icon-link.styles';

interface RoundIconProps extends Omit<HTMLAttributes<HTMLAnchorElement>, ''> {
    children?: any;
    href: string;
    ['aria-label']: string;
    target?: string;
}

export const RoundIconLink: FC<RoundIconProps> = ({ children, target = '_blank', ...attrs }) => {
    return (<Box target={target} {...attrs}>
        {children}
    </Box>);
}
