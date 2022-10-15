import React from 'react';
import { BsFillTrashFill } from 'react-icons/bs';
import { TagConstructor } from '../../../../components/Typography/typography';

const Technologies = () => (
  <TagConstructor tag='li' typography='li'>
    <h3>React JS</h3>
    <div>
      <h4>Intermediário</h4>
      <BsFillTrashFill />
    </div>
  </TagConstructor>
);

export default Technologies;
