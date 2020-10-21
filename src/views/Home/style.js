import styled from 'styled-components';

import { IMAGES } from '../../settings'

export const Container = styled.div`
  display   : flex;
  height    : 100vh;
`;

export const Row = styled.div`
  margin      : auto;
  max-width   : 1280px;
  width       : 75%;

  &::before {
    background-image      : url(${IMAGES.reactLogo});
    background-position   : 30vw 30vh;
    background-repeat     : no-repeat;
    background-size       : 100vh auto;
    content               : " ";
    position              : absolute;
    top                   : 0;
    bottom                : 0;
    left                  : 0;
    right                 : 0;
    opacity               : 0.1;
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