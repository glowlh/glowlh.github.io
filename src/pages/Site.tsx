import React, { FC } from 'react';
import styled from 'styled-components';
import {H1, H2, SkipLink, Tabs, TabsItem} from '../components';
import {Footer, Header, Catalog} from '../contaiters';

const Content = styled.div`
    flex: 1;
    position: relative;
    height: 100%;
`;

const Wrapper = styled.main`
    max-width: 1200px;
    width: 80%;
    margin: auto;
    padding: 54px 0;
`;

const Block = styled.div`
    margin-bottom: 124px;
`;

const Video: FC<any> = (props) => {
    return (
        <iframe {...props} style={{ width: '100%', minHeight: '400px' }} src='https://www.youtube.com/embed/Gv1I0y6PHfg'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen></iframe>
    );
}

export const Site: FC = () => {
    return (
        <>
            <SkipLink href='#books'>К основному контенту</SkipLink>
            <Content>
                <Header />
                <Wrapper>
                    <Block>
                        <H1 size='xl' id='books' centered>Книги Г.Ф. Лавкрафта</H1>

                    </Block>

                    <Block>
                        <Catalog />
                    </Block>

                    <Block>
                        <H2 size='xl' id='video' centered>Видео про Дагон</H2>
                        <Video aria-labelledby='video' />
                    </Block>

                    <Block>
                        <H2 size='xl' centered>Интересное из жизни Лавкравта</H2>
                        <Tabs value='1' aria-labelledby='tabs-label'>
                            <TabsItem value='1' label='Ранние годы'>В возрасте 6—8 лет Лавкрафт написал несколько рассказов, большая часть которых не сохранилась. Самые ранние известные литературные произведения Лавкрафта были написаны в возрасте 7 лет, когда он написал свой первый стих «Поэма об Улиссе» (1897), представляющий собой стилизацию поэмы Одиссея и другие греко-римские мифологические истории. Позже Лавкрафт писал в письмах, что в детстве он был зациклен на греко-римском пантеоне божеств и на короткое время принял их как подлинные выражения божественности, отказавшись от своего христианского воспитания. Он припомнил, как в 5 лет ему сказали, что Санта-Клауса не существует, на что он спросил: «Почему Бог не является в равной степени мифом?». К тому времени Лавкрафт уже открыл для себя фантастику и написал свой первый рассказ «Знатный соглядатай» (1897).</TabsItem>
                            <TabsItem value='2' label='Жизнь в Нью-Йорке'>Через несколько недель после смерти матери Лавкрафт посетил съезд журналистов-любителей в Бостоне, где познакомился с Соней Грин. Соня происходила из семьи еврейских эмигрантов из Российской империи и была на семь лет старше Лавкрафта. Тети Лавкрафта не одобряли его отношения с более старшей женщиной, которая занималась торговлей (Соня владела магазином шляп). Лавкрафт и Грин поженились 3 марта 1924 года и переехали в Бруклин, Нью-Йорк, в её квартиру, в дом 793 на Флэтбуш-авеню. Соня думала, что ему нужно покинуть Провиденс, чтобы развиваться как писателю, и была готова поддержать его финансово. </TabsItem>
                        </Tabs>
                    </Block>
                </Wrapper>
            </Content>
            <Footer />
        </>
    )
}