import React, {FC, HTMLAttributes} from 'react';
import { Input } from './checkbox.styles';

interface CheckboxProps extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange'> {
    checked: boolean;
    onChange: (checked: boolean) => void;
    id: string;
}

export const Checkbox: FC<CheckboxProps> = (props) => {
    const { children, checked, onChange, id, ...attrs } = props;

    const handleChange = () => {
        if (typeof onChange === 'function') {
            onChange(!checked);
        }
    }

    return (
        <>
            <Input type='checkbox' {...attrs} id={id} checked={checked} onChange={handleChange} />
            <label htmlFor={id}>{children}</label>
        </>
    );
};
