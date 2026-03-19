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

const nemoClawLinks = [
  { label: "Install NemoClaw", href: "/install-nemoclaw" },
  { label: "NemoClaw Setup", href: "/nemoclaw-setup" },
  { label: "OpenShell", href: "/openshell" },
  { label: "Nemotron 3 Super", href: "/nvidia-nemotron-3-super" },
  { label: "NeoClaw Protocol", href: "/neoclaw" },
  { label: "NemoClaw vs OpenClaw", href: "/nemoclaw-vs-openclaw" },
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
          <div 
            className="relative group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm text-foreground hover:text-primary transition-colors cursor-pointer font-bold">
              NemoClaw <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-64 glass-panel border border-border/30 rounded-2xl overflow-hidden shadow-2xl"
                >
                  <div className="p-2 flex flex-col gap-1">
                    {nemoClawLinks.map((link) => (
                      <Link
                        key={link.href}
                        to={link.href}
                        className="px-4 py-2.5 text-xs text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-xl transition-all font-medium"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={isHome ? link.href : `/${link.href}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
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
            <div className="mb-4 pt-4">
              <span className="block text-[10px] font-black uppercase tracking-widest text-primary mb-3 px-2">NemoClaw Subpages</span>
              <div className="grid grid-cols-1 gap-1">
                {nemoClawLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block py-3 px-3 text-sm text-muted-foreground hover:text-primary hover:bg-white/5 rounded-xl transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full h-px bg-white/5 my-4" />
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
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
