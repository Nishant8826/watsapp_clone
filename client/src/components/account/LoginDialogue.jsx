import { Dialog, List, ListItem, Typography, Box, styled } from '@mui/material'
import React, { useContext } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import * as jwt_decode from 'jwt-decode';

import { qrCodeImage } from '../../constants/data'
import { AccountContext } from '../../context/AccountProvider';
import { addUser } from '../../service/api';

// mui style
const Component = styled(Box)`
    display:flex;
`;

const Container = styled(Box)`
    padding:56px 0 56px 56px;
`;

const QrCode = styled('img')({
    height: 264,
    width: 264,
    margin: '50px 0 0 50px',
});

const Title = styled(Typography)`
    font-size:26px;
    font-family:inherit;
    font-weight:300;
    color:#525252;
    margin-bottom:25px;
`

const StyledList = styled(List)`
    & > li{
        padding:0;
        margin-top:15px;
        font-size:18px;
    }
`

const LoginDialogue = () => {

    const { setAccount } = useContext(AccountContext);

    const onLoginSucess = async (res) => {
        const decoded = jwt_decode.jwtDecode(res.credential);
        setAccount(decoded);
        await addUser(decoded);
    }

    const onLoginError = (res) => {
        console.log('Error: ', res);

    }


    return (
        <Dialog open={true} PaperProps={{ sx: dialogueStyle }} hideBackdrop={true}>
            <Component>
                <Container>
                    <Title>To use Watsapp on your computer:</Title>
                    <StyledList>
                        <ListItem>1. Open Watsapp on your phone</ListItem>
                        <ListItem>2. Tap Menu settings and select Watsapp Web</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </StyledList>
                </Container>
                <Box style={{ position: 'relative' }}>
                    <QrCode src={qrCodeImage} alt='qr code' />
                    <Box style={{ position: 'absolute', top: '50%', transform: 'translateX(20%)' }} >
                        <GoogleLogin onSuccess={onLoginSucess} onError={onLoginError} />
                    </Box>
                </Box>
            </Component>
        </Dialog>
    )
}

const dialogueStyle = {
    height: '96%',
    width: '60%',
    marginTop: '12%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow: 'none',
    overFlow: 'hidden',
}

export default LoginDialogue