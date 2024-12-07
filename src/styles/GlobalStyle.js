import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    line-height: 1.5;
    color: ${props => props.theme.colors.text};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;