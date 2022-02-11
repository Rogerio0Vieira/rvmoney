import logo from '../../assets/logo.png'
//na tag imagem colocar a logo em src colocar {logoImg}

import { Container, Content } from "./styles";

export function Header(){
  return(
    <Container>
      <Content>
      <img src={logo} alt="rvmoney" />    
      <button type="button">
        Nova Transação
      </button>
      </Content>
    </Container>
  )
}