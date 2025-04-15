import Modal from "react-modal";
import { Container, RadioBox, TransactionContainer } from "./style";
import imgClose from "../../assets/close.svg"
import imgEntre from "../../assets/income.svg"
import imgSaida from "../../assets/outcome.svg"
import { useState } from "react";

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  const [type, isType] = useState('deposit')
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName='react-modal-overlay'
        className='react-modal-content'
      >
        <button type="submit" onClick={onRequestClose} className="react-close-modal">
          <img src={imgClose} alt="fechar modal" />
        </button>
        <Container>
          <h2>Nova transação</h2>
          <input type="text" placeholder="Descrição" />
          <input type="number" placeholder="Valor" />

          <TransactionContainer>

            <RadioBox
              type="button"
              onClick={() => { isType('deposit'); }}
              isActive={type == 'deposit'}
              activeColor="green"
            >
              <img src={imgEntre} alt="entrada" />
              <span>Entrada</span>
            </RadioBox>
            <RadioBox
              type="button"
              onClick={() => { isType('withdraw'); }}
              isActive={type == 'withdraw'}
              activeColor="red"
            >
              <img src={imgSaida} alt="saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionContainer>
          <input type="text" placeholder="Categoria" />


          <button type="submit">Cadastrar</button>

        </Container>
      </Modal>

    </>
  );
}