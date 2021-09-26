import { ReactElement } from 'react'
import * as S from './styles'
import image from '../../../assets/menu.png'
import fb from '../../../assets/fb.png'
import ig from '../../../assets/ig.png'
import tw from '../../../assets/tw.png'
import share from '../../../assets/share.png'
import info from '../../../assets/info.png'

export default function Sidebar(): ReactElement {
  return (
    <S.Sidebar>
      <S.ImageMenu src={image} />
      <S.Links id='social-links' place='top' position={12}>
        <S.Link src={fb} />
        <S.Link src={ig} />
        <S.Link src={tw} />
      </S.Links>
      <S.Links id='useful-links' place='bottom' position={0}>
        <S.Link src={share} />
        <S.Link src={info} />
      </S.Links>
    </S.Sidebar>
  );
}
Sidebar.displayName = "Sidebar";
