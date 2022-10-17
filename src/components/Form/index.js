/* eslint-disable consistent-return */
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;

  border-radius: 10px;

  background-color: var(--color-grey-3);

  padding: 1.5rem;

  color: ${(props) =>
    props.fontColor}; /* utilizando o valor da props como valor de color */
  /* Regra condicional com props, o CSS se altera com base no valor da prop */
  text-align: ${(props) => props.textAlign};
  border: ${(props) => props.border};
  border-top: ${(props) => props.borderTop};
  border-bottom: ${(props) => props.borderBottom};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};

  display: ${(props) => props.display};
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  flex-direction: ${(props) => props.flexDirection};

  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  max-height: ${(props) => props.maxHeight};
  max-width: ${(props) => props.maxWidth};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  margin-left: ${(props) => props.marginLeft};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};

  /* @media (min-width: 768px) {
    gap: 7px;
  }

  @media (min-height: 700px) {
    gap: 7px;
  } */

  gap: ${(props) => props.gap};

  a {
    color: var(--color-grey-0);

    font-size: 16px;
    font-weight: 500;
    /* line-height: 20px; */
    padding: 0.5rem;
    /* display: inline-flex; */
    border-radius: 8px;

    /* padding: .5rem 1rem .5rem 1rem; */
    /* padding: 0.2rem; */
    background-color: var(--color-grey-1);
    text-align: center;

    &:hover {
      background-color: var(--color-gray-50);
    }
  }

  p {
    font-size: 11px;
  }
`;

export default Form;
