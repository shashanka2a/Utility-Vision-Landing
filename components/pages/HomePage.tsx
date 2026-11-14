"use client";

import {
  FileText, Tags,
  Monitor, Smartphone, ShieldCheck, ArrowRight, CircleCheck
} from "lucide-react";
import { motion } from "motion/react";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/Reveal";

const experiences = [
  {
    id: "01",
    label: "Crew Mobile App",
    title: "The Field App",
    description:
      "Complete JSA Pre-Briefs with digital crew signatures, log daily acreage and chemicals, sync categorized field notes, and submit machine checklists from the field.",
    features: [
      {
        title: "JSA & Digital Crew Signatures",
        detail: "GPS lock, Mission Brief, Hazard Analysis, Nearest Hospital, and touchscreen crew sign-off.",
      },
      {
        title: "Daily Metrics, Notes & Chemicals",
        detail: "Submitted metrics cards, cloud-synced field notes, and Spraying or Wicking chemical inputs.",
      },
      {
        title: "Site Survey & Machine Checklists",
        detail: "End-of-day safety verification and skid steer or ASV fluid level inspections.",
      },
    ],
    cta: "Launch Field App Demo",
    href: "https://apps.apple.com/us/app/utilityvision/id6776099498",
    icon: Smartphone,
  },
  {
    id: "02",
    label: "Operations Command",
    title: "Management Dashboard",
    description:
      "Monitor real-time field submissions, audit chemical application totals, resolve open site observations, and review portfolio-wide KPIs.",
    features: [
      {
        title: "Executive Insights & Momentum",
        detail: "Track Total Logs, Key Metrics, Visual Checks, and Safety Issues at a glance.",
      },
      {
        title: "Open Observations Workflow",
        detail: "Track Worsening or Unchanged site issues and mark them resolved in one click.",
      },
      {
        title: "Real-Time Activity & Gallery",
        detail: "Live stream of signed reports, weather stamps, and field photo evidence.",
      },
    ],
    cta: "Launch Management Dashboard Demo",
    href: "https://app.utilityvision.app/",
    icon: Monitor,
  },
  {
    id: "03",
    label: "Asset Owner Portal",
    title: "The Client Portal",
    description:
      "Give utility and solar asset owners a dedicated portal to inspect KMZ panel mapping, track wicking, spraying, and mowing schedules, and monitor the Site Health Watchlist.",
    features: [
      {
        title: "Overview & Maintenance Schedule",
        detail: "Contract details, Last and Next Wicking, Spraying and Mowing timelines, and direct PM messaging.",
      },
      {
        title: "Interactive KMZ Project Map",
        detail: "Toggle Boundary, Panel Block Labels, Inverter pins, and GPS Observation markers.",
      },
      {
        title: "Site Health Watchlist",
        detail: "Filter Open or Resolved hazards and invasive vegetation by species.",
      },
    ],
    cta: "Launch Client Portal Demo",
    href: "https://client.utilityvision.app/",
    icon: ShieldCheck,
  },
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs uppercase tracking-widest text-primary mb-3 font-medium">{children}</p>
  );
}

function SectionHeading({ label, title, sub, wide }: { label: string; title: string; sub?: string; wide?: boolean }) {
  return (
    <Reveal className={`mb-12 ${wide ? "max-w-2xl" : "max-w-xl"}`}>
      <Label>{label}</Label>
      <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] text-navy leading-[1.1] mb-3 font-bold tracking-[-0.03em]">
        {title}
      </h2>
      {sub && <p className="text-[15px] text-muted-foreground leading-relaxed">{sub}</p>}
    </Reveal>
  );
}

