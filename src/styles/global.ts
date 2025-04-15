import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --background: #121214;
  --green-dark: #015F43;
  --green: #00875F;
  --green-light: #00B37E;
  --blue-light: #6933ff;
  --red-dark: #AA2834 ;
  --red: #F75A68;
  --gray2:  #202024;
  --gray3:  #29292E;
  --gray4:  #323238;
  --gray5:  #7C7C8A;
  --gray6: #C4C4CC;
  --gray7: #E1E1E6;
  --white: #FFFFFF;

}
*{
margin: 0;
padding: 0;
box-sizing: border-box;
}
body{
  background-color: var(--gray2);
  h1,h2,h3,h4,h5,h6,strong{
    color: var(--gray7);
    font-weight: 600;
  }
  p,span{
    color: var(--gray6);
  }
  -webkit-font-smoothing:antialiased;

}
html{
  @media (max-width: 1080px){
    font-size: 93.75%;
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}
button{
  cursor: pointer;
}
[disabled]{
  cursor:not-allowed;
  opacity: 0.6;
}
body,input,textarea,button{
  font-family: "Roboto", sans-serif;
  font-weight: 400;
}
.react-modal-overlay{
background-color: rgba(0, 0, 0, 0.5);

position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;

display: flex;
align-items: center;
justify-content: center;
};


.react-modal-content{
width: 100%;
max-width: 576px;
background-color: var(--gray2);
padding: 3rem;
position: relative;
border-radius: 0.25rem;
};
.react-close-modal{
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2s;
  &:hover{
    filter: brightness(0.8);
  }
}
`
