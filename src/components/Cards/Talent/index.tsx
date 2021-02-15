import React from 'react'
import Link from 'next/link'

import { CardTalent } from '../../../interfaces/Cards/CardTalent'
import { SocialNetwork } from '../../../interfaces/SocialNetwork'
import ImageWithPlaceholder from '../../ImageWithPlaceholder'

import {
  Container,
  ImageContainer,
  ContentContainer,
  Headline,
  Subheadline,
  SocialNetworksContainer
} from './styles'

const TalentCard = ({
  imageUrl,
  name,
  role,
  socialNetworks
}: CardTalent) => {
  return (
    <Container className="talent-card">
      <ImageContainer>
        <ImageWithPlaceholder
          imageUrl={imageUrl}
          imageAriaLabel={`${name} image`}
          imageTitle={`${name} image`}
          imageQuality={90}
          placeholderType='rect'
          style={{ position: 'absolute', top: '0' }}
        />
      </ImageContainer>
      <ContentContainer>
            <Headline>{name}</Headline>
            <Subheadline>{role}</Subheadline>
            <SocialNetworksContainer>
              {socialNetworks
                ? socialNetworks.map(
                    (socialNetwork: SocialNetwork, index: number) => (
                      <Link href={socialNetwork.url} key={index} passHref>
                        <a rel="noreferrer" target="_blank" title={`${socialNetwork.name} talent link`}>{socialNetwork.name}</a>
                      </Link>
                    )
                  )
                : null}
            </SocialNetworksContainer>
          </ContentContainer>
    </Container>
  )
}

export default React.memo(TalentCard)
