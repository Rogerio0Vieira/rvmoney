import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background:#f0f2f5;
    --red: #E52E4D;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #6933FF;
    --text-body: #969CB3;

    --shape: #FFFFFF;

  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }

  html{ //Dica, em todas as aplicações configurar dessa forma as fontes para se adaptar de acordo com a tela do usuario
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body{
    background: var(--background)
    -webkit-from-smoothing: antialiased;
  }

  body, input, textarea, button{
    font-family:'Poppins', sans-serif;
    font-weight: 400;

  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }


  button{
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`