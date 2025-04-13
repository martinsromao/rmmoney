import { Container } from "./style";
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
export function Summary() {
  return (
    <Container >
      <div>
        <header>
          <p>Entradas</p>
          <img src={income} alt="Entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saída</p>
          <img src={outcome} alt="Saída" />
        </header>
        <strong> - R$ 500,00</strong>
      </div>
      <div className="line-cor">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}