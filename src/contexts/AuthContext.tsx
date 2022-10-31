import { createContext, ReactNode, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IUserLogin } from '../pages/Login';
import { IUserRegister } from '../pages/Register';
import { IRegisterTech } from '../pages/RegisterTech';
import api from '../services/api';

interface IUserProviderProps {
  children: ReactNode;
}

interface IUserContext {
  loginUser(datas: IUserLogin): Promise<void>;
  registerUser(data: IUserRegister): Promise<void>;
  registerTechnologies(data: IRegisterTech): Promise<void>;
  removeTechnologie(id: string): Promise<void>;

  showModalTech: boolean;
  setShowModalTech: React.Dispatch<React.SetStateAction<boolean>>;

  user: IUser | undefined | null;
  listTech: IRegisterTech[];
  tokenUser: string | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  listTechs: IUser | undefined;
  setListTechs: React.Dispatch<React.SetStateAction<IUser | undefined>>;
}

// interface IResponseUser{
//   data: IUser;
// }

export interface IUser {
  id: string | number;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: ITechs[];
  created_at: string;
  updated_at: string;
  avatar_url: null | string;
  works: IUserWorks[];
}

interface IUserWorks {
  id: string;
  title: string;
  description: string;
  deploy_url: string;
  created_at: string;
  updated_at: string;
}

interface ITechs {
  id: string | number;
  title: string;
  status: string;
  created_at: string;
  updated_at: string;
}

export const AuthContext = createContext<IUserContext>({} as IUserContext);

const AuthProvider = ({ children }: IUserProviderProps) => {
  const [showModalTech, setShowModalTech] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [listTech, setListTech] = useState([] as IRegisterTech[]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const tokenUser = localStorage.getItem('@Kenzie-token');

  async function loginUser(datas: IUserLogin): Promise<void> {
    try {
      const response = await api.post('/sessions', datas);
      toast.success('Login realizado com sucesso!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      const { token } = response.data;
      const userId = response.data.user.id;
      localStorage.setItem('@Kenzie-token', token);
      localStorage.setItem('@Kenzie-id', userId);
      setUser(response.data.user);
      navigate('/dashboard', { replace: true });
    } catch (error) {
      toast.error(`${error}`, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  }

  async function registerUser(data: IUserRegister): Promise<void> {
    await api
      .post('/users', data)
      .then((resp) => {
        console.log(resp);
        navigate('/login');
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    async function loadUser() {
      try {
        if (tokenUser) {
          api.defaults.headers.authorization = `Bearer ${tokenUser}`;

          const { data } = await api.get('/profile');
          console.log(data);
          setUser(data);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    loadUser();
  }, []);

  async function registerTechnologies(data: IRegisterTech): Promise<void> {
    try {
      const token = localStorage.getItem('@Kenzie-token');
      api.defaults.headers.authorization = `Bearer ${token}`;
      const response = await api.post('/users/techs', data);
      const { title, status } = response.data;
      console.log(response.data);
      setListTech((previousTech) => [...previousTech, { title, status }]);
      setShowModalTech(false);
      // const {user: userResponse, token} = response.data
    } catch (error) {
      console.log(error);
    }
  }

  const [listTechs, setListTechs] = useState<IUser>();

  useEffect(() => {
    async function loadUser() {
      try {
        api.defaults.headers.authorization = `Bearer ${tokenUser}`;
        const { data } = await api.get('/profile');
        setListTechs(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadUser();
  }, [listTechs]);

  async function removeTechnologie(id: string): Promise<void> {
    try {
      const response = await api.delete(`/users/techs/${id}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider
      value={{
        showModalTech,
        setShowModalTech,
        user,
        loginUser,
        registerUser,
        registerTechnologies,
        removeTechnologie,
        listTech,
        tokenUser,
        setLoading,
        loading,
        listTechs,
        setListTechs,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
