import axios from "axios";

export const addContact = async(data:any)=> {
    try{
        const url:any = process.env.NEXT_PUBLIC_ADD_CONTACT
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