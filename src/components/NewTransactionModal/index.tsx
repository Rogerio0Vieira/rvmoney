import Modal from "react-modal";
import { Container, TransactionTypeContainer, RadioBox } from "./styles";
import close from "../../assets/close.svg";
import up from "../../assets/uparrow.svg";
import down from "../../assets/downarrow.svg";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type,setType] = useState('deposit');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');

  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();
    const data = {
      title,
      value,
      category,
      type,
    };

    api.post('/transactions', data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={close} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastar transação</h2>
               {/* Implementado o value e o onchange para que os valores possam ser guardados */}
        <input placeholder="Título" value={title} onChange={event => setTitle(event.target.value)}/>
        <input type="number" placeholder="Valor" value={value} onChange={event => setValue(Number(event.target.value))}/>
        <TransactionTypeContainer>

          <RadioBox 
            type="button" 
            onClick={()=>{setType('deposit');}}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={up} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
            type="button" 
            onClick={()=>{setType('withdraw');}}
            isActive={type === 'withdraw'}
            activeColor="red"
            >
            <img src={down} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
        <input placeholder="Categoria" value={category} onChange={event => setCategory(event.target.value)}/>
        <button type="submit" className="button-modal-submit">Cadastar</button>
      </Container>
    </Modal>
  );
}


