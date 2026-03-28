import { motion } from "framer-motion";

const ToggleScreen = ({ active, setActive }) => {
  return (
    <section className="px-4 py-2 border-b border-(--border-color) bg-(--bg-secondary) flex items-center gap-2">
      {["Preview", "Code"].map((tab) => (
        <motion.button
          key={tab}
          onClick={() => setActive(tab)}
          whileTap={{ scale: 0.95 }}
          className={`px-3 py-1 rounded-md text-xs cursor-pointer transition-colors ${
            active === tab
              ? "bg-(--accent-dim) border border-(--accent-border) text-(--accent)"
              : "text-(--text-muted) hover:text-(--text-secondary)"
          }`}
        >
          {tab}
        </motion.button>
      ))}
    </section>
  );
};

export default ToggleScreen;
