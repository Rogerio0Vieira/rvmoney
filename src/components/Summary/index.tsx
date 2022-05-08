import up from '../../assets/uparrow.svg'
import down from '../../assets/downarrow.svg'
import money from '../../assets/money.svg'

import { Container } from "./styles";
import { TransactionsContext } from '../../TransactionsContext';
import { useContext } from 'react';

export function Summary(){
  const transactions = useContext(TransactionsContext);

  console.log(transactions);
  
  return(
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={up} alt="Entradas" /> 
        </header>
        <strong>1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={down} alt="Saidas" /> 
        </header>
        <strong>- 500,00</strong>
      </div>
      <div className="highlight-backgound">
        <header>
          <p>Total</p>
          <img src={money} alt="Total" /> 
        </header>
        <strong>500,00</strong>
      </div>
    </Container>
  );
}