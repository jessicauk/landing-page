import styled from 'styled-components'
import { IProps } from './Button'

export const StyledButton = styled.button<IProps>`
  padding: ${({ padding = '0.3em' }) => padding};
  ${({color = '#fbfcfd' }) =>`
    color: ${color};
    background: transparent;
    border: 1px solid #fff;
    border-radius: 1.2em;
    outline: none;
    cursor: pointer;
  `}
`