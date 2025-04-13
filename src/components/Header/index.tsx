import { Container, Content, Logo } from "./style";
import logoIcon from "../../assets/logo.svg"
export function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <img src={logoIcon} alt="rm money" />
          <h2>RM Money</h2>
        </Logo>
        <button type="button">
          Nova transação
        </button>
      </Content>

    </Container>
  );
}