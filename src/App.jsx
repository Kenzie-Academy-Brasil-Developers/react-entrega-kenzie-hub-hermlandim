import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RoutesMain from './routes';
import Global from './styles/Global/global';

function App() {
  return (
    <>
      <ToastContainer />
      <Global />
      <RoutesMain />
    </>
  );
}

export default App;
