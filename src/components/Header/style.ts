import styled from "styled-components"
export const Container = styled.header`
background: var(--background);
`;
export const Content = styled.div`
max-width: 1120px;
margin: 0 auto;
display: flex;
align-items: center;
justify-content: space-between;
padding: 2rem 1rem 10rem;

button{
  padding:1rem 2rem;
  font-size: 1rem;
  color: var(--white);
  background-color:var(--green);
  border: 0;
  border-radius:0.25rem;
  height: 3rem;
 // transition: filter 0.2s;
  &:hover{
    background-color:var(--green-light);
   // filter: brightness(0.9);
  }
}
@media screen and (max-width: 355px){
  button{
    font-size: 0.78rem;
  }
}
`;

export const Logo = styled.div`
display: flex;
align-items: center;
gap: 1rem;


`;