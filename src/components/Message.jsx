const Message = ({ msg }) => {
  const isUser = msg.sender === "You";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`px-4 py-2 rounded-xl max-w-[70%] break-words shadow-sm ${
          isUser ? "bg-blue-500 text-white" : "bg-white text-gray-800 border"
        }`}
      >
        <p className="text-sm">{msg.text}</p>
        <span className="text-[10px] opacity-60 block mt-1">{msg.time}</span>
      </div>
    </div>
  );
};

export default Message;
