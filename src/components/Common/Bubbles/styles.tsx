import styled from 'styled-components'

export const StyledBubbles = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: -4em;
  img {
    width: 3em;
    animation: bubble 7s linear infinite;
    &:nth-child(1) {
      animation-delay: 2s;
      width: 2em;
    }
    &:nth-child(2) {
      animation-delay: 1s;
    }
    &:nth-child(3) {
      animation-delay: 3s;
      width: 4em;
    }
    &:nth-child(4) {
      animation-delay: 4.5s;
    }
    &:nth-child(5) {
      animation-delay: 3s;
      width: 3em;
    }
    &:nth-child(6) {
      animation-delay: 6s;
    }
    &:nth-child(7) {
      animation-delay: 7s;
      width: 2em;
    }
  }
  @keyframes bubble {
    0% {
      transform: translateY(0);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: translateY(-80vh);
      opacity: 0;
    }
  }
`
