import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './contexts/AuthContext';
import RoutesMain from './routes';
import Global from './styles/Global/global';

function App() {
  return (
    <>
      <ToastContainer />
      <Global />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  );
}

export default App;
