import axios from 'axios';

export const addBlog = async (data: FormData) => {
  try {
    const url:any = process.env.NEXT_PUBLIC_ADD_BLOG;
    const response = await axios.post(url, data
    );

    return response.data;
  } catch (error: any) {
    if (error.response) {
      return error.response.data;
    } else if (error.message) {
      return error.message;
    } else {
      return 'It seems to be a connection issue, try again later...';
    }
  }
};
