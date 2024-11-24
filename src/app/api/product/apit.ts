import axios from "axios";

export const getProductCategories = async () => {
    const url:any = process.env.NEXT_PUBLIC_GET_PRODUCT_CATEGORIES;

    try{
        const response = axios.get(url);
        return response;
    }catch(error:any){
        if (error.response) {
            return error.response.data;
        } else if (error.message) {
            return error.message;
        } else {
            return "It seems to be a connection issue try again later....";
        }
    }
}

export const getProductById = async (id:any) => {
    const url:any = process.env.NEXT_PUBLIC_GET_PRODUCT_BY_ID+id

    try{
        const response = axios.get(url);
        console.log(response)
        return (await response).data;
    }catch(error:any){
        if (error.response) {
            return error.response.data;
        } else if (error.message) {
            return error.message;
        } else {
            return "It seems to be a connection issue try again later....";
        }
    }
}

export const addProduct = async (formData:any) => {
    try {
      const url:any = process.env.NEXT_PUBLIC_ADD_PRODUCT;
      const response = await axios.post(url, formData);
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

  export const getAllProducts = async () => {
   
    const url:any = process.env.NEXT_PUBLIC_ADD_PRODUCT;

    try {
        const response = await axios.get(url);
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

  export const deleteProduct = async (id:any, adminId:any) => {
    const url = `${process.env.NEXT_PUBLIC_ADD_PRODUCT}/${id}?deletedBy=${adminId}`;
  
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
  export const updateProduct = async (id:any, formData:any) => {
    let ids = Number(id)
    console.log(ids)
    const url:any = process.env.NEXT_PUBLIC_ADD_PRODUCT+"/"+id;

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