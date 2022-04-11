import logo from '../../assets/logo.png'
import { Container, Content } from "./styles";
//na tag imagem colocar a logo em src colocar {logoImg}

interface HeaderProps{
  onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HeaderProps){

  return(
    <Container>
      <Content>
      <img src={logo} alt="rvmoney" />    
      <button type="button" onClick={onOpenNewTransactionModal}>
        Nova Transação
      </button>
      </Content>
    </Container>
  )
}