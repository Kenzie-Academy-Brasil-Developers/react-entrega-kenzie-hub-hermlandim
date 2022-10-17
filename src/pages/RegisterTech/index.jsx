import React, { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import Form from '../../components/Form';
import { Inputs, Select } from '../../components/Inputs';
import { TagConstructor } from '../../components/Typography/typography';
import { Buttons } from '../../components/Buttons';
import { AuthContext } from '../../contexts/AuthContext';

const RegisterTech = () => {
  const { setShowModalTech } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const registerTechnologies = (data) => {
    console.log('oi');
    console.log(data);
  };
  return (
    <TagConstructor
      tag='div'
      height='100vh'
      width='100vw'
      position='fixed'
      display='flex'
      justifyContent='center'
      alignItems='center'
      background='rgba(0, 0, 0, 0.5);'
    >
      <Form
        onSubmit={handleSubmit(registerTechnologies)}
        gap='15px'
        variant='buttons'
        height='50%'
        width='90%'
        justifyContent='space-evenly'
        maxWidth='500px'
      >
        <TagConstructor
          tag='div'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          variant='svg-close'
        >
          <TagConstructor tag='h3' typography='h3'>
            Cadastrar Tecnologia
          </TagConstructor>

          <AiOutlineClose onClick={() => setShowModalTech(null)} />
        </TagConstructor>

        <TagConstructor tag='label' typography='headline' htmlFor='name'>
          Nome
        </TagConstructor>

        <Inputs
          type='text'
          id='name'
          placeholder='Digite a linguagem'
          {...register('name')}
        />

        <TagConstructor tag='label' typography='headline' htmlFor='experience'>
          Selecionar Status
        </TagConstructor>

        <Select
          type='text'
          id='experience'
          placeholder='Opção de contato'
          {...register('experience')}
        >
          <option>Iniciante</option>
          <option>Intermediário</option>
          <option>Avançado</option>
        </Select>

        <Buttons typeButton='primary' type='submit'>
          Cadastrar Tecnologia
        </Buttons>
      </Form>
    </TagConstructor>
  );
};

export default RegisterTech;
