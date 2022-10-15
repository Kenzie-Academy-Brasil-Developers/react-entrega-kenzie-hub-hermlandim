import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root{
  // Primary Pallete => Principais Seções / Identidade Visual;
  --color-primary: #FF577F;
  --color-primary-focus: #FF427F;
  --color-primary-negative: #59323F;

  // Grey Scale Pallete => Botões, Backgrounds e Textos;
  --color-grey-0: #F8F9FA;
  --color-grey-1: #868E96;
  --color-grey-2: #343B41;
  --color-grey-3: #212529;
  --color-grey-4: #121214;

  // Feedback Pallete => Alerta de Sucesso e Erro;

  --color-sucess: #3FE864;
  --color-negative: #E83F5B;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body{
  font-family: 'Inter', sans-serif;
  background-color: var(--color-grey-4);
  height: 100vh;
  width: 100vw;
}

button{
  cursor: pointer;
  border: none;
  background-color: var(--color-grey-0);
}

ul, ol, li{
  list-style: none; 
}

li{
  font-size: 16px;
  font-weight: 600;
}

a{
  text-decoration: none;
}

img{
  max-width: 100%;
}

input, select{
  background-color: var(--color-grey-0);
  border: none;
} 

h1, h2, h3, h4, h5, h6, p, span, li, label{
  color: var(--color-grey-0);
}

`;
