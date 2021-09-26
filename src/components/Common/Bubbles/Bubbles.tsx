import * as S from './styles'
import bubble from '../../../../assets/bubble.png'
 
export default function Bubbles() {
   return (
     <S.StyledBubbles>
       <img src={bubble} />
       <img src={bubble} />
       <img src={bubble} />
       <img src={bubble} />
       <img src={bubble} />
       <img src={bubble} />
       <img src={bubble} />
     </S.StyledBubbles>
   )
 } 

Bubbles.displayName = 'Bubbles'
