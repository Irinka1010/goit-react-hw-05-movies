import { NavLink } from 'react-router-dom';
import { StyledLink } from './StyledLink';
export default function Nav() {
  return (
    <header>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
    </header>
  );
}
