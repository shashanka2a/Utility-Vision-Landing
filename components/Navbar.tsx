"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Features", href: "/#features" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "Integrations", href: "/#integrations" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F6EFE4]/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-sm bg-primary transition-transform duration-200 group-hover:scale-105">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="5" height="5" fill="white" rx="0.5" />
              <rect x="9" y="2" width="5" height="5" fill="white" rx="0.5" opacity="0.6" />
              <rect x="2" y="9" width="5" height="5" fill="white" rx="0.5" opacity="0.6" />
              <rect x="9" y="9" width="5" height="5" fill="white" rx="0.5" />
            </svg>
          </span>
          <span className="font-serif-heading text-foreground text-lg font-semibold">
            Utility Vision
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-primary transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Log In
          </a>
          <a
            href="#"
            className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-sm hover:bg-primary/90 active:scale-95 transition-all duration-150"
          >
            Start Free
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#F6EFE4] border-t border-border px-6 py-4 flex flex-col gap-4"
          >
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-foreground" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#" className="text-sm text-muted-foreground">Log In</a>
            <a href="#" className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-sm text-center">
              Start Free
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
