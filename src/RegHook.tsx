import * as React from 'react';
import './style.css';

const UserContext = React.createContext(null);

export const UserProvider = ({ children }) => {
  const [name, setName] = React.useState('');

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => React.useContext(UserContext);
