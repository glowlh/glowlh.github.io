import React, {FC, HTMLAttributes, useState, useCallback, useMemo, useEffect, useRef} from 'react';
import { Box, Tab, TabsList, TabPanel } from './tabs.styles';

interface TabsProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>{
    value: string;
    ['aria-labelledby']: string;
}

export const Tabs: FC<TabsProps> = (props) => {
    const { children, value, ...attrs } = props;
    const tabsRef = useRef<any[]>([]);
    const [active, setActive] = useState<string>(value);
    const [focused, setFocused] = useState(active);

    const childrenList: any = React.Children.map(children, (child: any) => {
        const { value: childValue } = child.props;
        return childValue;
    });

    useEffect(() => {
        tabsRef.current = tabsRef.current.slice(0, childrenList.length);
    }, [childrenList]);

    const activeIndex = childrenList?.indexOf(active);

    const activeTabContent = useMemo(() => {
        const activeChild: any = React.Children.toArray(children).find((child: any) => {
            const { value: childValue } = child.props;
            return active === childValue;
        });
        if (!activeChild) {
            return null;
        }

        const { value: childValue } = activeChild.props;

        return <activeChild.type {...activeChild.props} id={`tabpannel-${childValue}`} role='tabpanel' aria-labelledby={`tab-${childValue}`} />
    }, [active, children]);


    const handleClickTab = useCallback((nextActive: string) => () => {
        setActive(nextActive);
    }, []);

    const focusTab = (index:number) => {
        if (tabsRef.current && childrenList[index] !== undefined && tabsRef.current[index]) {
            tabsRef.current[index].focus();
        }
    };

    const handleKeyUp = (e: any) => {
        switch (e.key) {
            case 'Home': {
                if (childrenList) {
                    setActive(childrenList[0]);
                    setFocused(childrenList[0]);
                    focusTab(0);
                }
                break;
            }
            case 'End': {
                if (childrenList) {
                    const nextIndex = childrenList.length - 1;
                    setActive(childrenList[nextIndex]);
                    setFocused(childrenList[nextIndex]);
                    focusTab(nextIndex);
                }
                break;
            }
            case 'ArrowRight': {
                if (childrenList && activeIndex !== undefined && activeIndex > -1) {
                    let nextIndex = activeIndex + 1 < childrenList.length ? activeIndex + 1 : 0;
                    setActive(childrenList[nextIndex]);
                    setFocused(childrenList[nextIndex]);
                    focusTab(nextIndex);
                }
                break;
            }
            case 'ArrowLeft': {
                if (childrenList && activeIndex !== undefined && activeIndex > -1) {
                    const nextIndex = activeIndex - 1 > -1 ? activeIndex - 1 : childrenList.length - 1;
                    setActive(childrenList[nextIndex]);
                    setFocused(childrenList[nextIndex]);
                    focusTab(nextIndex);
                }
                break;
            }
            default: break;
        }
    };

    const tabsNav = React.Children.map(children, (child: any, index: number) => {
        const { value: childValue, label } = child.props;
        return <Tab
            tabIndex={focused === childValue ? 0 : -1}
            ref={el => tabsRef.current[index] = el}
            id={`tab-${childValue}`}
            type='button'
            role='tab'
            aria-selected={active === childValue}
            aria-controls={`tabpannel-${childValue}`}
            active={active === childValue}
            onClick={handleClickTab(childValue)}
            onKeyUp={handleKeyUp}
        >{label}</Tab>;
    });

    return (
        <Box {...attrs}>
            <TabsList role='tablist' aria-labelledby={props['aria-labelledby']}>{tabsNav}</TabsList>
            <TabPanel tabIndex={0}>{activeTabContent}</TabPanel>
        </Box>
    );
};
