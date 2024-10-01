import axios from "axios";

export const upcommingEventRegister = async (data:any)=> {
    const url:any= process.env.NEXT_PUBLIC_SEND_UPCOMMING_EVENT_DATA;

    try{
        const response = await axios.post(url, data)
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