import React, { useState } from "react";
import { generateComponent } from "../api/groq";
import ChatBox from "../components/ChatBox";
import CodeEditor from "../components/CodeEditor";
import Navbar from "../components/Navbar";
import ResultScreen from "../components/ResultScreen";
import ToggleScreen from "../components/ToggleScreen";
import Footer from "../components/Footer";

const Layout = () => {
  const [messages, setMessages] = useState([]);
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState("Preview");

  const handleSend = async (input) => {
    setMessages((prev) => [...prev, { role: "user", content: input }]);
    setLoading(true);

    try {
      const result = await generateComponent(input);
      setCode(result);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Component generated! Check the preview.",
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong. Try again!" },
      ]);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-(--bg-primary)">
      <Navbar />
      <main className="flex flex-1 flex-col md:flex-row overflow-hidden">
        <div className="w-full md:w-1/2 border-b md:border-b-0 md:border-r border-(--border-color) overflow-hidden h-[50vh] md:h-auto">
          <ChatBox onSend={handleSend} loading={loading} messages={messages} />
        </div>
        <div className="w-full md:w-1/2 flex flex-col overflow-hidden h-[50vh] md:h-auto">
          <ToggleScreen active={active} setActive={setActive} />
          {active === "Preview" ? (
            <ResultScreen code={code} />
          ) : (
            <CodeEditor code={code} />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
