import  { useState, useEffect } from 'react';
import { database } from 'firebase/database';
// import { database } from './firebaseConfig';
// import { ref, onValue, push } from 'firebase/database';
import { ref,onValue,push } from 'firebase/database';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const messagesRef = ref(database, 'messages');
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const messagesArray = data ? Object.values(data) : [];
      setMessages(messagesArray);
    });
  }, []);

  const sendMessage = () => {
    if (username && message) {
      const messagesRef = ref(database, 'messages');
      push(messagesRef, { username, message });
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            <strong>{msg.username}</strong>: {msg.message}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
