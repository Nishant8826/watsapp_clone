import React, { useContext, useEffect, useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { AccountContext } from '../../../context/AccountProvider'
import { setConversation, getConversation } from '../../../service/api'

const Component = styled(Box)`
    display:flex;
    height:45px;
    padding:13px 0;
    cursor:pointer;
`

const Image = styled('img')({
    width: 50,
    height: 50,
    padding: '0 14px',
    borderRadius: '50%'
})

const Conversation = ({ user }) => {

    const { setPerson, account, newMessageFlag, setNewMessageFlag } = useContext(AccountContext);

    const [message, setMessage] = useState({});

    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.sub, recieverId: user.sub });
    }

    useEffect(() => {
        const getConverSation = async () => {
            const data = await getConversation({ senderId: account.sub, recieverId: user.sub });
            setMessage({ text: data.conversation?.message, timeStamps: data.conversation?.updatedAt })
        }

        getConverSation();
    }, [newMessageFlag])

    console.log('message>>>',message)

    return (
        <Component onClick={() => getUser()}>
            <Box>
                <Image src={user?.picture} alt='dp' />
            </Box>
            <Box>
                <Box>
                    <Typography>{user?.name}</Typography>
                    {message?.text && <Typography>{message?.timeStamps}</Typography>}
                </Box>
            </Box>
        </Component >
    )
}

export default Conversation