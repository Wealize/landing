import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { CardTalent } from '../../../interfaces/Cards/CardTalent'
import { SocialNetwork } from '../../../interfaces/SocialNetwork'

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
  description,
  socialNetworks
}: CardTalent) => {
  return (
    <Container className="talent-card">
      <ImageContainer>
        <Image src={imageUrl} layout="fill" aria-label={`${name} image`} />
      </ImageContainer>
      <ContentContainer>
        <Headline>{name}</Headline>
        <Subheadline>{description}</Subheadline>
        <SocialNetworksContainer>
          {socialNetworks
            ? socialNetworks.map(
                (socialNetwork: SocialNetwork, index: number) => (
                  <Link href={socialNetwork.url} key={index} passHref>
                    <a target="_blank">{socialNetwork.name}</a>
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
