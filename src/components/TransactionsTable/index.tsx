import dateImg from '../../assets/Tipo=calendar.svg'
import categoryImg from '../../assets/Tipo=delete.svg'
import { Container } from "./style";
import { useTransactionContext } from "../../hooks/useTransactionContext";


export function TransactionTable() {
  const { transactions } = useTransactionContext()


  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (

            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>

              <td><img src={categoryImg} alt="img de categoria" />{transaction.category}</td>
              <td> <img src={dateImg} alt="img de data" />{new Intl.DateTimeFormat('pt-BR').format(
                new Date(transaction.createAt)
              )}</td>


            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}