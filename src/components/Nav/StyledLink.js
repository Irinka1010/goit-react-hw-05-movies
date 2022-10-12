import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Novigation = styled.nav`
  display: flex;
`;
export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  color: rgb(123, 212, 235);
  font-size: 25px;
  font-weight: 500;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgb(123 212 235) 0px 0px 10px 1px;

  &.active {
    color: rgb(222, 20, 185);
    box-shadow: rgb(222 20 185) 0px 0px 13px 3px;
  }
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;
