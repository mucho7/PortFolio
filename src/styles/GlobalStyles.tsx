import { createGlobalStyle } from "styled-components";
import KBO from "assets/fonts/KBO_Dia_Gothic_medium.ttf";
import BlackHanSans from "assets/fonts/BlackHanSans-Regular.ttf";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: BlackHanSans;
    src: url(${BlackHanSans}) format('truetype'); 
  }

  @font-face {
    font-family: KBO;
    src: url(${KBO}) format('truetype'); 
  }

`;

export default GlobalStyles;
