import React from 'react'
import { useInView } from 'react-intersection-observer'

import CardExpandable from '../components/Cards/Expandable'
import BlockchainIcon from '../components/icons/thingsWeAreGoodAt/BlockchainIcon'
import CognitiveIcon from '../components/icons/thingsWeAreGoodAt/CognitiveIcon'
import ConversationalIcon from '../components/icons/thingsWeAreGoodAt/ConversationalIcon'
import SimpleBigTitleCard from '../components/Cards/SimpleBigTitle'
import { LayoutOptions } from '../interfaces/Page'
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  WHITE_COLOR,
  PRIMARY_LIGHT_COLOR,
  ACCENT_COLOR
} from '../theme/color'
import {
  Container,
  ThingsWeAreGoodAtContainer,
  ThingsWeAreGoodAtTitle,
  ThingsWeAreGoodAtCardsContainer,
  ThingsWeAreGoodAtFirstCard,
  ThingsWeAreGoodAtSecondCard,
  ThingsWeAreGoodAtThirdCard,
  WeDeliverContainer,
  WeDeliverTitle,
  WeDeliverContainerCards
} from '../styles/pages/Profile'
import { WE_DELIVER_TITLE, WE_DELIVER_DATA } from '../data/weDeliver'
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
} from '../data/thingsWeAreGood'
import { CardSimpleBigTitle } from '../interfaces/Cards/CardSimpleBigTitle'

const Profile = (): JSX.Element => {
  const { ref, entry } = useInView({
    threshold: 0,
    triggerOnce: true
  })

  return (
    <Container>
      <ThingsWeAreGoodAtContainer ref={ref}>
        <ThingsWeAreGoodAtTitle>Things we are good at</ThingsWeAreGoodAtTitle>
        <ThingsWeAreGoodAtCardsContainer>
          <ThingsWeAreGoodAtFirstCard isVisible={entry?.isIntersecting}>
            <CardExpandable
              headline={THINGS_WE_ARE_GOOD_AT_FIRST_CARD_HEADLINE}
              subheadline={THINGS_WE_ARE_GOOD_AT_FIRST_CARD_SUBHEADLINE}
              description={THINGS_WE_ARE_GOOD_AT_FIRST_CARD_DESCRIPTION}
              image={<BlockchainIcon />}
              backgroundColor={PRIMARY_LIGHT_COLOR}
              textColor={PRIMARY_COLOR}
              isExpanded={true}
            />
          </ThingsWeAreGoodAtFirstCard>

          <ThingsWeAreGoodAtSecondCard isVisible={entry?.isIntersecting}>
            <CardExpandable
              headline={THINGS_WE_ARE_GOOD_AT_SECOND_CARD_HEADLINE}
              subheadline={THINGS_WE_ARE_GOOD_AT_SECOND_CARD_SUBHEADLINE}
              description={THINGS_WE_ARE_GOOD_AT_SECOND_CARD_DESCRIPTION}
              image={<CognitiveIcon />}
              backgroundColor={PRIMARY_COLOR}
              textColor={WHITE_COLOR}
              isExpanded={false}
            />
          </ThingsWeAreGoodAtSecondCard>

          <ThingsWeAreGoodAtThirdCard isVisible={entry?.isIntersecting}>
            <CardExpandable
              headline={THINGS_WE_ARE_GOOD_AT_THIRD_CARD_HEADLINE}
              subheadline={THINGS_WE_ARE_GOOD_AT_THIRD_CARD_SUBHEADLINE}
              description={THINGS_WE_ARE_GOOD_AT_THIRD_CARD_DESCRIPTION}
              image={<ConversationalIcon />}
              backgroundColor={SECONDARY_COLOR}
              textColor={ACCENT_COLOR}
              isExpanded={false}
            />
          </ThingsWeAreGoodAtThirdCard>
        </ThingsWeAreGoodAtCardsContainer>
      </ThingsWeAreGoodAtContainer>
      <WeDeliverContainer>
        <WeDeliverTitle>{WE_DELIVER_TITLE}</WeDeliverTitle>
        <WeDeliverContainerCards>
          {WE_DELIVER_DATA.map(
            (weDeliver: CardSimpleBigTitle, index: number) => (
              <SimpleBigTitleCard
                key={index}
                title={weDeliver.title}
                description={weDeliver.description}
              />
            )
          )}
        </WeDeliverContainerCards>
      </WeDeliverContainer>
    </Container>
  )
}

export const getStaticProps = async (): Promise<{
  props: { layoutOptions: LayoutOptions }
}> => {
  const layoutOptions: LayoutOptions = {
    showFooter: true,
    showNavigationBarClosablePage: false
  }

  return { props: { layoutOptions } }
}

export default Profile
