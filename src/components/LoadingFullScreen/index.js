import React from 'react';

import { Container, Loader } from './style';

const LoadingFullScreen = ({status, message = "Carregando"}) => (
  <Container visible={status}>
    <Loader/>
    <p>{message}</p>
  </Container>
);

export default LoadingFullScreen;