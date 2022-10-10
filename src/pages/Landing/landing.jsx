import React from 'react';
import { Link } from 'react-router-dom';
import { TagConstructor } from '../../components/Typography/typography';

const LandingPage = () => (
  <TagConstructor
    tag='div'
    typography='link-back'
    display='flex'
    justifyContent='center'
    flexDirection='column'
    gap='8rem'
    alignItems='center'
    height='85vh'
  >
    <TagConstructor tag='h1' typography='h1' fontColor='var(--color-primary)'>
      Seja Bem-Vindo(a)
    </TagConstructor>
    <Link to='/login'>Iniciar</Link>
  </TagConstructor>
);

export default LandingPage;
