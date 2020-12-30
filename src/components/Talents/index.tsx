import React from 'react'

import TalentCard from '../Cards/Talent'
import talentsData from '../../data/talentsData'
import { CardTalent } from '../../interfaces/Cards/CardTalent'
import RoundedButton from '../Buttons/Rounded'
import { SMALL } from '../Buttons/Rounded/sizes'
import { ACCENT_COLOR, WHITE_COLOR } from '../../theme/color'
import useRefreshContent from '../../hooks/useRefreshContent'

import { Container, ContentContainer, Headline, CardsContainer } from './styles'
const Talents = () => {
  const SECTION_TITLE =
    'As of now our teams are spread across Spain, Germany, Estonia, Ireland and growing...'

  const MAX_ITEMS_TO_SHOW = 6
  const MAX_ITEMS_TO_REFRESH = 2
  const { dataToDisplay, refreshData } = useRefreshContent(
    talentsData,
    MAX_ITEMS_TO_SHOW,
    MAX_ITEMS_TO_REFRESH
  )

  return (
    <Container>
      <ContentContainer>
        <Headline>{SECTION_TITLE}</Headline>
        <RoundedButton
          backgroundColor={WHITE_COLOR}
          textColor={ACCENT_COLOR}
          animatedBackgroundColor={ACCENT_COLOR}
          animatedTextColor={WHITE_COLOR}
          size={SMALL}
          handleClick={refreshData}
        >
          Refresh talent
        </RoundedButton>
      </ContentContainer>
      <CardsContainer>
        {dataToDisplay.map((talent: CardTalent, index: number) => (
          <TalentCard
            key={index}
            imageUrl={talent.imageUrl}
            name={talent.name}
            description={talent.description}
            socialNetworks={talent.socialNetworks}
          />
        ))}
      </CardsContainer>
    </Container>
  )
}

export default React.memo(Talents)
