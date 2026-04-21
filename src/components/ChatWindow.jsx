import { useEffect, useRef, useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const ChatWindow = () => {
  const { messages } = useContext(ChatContext);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50 no-scrollbar">
      {messages.map((msg) => {
        const isUser = msg.sender === "You";

        return (
          <div
            key={msg.id}
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-2 rounded-xl max-w-[70%] break-words shadow-sm ${
                isUser
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800 border"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <span className="text-[10px] opacity-60 block mt-1">
                {msg.time}
              </span>
            </div>
          </div>
        );
      })}
      <div ref={bottomRef} />
    </div>
  );
};

export default ChatWindow;
