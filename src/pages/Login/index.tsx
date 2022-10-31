import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from '../../components/Form';
import { TagConstructor } from '../../components/Typography/typography';
import { Inputs } from '../../components/Inputs';
import { Buttons } from '../../components/Buttons';
import { Container } from '../../components/Container';
import { AuthContext } from '../../contexts/AuthContext';
import * as yup from 'yup';

export interface IUserLogin {
  email: string;
  password: string;
}

const schemaLogin = yup.object({
  email: yup
    .string()
    .email('Email é obrigatório')
    .required('Email é obrigatório'),
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
});

// eslint-disable-next-line react/prop-types
const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<IUserLogin>({
    resolver: yupResolver(schemaLogin),
  });

  return (
    <Container
      height='90vh'
      display='flex'
      flexDirection='column'
      justifyContent='center'
    >
      <TagConstructor
        tag='h1'
        typography='h1'
        fontColor='var(--color-primary)'
        position='relative'
        bottom='2rem'
        textAlign='center'
      >
        {' '}
        Kenzie Hub
      </TagConstructor>
      <Form onSubmit={handleSubmit(loginUser)} gap='13px'>
        <TagConstructor typography='h2' tag='h2'>
          Login
        </TagConstructor>
        <TagConstructor tag='label' typography='headline' htmlFor='email'>
          Email
        </TagConstructor>
        {/* <input type='email' id='email' {...register('email')} /> */}
        <Inputs
          type='email'
          id='email'
          placeholder='Digite seu email'
          {...register('email')}
        />
        <TagConstructor tag='p' fontColor='var(--color-primary)'>
          {errors.email?.message}
        </TagConstructor>

        <TagConstructor tag='label' typography='headline' htmlFor='password'>
          Senha
        </TagConstructor>
        <Inputs
          type='password'
          id='password'
          placeholder='Digite sua senha'
          {...register('password')}
        />
        <TagConstructor tag='p' fontColor='var(--color-primary)'>
          {errors.password?.message}
        </TagConstructor>

        <Buttons typeButton='primary' type='submit'>
          Entrar
        </Buttons>
        <TagConstructor tag='span' typography='headline-bold'>
          Ainda não possui uma conta?
        </TagConstructor>
        <Link to='/register'>Cadastre-se</Link>
      </Form>
    </Container>
  );
};

export default LoginPage;
