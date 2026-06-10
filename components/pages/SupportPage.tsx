"use client";

import { useState } from "react";
import { Search, BookOpen, MessageCircle, Video, ChevronDown, Mail, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/Reveal";

const faqs = [
  {
    q: "How do I add a new crew member?",
    a: "Settings → Team Members → Invite. Enter their email and assign a role. They get an invite link valid for 72 hours. Bulk import via CSV is available on the same screen.",
  },
  {
    q: "Does it work offline?",
    a: "Yes. The app caches all active project data locally. Crew can log time, complete forms, and capture photos without a connection — everything syncs when the device reconnects.",
  },
  {
    q: "How is data backed up?",
    a: "Data replicates across three data centers in real time with 90-day point-in-time recovery. Enterprise customers can schedule daily encrypted exports to their own cloud storage.",
  },
  {
    q: "Can I export to PDF or Excel?",
    a: "Yes. Any report, form, or dashboard exports to PDF, XLSX, or CSV from the overflow menu. Scheduled exports can be emailed to stakeholders automatically.",
  },
  {
    q: "How do I connect QuickBooks?",
    a: "Settings → Integrations → QuickBooks. Authorize via OAuth and work orders sync every 15 minutes. Cost codes map automatically when names match.",
  },
  {
    q: "What if a crew member misses a punch?",
    a: "Supervisors get an automatic alert. Any punch can be manually corrected with a reason code. All edits are audited and timestamped.",
  },
  {
    q: "Is Utility Vision SOC 2 certified?",
    a: "Yes, SOC 2 Type II. Report available on request under NDA.",
  },
  {
    q: "How do I cancel?",
    a: "Settings → Billing → Cancel Plan. Your account stays active until the billing period ends. Data is retained for 90 days so you can export before deletion.",
  },
];


function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left gap-4 group"
      >
        <span
          className="text-sm text-foreground group-hover:text-primary transition-colors font-serif-heading font-medium"
          
        >
          {q}
        </span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.22 }}>
          <ChevronDown size={15} className="shrink-0 text-muted-foreground" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted-foreground leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SupportPage() {
  const [query, setQuery] = useState("");
  const filteredFaqs = faqs.filter(
    (f) => !query || f.q.toLowerCase().includes(query.toLowerCase()) || f.a.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <div className="bg-[#1C1008] text-white py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs uppercase tracking-widest text-primary mb-3 font-medium"
          >
            Help Center
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl md:text-5xl mb-4 leading-tight font-serif-heading font-bold"
            
          >
            How can we help?
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.14 }}
            className="relative max-w-md mx-auto mt-7"
          >
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for answers…"
              className="w-full bg-white/10 border border-white/20 rounded-sm pl-10 pr-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-primary/60 transition-colors"
            />
          </motion.div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Quick links */}
        <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { icon: BookOpen, label: "Documentation", desc: "Full product guides" },
            { icon: Video, label: "Video Tutorials", desc: "Step-by-step screencasts" },
            { icon: MessageCircle, label: "Community", desc: "Talk to other users" },
            { icon: Mail, label: "Email Support", desc: "Reply in under 4 hours" },
          ].map(({ icon: Icon, label, desc }) => (
            <StaggerItem key={label}>
              <a
                href="#"
                className="bg-card border border-border rounded-sm p-5 flex flex-col gap-2 hover:border-primary/30 hover:shadow-sm transition-all duration-250 group block"
              >
                <Icon size={17} className="text-primary" strokeWidth={1.5} />
                <p className="text-sm text-foreground font-serif-heading font-medium">
                  {label}
                </p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </a>
            </StaggerItem>
          ))}
        </StaggerReveal>

        {/* FAQ */}
        <Reveal className="mb-16">
          <h2
            className="text-2xl text-foreground mb-6 font-serif-heading font-semibold"
            
          >
            Common questions
          </h2>
          <div className="bg-card border border-border rounded-sm px-6">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)
            ) : (
              <p className="text-sm text-muted-foreground py-8 text-center">No results for "{query}"</p>
            )}
          </div>
        </Reveal>

        {/* Contact */}
        <Reveal>
          <div className="bg-[#1C1008] rounded-sm p-10 text-center">
            <h2
              className="text-2xl text-white mb-2 font-serif-heading font-semibold"
              
            >
              Still need help?
            </h2>
            <p className="text-white/50 text-sm mb-8">
              Mon–Fri 7 AM–7 PM CT. Enterprise customers have 24/7 phone access.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@utilityvision.io"
                className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-sm text-sm hover:bg-primary/90 active:scale-95 transition-all duration-150"
              >
                <Mail size={14} /> Email Support
              </a>
              <a
                href="tel:+13526429777"
                className="flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-3 rounded-sm text-sm hover:border-white/40 transition-colors"
              >
                <Phone size={14} /> (352) 642-9777
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
