import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
 
  html {
    height: 100%;
  }
  body {
    background-color: #FDFDFC;
    height: 100%;
    font-family: 'Roboto', sans-serif;
  }
  h1, h2, h3, h4, h5, h6, a, ul, p {
    padding: 0;
    margin: 0;
  }
  #root {
    height: 100%;
  }
`;
