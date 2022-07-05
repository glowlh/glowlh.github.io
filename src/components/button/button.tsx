import React, {FC, HTMLAttributes} from 'react';
import { Box } from './button.styles';

interface ButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'type'>{
    children?: any;
    size?: string;
    disabled?: boolean;
    type?: 'button' | 'submit' | 'reset' | undefined;
}

export const Button: FC<ButtonProps> = (props) => {
    const { children, size = 'auto', disabled = false, type = 'button', ...attrs } = props;

    return (
        <Box
            aria-disabled={disabled}
            type={type}
            disabledView={disabled}
            size={size}
            {...attrs}
        >{children}</Box>
    );
};
