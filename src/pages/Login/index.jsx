import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Form from '../../components/Form';
import api from '../../services/api';
import { TagConstructor } from '../../components/Typography/typography';
import { Inputs } from '../../components/Inputs';
import { Buttons } from '../../components/Buttons';
import { Container } from '../../components/Container';

const schema = yup.object({
  email: yup
    .string()
    .email('Email é obrigatório')
    .required('Email é obrigatório'),
  password: yup
    .string()
    .required('Senha é obrigatória')
    .min(8, 'No mínimo 8 caracteres'),
});

// eslint-disable-next-line react/prop-types
const LoginPage = ({ setUser }) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginUser = (data) => {
    toast.promise(
      api.post('/sessions', data).then((resp) => {
        setUser(resp.data.user);
        localStorage.setItem('@Kenzie-token', resp.data.token);
        localStorage.setItem('@Kenzie-id', resp.data.user.id);
        navigate('/dashboard');
      }),
      {
        pending: 'Loading',
        success: `Sucesso! Seja Bem-Vindo(a)`,
        error: 'Conta inexistente, cadrastre-se!',
      }
    );

    // console.log(data);
    // reset();
  };

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
