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

const Conversations = () => {

    const [users, setUsers] = useState([]);
    const { account } = useContext(AccountContext);

    const fetchData = async () => {
        let result = await getUser();
        setUsers(result);
    }

    useEffect(() => {
        fetchData();
    }, [])



    return (
        <Component>
            {
                users && users.map(user => (
                    user.sub !== account.sub &&
                    <>
                        < Conversation user={user} />
                        <StyledDivider />
                    </>
                ))
            }
        </Component>
    )
}

export default Conversations