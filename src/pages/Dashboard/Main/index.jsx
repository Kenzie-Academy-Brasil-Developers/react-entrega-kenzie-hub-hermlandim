import React from 'react';
import { MdAddBox } from 'react-icons/md';
import { Container } from '../../../components/Container';
import { TagConstructor } from '../../../components/Typography/typography';
import Technologies from './ListTecnology';

const Main = () => (
  <TagConstructor tag='main'>
    <Container
      container='desktop'
      display='flex'
      flexDirection='column'
      gap='1rem'
    >
      <TagConstructor
        tag='div'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
      >
        <TagConstructor tag='h3' typography='h3'>
          Tecnologias
        </TagConstructor>
        <MdAddBox />
      </TagConstructor>

      <TagConstructor
        tag='ul'
        typography='ul'
        padding='1rem'
        borderRadius='5px'
      >
        <Technologies />
      </TagConstructor>
    </Container>
  </TagConstructor>
);

export default Main;
