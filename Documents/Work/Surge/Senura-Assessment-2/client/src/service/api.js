import axios from "axios";


const URL= 'http://localhost:8080';

const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('TOKEN')}` }
};

export const addUser = async (data) => {
    try{
        return await axios.post(`${URL}/add`,data,config);
    }catch(e){
        console.log("Error while calling add user api ", e);
    }
}

export const getUsers = async ()=> {
    try {
        return await axios.get(`${URL}/user-list`,config);
        
    } catch (er) {
        console.log("Error while calling get user list from api ", er)
    }
}

export const getUser = async (id)=> {
    try {
        return axios.get(`${URL}/${id}`);
    } catch (err) {
        console.log("Error while calling get user from api ", err)
    }
}

export const editUser = async (user, id) => {
    try {
        return axios.put(`${URL}/${id}`, user);
    } catch (erro) {
        console.log("Error while calling edit user from api ", erro)
    }
}

export const deleteUser = async (id) => {
    try {
        return axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log("Error while calling delete user from api ", error)
    }
}

export const logUser = async (data) => {
    try {
        return axios.post(`${URL}/login`,data);
    } catch (error) {
        console.log("Error while calling login user from api ", error)
    }
}


export const addNotes = async (data) => {
    try{
        return await axios.post(`${URL}/add-note`,data,config);
    }catch(e){
        console.log("Error while calling add user api ", e);
    }
}