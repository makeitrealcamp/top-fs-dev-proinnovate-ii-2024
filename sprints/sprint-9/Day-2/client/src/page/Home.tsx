import React, { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import Login from '../components/Login';
import ChatRoom from '../components/ChatRoom';
import { MessageCircle } from 'lucide-react';

interface User {
  username: string;
  token: string;
}

export const Home: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [currentRoom, setCurrentRoom] = useState<string>('general');

  useEffect(() => {
    if (user) {
      const newSocket = io('http://localhost:3000', {
        auth: { token: user.token }
      });
      setSocket(newSocket);

      return () => {
        newSocket.disconnect();
      };
    }
  }, [user]);

  const handleLogin = (userData: User) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
    if (socket) {
      socket.disconnect();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <MessageCircle className="mr-2" />
            My Awesome Chat App
          </h1>
          {user && (
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          )}
        </div>
      </header>
      <main className="container mx-auto mt-8 p-4">
        {!user ? (
          <Login onLogin={handleLogin} />
        ) : (
          <ChatRoom
            socket={socket}
            username={user.username}
            currentRoom={currentRoom}
            setCurrentRoom={setCurrentRoom}
          />
        )}
      </main>
    </div>
  );
};

