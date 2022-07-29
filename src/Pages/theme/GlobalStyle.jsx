import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
:root {
    --primary: #7b34ff;
    --bg-primary:#5b28b9; 
    --text: rgba(255, 255, 255, 0.644);
}
  * {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
`;
 
export default GlobalStyle;