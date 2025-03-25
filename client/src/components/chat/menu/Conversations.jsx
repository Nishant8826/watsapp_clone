import React, { useEffect, useState, useContext } from 'react'
import { Box, Divider, styled } from '@mui/material'

import { getUser } from '../../../service/api.js'
import Conversation from './Conversation.jsx';
import { AccountContext } from '../../../context/AccountProvider.jsx';

const Component = styled(Box)`
    height:80vh;
    overflow:overlay;
`;

const StyledDivider = styled(Divider)`
    background-color:#e9edef;
    margin:0 0 0 70px;
    opacity:0.6;
`;

const Conversations = ({ text }) => {

    const [users, setUsers] = useState([]);
    const { account, socket, setActiveUsers } = useContext(AccountContext);


    useEffect(() => {
        const fetchData = async () => {
            let result = await getUser();
            const filterData = result.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
            setUsers(filterData);
        }
        fetchData();
    }, [text])

    useEffect(() => {
        socket.current.emit('addUser', account);
        socket.current.on("getUsers", users => {
            setActiveUsers(users);
        })
    }, [account])

    return (
        <Component>
            {
                users && users.map((user, index) => (
                    user.sub !== account.sub && (
                        <>
                            < Conversation user={user} key={user.sub} />
                            <StyledDivider />
                        </>
                    )
                ))
            }
        </Component>
    )
}

export default Conversations