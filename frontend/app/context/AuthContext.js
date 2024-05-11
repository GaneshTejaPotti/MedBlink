import { createContext, useReducer, useEffect } from 'react';

export const AuthContext = createContext();
export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        retailer: action.payload,
      };
    case 'LOGOUT':
      return {
        retailer: null,
      };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    retailer: null,
  });

  useEffect(() => {
    const retailer = JSON.parse(localStorage.getItem('retailer'));

    if (retailer) {
      dispatch({ type: 'LOGIN', payload: retailer });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
