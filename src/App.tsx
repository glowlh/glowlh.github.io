import React from 'react';
import styled, { css } from 'styled-components';
import { Select, Option, Button, Tabs, TabsItem, SkipLink } from './components';

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

function App() {
  return (
    <Box>
        <h1 id='components' style={{ fontFamily: 'Arial' }}>Components</h1>
        <Tabs value='1' aria-labelledby='components'>
            <TabsItem value='1' label='Select'>
                <SelectBox>
                    <Select label='Label' value='1'>
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
                <h2 id='tabs-label'>Интересное из жизни Лавкравта</h2>
                <Tabs value='1' aria-labelledby='tabs-label' style={{ fontFamily: 'Arial' }}>
                    <TabsItem value='1' label='Ранние годы'>В возрасте 6—8 лет Лавкрафт написал несколько рассказов, большая часть которых не сохранилась. Самые ранние известные литературные произведения Лавкрафта были написаны в возрасте 7 лет, когда он написал свой первый стих «Поэма об Улиссе» (1897), представляющий собой стилизацию поэмы Одиссея и другие греко-римские мифологические истории. Позже Лавкрафт писал в письмах, что в детстве он был зациклен на греко-римском пантеоне божеств и на короткое время принял их как подлинные выражения божественности, отказавшись от своего христианского воспитания. Он припомнил, как в 5 лет ему сказали, что Санта-Клауса не существует, на что он спросил: «Почему Бог не является в равной степени мифом?». К тому времени Лавкрафт уже открыл для себя фантастику и написал свой первый рассказ «Знатный соглядатай» (1897).</TabsItem>
                    <TabsItem value='2' label='Жизнь в Нью-Йорке'>Через несколько недель после смерти матери Лавкрафт посетил съезд журналистов-любителей в Бостоне, где познакомился с Соней Грин. Соня происходила из семьи еврейских эмигрантов из Российской империи и была на семь лет старше Лавкрафта. Тети Лавкрафта не одобряли его отношения с более старшей женщиной, которая занималась торговлей (Соня владела магазином шляп). Лавкрафт и Грин поженились 3 марта 1924 года и переехали в Бруклин, Нью-Йорк, в её квартиру, в дом 793 на Флэтбуш-авеню. Соня думала, что ему нужно покинуть Провиденс, чтобы развиваться как писателю, и была готова поддержать его финансово. </TabsItem>
                </Tabs>
            </TabsItem>
            <TabsItem value='4' label='SkipLink'>
                <SkipLink href='#content'>Перейти к тексту</SkipLink>
                <h2 id='content'>Го́вард (Ха́уард) Фи́ллипс Ла́вкрафт</h2>
                <p>Американский писатель и журналист, работавший в жанрах ужасов, мистики, фэнтези и научной фантастики, совмещая их в оригинальном стиле. Наиболее известен созданием «Мифов Ктулху». Произведения Лавкрафта ныне выделяются в отдельный поджанр — так называемые «Лавкрафтовские ужасы».</p>
            </TabsItem>
        </Tabs>
    </Box>
  );
}

export default App;
