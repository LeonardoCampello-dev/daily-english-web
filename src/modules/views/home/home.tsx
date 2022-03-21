import { ComponentType } from 'react'

import { useHomeCards } from './hooks'
import { Card, CardsWrap, HomePageDescription, MainWrap } from 'modules/layout'
import { DailyEnglishIcon } from 'modules/presentational'

export const Home: ComponentType = () => {
  const cards = useHomeCards()

  return (
    <MainWrap>
      <DailyEnglishIcon />

      <HomePageDescription />

      <CardsWrap>
        {cards.map(card => (
          <Card key={card.title} {...card} />
        ))}
      </CardsWrap>
    </MainWrap>
  )
}
