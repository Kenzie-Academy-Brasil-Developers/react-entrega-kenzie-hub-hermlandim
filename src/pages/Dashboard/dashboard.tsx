/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { useContext } from 'react';
import RegisterTech from '../RegisterTech';
import { AuthContext } from '../../contexts/AuthContext';
import Header from './Header';
import Main from './Main';

const Dashboard = () => {
  const { showModalTech } = useContext(AuthContext);
  return (
    <>
      {showModalTech ? <RegisterTech /> : null}
      <Header />
      <Main />
    </>
  );
};

export default Dashboard;
