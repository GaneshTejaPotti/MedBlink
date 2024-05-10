import { useSnackbar } from 'notistack';
// import { UseAuthContext } from '../context/useAuthContext';

const PostDb = () => {
  //   const { user } = UseAuthContext();
  const { enqueueSnackbar } = useSnackbar();

  const BACKEND_URL =
    process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '';

  const signupRetailer = async (data) => {
    console.log(data);
    const response = await fetch(`${BACKEND_URL}/api/retailer/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //   Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ data }),
    });

    if (!response.ok) {
      enqueueSnackbar('Something went wrong!', {
        variant: 'warning',
        autoHideDuration: 2000,
      });
    }
    if (response.ok) {
      enqueueSnackbar(
        'Your Details are submitted, Wait for account confirmation!',
        {
          variant: 'success',
          autoHideDuration: 2000,
        }
      );
    }
  };

  return {
    signupRetailer,
  };
};

export default PostDb;
