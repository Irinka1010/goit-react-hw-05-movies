import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  flex-basis: calc((100% - 120px) / 3);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin: 20px auto 0px;
  padding: 0px;
  list-style: none;
  border-radius: 10px;
  box-shadow: rgb(123 212 235) 0px 0px 10px 1px;

  .Img {
    width: 100%;
    border-radius: 5px;
    transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1),
      scale 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
