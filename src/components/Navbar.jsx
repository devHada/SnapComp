import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-(--bg-secondary) border-b border-(--border-color) px-5 py-3 flex items-center justify-between"
    >
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-(--accent)" />
        <span className="text-(--accent) text-sm font-semibold tracking-widest">
          SNAP
        </span>
        <span className="text-(--text-muted) text-sm font-semibold tracking-widest">
          COMPONENT
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-(--text-muted) text-xs">llama-3.3-70b</span>
        <motion.button
          onClick={toggleTheme}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 bg-(--bg-elevated) border border-(--border-color) rounded-full px-3 py-1 text-(--text-secondary) text-xs cursor-pointer"
        >
          <motion.div
            key={theme}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {theme === "dark" ? <Sun size={12} /> : <Moon size={12} />}
          </motion.div>
          {theme === "dark" ? "Light" : "Dark"}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
