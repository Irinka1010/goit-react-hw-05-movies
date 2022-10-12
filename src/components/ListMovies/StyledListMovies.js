import styled from 'styled-components';
export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 30px);
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 30px;
  margin: 0px auto;
  padding: 15px 20px 0px;
  list-style: none;
  .Item {
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    background-color: rgb(0, 188, 167);
    border-radius: 10px;
    border: 5px solid rgb(88, 128, 72);
  }
  .Img {
    width: 100%;
    height: 355px;
    border-radius: 5px;
    object-fit: cover;
  }
  .Link {
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    color: inherit;
  }
`;
