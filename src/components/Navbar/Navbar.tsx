import { ReactElement } from 'react'
import * as S from './styles'
import Button from '../Common/Button/Button'
import logo from '../../../assets/logo.png'

export default function Navbar(): ReactElement {
  return <S.StyledNavbar>
    <S.Logo src={logo}></S.Logo>
    <Button type='button'>Sign up</Button>
  </S.StyledNavbar>
}
Navbar.displayName = 'Navbar';
