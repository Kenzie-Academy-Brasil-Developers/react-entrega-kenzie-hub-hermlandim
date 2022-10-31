/* eslint-disable consistent-return */
import styled, { css } from 'styled-components';

interface ButtonsProps {
  typeButton: string;
}

export const Buttons = styled.button<ButtonsProps>`
  /* color: var(--color-grey-0); */
  color: var(--color-grey-0);
  font-size: 16px;
  font-weight: 500;
  /* line-height: 20px; */
  padding: 0.5rem;
  /* display: inline-flex; */
  border-radius: 8px;

  ${({ typeButton }) => {
    // eslint-disable-next-line default-case
    switch (typeButton) {
      case 'primary':
        return css`
          background-color: var(--color-primary);

          &:hover {
            background-color: var(--color-primary-focus);
          }
        `;
      case 'primary-hover':
        return css`
          color: var(--color-gray-50);
          background-color: var(--color-gray-20);

          &:hover {
            color: var(--color-gray-20);
            background-color: var(--color-gray-50);
          }
        `;
      case 'primary-negative':
        return css`
          /* padding: 0.5rem 1rem 0.5rem 1rem; */
          background-color: var(--color-primary-negative);
        `;
      case 'cart-disabled':
        return css`
          /* padding: .5rem 1rem .5rem 1rem; */
          padding: 0.2rem;
          color: var(--color-gray-50);
          /* background-color: var(--color-gray-20); */

          font-size: 12px;
          font-weight: 500;
          line-height: 15px;

          &:hover {
            color: var(--color-gray-20);
            background-color: var(--color-gray-50);
          }
        `;

      case 'back':
        return css`
          /* padding: 0.5rem 1rem 0.5rem 1rem; */
          background-color: var(--color-grey-3);
        `;

      case 'icon-add':
        return css`
          padding: 0;
          border: none;
          border-radius: 0;
          /* color: var(--color-grey-0); */
          /* background-color: var(--color-grey-3); */
          svg {
            /* background-color: var(--color-grey-0); */
            height: 100%;
            width: 100%;
            /* padding: 1rem; */
          }
        `;
    }
  }}
`;
