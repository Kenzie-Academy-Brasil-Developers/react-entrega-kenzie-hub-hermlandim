import { ReactNode, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Container } from '../../../components/Container';
import { TagConstructor } from '../../../components/Typography/typography';
import { AuthContext } from '../../../contexts/AuthContext';

const Header = () => {
  const { user } = useContext(AuthContext);

  const logout = () => {
    localStorage.clear();
  };

  return (
    <TagConstructor
      tag='header'
      typography='link-back'
      marginBottom='1.5rem'
      marginTop='1.5rem'
      display='flex'
      flexDirection='column'
      gap='1rem'
    >
      <Container
        display='flex'
        flexDirection='column'
        gap='2rem'
        container='desktop'
      >
        <TagConstructor
          tag='div'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          <TagConstructor
            tag='h1'
            typography='h1'
            fontColor='var(--color-primary)'
          >
            Kenzie Hub
          </TagConstructor>

          <Link to='/login' onClick={logout}>
            Sair
          </Link>
        </TagConstructor>
      </Container>

      <TagConstructor
        tag='div'
        borderBottom='1px solid var(--color-grey-2)'
        borderTop='1px solid var(--color-grey-2)'
        padding='2rem 0 2rem 0'
      >
        <Container container='desktop' media='mediaHeader'>
          <TagConstructor tag='h1' typography='h1' marginBottom='1rem'>
            Olá,
            {user?.name}
          </TagConstructor>
          <TagConstructor tag='span' typography='headline-bold'>
            {user?.course_module}
          </TagConstructor>
        </Container>
      </TagConstructor>
    </TagConstructor>
  );
};

export default Header;
