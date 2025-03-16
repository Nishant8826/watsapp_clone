import React, { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider';
import { Box, styled, Typography } from '@mui/material'
import { formateDate } from '../../../utils/formatDate'


const Own = styled(Box)`
    background:#dcf8c6;
    max-width:60%;
    margin-left:auto;
    width:fit-content;
    padding:5px;
    display:flex;
    border-radius:10px;
    word-break:break-word;
`;

const Wrapper = styled(Box)`
    background:#FFFFFF;
    max-width:60%;
    width:fit-content;
    padding:5px;
    display:flex;
    border-radius:10px;
    word-break:break-word;
`;

const Text = styled(Typography)`
    font-size:14px;
    padding:0 25px 0 5px;
`;

const Time = styled(Typography)`
    font-size:10px;
    color:#919191;
    word-break:keep-all;
    margin-top:auto;
`;

const Message = ({ message }) => {

    const { account } = useContext(AccountContext);

    return (
        <>
            {
                account.sub === message.senderId ?
                    <Own>
                        <Text>{message.text}</Text>
                        <Time>{formateDate(message.createdAt)}</Time>
                    </Own>
                    :
                    <Wrapper>
                        <Text>{message.text}</Text>
                        <Time>{formateDate(message.createdAt)}</Time>
                    </Wrapper>
            }
        </>
    )
}

export default Message