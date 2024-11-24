import axios from "axios"

export const getallActivities = async ()=> {
    try{
        const url:any = process.env.NEXT_PUBLIC_GET_ALL_ACTIVITIES
        const responce =await axios.get(url);

        return responce.data;
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

export const addActivity = async(data:any)=> {
    try{
        const url:any = process.env.NEXT_PUBLIC_ADD_ACTIVITY
        console.log(data)
        const responce =await axios.post(url,data);

        return responce.data;
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




export const deleteActivity = async (id:any, adminId:any) => {
    const url = `${process.env.NEXT_PUBLIC_ADD_ACTIVITY}/${id}?deletedBy=${adminId}`;
  
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

  export const updateActivity = async (id:any, formData:any) => {
    let ids = Number(id)
    console.log(ids)
    const url:any = process.env.NEXT_PUBLIC_ADD_ACTIVITY+"/"+id;

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

  

  
export const getActivityById = async (id:any)=> {
    try{
        const url:any = process.env.NEXT_PUBLIC_GET_ALL_ACTIVITIES+"/"+id;
        const responce =await axios.get(url);

        return responce.data;
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