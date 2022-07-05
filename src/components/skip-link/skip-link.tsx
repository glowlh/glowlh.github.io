import React, {FC, HTMLAttributes} from 'react';
import { Box } from './skip-link.styles';

interface SkipLinkProps extends HTMLAttributes<HTMLAnchorElement>{
    href: string;
}

export const SkipLink: FC<SkipLinkProps> = (props) => {
    const { children, href, ...attrs } = props;

    return (
        <Box {...attrs} href={href}>{children}</Box>
    );
};
