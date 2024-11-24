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

export const getAllBlog = async()=>{
  try {
    const url:any = process.env.NEXT_PUBLIC_GET_ALL_BLOG;
    const response = await axios.get(url);

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
}

export const getBlogById = async(id:any)=>{
  try {
    const url:any = process.env.NEXT_PUBLIC_GET_ALL_BLOG+id;
    const response = await axios.get(url);

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
}

export const deleteBlog = async (id:any, adminId:any) => {
  const url = `${process.env.NEXT_PUBLIC_GET_ALL_BLOG}${id}?deletedBy=${adminId}`;

  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error:any) {
    if (error.response) {
      return error.response.data;
    } else if (error.message) {
      return error.message;
    } else {
      return 'It seems to be a connection issue, try again later....';
    }
  }
};


export const updateBlog = async (id:any, formData:any) => {
  const url:any = process.env.NEXT_PUBLIC_GET_ALL_BLOG+id;

  try {
      const response = await axios.patch(url, formData);
      return response.data;
    } catch (error:any) {
      if (error.response) {
        return error.response.data;
      } else if (error.message) {
        return error.message;
      } else {
        return 'It seems to be a connection issue, try again later....';
      }
    }
 
};
