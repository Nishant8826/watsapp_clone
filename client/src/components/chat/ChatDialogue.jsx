import React from 'react'
import { Dialog, Box, styled } from '@mui/material'
import Menu from './menu/Menu'
import EmptyChat from './chat/EmptyChat'

const Component = styled(Box)`
    display:flex;
`;

const LeftComponent = styled(Box)`
    min-width:450px;
`;

const RightComponent = styled(Box)`
    width:73%;
    min-width:300px;
    height:100%;
    border-left:1px solid rgba(0,0,0,0.14)
`;

const dialogueStyle = {
    height: '95%',
    width: '100%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overFlow: 'hidden',
}

const ChatDialogue = () => {
    return (
        <Dialog open={true} PaperProps={{ sx: dialogueStyle }} hideBackdrop={true} maxWidth={'md'}>
            <Component>
                <LeftComponent>
                    <Menu />
                </LeftComponent>
                <RightComponent>
                    <EmptyChat />
                </RightComponent>
            </Component>

        </Dialog>
    )
}


export default ChatDialogue