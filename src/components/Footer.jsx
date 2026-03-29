import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="border-t border-(--border-color) bg-(--bg-secondary) px-5 py-3 flex items-center justify-between"
    >
      <span className="text-(--text-muted) text-xs">
        Built by <span className="text-(--accent)">devHada</span>
      </span>
      <span className="text-(--text-muted) text-xs">
        Powered by <span className="text-(--accent)">Groq</span> ×
        <span className="text-(--accent)">llama-3.3-70b</span>
      </span>
    </motion.footer>
  );
};

export default Footer;
