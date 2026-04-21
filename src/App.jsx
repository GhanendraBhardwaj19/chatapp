import { ChatProvider } from "./context/ChatContext";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";

function App() {
  return (
    <ChatProvider>
      <div className="h-screen bg-gray-200 flex items-center justify-center">
        <div className="w-full max-w-2xl h-[90vh] bg-white shadow-lg rounded-xl flex flex-col overflow-hidden">
          <div className="px-4 py-3 border-b font-semibold text-gray-700">
            Company A
          </div>

          <ChatWindow />
          <ChatInput />
        </div>
      </div>
    </ChatProvider>
  );
}

export default App;
