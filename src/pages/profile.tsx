import React from 'react'
import { useInView } from 'react-intersection-observer'

import CardExpandable from '../components/Cards/Expandable'
import BlockchainIcon from '../components/icons/thingsWeAreGoodAt/BlockchainIcon'
import CognitiveIcon from '../components/icons/thingsWeAreGoodAt/CognitiveIcon'
import ConversationalIcon from '../components/icons/thingsWeAreGoodAt/ConversationalIcon'
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
  ThingsWeAreGoodAtThirdCard
} from '../styles/pages/Profile'

const Profile = (): JSX.Element => {
  const FIRST_CARD_HEADLINE = 'Blockchain development'
  const FIRST_CARD_SUBHEADLINE =
    'When transparency and trust are hard requirements'
  const FIRST_CARD_DESCRIPTION =
    'We build distributed ledgers and consensus networks for identity, traceability and accountability'

  const SECOND_CARD_HEADLINE = 'Cognitive services'
  const SECOND_CARD_SUBHEADLINE = 'Think, predict and act'
  const SECOND_CARD_DESCRIPTION =
    'We utilize machine learning and artificial intelligence to empower businesses by making better decisions'

  const THIRD_CARD_HEADLINE = 'Conversational agents'
  const THIRD_CARD_SUBHEADLINE = 'Enhace customer experience'
  const THIRD_CARD_DESCRIPTION =
    'We build text- and voice-based conversational interfaces for industries like health, tourism, legal, banking and insurance'

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
              headline={FIRST_CARD_HEADLINE}
              subheadline={FIRST_CARD_SUBHEADLINE}
              description={FIRST_CARD_DESCRIPTION}
              image={<BlockchainIcon />}
              backgroundColor={PRIMARY_LIGHT_COLOR}
              textColor={PRIMARY_COLOR}
              isExpanded={true}
            />
          </ThingsWeAreGoodAtFirstCard>

          <ThingsWeAreGoodAtSecondCard isVisible={entry?.isIntersecting}>
            <CardExpandable
              headline={SECOND_CARD_HEADLINE}
              subheadline={SECOND_CARD_SUBHEADLINE}
              description={SECOND_CARD_DESCRIPTION}
              image={<CognitiveIcon />}
              backgroundColor={PRIMARY_COLOR}
              textColor={WHITE_COLOR}
              isExpanded={false}
            />
          </ThingsWeAreGoodAtSecondCard>

          <ThingsWeAreGoodAtThirdCard isVisible={entry?.isIntersecting}>
            <CardExpandable
              headline={THIRD_CARD_HEADLINE}
              subheadline={THIRD_CARD_SUBHEADLINE}
              description={THIRD_CARD_DESCRIPTION}
              image={<ConversationalIcon />}
              backgroundColor={SECONDARY_COLOR}
              textColor={ACCENT_COLOR}
              isExpanded={false}
            />
          </ThingsWeAreGoodAtThirdCard>
        </ThingsWeAreGoodAtCardsContainer>
      </ThingsWeAreGoodAtContainer>
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
