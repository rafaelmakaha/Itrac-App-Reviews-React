import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  align-items         : center;
  background-color    : rgba(150, 150, 150, 0.4);
  display             : ${({visible}) => visible? 'flex' : 'none'};
  flex-direction      : column;
  font-size           : 18px;
  height              : 100%;
  justify-content     : center;
  position            : fixed;
  transition          : display .5s;
  width               : 100%;
  z-index             : 1300;
`;

const spin = keyframes`
  0% { 
    transform: rotate(0deg); 
  }
  100% { 
    transform: rotate(360deg); 
  }
`;

export const Loader = styled.div`
  animation       : ${spin} 1s linear infinite;
  border          : 4px solid transparent;
  border-right    : 4px solid #39589D;
  border-radius   : 50%;
  border-top      : 4px solid #39589D;
  height          : 40px;
  width           : 40px;
`;