import { motion } from "framer-motion";

const ResultScreen = ({ code }) => {
  const getIframeContent = (code) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
          <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
          <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
          <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
          <style>
            body { margin: 0; padding: 16px; font-family: sans-serif; background: #0f0f0f; color: #e0e0e0; }
          </style>
        </head>
        <body>
          <div id="root"></div>
          <script type="text/babel">
            ${code}
            ReactDOM.render(<App />, document.getElementById('root'));
          </script>
        </body>
      </html>
    `;
  };

  return (
    <motion.section
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col h-full bg-(--bg-primary)"
    >
      <div className="px-4 py-2 border-b border-(--border-color) bg-(--bg-secondary)">
        <span className="text-(--text-muted) text-[11px] uppercase tracking-widest">
          Preview
        </span>
      </div>

      <div className="flex-1 overflow-hidden">
        {code ? (
          <iframe
            srcDoc={getIframeContent(code)}
            className="w-full h-full border-none"
            sandbox="allow-scripts"
            title="preview"
          />
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-(--text-muted) text-xs">
              Live preview will appear here...
            </p>
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default ResultScreen;
