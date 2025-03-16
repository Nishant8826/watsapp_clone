import express from 'express';
import { addUser, getUsers } from '../controller/userController.js';
import { newConversation } from '../controller/conversation-controller.js';

const route = express.Router();


route.post('/addUser', addUser);
route.get('/getUsers', getUsers);

route.post('/conversation/add', newConversation);


export default route;
