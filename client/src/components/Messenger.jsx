import React, { useContext } from 'react'
import { AppBar, Box, styled, Toolbar } from '@mui/material';

import LoginDialogue from './account/LoginDialogue';

import { AccountContext } from '../context/AccountProvider';
import ChatDialogue from './chat/ChatDialogue';

const Div = styled(Box)`
    height:100vh;
    background-color:#DCDCDC;
    
`

const Header = styled(AppBar)`
    height:110px;
    background-color:#00A884;
    box-shadow:none;
`

const LoginHeader = styled(AppBar)`
    height:200px;
    background-color:#00bfa5;
    box-shadow:none;
`

const Messenger = () => {

    const { account } = useContext(AccountContext);

    return (
        <Div>
            {
                account ?
                    <>
                        <Header>
                            <Toolbar>

                            </Toolbar>
                        </Header>
                        <ChatDialogue />
                    </>
                    :
                    <>
                        <LoginHeader>
                            <Toolbar>

                            </Toolbar>
                        </LoginHeader>
                        <LoginDialogue />
                    </>
            }
        </Div>
    )
}

export default Messenger;   