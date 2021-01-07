import React from 'react'
import { useInView } from 'react-intersection-observer'
import useTranslation from 'next-translate/useTranslation'

import CardExpandable from '../Cards/Expandable'
import BlockchainIcon from '../icons/thingsWeAreGoodAt/BlockchainIcon'
import CognitiveIcon from '../icons/thingsWeAreGoodAt/CognitiveIcon'
import ConversationalIcon from '../icons/thingsWeAreGoodAt/ConversationalIcon'
import {
  THINGS_WE_ARE_GOOD_AT_FIRST_CARD_HEADLINE,
  THINGS_WE_ARE_GOOD_AT_FIRST_CARD_SUBHEADLINE,
  THINGS_WE_ARE_GOOD_AT_FIRST_CARD_DESCRIPTION,
  THINGS_WE_ARE_GOOD_AT_SECOND_CARD_HEADLINE,
  THINGS_WE_ARE_GOOD_AT_SECOND_CARD_SUBHEADLINE,
  THINGS_WE_ARE_GOOD_AT_SECOND_CARD_DESCRIPTION,
  THINGS_WE_ARE_GOOD_AT_THIRD_CARD_HEADLINE,
  THINGS_WE_ARE_GOOD_AT_THIRD_CARD_SUBHEADLINE,
  THINGS_WE_ARE_GOOD_AT_THIRD_CARD_DESCRIPTION
} from '../../data/thingsWeAreGoodData'
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  WHITE_COLOR,
  PRIMARY_LIGHT_COLOR,
  ACCENT_COLOR
} from '../../theme/color'

import {
  Container,
  Title,
  CardsContainer,
  FirstCard,
  SecondCard,
  ThirdCard
} from './styles'

const ThingsWeAreGoodAt = () => {
  const { ref, entry } = useInView({
    threshold: 0,
    triggerOnce: true
  })

  const { t } = useTranslation('profile')

  return (
    <Container ref={ref}>
      <Title>{t('things-we-are-good-at.title')}</Title>
      <CardsContainer>
        <FirstCard isVisible={entry?.isIntersecting}>
          <CardExpandable
            headline={t('things-we-are-good-at.first-card.headline', { text: THINGS_WE_ARE_GOOD_AT_FIRST_CARD_HEADLINE })}
            subheadline={t('things-we-are-good-at.first-card.subheadline', { text: THINGS_WE_ARE_GOOD_AT_FIRST_CARD_SUBHEADLINE })}
            description={t('things-we-are-good-at.first-card.description', { text: THINGS_WE_ARE_GOOD_AT_FIRST_CARD_DESCRIPTION })}
            image={<BlockchainIcon />}
            backgroundColor={PRIMARY_LIGHT_COLOR}
            textColor={PRIMARY_COLOR}
            isExpanded={true}
          />
        </FirstCard>

        <SecondCard isVisible={entry?.isIntersecting}>
          <CardExpandable
            headline={t('things-we-are-good-at.second-card.headline', { text: THINGS_WE_ARE_GOOD_AT_SECOND_CARD_HEADLINE })}
            subheadline={t('things-we-are-good-at.second-card.subheadline', { text: THINGS_WE_ARE_GOOD_AT_SECOND_CARD_SUBHEADLINE })}
            description={t('things-we-are-good-at.second-card.description', { text: THINGS_WE_ARE_GOOD_AT_SECOND_CARD_DESCRIPTION })}
            image={<CognitiveIcon />}
            backgroundColor={PRIMARY_COLOR}
            textColor={WHITE_COLOR}
            isExpanded={false}
          />
        </SecondCard>

        <ThirdCard isVisible={entry?.isIntersecting}>
          <CardExpandable
            headline={t('things-we-are-good-at.third-card.headline', { text: THINGS_WE_ARE_GOOD_AT_THIRD_CARD_HEADLINE })}
            subheadline={t('things-we-are-good-at.third-card.subheadline', { text: THINGS_WE_ARE_GOOD_AT_THIRD_CARD_SUBHEADLINE })}
            description={t('things-we-are-good-at.third-card.description', { text: THINGS_WE_ARE_GOOD_AT_THIRD_CARD_DESCRIPTION })}
            image={<ConversationalIcon />}
            backgroundColor={SECONDARY_COLOR}
            textColor={ACCENT_COLOR}
            isExpanded={false}
          />
        </ThirdCard>
      </CardsContainer>
    </Container>
  )
}

export default React.memo(ThingsWeAreGoodAt)
