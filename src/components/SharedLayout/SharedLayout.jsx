import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from 'components/Nav/Nav';
import { Wrapper } from './StyledWrapper';
export default function SharedLayout() {
  return (
    <Wrapper>
      <Nav />
      <Outlet />
    </Wrapper>
  );
}
