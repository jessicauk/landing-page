import styled from 'styled-components'
import image from '../../../assets/background.png'

export const StyledHero = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  overflow: hidden;
`