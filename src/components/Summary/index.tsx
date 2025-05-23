import { Container } from "./style";
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactionContext } from "../../hooks/useTransactionContext";
export function Summary() {
  const { transactions } = useTransactionContext()

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type == 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;

  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })


  return (
    <Container >
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saída</p>
          <img src={outcome} alt="Saída" />
        </header>
        <strong> - {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.withdraws)}</strong>
      </div>
      <div className="line-cor">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>{new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.total)}</strong>
      </div>
    </Container>
  );
}