import React, { useContext, useState, useEffect, useRef } from 'react'
import { Box, styled } from '@mui/material'

import { AccountContext } from '../../../context/AccountProvider'
import { getMessages, newMessage } from '../../../service/api.js'

import Footer from './Footer';
import Message from './Message.jsx';

const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`;

const Component = styled(Box)`
    height:76vh;
    overflow-y:scroll;
    margin-bottom:5px;
`;

const Container = styled(Box)`
    padding : 1px 15px
`;

const Messages = ({ person, conversation }) => {

    const { account, socket } = useContext(AccountContext)

    const [text, setText] = useState('');
    const [messages, setMessages] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);
    const [file, setFile] = useState();
    const [image, setImage] = useState('');
    const scrollRef = useRef();
    const [incomingMessage, setIncomingMessage] = useState();

    useEffect(() => {
        const getMessageDetails = async () => {
            let data = await getMessages(conversation._id)
            setMessages(data.data);
        };
        conversation._id && getMessageDetails();
    }, [person._id, conversation._id, newMessageFlag])

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: 'smooth' });
    }, [messages]);

    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncomingMessage({
                ...data,
                createdAt: Date.now(),
            })
        })
    }, []);

    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) && setMessages(prev => [...prev, incomingMessage]);
    }, [incomingMessage, conversation])

    const sendText = async (e) => {
        const code = e.keyCode || e.which;
        if (code === 13) {
            let message = {};
            if (!file) {
                message = {
                    conversationId: conversation._id,
                    senderId: account.sub,
                    recieverId: person.sub,
                    type: 'text',
                    text: text
                }
            } else {
                message = {
                    conversationId: conversation._id,
                    senderId: account.sub,
                    recieverId: person.sub,
                    type: 'file',
                    text: image
                }
            }
            socket.current.emit('sendMessage', message);
            await newMessage(message);
            setText('');
            setNewMessageFlag(prev => !prev);
        };
    };

    return (
        <Wrapper>
            <Component>
                {messages && messages.map(message => (
                    <Container ref={scrollRef}>
                        <Message message={message} />
                    </Container>
                ))}

            </Component>
            <Footer sendText={sendText} setText={setText} text={text} file={file} setFile={setFile} setImage={setImage} />
        </Wrapper>
    )
}

export default Messages