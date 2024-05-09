import { useSnackbar } from 'notistack';
// import { UseAuthContext } from '../context/useAuthContext';

const PostDb = () => {
  //   const { user } = UseAuthContext();
  const { enqueueSnackbar } = useSnackbar();

  const BACKEND_URL =
    process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '';

  const signupRetailer = async (data) => {
    console.log(data);
  };

  return {
    signupRetailer,
  };
};

export default PostDb;
