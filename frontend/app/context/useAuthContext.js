import { AuthContext } from './AuthContext';
import { useContext } from 'react';

export const UseAuthContext = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw Error('useAuthContext must be used inside an ReailerContextProvider');
  }

  return context;
};
