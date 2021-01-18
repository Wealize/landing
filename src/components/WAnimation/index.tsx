import React from 'react'
import ReactPlayer from 'react-player'

import useWindowSize from '../../hooks/useWindowSize'
import { BREAKPOINT_MD, BREAKPOINT_LG } from '../../theme/media'

import {
  Video
} from './styles'

const WAnimation = () => {
  const W_768_MP4_VIDEO_URL = '/video/w_768.mp4'
  const W_1400_MP4_VIDEO_URL = '/video/w_1400.mp4'
  const W_2048_MP4_VIDEO_URL = '/video/w_2048.mp4'
  const { width } = useWindowSize()

  const getVideoUrl = () => {
    if (!width || width <= BREAKPOINT_MD) return W_768_MP4_VIDEO_URL

    if (width > BREAKPOINT_MD && width <= BREAKPOINT_LG) return W_1400_MP4_VIDEO_URL

    if (width > BREAKPOINT_LG) return W_2048_MP4_VIDEO_URL
  }

  return (
    <Video className="w-animation">
      <ReactPlayer className="react-player" url={[
        { src: `${getVideoUrl()}`, type: 'video/mp4' }
      ]} width='100%' height='100%' playing autoPlay muted loop stopOnUnmount>
      </ReactPlayer>
    </Video>
  )
}


export default React.memo(WAnimation)
