import { Container, Content, Logo } from "./style";
import logoIcon from "../../assets/logo.svg"
interface HeaderProps {
  onNewTransactionModal: () => void;
}

export function Header({ onNewTransactionModal }: HeaderProps) {

  return (
    <Container>
      <Content>
        <Logo>
          <img src={logoIcon} alt="rm money" />
          <h2>RM Money</h2>
        </Logo>
        <button type="button" onClick={onNewTransactionModal}>
          Nova transação
        </button>

      </Content>

    </Container>
  );
}