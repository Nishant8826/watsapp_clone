import axios from 'axios';


const url = 'https://watsapp-clone-api.onrender.com';

export const addUser = async (data) => {
    try {
        await axios.post(`${url}/addUser`, data);
    } catch (error) {
        console.log('Error while addUser : ', error.message);
    }
}

export const getUser = async () => {
    try {
        let result = await axios.get(`${url}/getUsers`);
        return result.data;
    } catch (error) {
        console.log('Error while getUsers : ', error.message);
    };
}

export const setConversation = async (data) => {
    try {
        let result = await axios.post(`${url}/conversation/add`, data);
        return result.data;
    } catch (error) {
        console.log('Error while setConversation : ', error.message);
    };
}

export const getConversation = async (data) => {
    try {
        let result = await axios.post(`${url}/conversation/get`, data);
        return result.data;
    } catch (error) {
        console.log('Error while getConversation : ', error.message);
    };
}

export const newMessage = async (data) => {
    try {
        let result = await axios.post(`${url}/message/add`, data);
        return result.data;
    } catch (error) {
        console.log('Error while newMessage : ', error.message);
    };
}

export const getMessages = async (id) => {
    try {
        let result = await axios.get(`${url}/message/get/${id}`);
        return result.data;
    } catch (error) {
        console.log('Error while getMessages : ', error.message);
    };
}

export const uploadImage = async (data) => {
    try {
        let result = await axios.post(`${url}/file/upload`, data);
        return result.data;
    } catch (error) {
        console.log('Error while uploadImage : ', error.message);
    };
}