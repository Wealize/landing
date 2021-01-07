import React from 'react'
import useTranslation from 'next-translate/useTranslation'

import AlastriaIcon from '../icons/partners/AlastriaIcon'
import AWSIcon from '../icons/partners/AWSIcon'
import ColoqioIcon from '../icons/partners/ColoqioIcon'
import IBMWatsonIcon from '../icons/partners/IBMWatsonIcon'
import MalditaIcon from '../icons/partners/MalditaIcon'
import MetaledgerIcon from '../icons/partners/MetaledgerIcon'
import NestleIcon from '../icons/partners/NestleIcon'
import ODOSIcon from '../icons/partners/ODOSIcon'
import UniversityCordobaIcon from '../icons/partners/UniversityCordobaIcon'
import UniversityLoyolaIcon from '../icons/partners/UniversityLoyolaIcon'

import {
  Container,
  Content,
  TextContent,
  ContainerPartners,
  Partner
} from './styles'
const Partners = () => {
  const { t } = useTranslation('home')

  return (
    <Container>
      <Content>
        <TextContent>
          {t('partners_description')}
        </TextContent>
      </Content>
      <ContainerPartners>
        <Partner>
          <AlastriaIcon />
        </Partner>
        <Partner>
          <IBMWatsonIcon />
        </Partner>
        <Partner>
          <ODOSIcon />
        </Partner>
        <Partner>
          <UniversityCordobaIcon />
        </Partner>
        <Partner>
          <MalditaIcon />
        </Partner>
        <Partner>
          <NestleIcon />
        </Partner>
        <Partner>
          <UniversityLoyolaIcon />
        </Partner>
        <Partner>
          <AWSIcon />
        </Partner>
        <Partner>
          <ColoqioIcon />
        </Partner>
        <Partner>
          <MetaledgerIcon />
        </Partner>
      </ContainerPartners>
    </Container>
  )
}

export default React.memo(Partners)