export function HomePage() {
  return (
    <div className="bg-background">
      {/* Hero — full viewport */}
      <section className="relative bg-dot-grid overflow-hidden min-h-[calc(100dvh-4rem)] flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto px-6 py-16 md:py-20 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 bg-primary/[0.08] ring-1 ring-primary/15 text-primary text-[11px] font-semibold px-3.5 py-1.5 rounded-full mb-8 uppercase tracking-[0.14em]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            Utility Field Intelligence Software
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="text-[2.35rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] text-navy max-w-4xl mx-auto leading-[1.05] mb-6 font-bold tracking-[-0.03em]"
          >
            Track Every Acre, Site &amp; Compliance Log in{" "}
            <span className="text-primary">Real Time.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-[15px] sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 tracking-[-0.01em]"
          >
            Utility Vision unifies a mobile{" "}
            <strong className="text-navy font-semibold">Field App</strong>,{" "}
            <strong className="text-navy font-semibold">Management Dashboard</strong>, and a live{" "}
            <strong className="text-navy font-semibold">Client Portal</strong>, all built for field
            operation teams managing Utility Assets.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2.5 mb-14"
          >
            <motion.a
              href="https://app.utilityvision.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground h-11 px-5 rounded-full text-[13px] font-semibold hover:bg-primary/90 transition-colors shadow-[0_8px_28px_rgba(241,90,43,0.32)]"
            >
              <Monitor size={15} strokeWidth={2} />
              Interactive Dashboard Demo
              <ArrowRight size={14} strokeWidth={2.25} />
            </motion.a>
            <motion.a
              href="https://apps.apple.com/us/app/utilityvision/id6776099498"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-navy text-white h-11 px-5 rounded-full text-[13px] font-semibold hover:bg-navy/90 transition-colors"
            >
              <Smartphone size={15} strokeWidth={2} />
              Try Field App Demo
            </motion.a>
            <motion.a
              href="https://client.utilityvision.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-navy ring-1 ring-border h-11 px-5 rounded-full text-[13px] font-semibold hover:ring-navy/25 transition-all"
            >
              <ShieldCheck size={15} strokeWidth={2} />
              Preview Client Portal
            </motion.a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-7 gap-y-3"
          >
            {[
              "Offline-First Mobile Crew Logging",
              "GPS Invasive Species & Hazard Pinning",
              "One-Click Signed Daily PDF Reports",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[13px] text-muted-foreground font-medium">
                <CircleCheck size={15} className="text-primary shrink-0" strokeWidth={2} />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="pb-8 flex justify-center"
        >
          <a
            href="#how-it-works"
            className="group flex flex-col items-center gap-2 text-muted-foreground/70 hover:text-primary transition-colors"
            aria-label="Scroll to experiences"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Explore</span>
            <span className="w-5 h-8 rounded-full ring-1 ring-current/30 flex items-start justify-center p-1.5">
              <motion.span
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-1.5 rounded-full bg-current"
              />
            </span>
          </a>
        </motion.div>
      </section>

      {/* Three Integrated Experiences */}
      <section id="how-it-works" className="py-24 md:py-28 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
            <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-4">
              Three Integrated Experiences · One Unified Platform
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] text-navy font-bold tracking-[-0.03em] leading-[1.1] mb-4">
              Built for Every Role in Utility Field Intelligence
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Open any of the three interactive module previews below to try the live interface for field crews, operations managers, and utility clients.
            </p>
          </Reveal>

          <StaggerReveal className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {experiences.map((mod) => {
              const Icon = mod.icon;
              return (
                <StaggerItem key={mod.id} className="flex">
                  <motion.article
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col w-full rounded-2xl bg-card ring-1 ring-border p-6 md:p-7 hover:ring-primary/25 hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition-all"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary">
                        {mod.id} / {mod.label}
                      </span>
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 text-primary">
                        <Icon size={17} strokeWidth={1.75} />
                      </span>
                    </div>

                    <h3 className="text-xl text-navy font-bold tracking-tight mb-3">{mod.title}</h3>
                    <p className="text-[13px] text-muted-foreground leading-relaxed mb-6">{mod.description}</p>

                    <ul className="space-y-4 mb-8 flex-1">
                      {mod.features.map((f) => (
                        <li key={f.title} className="flex gap-3">
                          <CircleCheck size={15} className="text-primary shrink-0 mt-0.5" strokeWidth={2} />
                          <div>
                            <p className="text-[13px] font-semibold text-navy leading-snug mb-0.5">{f.title}</p>
                            <p className="text-[12px] text-muted-foreground leading-relaxed">{f.detail}</p>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={mod.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-full bg-primary text-white text-[13px] font-semibold hover:bg-primary/90 transition-colors shadow-[0_8px_24px_rgba(241,90,43,0.28)]"
                    >
                      {mod.cta}
                      <ArrowRight size={14} strokeWidth={2.25} />
                    </a>
                  </motion.article>
                </StaggerItem>
              );
            })}
          </StaggerReveal>
        </div>
      </section>

      {/* Progress Reporting */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Progress Reporting"
            title="Your field, fully documented"
            sub="Capture what happened on site today, no end-of-day desk work required."
            wide
          />
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <StaggerItem className="flex">
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col w-full rounded-2xl bg-card ring-1 ring-border p-7 md:p-8 hover:ring-primary/25 hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition-all"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-5">
                  <FileText size={20} strokeWidth={1.75} />
                </span>
                <h3 className="text-xl text-navy font-bold tracking-tight mb-3">Daily Reports</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-5">
                  Auto-populated reports that pull in weather conditions and organize field-entered data. Sign at the end of the day and share instantly with supervisors and clients.
                </p>
                <ul className="space-y-2.5 mt-auto">
                  {["Weather and site data auto-filled", "Digital crew signatures", "PDF ready the same day"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[13px] text-muted-foreground">
                      <CircleCheck size={14} className="text-primary shrink-0" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </StaggerItem>
            <StaggerItem className="flex">
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col w-full rounded-2xl bg-card ring-1 ring-border p-7 md:p-8 hover:ring-primary/25 hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition-all"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-5">
                  <Tags size={20} strokeWidth={1.75} />
                </span>
                <h3 className="text-xl text-navy font-bold tracking-tight mb-3">Photo Tags</h3>
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-5">
                  Capture site photos with automatic GPS coordinates, timestamps, and project details. Tag in real time and send progress shots to clients with no extra steps.
                </p>
                <ul className="space-y-2.5 mt-auto">
                  {["GPS and timestamp tagging", "Real-time categorization", "Instant client sharing"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[13px] text-muted-foreground">
                      <CircleCheck size={14} className="text-primary shrink-0" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.article>
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>
    </div>
  );
}
