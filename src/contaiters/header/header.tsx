import React, { FC } from 'react';
import {Box, List, Link, Item} from './header.styles';

export const Header: FC = () => {
    return (
        <Box role='banner'>
            <nav aria-label='Разделы сайта'>
                <List role='menubar' aria-label='Разделы сайта'>
                    <Item role='none'>
                        <Link role='menuitem' href='#'>Книги</Link>
                    </Item>
                    <Item role='none'>
                        <Link role='menuitem' href='#'>Футболки</Link>
                    </Item>
                    <Item role='none'>
                        <Link role='menuitem' href='#'>Кружки</Link>
                    </Item>
                    <Item role='none'>
                        <Link role='menuitem' href='#'>Канцелярия</Link>
                    </Item>
                    <Item role='none'>
                        <Link role='menuitem' href='#'>Контакты</Link>
                    </Item>
                </List>
            </nav>
        </Box>
    )
}
