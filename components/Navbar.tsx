"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Experiences", href: "/#how-it-works" },
    { label: "Features", href: "/#features" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(15,23,42,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/icon.png"
            alt=""
            width={30}
            height={30}
            className="rounded-[7px] transition-transform duration-200 group-hover:scale-105"
            priority
          />
          <span className="flex flex-col items-start leading-none gap-1.5">
            <span className="text-[15px] font-bold tracking-tight">
              <span className="text-navy">Utility</span>
              <span className="text-primary">Vision</span>
            </span>
            <span className="text-[7.5px] uppercase tracking-[0.18em] text-muted-foreground font-medium pl-px">
              Field Intelligence
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[13px] font-medium text-muted-foreground hover:text-navy px-3.5 py-2 rounded-lg transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://app.utilityvision.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium text-muted-foreground hover:text-navy px-3.5 py-2 rounded-lg transition-colors"
          >
            Log In
          </a>
          <a
            href="https://app.utilityvision.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-semibold bg-primary text-primary-foreground px-4 py-2 rounded-full hover:bg-primary/90 active:scale-[0.98] transition-all duration-150 shadow-[0_4px_16px_rgba(241,90,43,0.3)]"
          >
            Start Free
          </a>
        </div>

        <button
          className="md:hidden text-navy p-2 -mr-2 rounded-lg hover:bg-muted/60 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-border/60 px-6 py-5 flex flex-col gap-1"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-navy py-2.5"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="h-px bg-border my-2" />
            <a
              href="https://app.utilityvision.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground py-2.5"
            >
              Log In
            </a>
            <a
              href="https://app.utilityvision.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold bg-primary text-primary-foreground px-4 py-2.5 rounded-full text-center mt-1"
            >
              Start Free
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
