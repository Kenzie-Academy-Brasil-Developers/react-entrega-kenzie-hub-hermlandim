import React from 'react';
import { Container } from '../../../components/Container';
import { TagConstructor } from '../../../components/Typography/typography';

const Main = () => (
  <Container container='desktop'>
    <TagConstructor tag='div'>
      <TagConstructor
        tag='h1'
        typography='h1'
        marginBottom='1rem'
        className='appManutencion'
      >
        Que pena! Estamos em desenvolvimento :(
      </TagConstructor>
      <TagConstructor
        tag='span'
        typography='headline-bold'
        className='appManutencion'
      >
        Nossa aplicação está em desenvolvimento, em breve teremos novidades ...
      </TagConstructor>
    </TagConstructor>
  </Container>
);

export default Main;
