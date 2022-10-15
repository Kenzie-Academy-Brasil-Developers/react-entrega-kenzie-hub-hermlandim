/* eslint-disable consistent-return */
/* eslint-disable default-case */
import styled, { css } from 'styled-components';
import { BaseTitle } from '../BaseTitle/basetitle';

export const TagConstructor = styled(BaseTitle)`
  line-height: 16px;
  font-weight: 700;
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
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  margin-left: ${(props) => props.marginLeft};
  margin-bottom: ${(props) => props.marginBottom};
  margin-top: ${(props) => props.marginTop};

  @media (max-width: 768px) {
    .appManutencion {
      display: none;
    }
  }

  svg {
    color: var(--color-grey-0);
    cursor: pointer;
    width: 2rem;
    height: 2rem;
    &:hover {
      opacity: 0.75;
    }
  }

  ${({ typography }) => {
    switch (typography) {
      case 'h1':
        return css`
          font-size: 18px;
          font-weight: 700;
        `;
      case 'h2':
        return css`
          font-size: 16px;
          font-weight: 700;
          text-align: center;
        `;
      case 'h3':
        return css`
          font-size: 16px;
          font-weight: 700;
          text-align: center;
        `;
      case 'headline':
        return css`
          font-size: 12px;
          font-weight: 400;
        `;
      case 'headline-bold':
        return css`
          font-size: 12px;
          font-weight: 600;
          color: var(--color-grey-1);
          text-align: center;
        `;
      case 'headline-italic':
        return css`
          font-size: 12px;
          font-weight: 400;
          font-style: italic;
        `;
      case 'link-back':
        return css`
          a {
            color: var(--color-grey-0);

            font-size: 12px;
            font-weight: 500;

            padding: 0.5rem;

            border-radius: 4px;

            background-color: var(--color-grey-3);
            text-align: center;

            &:hover {
              background-color: var(--color-grey-3);
            }
          }
        `;
      case 'ul':
        return css`
          background-color: var(--color-grey-3);
          display: flex;
          flex-direction: column;
          gap: 1rem;

          li {
            background-color: var(--color-grey-4);
            padding: 1rem;
            border-radius: 5px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            svg {
              color: var(--color-grey-0);
              cursor: pointer;
              width: 1.3rem;
              height: 1.3rem;
            }

            div {
              display: flex;
              align-items: center;
              gap: 1.5rem;
            }

            h1 {
              font-size: 18px;
              font-weight: 700;
            }

            h2 {
              font-size: 16px;
              font-weight: 700;
            }

            h3 {
              font-size: 14px;
              font-weight: 700;
            }
            h4 {
              font-size: 12px;
              font-weight: 400;
              color: var(--color-grey-1);
            }
            span {
              font-size: 12px;
              font-weight: 600;
              color: var(--color-grey-1);
              text-align: center;
            }
            p {
              font-size: 12px;
              font-weight: 400;
              font-style: italic;
            }
          }
        `;
    }
  }}
`;
