import styled from 'styled-components'

interface ILinks {
  position: number;
  place: string;
}

export const Sidebar = styled.div`
  width: 3em;
  height: 100vh;
  background: linear-gradient(#00545d, #000729);
  position: absolute;
  right: 0;
  top: 0;
`
export const ImageMenu = styled.img`
  display: block;
  width: 1.8em;
  margin: 2em auto 0;
  cursor: pointer;
`;

export const Links = styled.div<ILinks>`
  ${({ place, position }) => place && `
    ${place}: ${position}em;
  `}
  width: 3em;
  text-align: center;
  position: absolute;
  transform: translateY(-50%);
`;
export const Link = styled.img`
  width: 2.5em;
  margin: 0.3em auto;
  cursor: pointer;
`;