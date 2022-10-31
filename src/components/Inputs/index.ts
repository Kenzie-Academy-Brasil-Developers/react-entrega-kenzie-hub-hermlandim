import styled from 'styled-components';

export const Inputs = styled.input`
  padding: 0.85rem 1rem 0.85rem 1rem;

  background-color: var(--color-grey-2);
  color: var(--color-grey-0);

  border: none;

  /* border: 2.5px solid var(--color-gray-20); */
  border-radius: 5px;

  &::placeholder {
    color: var(--color-grey-0);
  }

  &:focus {
    outline: var(--color-grey-0) solid 1px;
    background-color: var(--color-grey-2);
  }

  &:checked {
    background-color: red;
  }

  &:target {
    background-color: var(--color-grey-2);
  }

  /* &:focus::placeholder {
    color: red;
  } */
`;

export const Select = styled.select`
  padding: 0.85rem 1rem 0.85rem 1rem;

  background-color: var(--color-grey-2);
  color: var(--color-grey-0);

  border: none;

  /* border: 2.5px solid var(--color-gray-20); */
  border-radius: 5px;

  &::placeholder {
    color: var(--color-grey-0);
  }

  &:focus {
    outline: var(--color-grey-0) solid 1px;
    background-color: var(--color-grey-2);
  }

  &:checked {
    background-color: red;
  }

  &:target {
    background-color: var(--color-grey-2);
  }
`;
