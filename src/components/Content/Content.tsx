import * as S from './styles'
import Button from '../Common/Button/Button'

export default function Content() {
  return (
    <S.StyledContent>
      <small>Welcome to our</small>
      <h1>World's<br /> Creative Studio</h1>
      <Button type='button'>Take a tour</Button>
    </S.StyledContent>
  );
}

Content.displayName = "Content";
