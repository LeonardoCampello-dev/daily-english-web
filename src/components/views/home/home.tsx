import { ComponentType } from 'react';

import { Card, CardsWrap, HomePageDescription, MainWrap } from '../../layout';
import { DailyEnglishIcon } from '../../presentational';
import { useHomeCards } from './useHomeCards';

export const Home: ComponentType = () => {
  const cards = useHomeCards();

  return (
    <MainWrap>
      <DailyEnglishIcon />

      <HomePageDescription />

      <CardsWrap>
        {cards.map((card) => (
          <Card key={card.title} {...card} />
        ))}
      </CardsWrap>
    </MainWrap>
  );
};
