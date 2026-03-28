import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const CodeEditor = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col h-full bg-(--bg-primary)"
    >
      <div className="px-4 py-2 border-b border-(--border-color) bg-(--bg-secondary) flex items-center justify-between">
        <span className="text-(--text-muted) text-[11px] uppercase tracking-widest">
          Code
        </span>
        <motion.button
          onClick={handleCopy}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-1 text-(--text-muted) hover:text-(--text-primary) text-xs cursor-pointer transition-colors"
        >
          {copied ? (
            <Check size={12} className="text-(--accent)" />
          ) : (
            <Copy size={12} />
          )}
          {copied ? "Copied!" : "Copy"}
        </motion.button>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {code ? (
          <pre className="text-xs text-(--text-primary) font-mono leading-relaxed whitespace-pre-wrap wrap-break-word">
            {code}
          </pre>
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-(--text-muted) text-xs">
              Generated code will appear here...
            </p>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default CodeEditor;
