import React, {FC, useMemo, useState} from 'react';
import {Card, H2, Modal, Option, Select, Input, Button} from '../../components';
import {Box, FilterBox, Form, HiddenText, SelectBox, Subtitle} from './catalog.styles';

const Books = [
    {
        price: 20,
        title: 'Некрономикон',
        inCart: true,
    },
    {
        price: 30,
        oldPrice: 15,
        title: 'Хребты безумия',
        inCart: true,
    },
    {
        price: 38,
        title: 'Реаниматор',
        inCart: false,
    },
    {
        price: 48,
        title: 'Мгла над Инсмутом',
        inCart: false,
    },
    {
        price: 58,
        oldPrice: 31,
        title: 'Зов Ктулху',
        inCart: false,
    },
    {
        price: 28,
        title: 'Крысы в стенах',
        inCart: true,
    },
]
const Filter = [
    {
        value: 'filter-1',
        title: 'Показать все',
    },
    {
        value: 'filter-2',
        title: 'Со скидкой',
    },
    {
        value: 'filter-3',
        title: 'Нет в корзине',
    }
];

export const Catalog: FC = (props) => {
    const [displayedItems, setDisplayedItems] = useState(Books);
    const [filter, setFilter] = useState('filter-1');
    const [count, setCount] = useState<undefined | number>();
    const [opened, setOpened] = useState<boolean>(false);
    const [activeBook, setActiveBook] = useState<any>();
    const [name, setName] = useState<any>();
    const [email, setEmail] = useState<any>();
    const [blur, setBlur] = useState<any>({});

    const handleChange = (value: string) => {
        setFilter(value);
        const nextBooks = Books.filter((book) => {
            if (
                value === 'filter-2' && book.oldPrice ||
                value === 'filter-3' && !book.inCart ||
                value === 'filter-1'
            ) {
                return true;
            }

            return false;
        });

        setCount(displayedItems.length);
        setDisplayedItems(nextBooks);
    };

    const handleClickOnCard = (book: any) => () => {
        setActiveBook(book);
        setOpened(true);
    };

    const isValidName = useMemo(() => !!(name && name.trim()), [name]);

    const isValidEmail = useMemo(() => {
        return !!(email && email.trim()) && String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }, [email]);

    const canSubmit = useMemo(() => {
        return isValidEmail && isValidName;
    }, [name, email]);

    const handleBlur = (type: string) => () => {
        setBlur({ ...blur, [type]: true });
    };

    const handleFocus = (type: string) => () => {
        setBlur({ ...blur, [type]: false });
    };

    const handleClose = () => {
        setOpened(false);
        setBlur({});
        setName(undefined);
        setEmail(undefined);
        setActiveBook(undefined);
    };

    return (
        <>
            <FilterBox>
                <SelectBox>
                    <Select label='Сортировать по:' value={filter} onChange={handleChange}>
                        {
                            Filter.map((item) => (
                                <Option value={item.value}>{item.title}</Option>
                            ))
                        }
                    </Select>
                </SelectBox>
            </FilterBox>

            <Box>
                {
                    count !== undefined && <HiddenText aria-live='polite'>Количество книг после сортировки {count}</HiddenText>
                }
                {
                    displayedItems.map((book, index) => (
                        <Card key={index} price={book.price} oldPrice={book.oldPrice} title={book.title} onClick={handleClickOnCard(book)} />
                    ))
                }
            </Box>

            <Modal opened={opened} aria-labelledby='modal-header' onClose={handleClose}>
                {
                    activeBook &&
                    <>
                        <H2 size='m' id='modal-header' style={{ marginBottom: '0' }}>{activeBook.title} {activeBook.price}$</H2>
                        <Subtitle>Оформление заказа</Subtitle>

                        <Form action="#" aria-labelledby='modal-header' name={`Оформить заказ ${activeBook} ${activeBook.price}$`}>
                            <Input
                                id='user-name'
                                onBlur={handleBlur('name')}
                                onFocus={handleFocus('name')}
                                invalid={!isValidName && blur.name}
                                onChange={(value) => setName(value)}
                                value={name} label='Имя и Фамилия'
                                placeholder='Введите имя и фамилию'
                                message={blur.name && !isValidName && 'Имя и фамалия обязательны для заполнения'}
                            />
                            <Input
                                id='user-email'
                                onBlur={handleBlur('email')}
                                onFocus={handleFocus('email')}
                                invalid={!isValidEmail && blur.email}
                                onChange={(value) => setEmail(value)}
                                value={email} label='Email'
                                placeholder='Введите адрес электронной почты'
                                message={blur.name && !isValidEmail && 'Email обязателен для заполнения'}
                            />
                            <Button style={{ marginTop: '26px' }} type='submit' disabled={!canSubmit}>Отправить</Button>
                        </Form>
                    </>
                }
            </Modal>
        </>
    );
};