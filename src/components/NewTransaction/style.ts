import styled from "styled-components";
import { transparentize, darken } from "polished"
export const Container = styled.form`
h2{
  margin-bottom: 2rem;
  font-size: 1.5rem;

}
input{
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  border: none;
  border-radius: 0.25rem;
  color: #d7d7d7 ;
  background-color: var(--background);
  font-weight: 400;
  font-size: 1rem;
  &::placeholder{
    color: var(--gray5);
  }
  & + input{
    margin-top: 1rem;
  }
}
  button[type="submit"]{
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    margin-top: 1.5rem;
    background-color: var(--green);
    color: var(--white);
    font-weight: 600;
    border: 0;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.9);
    }
  }


`;
export const TransactionContainer = styled.div`
  display: grid;
  grid-template-columns:1fr 1fr;
  gap: 0.5rem;
  
  margin-block: 1rem;


`;
interface RadioBoxProps {
  isActive: boolean,
  activeColor: "green" | "red"
}
const colores = {
  green: '#00875f',
  red: '#AA2834'
}

export const RadioBox = styled.button<RadioBoxProps>`
 height: 4rem;
  gap: 1rem;
  background-color: ${(props) => props.isActive

    ? transparentize(0.9, colores[props.activeColor])

    : 'transparent'};
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 0 1.25rem;
 border: 2px solid  var(--gray3);
 border-radius: 0.25rem;
 font-size: 1rem;
 font-weight: 600;
 
 
 &:hover{
  border-color: ${darken(0.3, "#7C7C8A")};
 }
 img{
  width: 20px;
  height: 20px;
  
}
 span{
  display: inline-block;
  margin-left: 1rem;
  font-size: 1rem;
  color: var(--gray6);
}

`;