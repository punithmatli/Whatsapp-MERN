import React from 'react';
import { Avatar, IconButton } from "@material-ui/core";

import './Chat.css'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';

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

            <div className="chat__body">
                <p className="chat__message">
                    <span className="chat__name">Sender</span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
                <p className="chat__message chat__receiver">
                    <span className="chat__name">Sender</span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input placeholder="Type a Message" type="text" />
                    <button type="submit">Send a message</button>
                </form>
								<Mic />
            </div>

        </div>
    )
}

export default Chat