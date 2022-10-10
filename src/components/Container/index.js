/* eslint-disable consistent-return */
/* eslint-disable default-case */
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 90%;
  min-width: 100px;
  max-width: 450px;
  margin: 0 auto;
  /* height: 100vh;

  color: ${(props) =>
    props.fontColor}; /* utilizando o valor da props como valor de color */
  /* Regra condicional com props, o CSS se altera com base no valor da prop */
  text-align: ${(props) => props.textAlign};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};

  height: ${(props) => props.height};
  max-width: ${(props) => props.maxWidth};

  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};

  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  margin-left: ${(props) => props.marginLeft};
  margin-bottom: ${(props) => props.marginBottom};

  a {
    padding: 0.5rem 2rem 0.5rem 2rem;
  }

  ${({ container }) => {
    switch (container) {
      case 'desktop':
        return css`
          max-width: 800px;
        `;
    }
  }}

  ${({ media }) => {
    switch (media) {
      case 'mediaHeader':
        return css`
          @media (min-width: 768px) {
            display: flex;
            justify-content: space-between;
          }
        `;
    }
  }}
`;
