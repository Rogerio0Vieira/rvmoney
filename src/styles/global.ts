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


  button{
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`