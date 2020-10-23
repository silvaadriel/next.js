import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  outline: 0;
  padding: 0;
}

body {
  -webkit-font-smoothing: antialiased;
  background: #121214;
  color: #fff;
}

body, input, button {
  font-family: Roboto, Arial, Helvetica, sans-serif;
  font-size: 16px;
}
h1, h2, h3, h4, h5, h6, strong {
  font-weight: 500;
}
button {
  cursor: pointer;
}
`;
