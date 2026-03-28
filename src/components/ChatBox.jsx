import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send } from "lucide-react";

const ChatBox = ({ onSend, loading, messages = [] }) => {
  const [input, setInput] = useState("");
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || loading) return;
    onSend(input);
    setInput("");
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col h-full bg-(--bg-primary)"
    >
      <div className="px-4 py-2 border-b border-(--border-color) text-(--text-muted) text-[11px] uppercase tracking-widest">
        Chat
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={`flex gap-2 items-start ${msg.role === "user" ? "flex-row-reverse" : ""}`}
            >
              <div
                className={`px-3 py-2 rounded-xl text-xs leading-relaxed max-w-[80%] text-(--text-primary) ${
                  msg.role === "user"
                    ? "bg-(--accent-dim) border border-(--accent-border) rounded-tr-none"
                    : "bg-(--bg-tertiary) border border-(--border-color) rounded-tl-none"
                }`}
              >
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex gap-1 px-3 py-2 w-fit bg-(--bg-tertiary) border border-(--border-color) rounded-xl rounded-tl-none"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-(--accent)"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </motion.div>
        )}

        <div ref={bottomRef} />
      </div>

      <div className="px-4 py-3 border-t border-(--border-color) bg-(--bg-secondary) flex gap-2 items-center">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Describe your component..."
          className="flex-1 bg-(--bg-tertiary) border border-(--border-color) rounded-lg px-3 py-2 text-xs text-(--text-primary) placeholder:text-(--text-muted) outline-none focus:border-(--accent) transition-colors"
        />
        <motion.button
          onClick={handleSend}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          disabled={loading}
          className="w-8 h-8 bg-(--accent) rounded-lg flex items-center justify-center cursor-pointer disabled:opacity-40"
        >
          <Send size={12} className="text-white" />
        </motion.button>
      </div>
    </motion.section>
  );
};

export default ChatBox;
