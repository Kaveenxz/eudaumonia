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