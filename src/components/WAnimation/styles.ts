import styled from 'styled-components'

export const Video = styled.div<{isMixMultiplyBlendMode: boolean}>`
  height: 100%;
  width: 100%;


  > div video {
    height: 100%;
    width: 100%;
    object-fit: fill;
    z-index: ${({ isMixMultiplyBlendMode }) => (isMixMultiplyBlendMode ? -1 : 1)};
  }
`
