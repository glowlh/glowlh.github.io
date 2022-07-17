import React, {FC, useMemo, useState} from 'react';
import { H2, Input, Button, Checkbox } from '../../../components';
import {Box, Form, FormField} from './subscription-form.styles';

export const SubscriptionForm: FC = () => {
    const [email, setEmail] = useState<string>();
    const [checked, setChecked] = useState<boolean>(false);
    const [hasBlurred, setHasBlurred] = useState<boolean>(false);

    const handleChangeEmail = (value: string) => {
        setEmail(value);
    };

    const handleChangeChecked = (checked: boolean) => {
        setChecked(checked);
    }

    const isValidEmail = useMemo(() => {
        return !!(email && email.trim()) && String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }, [email]);

    const canSubmit = useMemo(() => {
        return isValidEmail && checked;
    }, [checked, email]);

    const handleBlur = () => {
        setHasBlurred(true);
    };

    const handleFocus = () => {
        setHasBlurred(false);
    }

    const handleCheckboxKeyDown = (e: any) => {
        if (e.key === 'Enter' && !canSubmit) {
            e.preventDefault();
        }
    }

    return (
        <Box>
            <H2 size='l' id='subscription'>Подписка на новости</H2>
            <Form action='#' aria-labelledby='subscription' name='Подписка на новости'>
                <FormField>
                    <Input
                        value={email}
                        design='material'
                        placeholder='E-mail'
                        label='Адрес электронной почты'
                        id='footer-email'
                        invalid={hasBlurred && !isValidEmail}
                        message={hasBlurred && !isValidEmail ? 'Неверный формат Email' : undefined}
                        required
                        style={{ width: '300px' }}
                        onChange={handleChangeEmail}
                        onBlur={handleBlur}
                        onFocus={handleFocus}
                    />
                    <Button type='submit' disabled={!canSubmit}>Подписаться</Button>
                </FormField>
                <Checkbox id='checking-subscription' checked={checked} onChange={handleChangeChecked} onKeyDown={handleCheckboxKeyDown}>Согласен на обработку персональх данных</Checkbox>
            </Form>
        </Box>
    );
}
