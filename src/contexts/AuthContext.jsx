/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [showModalTech, setShowModalTech] = useState(null);
  return (
    <AuthContext.Provider value={{ showModalTech, setShowModalTech }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
