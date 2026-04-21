import { useState, useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const ChatInput = () => {
  const [input, setInput] = useState("");
  const { addMessage } = useContext(ChatContext);

  const handleSend = () => {
    if (!input.trim()) return;
    addMessage(input);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="p-3 border-t bg-white flex items-center gap-2">
      <input
        type="text"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleSend}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition"
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
