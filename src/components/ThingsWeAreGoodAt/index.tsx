import React from 'react'
import { useInView } from 'react-intersection-observer'

import CardExpandable from '../Cards/Expandable'
import BlockchainIcon from '../icons/thingsWeAreGoodAt/BlockchainIcon'
import CognitiveIcon from '../icons/thingsWeAreGoodAt/CognitiveIcon'
import ConversationalIcon from '../icons/thingsWeAreGoodAt/ConversationalIcon'
import {
  Container,
  Title,
  CardsContainer,
  FirstCard,
  SecondCard,
  ThirdCard
} from './styles'
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

const ThingsWeAreGoodAt = () => {
  const { ref, entry } = useInView({
    threshold: 0,
    triggerOnce: true
  })
  return (
    <Container ref={ref}>
      <Title>Things we are good at</Title>
      <CardsContainer>
        <FirstCard isVisible={entry?.isIntersecting}>
          <CardExpandable
            headline={THINGS_WE_ARE_GOOD_AT_FIRST_CARD_HEADLINE}
            subheadline={THINGS_WE_ARE_GOOD_AT_FIRST_CARD_SUBHEADLINE}
            description={THINGS_WE_ARE_GOOD_AT_FIRST_CARD_DESCRIPTION}
            image={<BlockchainIcon />}
            backgroundColor={PRIMARY_LIGHT_COLOR}
            textColor={PRIMARY_COLOR}
            isExpanded={true}
          />
        </FirstCard>

        <SecondCard isVisible={entry?.isIntersecting}>
          <CardExpandable
            headline={THINGS_WE_ARE_GOOD_AT_SECOND_CARD_HEADLINE}
            subheadline={THINGS_WE_ARE_GOOD_AT_SECOND_CARD_SUBHEADLINE}
            description={THINGS_WE_ARE_GOOD_AT_SECOND_CARD_DESCRIPTION}
            image={<CognitiveIcon />}
            backgroundColor={PRIMARY_COLOR}
            textColor={WHITE_COLOR}
            isExpanded={false}
          />
        </SecondCard>

        <ThirdCard isVisible={entry?.isIntersecting}>
          <CardExpandable
            headline={THINGS_WE_ARE_GOOD_AT_THIRD_CARD_HEADLINE}
            subheadline={THINGS_WE_ARE_GOOD_AT_THIRD_CARD_SUBHEADLINE}
            description={THINGS_WE_ARE_GOOD_AT_THIRD_CARD_DESCRIPTION}
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
