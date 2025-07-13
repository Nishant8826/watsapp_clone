import axios from 'axios';
import { baseURL } from '../config/config';


export const addUser = async (data) => {
    try {
        await axios.post(`${baseURL}/addUser`, data);
    } catch (error) {
        console.log('Error while addUser : ', error.message);
    }
}

export const getUser = async () => {
    try {
        let result = await axios.get(`${baseURL}/getUsers`);
        return result.data;
    } catch (error) {
        console.log('Error while getUsers : ', error.message);
    };
}

export const setConversation = async (data) => {
    try {
        let result = await axios.post(`${baseURL}/conversation/add`, data);
        return result.data;
    } catch (error) {
        console.log('Error while setConversation : ', error.message);
    };
}

export const getConversation = async (data) => {
    try {
        let result = await axios.post(`${baseURL}/conversation/get`, data);
        return result.data;
    } catch (error) {
        console.log('Error while getConversation : ', error.message);
    };
}

export const newMessage = async (data) => {
    try {
        let result = await axios.post(`${baseURL}/message/add`, data);
        return result.data;
    } catch (error) {
        console.log('Error while newMessage : ', error.message);
    };
}

export const getMessages = async (id) => {
    try {
        let result = await axios.get(`${baseURL}/message/get/${id}`);
        return result.data;
    } catch (error) {
        console.log('Error while getMessages : ', error.message);
    };
}

export const uploadImage = async (data) => {
    try {
        let result = await axios.post(`${baseURL}/file/upload`, data);
        return result.data;
    } catch (error) {
        console.log('Error while uploadImage : ', error.message);
    };
}