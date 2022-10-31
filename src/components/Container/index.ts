/* eslint-disable consistent-return */
/* eslint-disable default-case */
import styled, { css } from 'styled-components';

interface IContainerProps {
  fontColor?: string;
  textAlign?: string;
  borderRadius?: string;
  backgroundColor?: string;
  height?: string;
  maxWidth?: string;
  display?: string;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
  gap?: string;
  position?: string;
  top?: string;
  bottom?: string;
  marginLeft?: string;
  marginBottom?: string;
  container?: string;
  media?: string;
}

export const Container = styled.div<IContainerProps>`
  width: 90%;
  min-width: 100px;
  max-width: 450px;
  margin: 0 auto;

  color: ${(props) => props.fontColor};
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
