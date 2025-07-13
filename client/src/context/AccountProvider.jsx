import React, { createContext, useState, useRef, useEffect } from 'react'

import { io } from 'socket.io-client';
import { socketURI } from '../config/config';

export const AccountContext = createContext(null);

const AccountProvider = ({ children }) => {

    const [account, setAccount] = useState();
    const [person, setPerson] = useState({});
    const [activeUsers, setActiveUsers] = useState([]);
    const [newMessageFlag, setNewMessageFlag] = useState(false);

    const socket = useRef();

    useEffect(() => {
        socket.current = io(socketURI);
    }, [])

    return (
        <AccountContext.Provider value={{
            account, setAccount, person, setPerson, socket, activeUsers, setActiveUsers, newMessageFlag, setNewMessageFlag
        }}>{children}</AccountContext.Provider>
    )
}

export default AccountProvider