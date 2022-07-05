import React, {FC, HTMLAttributes, useCallback, useEffect, useState} from 'react';
import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';
import { Close } from 'vienna.icons';
import { Backdrop, Box, CloseIcon } from './modal.styles';

interface ModalProps extends HTMLAttributes<HTMLDivElement>{
    opened: boolean;
    onClose: () => void;
}

export const Modal: FC<ModalProps> = (props) => {
    const { opened, children, onClose, ...attrs } = props;
    const root = document.querySelector('#modals');

    const close = useCallback(() => {
        if (typeof onClose === 'function') {
            onClose();
        }
    }, [onClose]);

    useEffect(() => {
        const handleKeyDown = (e: any) => {
            if (e.key === 'Escape') {
                close();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown, true);
        };
    }, [close]);

    const handleClickBackdrop = useCallback((e: any) => {
        if (e.target !== e.currentTarget) {
            return;
        }

        close();
    }, [close]);

    const handleClickIcon = useCallback(close, [close]);

    const content = (
        <FocusTrap>
            <Backdrop onClick={handleClickBackdrop}>
                <Box {...attrs} role='dialog' aria-modal='true'>
                    <CloseIcon aria-label='Закрыть' type='button' onClick={handleClickIcon}><Close /></CloseIcon>
                    {children}
                </Box>
            </Backdrop>
        </FocusTrap>
    );

    return opened && root ? createPortal(content, root) : null;
};
