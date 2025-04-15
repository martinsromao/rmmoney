import Modal from "react-modal";
import { Container, RadioBox, TransactionContainer } from "./style";
import imgClose from "../../assets/close.svg"
import imgEntre from "../../assets/income.svg"
import imgSaida from "../../assets/outcome.svg"
import { useState, type FormEvent } from "react";
import { api } from "../../services/api";

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {

  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, isType] = useState('deposit')


  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = ({
      title,
      value,
      category,
      type
    });

    api.post("/transaction", data)

  }

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
        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Nova transação</h2>

          <input type="text" placeholder="Descrição"
            required
            value={title}
            onChange={event => setTitle(event.target.value)}
          />

          <input type="number" placeholder="Valor"
            required
            value={value}
            onChange={event => setValue(Number(event.target.value))}
          />

          <TransactionContainer>

            <RadioBox
              type="button"
              onClick={() => { isType('deposit'); }}
              $isActive={type == 'deposit'}
              $activeColor="green"
            >
              <img src={imgEntre} alt="entrada" />
              <span>Entrada</span>
            </RadioBox>
            <RadioBox
              type="button"
              onClick={() => { isType('withdraw'); }}
              $isActive={type == 'withdraw'}
              $activeColor="red"
            >
              <img src={imgSaida} alt="saída" />
              <span>Saída</span>
            </RadioBox>
          </TransactionContainer>
          <input type="text" placeholder="Categoria"
            required
            value={category}
            onChange={event => setCategory(event.target.value)}
          />


          <button type="submit">Cadastrar</button>

        </Container>
      </Modal>

    </>
  );
}