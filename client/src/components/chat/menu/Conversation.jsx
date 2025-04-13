import React, { useContext, useEffect, useState } from 'react'
import { Box, Typography, styled } from '@mui/material'
import { AccountContext } from '../../../context/AccountProvider'
import { setConversation, getConversation } from '../../../service/api'
import { formateDate } from '../../../utils/formatDate.js'

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

const Container = styled(Box)`
    display:flex;
`;

const TimeStamp = styled(Typography)`
    font-size:12px;
    margin-left:auto;
    color:#00000099;
    margin-right:20px;
`;

const Text = styled(Typography)`
    font-size:14px;
    color:rgba(0,0,0,0.6);
`;

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


    return (
        <Component onClick={() => getUser()}>
            <Box>
                <Image src={user?.picture} alt='dp' />
            </Box>
            <Box style={{ width: '100%' }}>
                <Container>
                    <Typography>{user?.name}</Typography>
                    {message?.text && <TimeStamp>{formateDate(message?.timeStamps)}</TimeStamp>}
                </Container>
                <Box>
                    <Text>{message?.text?.includes('localhost') ? 'media' : message.text}</Text>
                </Box>
            </Box>
        </Component >
    )
}

export default Conversation