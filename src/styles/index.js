import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
     padding: 0;
     margin: 0;
  }
  body {
    font-family: 'Roboto';
    background-color: #222;
    text-align: center;
    color: #eee;
  }
`;
