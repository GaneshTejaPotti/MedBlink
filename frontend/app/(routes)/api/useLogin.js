'use client';
import { useState } from 'react';
import { UseAuthContext } from '../../context/useAuthContext';
import { useSnackbar } from 'notistack';

const useLogin = () => {
  const { dispatch } = UseAuthContext();

  const { enqueueSnackbar } = useSnackbar();

  const BACKEND_URL =
    process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '';

  const login = async ({ retailerId, password }) => {
    const response = await fetch(`${BACKEND_URL}/api/retailer/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        retailerId,
        password,
      }),
    });

    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      enqueueSnackbar('LoggedIn succesfully!', {
        variant: 'success',
        autoHideDuration: 2000,
      });

      localStorage.setItem('retailer', JSON.stringify(json));

      // update the auth context
      dispatch({ type: 'LOGIN', payload: json });
    }
  };
  return { login };
};

export default useLogin;
