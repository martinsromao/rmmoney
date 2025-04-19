import Modal from "react-modal";
import { Container, RadioBox, TransactionContainer } from "./style";
import imgClose from "../../assets/close.svg"
import imgEntre from "../../assets/income.svg"
import imgSaida from "../../assets/outcome.svg"
import { useState, type FormEvent, useContext } from "react";
import { useTransitionContext } from "../../hooks/useTransactionContext";

interface NewTransactionModalProps {
  isOpen: boolean,
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const { createTransaction } = useTransitionContext()


  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState('deposit')


  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    await createTransaction({
      title,
      amount,
      category,
      type
    })

    onRequestClose()
    setTitle('')
    setAmount(0)
    setType('deposit')
    setCategory('')

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
            value={amount}
            onChange={event => setAmount(Number(event.target.value))}
          />

          <TransactionContainer>

            <RadioBox
              type="button"
              onClick={() => { setType('deposit'); }}
              $isActive={type == 'deposit'}
              $activeColor="green"
            >
              <img src={imgEntre} alt="entrada" />
              <span>Entrada</span>
            </RadioBox>
            <RadioBox
              type="button"
              onClick={() => { setType('withdraw'); }}
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