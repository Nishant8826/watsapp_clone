import React from 'react'

import { Drawer, Box, Typography, styled } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Profile from './Profile';

const drawerStyle = {
    left: 20,
    top: 15,
    width: '30%',
    height: '95%',
    boxShadow: 'none'
}

const Header = styled(Box)`
    background:#008069;
    color:#fff;
    height:100px;
    display:flex;
    & > svg,& > p{
        margin-top:auto;
        padding:15px;
        font-weight:600;
    }
`;

const Component = styled(Box)`
    background:#ededed;
    height:85%;
`;

const InfoDrawer = ({ open, setOpen }) => {

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle }}
            style={{ zIndex: 1500 }}
        >
            <Header>
                <ArrowBack onClick={() => setOpen(false)} />
                <Typography>Profile</Typography>
            </Header>
            <Component>
                <Profile />
            </Component>
        </Drawer>
    )
}

export default InfoDrawer