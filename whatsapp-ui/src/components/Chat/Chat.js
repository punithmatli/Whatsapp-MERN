import React, { useState } from 'react';
import { Avatar, IconButton } from "@material-ui/core";

import './Chat.css'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import axios from '../../axios'

const Chat = ({ messages }) => {
    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();
        await axios.post('/messages/new', {
            message:input,
            name: "Name",
            timestamp:"Just now",
            received:false
        })
        setInput('');
    }

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
                <form onSubmit={sendMessage}>
                    <input value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Type a Message"
                        type="text" />
                    <button type="submit">Send a message</button>
                </form>
                <Mic />
            </div>

        </div>
    )
}

export default Chat