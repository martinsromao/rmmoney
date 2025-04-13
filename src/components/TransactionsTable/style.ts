import styled from "styled-components";

export const Container = styled.div`
table{
  width: 100%;
  border-spacing: 0 0.5rem;

  th{
    color: var(--gray6);
    font-weight:400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }
  td{
    padding: 1rem 2rem;
    border: 0;
    background-color: var(--gray3);
    color: var(--gray6);

    &:first-child{
      color: var(--green-light);
    }
    &.deposit{
      color: var(--green);

    }
    &.withdraw{
      color: var(--red);
    }
  }

}
`;