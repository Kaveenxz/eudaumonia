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