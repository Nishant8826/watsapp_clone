import React, { useEffect } from 'react'
import { Box, InputBase, styled } from '@mui/material'
import { EmojiEmotionsOutlined, AttachFile, Mic } from '@mui/icons-material'
import { uploadImage } from '../../../service/api';

const Container = styled(Box)`
    height:70px;
    background:#ededed;
    display:flex;
    align-items:center;
    padding:0 15px;

    & > *{
        margin:5px;
        color:#919191
    }
`;

const Search = styled(Box)`
    border-radius: 18px;
    background-color: #FFFFFF;
    width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    padding-left: 25px;
    font-size: 14px;
    height: 20px;
    width: 100%;
`;

const ClipIcon = styled(AttachFile)`
    transform : rotate(40deg);
`;


const Footer = ({ sendText, setText, text, file, setFile, setImage }) => {

    const fileChange = (e) => {
        setFile(e.target.files[0]);
        setText(e.target.files[0].name);
    }

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                let data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                let resp = await uploadImage(data);
                setImage(resp.fileUrl);
            }
        }
        getImage();
    }, [file])

    return (
        <Container>
            <EmojiEmotionsOutlined />
            <label htmlFor='fileInput'>
                <ClipIcon />
            </label>
            <input type='file' id='fileInput' onChange={(e) => fileChange(e)} style={{ display: 'none' }} />
            <Search>
                <InputField
                    placeholder="Type a message"
                    onChange={(e) => setText(e.target.value)}
                    onKeyPress={(e) => sendText(e)}
                    value={text}
                />
            </Search>
            <Mic />
        </Container>
    )
}

export default Footer