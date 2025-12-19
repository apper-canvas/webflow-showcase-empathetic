import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Logo from "@/components/atoms/Logo";
import NavLink from "@/components/molecules/NavLink";
import Button from "@/components/atoms/Button";
import { cn } from "@/utils/cn";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "ABOUT", path: "/about" },
    { label: "PATREON", path: "/patreon" },
    { label: "DRIBBBLE", path: "/dribbble" },
    { label: "YOUTUBE", path: "/youtube" },
    { label: "INSTAGRAM", path: "/instagram" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
      
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-white transition-all"
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 8 : 0,
              }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white transition-all"
              animate={{
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white transition-all"
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -8 : 0,
              }}
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden border-t border-white/10"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
            <nav className="relative px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink
                    to={item.path}
                    className="block py-3 text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;