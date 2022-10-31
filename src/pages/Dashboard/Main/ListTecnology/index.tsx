/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/no-array-index-key */
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { TagConstructor } from '../../../../components/Typography/typography';
import { AuthContext, IUser } from '../../../../contexts/AuthContext';
import api from '../../../../services/api';

const Technologies = () => {
  const { listTechs, removeTechnologie } = useContext(AuthContext);

  return (
    <>
      {!listTechs ? (
        <h2>Sem nada</h2>
      ) : (
        listTechs.techs.map((elem, key) => (
          <TagConstructor tag='li' typography='li' key={key}>
            <h3>{elem.title}</h3>
            <div>
              <h4>{elem.status}</h4>
              <BsFillTrashFill
                onClick={() => removeTechnologie(`${elem.id}`)}
              />
            </div>
          </TagConstructor>
        ))
      )}
    </>
  );
};

export default Technologies;
