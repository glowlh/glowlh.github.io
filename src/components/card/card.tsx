import React, {FC, HTMLAttributes, useMemo} from 'react';
import {Box, Image, Info, Price, OldPrice, PriceInfo} from './card.styles';
import { H3, Button } from '../../components';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    price: number;
    oldPrice?: number;
    title: string;
    onClick: () => void;
}

export const Card: FC<CardProps> = (props) => {
    const { title, price, oldPrice, onClick, ...attrs } = props;

    const label = useMemo(() => {
        return oldPrice ? `Купить ${title} ${price} долларов вместо ${oldPrice}` : `Купить ${title} ${price} долларов`
    }, [price, oldPrice]);

    return (
        <Box {...attrs} role='article' aria-label={title}>
            <Image />
            <Info>
                <H3>{title}</H3>

                <PriceInfo><Price>{price}$</Price> {oldPrice && <OldPrice>{oldPrice}$</OldPrice>}</PriceInfo>

                <Button size='100%' aria-label={label} onClick={onClick}>Купить</Button>
            </Info>
        </Box>
    );
};
