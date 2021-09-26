import { ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import * as S from './styles'
export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  padding?: string | number,
  children?: ReactNode | ReactElement 
}

export default function Button({ ...props}: IProps): ReactElement {
  return <S.StyledButton {...props} />
}

Button.displayName = 'Button'
