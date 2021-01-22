import styled from 'styled-components'

import { media } from '../../theme/media'

export const Video = styled.div<{isMixMultiplyBlendMode: boolean}>`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  > div {
    width: 100%;
    height: 0px !important;
    position: relative;
    padding-top: ${({ isMixMultiplyBlendMode }) => (isMixMultiplyBlendMode ? '100%' : '75%')};

    ${({ isMixMultiplyBlendMode }) => media.greaterThan('md')`
      padding-top: ${isMixMultiplyBlendMode ? '100%' : '75%'};
    `};
  }


  > div video {
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: fill;
    z-index: ${({ isMixMultiplyBlendMode }) => (isMixMultiplyBlendMode ? -1 : 1)};
  }
`
