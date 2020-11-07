import React, { useEffect, useState } from 'react';
import Pusher from 'pusher-js'

import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import axios from './axios'

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync')
    .then(response => {
      setMessages(response.data)
    })
  }, [])

  useEffect(() => {
    const pusher = new Pusher('4ca2bbefad58cb5d58b8', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      setMessages([...messages, data])
    });

    return () => {
      pusher.unbind_all();
      pusher.unsubscribe();
    }
  }, [messages])

  console.log(messages);

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
