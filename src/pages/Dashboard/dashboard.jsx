import { useContext } from 'react';
import RegisterTech from '../RegisterTech';
import { AuthContext } from '../../contexts/AuthContext';
import Header from './Header';
import Main from './Main';

const Dashboard = () => {
  const { showModalTech } = useContext(AuthContext);
  return (
    <>
      {showModalTech ? <RegisterTech /> : console.log('object')}
      <Header />
      <Main />
    </>
  );
};

export default Dashboard;
