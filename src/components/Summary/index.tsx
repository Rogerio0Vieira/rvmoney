//Realizar a importação das imagens

import { Container } from "./styles";

export function Summary(){
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src="" alt="Entradas" /> 
        </header>
        <strong>1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src="" alt="Saidas" /> 
        </header>
        <strong>- 500,00</strong>
      </div>
      <div className="highlight-backgound">
        <header>
          <p>Total</p>
          <img src="" alt="Total" /> 
        </header>
        <strong>500,00</strong>
      </div>
    </Container>
  );
}