import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
  margin: 0px auto;
  padding: 0px;
  list-style: none;
  & img {
    width: 100%;
    border-radius: 5px;
    transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      scale 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
