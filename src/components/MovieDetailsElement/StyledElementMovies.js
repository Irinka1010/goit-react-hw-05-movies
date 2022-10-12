import styled from 'styled-components';
export const CartInfo = styled.div`
  display: flex;
  .Imge {
    display: block;
    width: 250px;
    height: 350px;
    border-radius: 8px;
  }
  .Info {
    display: flex;
    flex-direction: column;
    margin-left: 25px;
    font-size: 18px;
  }
  .Title {
    margin: 0;
  }
  .Genre {
    display: flex;
    padding: 0;
    list-style: none;
  }
  .Element {
    margin-right: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
`;
