const express = require('express');
const { addUser, getUsers } = require('../controller/userController.js');
const { newConversation, getConversation } = require('../controller/conversation-controller.js');
const { getMessages, newMessage } = require('../controller/message-controller.js');
const { uploadFile, getFile } = require('../controller/image-controller.js');

const upload = require('../utils/upload.js');

const route = express.Router();


route.post('/addUser', addUser);
route.get('/getUsers', getUsers);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessages);

route.post('/file/upload', upload.single("file"), uploadFile);
route.get('/file/:id', getFile);

module.exports = route;
