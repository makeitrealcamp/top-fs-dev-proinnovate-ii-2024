import React, { useState, useEffect, useRef } from 'react';
import { Socket } from 'socket.io-client';
import { Send, Hash } from 'lucide-react';

interface Message {
  user: string;
  text: string;
  room: string;
  time: string;
}

interface ChatRoomProps {
  socket: Socket | null;
  username: string;
  currentRoom: string;
  setCurrentRoom: (room: string) => void;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ socket, username, currentRoom, setCurrentRoom }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [rooms] = useState(['general', 'tech', 'random']);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (socket) {
      socket.on('message', (msg: Message) => {
        setMessages((prevMessages) => [...prevMessages, msg]);
      });
    }
  }, [socket]);

  useEffect(() => {
    if (socket) {
      socket.emit('joinRoom', currentRoom);
    }
    return () => {
      if (socket) {
        socket.emit('leaveRoom', currentRoom);
      }
    };
  }, [socket, currentRoom]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message && socket) {
     
      socket.emit('chatMessage', { room: currentRoom, message });
      setMessage('');
    }
  };

  const changeRoom = (room: string) => {
    setCurrentRoom(room);
    setMessages([]);
  };

  return (
    <div className="flex h-[calc(100vh-120px)]">
      <div className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Rooms</h2>
        <ul>
          {rooms.map((room) => (
            <li key={room} className="mb-2">
              <button
                onClick={() => changeRoom(room)}
                className={`w-full text-left p-2 rounded ${
                  currentRoom === room ? 'bg-blue-500 text-white' : 'hover:bg-gray-300'
                }`}
              >
                <Hash className="inline-block mr-2" size={18} />
                {room}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 flex flex-col bg-white">
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 ${
                msg.user === username ? 'text-right' : 'text-left'
              }`}
            >
              <div
                className={`inline-block p-2 rounded-lg ${
                  msg.user === username ? 'bg-blue-500 text-white' : 'bg-gray-200'
                }`}
              >
                <p className="font-bold">{msg.user}</p>
                <p>{msg.text}</p>
                <p className="text-xs mt-1 opacity-50">
                  {new Date(msg.time).toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={sendMessage} className="p-4 border-t">
          <div className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type a message..."
            />
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              <Send size={24} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;