import React, { useState } from "react";
import ChatBox from "../components/ChatBox";
import CodeEditor from "../components/CodeEditor";
import Navbar from "../components/Navbar";
import ResultScreen from "../components/ResultScreen";
import ToggleScreen from "../components/ToggleScreen";

const Layout = () => {
  const [messages, setMessages] = useState([]);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("Preview");

  const handleSend = (input) => {
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    // groq call will go here later
  };

  return (
    <div className="flex flex-col h-screen bg-(--bg-primary)">
      <Navbar />
      <main className="flex flex-1 overflow-hidden">
        <div className="w-1/2 border-r border-(--border-color) overflow-hidden">
          <ChatBox onSend={handleSend} loading={loading} messages={messages} />
        </div>
        <div className="w-1/2 flex flex-col overflow-hidden">
          <ToggleScreen active={active} setActive={setActive} />
          {active === "Preview" ? (
            <ResultScreen code={code} />
          ) : (
            <CodeEditor code={code} />
          )}
        </div>
      </main>
    </div>
  );
};

export default Layout;
