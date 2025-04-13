import { Container } from "./style";

export function TransactionTable() {
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Desenvolvimento</td>
            <td>13/04/2025</td>
          </tr>
          <tr>
            <td>Hamburger</td>
            <td className="withdraw">- R$ 59,00</td>
            <td>Alimentação</td>
            <td>20/04/2025</td>
          </tr>
          <tr>
            <td>Aluguel da casa</td>
            <td className="withdraw">- R$ 400,00</td>
            <td>Casa</td>
            <td>20/04/2025</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}