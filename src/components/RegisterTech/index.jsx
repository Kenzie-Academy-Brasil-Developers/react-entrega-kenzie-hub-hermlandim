import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import Form from '../Form';
import { Inputs } from '../Inputs';
import { TagConstructor } from '../Typography/typography';

const RegisterTech = () => {
  const teste = () => {
    console.log('oi');
  };
  return (
    <Form onSubmit={teste}>
      <TagConstructor tag='div'>
        <TagConstructor tag='h3' typography='h3'>
          Cadastrar Tecnologia
        </TagConstructor>

        <AiOutlineClose />
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
    </Form>
  );
};

export default RegisterTech;
