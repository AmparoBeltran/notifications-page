import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`




* {
    box-sizing: border-box;
}

body {
font-family: 'Plus Jakarta Sans', sans-serif;
min-height: 100vh;
display: grid;
place-items: center;
background-color: ${({ theme }) => theme.colors.veryLightGrayishBlue};

/* 
@media (max-width: ${({ theme }) => theme.mobile}) {
    background-color: ${({ theme }) => theme.colors.white};
    align-items: start ;
  } */
}



`;

export default GlobalStyles;
