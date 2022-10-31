import React, { useContext } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import Form from '../../components/Form';
import { Inputs, Select } from '../../components/Inputs';
import { TagConstructor } from '../../components/Typography/typography';
import { Buttons } from '../../components/Buttons';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

export interface IRegisterTech {
  title: string;
  status: string;
}

const RegisterTech = () => {
  const { setShowModalTech, registerTechnologies } = useContext(AuthContext);
  const { register, handleSubmit } = useForm<IRegisterTech>();

  return (
    <TagConstructor
      tag='div'
      height='100vh'
      width='100vw'
      position='fixed'
      zIndex='101'
      display='flex'
      justifyContent='center'
      alignItems='center'
      background='rgba(0, 0, 0, 0.5);'
    >
      <Form
        onSubmit={handleSubmit(registerTechnologies)}
        gap='15px'
        // variant='buttons'
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

          <Link to='/dashboard'>
            <AiOutlineClose onClick={() => setShowModalTech(false)} />
          </Link>
        </TagConstructor>

        <TagConstructor tag='label' typography='headline' htmlFor='name'>
          Nome
        </TagConstructor>

        <Inputs
          type='text'
          id='title'
          placeholder='Digite a linguagem'
          {...register('title')}
        />

        <TagConstructor tag='label' typography='headline' htmlFor='experience'>
          Selecionar Status
        </TagConstructor>

        <Select
          id='status'
          placeholder='Opção de contato'
          {...register('status')}
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
