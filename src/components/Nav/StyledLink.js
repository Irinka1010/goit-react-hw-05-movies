import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Novigation = styled.nav`
  display: flex;
`;
export const StyledLink = styled(NavLink)`
  display: block;
  color: black;
  font-size: 25px;
  line-height: 1.14;
  padding-top: 20px;
  padding-bottom: 20px;
  margin-right: 15px;
  text-decoration: none;

  &.active {
    color: red;
    text-decoration: underline;
  }
`;
export const Header = styled.header`
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
  background-color: #ffffff;
  border-bottom: 1px solid #ececec;
`;
