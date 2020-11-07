import React from 'react';
import { Avatar, IconButton } from "@material-ui/core";

import './Chat.css'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';

const Chat = ({messages}) => {
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
                {messages.map(message => (
                        <p className={`chat__message ${message.received && `chat__receiver`}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">
                            {message.timestamp}
                        </span>
                    </p>
                ))}
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