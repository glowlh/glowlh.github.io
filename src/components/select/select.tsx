import React, {FC, useState, useEffect, useCallback, useRef, HTMLAttributes} from 'react';
import { SelectOpenDown, SelectHide } from 'vienna.icons';
import { Box, Select as SelectBox, Option as OptionBox, DropList, Arrow, Label } from './select.styles';

interface SelectProps {
    value: string;
    children?: any;
    tabIndex?: number;
    label?: string;
}

interface ActiveState {
    value: string;
    content?: string;
    index?: number;
}

export const Select: FC<SelectProps> = (props) => {
    const { value, children, tabIndex = 0, label } = props;
    const [active, setActive] = useState<ActiveState>({value, content: ''});
    const [opened, setOpened] = useState<boolean>(false);
    const [focusedOption, setFocusedOption] = useState<ActiveState | undefined>();
    const ref = useRef<any>(null);
    const selectRef = useRef<any>(null);

    const toggleOpened = useCallback((nextOpened?: boolean) => {
        setOpened(nextOpened === undefined ? !opened : Boolean(nextOpened));
    }, [opened]);

    const handleSelect = useCallback((option: ActiveState) => () => {
        setActive(option);
        toggleOpened();
    }, [toggleOpened]);

    const childrenList = React.Children.map(children, (child, index) => {
        const { value: optionValue, children } = child.props;

        return { value: optionValue, content: children, index };
    });

    useEffect(() => {
        childrenList.forEach((child: any, index: number) => {
            const { value: optionValue, content } = child;
            const isActive = value === optionValue;
            if (isActive) {
                setActive({ value, content, index });
            }
        });
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                toggleOpened(false);
            }
        };

        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [toggleOpened]);

    const handleKeyUpOption = (e: any) => {
        switch (e.key) {
            case 'Escape': {
                toggleOpened(false);

                if (selectRef.current) {
                    selectRef.current.focus();
                }
                break;
            }
            case ' ':
            case 'Enter': {
                if (focusedOption) {
                    setActive(focusedOption);
                }
                toggleOpened(false);

                if (selectRef.current) {
                    selectRef.current.focus();
                }
                break;
            }
            case 'ArrowDown': {
                if (opened) {
                    selectOption('next', 'focus');
                }
                break;
            }
            case 'ArrowUp': {
                if (opened) {
                    selectOption('prev', 'focus');
                }
                break;
            }
            default: break;
        }
    };

    const contentList = React.Children.map(children, (child, index) => {
        const { value: optionValue, children } = child.props;

        return <child.type
            {...child.props}
            focused={optionValue === focusedOption?.value}
            active={active.value === optionValue}
            onClick={handleSelect({ value: optionValue, content: children, index })}
            onKeyUp={handleKeyUpOption}
        />
    });

    const handleClick = useCallback(() => {
        toggleOpened();
    }, [toggleOpened]);

    const selectOption = (spin: 'prev' | 'next', type: 'focus' | 'select' = 'select') => {
        let index = 0;
        if (type === 'select') {
            index = active.index || 0
        }
        if (type === 'focus' && focusedOption) {
            index = focusedOption.index || 0
        }

        let nextIndex = index;

        if (spin === 'prev') {
            nextIndex = index - 1 < 0 ? childrenList.length - 1 : index - 1;
        }
        if (spin === 'next') {
            nextIndex = index + 1 > childrenList.length - 1 ? 0 : index + 1;
        }

        if (type === 'select') {
            setActive(childrenList[nextIndex]);
        }
        if (type === 'focus') {
            setFocusedOption(childrenList[nextIndex])
        }
    };

    const handleKeyUp = (e: any) => {
        switch (e.key) {
            case 'Escape': {
                toggleOpened(false);
                break;
            }
            case ' ':
            case 'Enter': {
                toggleOpened();
                if (!opened) {
                    setFocusedOption(childrenList[0]);
                }
                break;
            }
            case 'ArrowDown': {
                if (!opened) {
                    selectOption('next');
                }
                break;
            }
            case 'ArrowUp': {
                if (!opened) {
                    selectOption('prev');
                }
                break;
            }
            default: break;
        }
    };

    return (
        <Box ref={ref}>
            <Label>{label}</Label>
            <SelectBox
                role='listbox'
                aria-controls='droplist'
                aria-haspopup='listbox'
                aria-label={`${label}. Выбран ${active.content}`}
                aria-expanded={opened}
                ref={selectRef}
                tabIndex={tabIndex}
                onClick={handleClick}
                onKeyUp={handleKeyUp}
            >
                {active.content}
                <Arrow>{opened ? <SelectHide /> : <SelectOpenDown />}</Arrow>
            </SelectBox>
            {
                opened &&
                <DropList role='listbox' id='droplist'>{contentList}</DropList>
            }
        </Box>
    );
};

interface OptionProps extends HTMLAttributes<HTMLDivElement>{
    value: string;
    children?: any;
    active?: boolean;
    focused?: boolean;
}

export const Option: FC<OptionProps> = (props) => {
    const { value, children, active, onClick, tabIndex = 0, focused, ...attrs } = props;
    const ref = useRef<any>({});

    useEffect(() => {
        if (ref.current && focused) {
            ref.current.focus();
        }
    }, [ref, focused]);

    return (
        <OptionBox
            {...attrs}
            ref={ref}
            role='option'
            aria-selected={active}
            active={active}
            onClick={onClick}
            tabIndex={tabIndex}
            focused={focused}
        >
            {children}
        </OptionBox>
    );
};
