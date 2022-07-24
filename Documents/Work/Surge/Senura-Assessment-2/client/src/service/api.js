import axios from "axios";


const URL= 'http://localhost:8080';

export const addUser = async (data) => {
    try{
        return await axios.post(`${URL}/add`,data);
    }catch(e){
        console.log("Error while calling add user api ", e);
    }
}

export const getUsers = async ()=> {
    try {
        return await axios.get(`${URL}/user-list`);
        
    } catch (er) {
        console.log("Error while calling get user list from api ", er)
    }
}