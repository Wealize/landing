import React from 'react'
import useTranslation from 'next-translate/useTranslation'

import { CardSimpleBigTitle } from '../../interfaces/Cards/CardSimpleBigTitle'
import SimpleBigTitleCard from '../Cards/SimpleBigTitle'
import { WE_DELIVER_TITLE, WE_DELIVER_DATA } from '../../data/weDeliverData'

import { Container, Title, ContainerCards } from './styles'
const WeDeliver = () => {
  const { t } = useTranslation('profile')

  return (
    <Container>
      <Title>{t('we-deliver.title', { text: WE_DELIVER_TITLE })}</Title>
      <ContainerCards>
        {WE_DELIVER_DATA.map((weDeliver: CardSimpleBigTitle, index: number) => (
          <SimpleBigTitleCard
            key={index}
            title={t(`we-deliver.card-${index}.title`, { text: weDeliver.title })}
            description={t(`we-deliver.card-${index}.description`, { text: weDeliver.description })}
          />
        ))}
      </ContainerCards>
    </Container>
  )
}

export default React.memo(WeDeliver)
