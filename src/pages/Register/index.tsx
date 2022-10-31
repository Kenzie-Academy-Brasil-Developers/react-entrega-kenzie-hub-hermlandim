import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Form from '../../components/Form';

import { TagConstructor } from '../../components/Typography/typography';
import { Inputs, Select } from '../../components/Inputs';
import { Buttons } from '../../components/Buttons';
import { Container } from '../../components/Container';
import { AuthContext } from '../../contexts/AuthContext';
import * as yup from 'yup';

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
}

const schemaRegister = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup
    .string()
    .email('Email é obrigatório')
    .required('Email é obrigatório'),
  password: yup
    .string()
    .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
    .matches(/[a-z]/, 'Deve conter ao menos 1 letra minúscula')
    .matches(/(\d)/, 'Deve conter ao menos 1 número')
    .matches(/(\W)|_/, 'Deve conter ao menos 1 caracter especial')
    .matches(/.{8,}/, 'Deve conter no mínimo 8 dígitos')
    .required('Senha é obrigatória'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Confirmação de senha incorreta'),
  bio: yup.string().required('Conte um pouco sobre você'),
  contact: yup.string().required('Digite seu número'),
});

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm<IUserRegister>({
    resolver: yupResolver(schemaRegister),
  });

  return (
    <Container
      height='100vh'
      display='flex'
      flexDirection='column'
      justifyContent='center'
    >
      <TagConstructor
        tag='div'
        typography='link-back'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        marginBottom='1rem'
      >
        <TagConstructor
          tag='h1'
          typography='h1'
          fontColor='var(--color-primary)'
        >
          {' '}
          Kenzie Hub
        </TagConstructor>

        <Link to='/login'>Voltar</Link>
      </TagConstructor>

      <Form onSubmit={handleSubmit(registerUser)}>
        <TagConstructor typography='h2' tag='h2'>
          Crie sua conta
        </TagConstructor>

        <TagConstructor tag='span' typography='headline-bold'>
          Rápido e grátis, vamos nessa!
        </TagConstructor>
        <TagConstructor tag='label' typography='headline' htmlFor='name'>
          Nome
        </TagConstructor>
        <Inputs
          type='text'
          id='name'
          placeholder='Digite seu nome'
          {...register('name')}
        />
        <p>{errors.name?.message}</p>

        <TagConstructor tag='label' typography='headline' htmlFor='email'>
          Email
        </TagConstructor>
        <Inputs
          type='email'
          id='email'
          placeholder='Digite seu email'
          {...register('email')}
        />
        <p>{errors.email?.message}</p>

        <TagConstructor tag='label' typography='headline' htmlFor='password'>
          Senha
        </TagConstructor>
        <Inputs
          type='password'
          id='password'
          placeholder='Digite sua senha'
          {...register('password')}
        />
        <p>{errors.password?.message}</p>

        <TagConstructor
          tag='label'
          typography='headline'
          htmlFor='confirmPassword'
        >
          Confirmar Senha
        </TagConstructor>
        <Inputs
          type='password'
          id='confirmPassword'
          placeholder='Confirme sua senha'
          {...register('confirmPassword')}
        />
        <p>{errors.confirmPassword?.message}</p>

        <TagConstructor tag='label' typography='headline' htmlFor='bio'>
          Bio
        </TagConstructor>
        <Inputs
          type='text'
          id='bio'
          placeholder='Fale sobre você'
          {...register('bio')}
        />
        <p>{errors.bio?.message}</p>

        <TagConstructor tag='label' typography='headline' htmlFor='contact'>
          Contato
        </TagConstructor>
        <Inputs
          type='number'
          id='contact'
          placeholder='Opção de contato'
          {...register('contact')}
        />
        <p>{errors.contact?.message}</p>

        <TagConstructor
          tag='label'
          typography='headline'
          htmlFor='course_module'
        >
          Selecionar Módulo
        </TagConstructor>
        <Select
          id='course_module'
          placeholder='Opção de contato'
          {...register('course_module')}
        >
          <option>Primeiro módulo (Introdução ao Frontend)</option>
          <option>Segundo módulo (Frontend Avançado)</option>
          <option>Terceiro módulo (Introdução ao Backend)</option>
          <option>Quarto módulo (Backend Avançado)</option>
        </Select>
        <p>{errors.contact?.message}</p>

        <Buttons typeButton='primary-negative' type='submit'>
          Cadastrar-se
        </Buttons>
      </Form>
    </Container>
  );
};

export default Register;
