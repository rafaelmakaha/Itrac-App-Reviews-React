import React from 'react';
import Routes from './routes';
import { GlobalStyle } from './style';

// <> is the React.fragment 
// You could use <React.Fragment> instead

const App = () => 
  <>
    <GlobalStyle/>
    <Routes/>
  </>

export default App;