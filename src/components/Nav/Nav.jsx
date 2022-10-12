import { StyledLink, Header, Novigation } from './StyledLink';

export default function Nav() {
  return (
    <Header>
      <Novigation>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </Novigation>
    </Header>
  );
}
