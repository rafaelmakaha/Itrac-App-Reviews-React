import styled from 'styled-components';

import { IMAGES } from '../../settings'

export const Container = styled.div`
  display               : grid;
  grid-template-columns : 30% 1fr;
  gap                   : 10px;
  height                : 100vh;
  max-width             : 100vw;
  padding               : 10px;
  @media (min-width: 640px) {
    grid-template-columns : 200px 1fr;
  }
`;

export const Title = styled.h1`
  color           : #000;
  font-size       : 45px;
  font-style      : normal;
  font-weight     : bold;
  letter-spacing  : 0.1em;
  text-align      : center;
`;

export const Button = styled.button`

`;

export const List = styled.div`
  display         : flex;
  flex-direction  : column;
  gap             : 3px;
`;

export const Content = styled.div`
  
`;

export const Text = styled.p`

`;