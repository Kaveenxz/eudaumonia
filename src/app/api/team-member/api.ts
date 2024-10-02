import axios from "axios";
import { AnyNode } from "postcss";

export const getallTeamMembers = async ()=> {
    try{
        const url:any = process.env.NEXT_PUBLIC_GET_ALL_TEAM_MEMBERS
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


export const getTeamMemberById = async (id:any)=> {
    try{
        const url:any = process.env.NEXT_PUBLIC_GET_TEAM_MEMBER_BY_ID+"/"+id
        const responce =await axios.get(url);
        console.log(url)
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


export const addMemberReferance = async(data:any)=> {
    try{
        const url:any = process.env.NEXT_PUBLIC_ADD_MEMBER_REFERANCE
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