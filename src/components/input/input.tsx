import React, {FC, HTMLAttributes, useCallback, useMemo} from 'react';
import {InputBox, Box, Label, Message} from './input.styles';

export type Design = 'material' | 'native';
interface InputProps extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
    design?: Design;
    invalid?: boolean;
    value?: string;
    label: string;
    placeholder?: string;
    id: string;
    onChange: (value?: string) => void;
    message?: string;
    required?: boolean;
}

export const Input: FC<InputProps> = (props) => {
    const { design = 'native', invalid = false, value, id, label, onChange, message, required = false, ...attrs } = props;

    const handleChange = useCallback((e: any) => {
        if (typeof onChange === 'function') {
            onChange(e.target.value);
        }
    }, [onChange]);

    const ariaAttrs = useMemo(() => {
        const obj: { [key: string]: any } = {
            ['aria-describedby']: message && `hint-${id}`,
            ['aria-label']: label,
            ['aria-invalid']: invalid,
            ['aria-required']: required,
        };

        Object.keys(obj).forEach((key) => {
            if (obj[key] === false || obj[key] === undefined) {
                delete obj[key];
            }
        });

        return obj;
    }, [message, label, invalid, required, id]);


    return (
        <Box>
            {
                message && <Message id={`hint-${id}`} invalid={invalid}>{message}</Message>
            }
            <InputBox
                {...attrs}
                {...ariaAttrs}
                value={value}
                invalid={invalid}
                design={design}
                id={id}
                onChange={handleChange}
            />
            <Label htmlFor={id} displayed={design === 'native' || value !== undefined}>{label}</Label>
        </Box>
    );
};
