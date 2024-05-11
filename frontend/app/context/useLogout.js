import { UseAuthContext } from './useAuthContext';
import { useSnackbar } from 'notistack';
export const useLogout = () => {
  const { dispatch } = UseAuthContext();
  const { enqueueSnackbar } = useSnackbar();

  const logout = () => {
    localStorage.removeItem('retailer');

    enqueueSnackbar('Logged out succesfully!', {
      variant: 'success',
      autoHideDuration: 2000,
    });

    dispatch({ type: 'LOGOUT' });
  };
  return { logout };
};
