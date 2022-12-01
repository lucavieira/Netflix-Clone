import styled from 'styled-components'

import background from '../../images/background.jpg'

const Background_image = styled.img`
  width: 100%;
  /* height: 100%; */
  object-fit: fill;
  position: absolute;
  z-index: -1;
`

function Background() {
    return(
        <Background_image src={background} alt="Background" />
    )
}

export default Background