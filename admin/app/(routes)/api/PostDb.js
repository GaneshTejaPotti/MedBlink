'use client';
import { useSnackbar } from 'notistack';

const BACKEND_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '';

const PostDb = () => {
  const { enqueueSnackbar } = useSnackbar();

  const saveRetailer = async ({ _id, retailerId, password }) => {
    const response = await fetch(`${BACKEND_URL}/api/admin/saveRetailer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        //   Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({ _id, retailerId, password }),
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

      location.reload();
    }
  };

  return { saveRetailer };
};

export default PostDb;
