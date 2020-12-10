import styled from 'styled-components'

import { WHITE, DARK_GRAY } from '../../theme/color'
import {
  sixthPx,
  singlePx,
  doublePx,
  triplePx,
  quadruplePx
} from '../../theme/space'
import { media } from '../../theme/media'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${DARK_GRAY};
  padding: ${doublePx()} ${singlePx()};

  ${media.greaterThan('md')`
    padding: ${doublePx()};
  `}

  ${media.greaterThan('xl')`
    padding: ${triplePx()} ${quadruplePx()};
  `};
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${media.greaterThan('md')`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: space-around;
  `}
`

export const ContainerGetInTouch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${media.greaterThan('md')`
    width: 50%;
  `}
`

export const ContainerLogo = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: ${singlePx()} 0;

  ${media.greaterThan('md')`
    width: 20%;
  `};

  ${media.greaterThan('lg')`
    width: 15%;
  `};

  ${media.greaterThan('xl')`
    width: 10%;
  `};

  ${media.greaterThan('xxl')`
    width: 7%;
  `};
`

export const BigText = styled.h5`
  color: ${WHITE};
  padding: ${singlePx()} 0;
  font-size: 1.8rem;
  line-height: 1.33;

  ${media.greaterThan('md')`
    width: 90%;
  `};

  ${media.greaterThan('lg')`
    font-size: 2.2rem;
  `};

  ${media.greaterThan('xl')`
    font-size: 2.5rem;
      min-height: 270px;
  `};

  ${media.greaterThan('xxl')`
    font-size: 3rem;
  `};
`

export const ContainerWorkWithUs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${doublePx()} 0;

  ${media.greaterThan('md')`
    width: 50%;
    padding: 0;
  `};
`

export const Divider = styled.hr`
  width: 100%;
  border: 1px solid ${WHITE};
  margin: ${doublePx()} 0;
`

export const ContainerBottom = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContainerSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Social = styled.div`
  width: 46px;
  height: 46px;
  margin: 0 ${sixthPx()};
`

export const PrivacyLegalLink = styled.a`
  color: ${WHITE};
  font-size: 1.1rem;
  padding: ${singlePx()} 0;
  text-decoration: underline;
`

export const CopyrightText = styled.span`
  color: ${WHITE};
  font-size: 1.1rem;
`

export const ContainerGrants = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const Grant = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${singlePx()};

  ${media.greaterThan('md')`
    width: 50%;
    margin-bottom: 0;
  `};

  ${media.greaterThan('lg')`
    width: 40%;
  `};

  ${media.greaterThan('xl')`
    width: 25%;
  `};
`
