import styled from 'styled-components'

interface ILogo {
  src: string
}

export const StyledNavbar = styled.div`
  width: 85%;
  height: 15%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Logo = styled.img<ILogo>`
  width: 6em;
  cursor: pointer;
`