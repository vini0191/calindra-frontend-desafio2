import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Roboto Condensed, -apple-system, BlinkMacSystemFont, Segoe UI,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    font-size: 16px;
    font-weight: normal;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
