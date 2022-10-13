import React from 'react';
import { MdAddBox } from 'react-icons/md';
import { Container } from '../../../components/Container';
import { TagConstructor } from '../../../components/Typography/typography';

const Main = () => (
  <TagConstructor tag='main'>
    <Container container='desktop'>
      <TagConstructor tag='div'>
        <MdAddBox />
      </TagConstructor>
    </Container>
  </TagConstructor>
);

export default Main;
