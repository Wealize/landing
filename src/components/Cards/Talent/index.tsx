import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ReactPlaceholder from 'react-placeholder'

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
  role,
  socialNetworks
}: CardTalent) => {
  return (
    <Container className="talent-card">
      <ImageContainer>
        <ReactPlaceholder
          type='rect'
          showLoadingAnimation={true}
          firstLaunchOnly={true}
          ready={false}
          style={{ marginRight: '0', position: 'absolute' }}>
        </ReactPlaceholder>
        <Image
          src={imageUrl}
          layout="fill"
          objectFit="cover"
          aria-label={`${name} image`}
          title={name}
          onLoad={() => console.warn('load')}
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
