import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;

  border-radius: 10px;

  background-color: var(--color-grey-3);

  padding: 1.5rem;

  @media (min-width: 768px) {
    gap: 7px;
  }

  @media (min-height: 700px) {
    gap: 7px;
  }

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
