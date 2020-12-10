import React from 'react'
import Link from 'next/link'

import WealizeWhiteNormalMediumIcon from '../icons/WealizeWhiteNormalMediumIcon'
import ButtonRounded from '../Buttons/Rounded/'
import {
  Container,
  ContainerContent,
  ContainerGetInTouch,
  ContainerLogo,
  BigText,
  ContainerWorkWithUs,
  ContainerBottom,
  Divider,
  ContainerSocial,
  Social,
  PrivacyLegalLink,
  CopyrightText,
  ContainerGrants,
  Grant
} from './styles'
import { ACCENT, DARK_GRAY, WHITE } from '../../theme/color'
import LinkedinIcon from '../icons/social/LinkedinIcon'
import TwitterIcon from '../icons/social/TwitterIcon'
import DevtoIcon from '../icons/social/DevtoIcon'
import CDTIIcon from '../icons/grants/CDTIIcon'
import InnovationPymeIcon from '../icons/grants/InnovationPymeIcon'
const Footer = () => {
  return (
    <Container>
      <ContainerLogo>
        <WealizeWhiteNormalMediumIcon />
      </ContainerLogo>
      <ContainerContent>
        <ContainerGetInTouch>
          <BigText>
            Contact us about your project, your idea or for more information
            about our Work
          </BigText>
          <ButtonRounded
            backgroundColor={DARK_GRAY}
            textColor={WHITE}
            accentColor={ACCENT}
          >
            Get in touch
          </ButtonRounded>
        </ContainerGetInTouch>
        <ContainerWorkWithUs>
          <BigText>
            Join the culture. We are always looking for talent to grow our
            global community
          </BigText>
          <ButtonRounded
            backgroundColor={DARK_GRAY}
            textColor={WHITE}
            accentColor={ACCENT}
          >
            Work with us
          </ButtonRounded>
        </ContainerWorkWithUs>
      </ContainerContent>
      <ContainerBottom>
        <Divider></Divider>
        <ContainerSocial>
          <Social>
            <LinkedinIcon />
          </Social>
          <Social>
            <TwitterIcon />
          </Social>
          <Social>
            <DevtoIcon />
          </Social>
        </ContainerSocial>
        <Link href="">
          <PrivacyLegalLink>Privacy & Legal</PrivacyLegalLink>
        </Link>
        <CopyrightText>Wealize 2020. All Rights Reserved.</CopyrightText>
        <Divider></Divider>
        <ContainerGrants>
          <Grant>
            <CDTIIcon />
          </Grant>
          <Grant>
            <InnovationPymeIcon />
          </Grant>
        </ContainerGrants>
      </ContainerBottom>
    </Container>
  )
}

export default React.memo(Footer)
