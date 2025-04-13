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
  background-color: var(--background);
  h1,h2,h3,h4,h5,h6,strong{
    color: var(--gray7);
    font-weight: 600;
  }
  p,span{
    color: var(--gray6);
  }
  :hover{
    background-color: var(--gray5);
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
`
