import { ReactElement, ReactNode } from 'react'
import * as S from './styles'

interface Props {
  children?: ReactNode
}

export default function Hero({ children }: Props): ReactElement {
  return <S.StyledHero>{children}</S.StyledHero>
}

Hero.displayName = 'Hero';
