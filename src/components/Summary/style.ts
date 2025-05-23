import styled from "styled-components"
export const Container = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 2rem;
margin-top: -10rem;
div{
  background-color: var(--gray4);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
}
header{
  display: flex;
  align-items: center;
  justify-content: space-between;

}
strong{
  display: block;
  margin-top: 1rem;
  font-size: 2rem;
  font-weight: 500;
  line-height: 3rem;
}
.line-cor{
  background-color: var(--green-dark);
}


@media screen and (max-width: 749px){
 grid-template-columns: none;
}
`;