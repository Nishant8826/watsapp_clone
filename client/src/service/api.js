import axios from 'axios';


const url = 'http://localhost:8000';

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