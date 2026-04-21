import { createContext, useContext, useEffect, useState } from "react";

export const ChatContext = createContext();

const initialMessages = [
  {
    id: 1,
    sender: "Company A",
    text: "Hello, could you share the product catalog?",
    time: "11:40 AM",
  },
];

export const ChatProvider = ({ children }) => {
  const [messages, setMessages] = useState(() => {
    const stored = localStorage.getItem("chat_messages");
    return stored ? JSON.parse(stored) : initialMessages;
  });

  useEffect(() => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  }, [messages]);

  const addMessage = (text) => {
    if (!text.trim()) return;

    const newMessage = {
      id: Date.now(),
      sender: "You",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
