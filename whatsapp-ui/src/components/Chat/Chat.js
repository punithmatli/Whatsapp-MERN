import React from 'react';
import { Avatar, IconButton } from "@material-ui/core";

import './Chat.css'
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';

const Chat = () => {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="char__headerInfo">
                    <h3>Room name</h3>
                    <p>Last seen at 9.30pm</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Chat