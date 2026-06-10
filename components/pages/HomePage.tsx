"use client";

import {
  FileText, Camera, MessageSquare, CheckSquare,
  BarChart2, Package, Shield, ClipboardList,
  Megaphone, AlertTriangle, LineChart,
  HelpCircle, Folder, FormInput, Cloud, ChevronRight, Wrench
} from "lucide-react";
import { motion } from "motion/react";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/Reveal";

const integrations = [
  { name: "Salesforce", color: "#00A1E0" },
  { name: "QuickBooks", color: "#2CA01C" },
  { name: "SAP", color: "#0070F2" },
  { name: "ArcGIS", color: "#56A0D3" },
  { name: "Microsoft 365", color: "#D83B01" },
  { name: "Procore", color: "#F05A22" },
  { name: "ServiceMax", color: "#E44B24" },
  { name: "Trimble", color: "#005DAA" },
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
      <h2
        className="text-3xl md:text-4xl text-foreground leading-tight mb-3 font-serif-heading font-semibold"
        
      >
        {title}
      </h2>
      {sub && <p className="text-sm text-muted-foreground leading-relaxed">{sub}</p>}
    </Reveal>
  );
}

interface CardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  iconColor?: string;
  badge?: string;
}

function Card({ icon: Icon, title, description, iconColor = "text-primary", badge }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="bg-card h-full rounded-sm p-6 border border-border cursor-default flex flex-col gap-4"
    >
      <motion.div
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.2 }}
        className={`w-9 h-9 rounded-sm flex items-center justify-center bg-primary/8 ${iconColor}`}
      >
        <Icon size={17} strokeWidth={1.5} />
      </motion.div>
      <div className="flex flex-col gap-1.5 flex-1">
        <div className="flex items-center gap-2">
          <p className="text-foreground text-sm font-serif-heading font-medium">
            {title}
          </p>
          {badge && (
            <span className="text-[10px] bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 rounded-full leading-none shrink-0">
              {badge}
            </span>
          )}
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export function HomePage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-20 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 border border-primary/40 text-primary text-xs px-4 py-1.5 rounded-full mb-7 uppercase tracking-widest"
        >
          Vegetation Management Software
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl text-foreground max-w-3xl mx-auto leading-[1.15] mb-3 font-serif-heading font-bold"
          
        >
          Clear visibility into every acre,{" "}
          <em className="text-primary" style={{ fontStyle: "italic" }}>
            right from the field
          </em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.13, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs uppercase tracking-widest text-muted-foreground mb-8"
        >
          Operational clarity without the guesswork or paperwork
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto border border-border rounded-sm px-8 py-6 bg-secondary/30 mb-9"
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            From the field, to the office, to the client in real time. Utility Vision takes the
            friction out of vegetation management. Log physical data and site photos instantly to power
            a dynamic client portal that displays real-time progress, historical treatment data, and
            upcoming scheduling information.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-primary text-primary-foreground px-7 py-3 rounded-sm text-sm transition-colors hover:bg-primary/90"
          >
            Start Free
          </motion.a>
          <motion.a
            href="#features"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-1.5 text-sm text-foreground hover:text-primary transition-colors"
          >
            See features <ChevronRight size={13} />
          </motion.a>
        </motion.div>
      </section>

      {/* Section 1: Progress Reporting */}
      <section id="features" className="bg-secondary/40 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Progress Reporting"
            title="Your field, fully documented"
            sub="Capture what happened on site today, no end-of-day desk work required."
            wide
          />
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StaggerItem className="flex">
              <Card
                icon={FileText}
                title="Automated Daily Reports"
                description="Auto-populated reports that instantly pull in weather conditions and organize field-entered data. Signed at the end of the day and instantly ready to use."
              />
            </StaggerItem>
            <StaggerItem className="flex">
              <Card
                icon={Camera}
                title="Photo Logs"
                description="Photos are automatically tagged with GPS coordinates, timestamps, and project details. Tag in real time for easy categorizing and send progress photos to clients with zero extra steps."
              />
            </StaggerItem>
            <StaggerItem className="flex">
              <Card
                icon={MessageSquare}
                title="Field Messaging"
                description="Project-based threads that keep crew conversations tied to the work, not scattered across personal texts or buried email chains."
              />
            </StaggerItem>
            <StaggerItem className="flex">
              <Card
                icon={CheckSquare}
                title="Task Tracking"
                description="Assign, track, and close out punch items from the field. Every task has an owner, a due date, and a photo trail attached."
              />
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>

      {/* Section 2: Production */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Production"
            title="Know your numbers, in real time"
            sub="From material quantities to field metrics, never forget to track what matters."
          />
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            <StaggerItem className="flex">
              <Card
                icon={BarChart2}
                title="Production Tracking"
                description="Log field metrics in real time. Find production inconsistencies easily and keep your operation on track without the headache."
              />
            </StaggerItem>
            <StaggerItem className="flex">
              <Card
                icon={Package}
                title="Material Logs"
                description="Easily track material usage in one location. Reduces paper, prevents lost data, and keeps inventory accurate across all sites."
              />
            </StaggerItem>
            <StaggerItem className="flex">
              <Card
                icon={Wrench}
                title="Equipment Logs"
                description="Easily complete equipment daily checklists. Track usage and maintenance data in the field without spreadsheets or paper forms."
              />
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>

      {/* Section 3: Safety & Quality */}
      <section className="bg-secondary/40 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Safety & Compliance"
            title="Safer crews, fewer surprises"
            sub="Build a culture of safety from the field up with intuitive mobile tools your crews will actually use. Ditch paper safety meetings and track job site hazards in real time."
          />
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <StaggerItem className="flex">
              <Card
                icon={Shield}
                title="Safety & Quality Management"
                description="One place for tracking job hazards, audits, chemical logs, and quality inspections. Configurable workflows for your crews. Dashboards surface field trends before they become major incidents."
                iconColor="text-amber-600"
              />
            </StaggerItem>
            <StaggerItem className="flex">
              <Card
                icon={ClipboardList}
                title="Checklists"
                description="Pre-built checklists tailored to industry needs, or build your own. Completed lists sync to the office and update your records instantly."
                iconColor="text-amber-600"
              />
            </StaggerItem>
            <StaggerItem className="flex">
              <Card
                icon={Megaphone}
                title="Safety Talks"
                description="Deliver, sign off, and log safety meetings from the field. A complete compliance record is always one tap away, no paper needed."
                iconColor="text-amber-600"
              />
            </StaggerItem>
            <StaggerItem className="flex">
              <Card
                icon={AlertTriangle}
                title="Incident Reporting"
                description="Guided incident forms that capture what you need in the moment, with photos and witness notes, not three days later when details fade."
                iconColor="text-amber-600"
              />
            </StaggerItem>
            <StaggerItem className="flex">
              <Card
                icon={LineChart}
                title="Safety Dashboards"
                description="Easily track safety data for multiple sites at once. Portfolio-wide metrics, open observations by project, and trend analysis in one view."
                iconColor="text-amber-600"
              />
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>

      {/* Section 4: Administrative Management */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Administrative Management"
            title="Important documents never go missing"
            sub="RFIs, submittals, and project documents, all in one place, easy to collect."
            wide
          />
          <StaggerReveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <StaggerItem className="flex">
              <Card
                icon={HelpCircle}
                title="RFIs"
                description="Submit, track, and close RFIs without leaving the platform. Every one is logged, dated, and tied to the relevant drawing or spec."
                badge="New"
              />
            </StaggerItem>
            <StaggerItem className="flex">
              <Card
                icon={Folder}
                title="Document Management"
                description="Keep all project and crew documents accessible on any device, even offline in the field. Always current, never lost."
              />
            </StaggerItem>
            <StaggerItem className="flex">
              <Card
                icon={FormInput}
                title="Custom Forms"
                description="Build any form your project or company needs. Easily create and have your crew fill them out in minutes. No printer needed."
              />
            </StaggerItem>
            <StaggerItem className="flex">
              <Card
                icon={Cloud}
                title="Cloud-first Storage"
                description="Everything backed up automatically and synced across devices. Your data is safe regardless of what happens to hardware in the field."
              />
            </StaggerItem>
          </StaggerReveal>
        </div>
      </section>

      {/* Three pillars */}
      <section className="bg-secondary/40 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <StaggerReveal className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
            {[
              {
                mark: "01",
                title: "Field-first design",
                body: "Built for someone wearing gloves in poor light, not for someone at a desk. Every interaction is thumb-friendly and fast.",
              },
              {
                mark: "02",
                title: "Office visibility",
                body: "Real-time data flows from site to office without anyone making a phone call. Project managers see what matters, when it matters.",
              },
              {
                mark: "03",
                title: "Client Visibility",
                body: "Total transparency without the administrative burden. Share data, photos, and next-treatment timelines your clients need, eliminating back-and-forth emails entirely.",
              },
            ].map((item) => (
              <StaggerItem key={item.mark} className="px-10 py-10 first:pl-0 last:pr-0">
                <p
                  className="text-6xl md:text-7xl leading-none mb-6 select-none font-serif-heading font-bold text-primary/20"
                >
                  {item.mark}
                </p>
                <h3 className="text-foreground mb-2 font-serif-heading font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* Integrations */}
      <section id="integrations" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <Label>Integrations</Label>
            <h2
              className="text-3xl text-foreground mb-2 font-serif-heading font-semibold"
              
            >
              Plays well with others
            </h2>
            <p className="text-sm text-muted-foreground max-w-sm mx-auto">
              Connect Utility Vision to the tools your enterprise already relies on.
            </p>
          </Reveal>
          <StaggerReveal className="flex flex-wrap justify-center gap-3">
            {integrations.map((i) => (
              <StaggerItem key={i.name}>
                <motion.div
                  whileHover={{ y: -2, boxShadow: "0 4px 12px rgba(0,0,0,0.07)" }}
                  transition={{ duration: 0.18 }}
                  className="flex items-center gap-2 bg-card border border-border rounded-sm px-4 py-2.5 text-sm text-foreground cursor-default whitespace-nowrap"
                >
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: i.color }} />
                  {i.name}
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#1C1008]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <h2
              className="text-4xl md:text-5xl text-white mb-5 leading-tight font-serif-heading font-bold"
              
            >
              Ready to have{" "}
              <em className="text-primary" style={{ fontStyle: "italic" }}>
                seamless field data tracking?
              </em>
            </h2>
            <p className="text-white/50 text-sm mb-9 max-w-md mx-auto leading-relaxed">
              Join over 14,000 job sites that have made the switch. Setup takes less than a day, and your crews will actually use it.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="bg-primary text-primary-foreground px-7 py-3 rounded-sm text-sm hover:bg-primary/90 transition-colors"
              >
                Start Free
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ x: 2 }}
                className="text-sm text-white/50 hover:text-white transition-colors"
              >
                Schedule a Demo
              </motion.a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
