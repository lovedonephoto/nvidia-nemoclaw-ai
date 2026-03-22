import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
  { label: "Pricing", href: "#pricing" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border/30"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
          <span className="text-gradient-primary">NemoClaw</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={isHome ? link.href : `/${link.href}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          
          <div className="relative group">
            <button 
              className="flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors py-2"
              onMouseEnter={() => setDropdownOpen(true)}
            >
              AI Agents
              <ChevronDown className="w-4 h-4" />
            </button>
            <div 
              className="absolute top-full left-0 w-48 pt-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200"
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <div className="glass-panel rounded-xl p-2 border-border/40 shadow-xl">
                <Link to="/openclaw" className="block px-3 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">OpenClaw</Link>
                <Link to="/zeroclaw" className="block px-3 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">ZeroClaw</Link>
                <Link to="/tinyclaw" className="block px-3 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">TinyClaw</Link>
                <Link to="/ironclaw" className="block px-3 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">IronClaw</Link>
                <Link to="/ugcclaw" className="block px-3 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors">UgcClaw (TikTok)</Link>
                <Link to="/macos-support" className="block px-3 py-2 text-xs text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors font-bold">macOS Support</Link>
                <Link to="/ai-agents" className="block px-3 py-2 text-xs font-bold text-primary hover:bg-primary/5 rounded-lg transition-colors mt-1 border-t border-border/20 pt-2">View All Agents</Link>
              </div>
            </div>
          </div>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-panel border-t border-border/30 px-4 pb-6 overflow-hidden"
          >
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  className="block py-3 px-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/ugcclaw"
                className="block py-3 px-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                UgcClaw (TikTok)
              </Link>
              <Link
                to="/macos-support"
                className="block py-3 px-3 text-sm text-muted-foreground hover:text-primary transition-colors font-bold underline"
                onClick={() => setMobileOpen(false)}
              >
                macOS Support (M1-M4)
              </Link>
              <Link
                to="/ai-agents"
                className="block py-3 px-3 text-sm text-primary font-bold hover:bg-primary/5 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Explore AI Agents
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
