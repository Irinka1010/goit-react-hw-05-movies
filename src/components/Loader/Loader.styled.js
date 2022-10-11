import styled from 'styled-components';
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 30px;
`;

export const LoaderSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  font-size: 60px;
  margin-right: 10px;
  animation: icon 2s infinite linear;
  @keyframes icon {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }
`;
