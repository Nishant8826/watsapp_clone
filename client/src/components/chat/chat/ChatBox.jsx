import React, { useContext, useEffect, useState } from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import { AccountContext } from '../../../context/AccountProvider'
import { Box } from '@mui/material'
import { getConversation } from '../../../service/api.js'

const ChatBox = () => {

    const { person, account } = useContext(AccountContext);

    const [conversation, setConversation] = useState({});


    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({ senderId: account.sub, recieverId: person.sub });
            setConversation(data.conversation);
        }
        getConversationDetails();
    }, [person.sub]);

    return (
        <Box style={{ height: '75%' }}>
            <ChatHeader person={person} />
            <Messages person={person} conversation={conversation} />
        </Box>
    )
}

export default ChatBox