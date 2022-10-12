import styled from 'styled-components';
export const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 0px auto 20px;
  border-radius: 10px;
  box-shadow: rgb(123 212 235) 0px 0px 10px 1px;
  color: rgb(255, 255, 255);
  background-color: rgb(123, 212, 235);
  .Form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: rgb(255, 255, 255);
    border-radius: 3px;
  }
  .Input {
    display: inline-block;
    width: 100%;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
  }
  .Button {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0px;
    background-size: 70%;
    cursor: pointer;
    border-radius: 5px;
  }
`;
