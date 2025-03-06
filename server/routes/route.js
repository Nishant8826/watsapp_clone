import express from 'express';
import { addUser, getUsers } from '../controller/userController.js';

const route = express.Router();


route.post('/addUser', addUser);
route.get('/getUsers', getUsers);

export default route;
