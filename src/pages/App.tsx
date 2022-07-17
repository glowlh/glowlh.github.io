import React, { useState } from 'react';
import styled from 'styled-components';
import {Select, Option, Button, Tabs, TabsItem, SkipLink, Modal, H1, H3, H2, Input, Checkbox} from '../components';

const Box = styled.div`
    padding: 40px;
    display: flex;
    flex-direction: column;
`;

const VerticalGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

const SelectBox = styled.div`
    width: 300px;
`;

export const App = () => {
    const [opened, setOpened] = useState(false);
    return (
    <Box>
        <H1 id='components' size='l'>Components</H1>
        <Tabs value='1' aria-labelledby='components'>
            <TabsItem value='1' label='Select'>
                <SelectBox>
                    <Select label='Label' value='1' onChange={console.log}>
                        <Option value='1'>option 1</Option>
                        <Option value='2'>option 2</Option>
                        <Option value='3'>option 3</Option>
                        <Option value='4'>option 4</Option>
                    </Select>
                </SelectBox>
            </TabsItem>
            <TabsItem value='2' label='Button'>
                <VerticalGroup>
                    <Button size='200px'>Click on me</Button>
                    <Button size='200px' disabled>Click on me</Button>
                </VerticalGroup>
            </TabsItem>
            <TabsItem value='3' label='Tabs'>
                <H2 size='m' id='tabs-label'>Интересное из жизни Лавкравта</H2>
                <Tabs value='1' aria-labelledby='tabs-label' style={{ fontFamily: 'Arial' }}>
                    <TabsItem value='1' label='Ранние годы'>В возрасте 6—8 лет Лавкрафт написал несколько рассказов, большая часть которых не сохранилась. Самые ранние известные литературные произведения Лавкрафта были написаны в возрасте 7 лет, когда он написал свой первый стих «Поэма об Улиссе» (1897), представляющий собой стилизацию поэмы Одиссея и другие греко-римские мифологические истории. Позже Лавкрафт писал в письмах, что в детстве он был зациклен на греко-римском пантеоне божеств и на короткое время принял их как подлинные выражения божественности, отказавшись от своего христианского воспитания. Он припомнил, как в 5 лет ему сказали, что Санта-Клауса не существует, на что он спросил: «Почему Бог не является в равной степени мифом?». К тому времени Лавкрафт уже открыл для себя фантастику и написал свой первый рассказ «Знатный соглядатай» (1897).</TabsItem>
                    <TabsItem value='2' label='Жизнь в Нью-Йорке'>Через несколько недель после смерти матери Лавкрафт посетил съезд журналистов-любителей в Бостоне, где познакомился с Соней Грин. Соня происходила из семьи еврейских эмигрантов из Российской империи и была на семь лет старше Лавкрафта. Тети Лавкрафта не одобряли его отношения с более старшей женщиной, которая занималась торговлей (Соня владела магазином шляп). Лавкрафт и Грин поженились 3 марта 1924 года и переехали в Бруклин, Нью-Йорк, в её квартиру, в дом 793 на Флэтбуш-авеню. Соня думала, что ему нужно покинуть Провиденс, чтобы развиваться как писателю, и была готова поддержать его финансово. </TabsItem>
                </Tabs>
            </TabsItem>
            <TabsItem value='4' label='SkipLink'>
                <SkipLink href='#content'>Перейти к тексту</SkipLink>
                <H2 size='m' id='content'>Го́вард (Ха́уард) Фи́ллипс Ла́вкрафт</H2>
                <p>Американский писатель и журналист, работавший в жанрах ужасов, мистики, фэнтези и научной фантастики, совмещая их в оригинальном стиле. Наиболее известен созданием «Мифов Ктулху». Произведения Лавкрафта ныне выделяются в отдельный поджанр — так называемые «Лавкрафтовские ужасы».</p>
            </TabsItem>
            <TabsItem value='5' label='Modal'>
                <Button onClick={() => setOpened(true)}>Click for opening modal</Button>
                <Modal opened={opened} aria-labelledby='modal-header' onClose={() => setOpened(false)}>
                    <H2 size='m' id='modal-header'>Го́вард (Ха́уард) Фи́ллипс Ла́вкрафт</H2>
                    <div tabIndex={0}>Я</div>
                    <div tabIndex={0}>тут</div>
                    <div tabIndex={0}>просто</div>
                    <div tabIndex={0}>для</div>
                    <div tabIndex={0}>примера</div>
                </Modal>
            </TabsItem>
            <TabsItem value='6' label='Headings'>
                <H1 size='l'>Heading H1</H1>
                <H2 size='m'>Heading H2</H2>
                <H3 size='s'>Heading H3</H3>
            </TabsItem>
            <TabsItem value='7' label='Input'>
                <VerticalGroup>
                    <Input message='Message' onChange={console.log} id='inp1' label='Here' placeholder='here' />
                    <Input onChange={console.log} id='inp2' label='Here' value='here' />
                    <Input onChange={console.log} id='inp3' label='Here' design='material' placeholder='here placeholder' />
                    <Input invalid message='Error message' onChange={console.log} id='inp2' label='Here' value='here' />
                    <Input invalid onChange={console.log} id='inp3' label='Here' design='material' placeholder='here placeholder' />
                </VerticalGroup>
            </TabsItem>
            <TabsItem value='8' label='Checkbox'>
                <Checkbox id='checkbox' checked onChange={console.log}>I'm ready!</Checkbox>
            </TabsItem>
        </Tabs>
    </Box>
    );
};
