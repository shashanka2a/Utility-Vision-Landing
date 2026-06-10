"use client";

import { Reveal, StaggerReveal, StaggerItem } from "@/components/Reveal";

const sections = [
  {
    title: "Information We Collect",
    body: `We collect what you give us and what the product generates when your crew works:

**Account data** — name, email, phone, company, job title.
**Usage data** — features accessed, actions performed, session duration.
**Device data** — device type, OS, browser, IP, and unique identifiers.
**Location data** — GPS coordinates captured during clock-in/out and map features. Location is only collected while the app is actively in use and can be disabled in device settings.
**Uploaded content** — photos, documents, form submissions, and any files stored in Utility Vision.`,
  },
  {
    title: "How We Use It",
    body: `To run, maintain, and improve the platform. To send receipts, security alerts, and product updates. To respond to support requests. To monitor for abuse and comply with legal obligations.

We do not sell your data. We do not use it to train general-purpose AI models.`,
  },
  {
    title: "Who We Share It With",
    body: `**Service providers** — Cloud hosting, payment processing, email delivery, and error tracking vendors. They are contractually prohibited from using your data for their own purposes.
**Business transfers** — If Utility Vision is acquired or merged, we will notify you before any data transfer.
**Legal compliance** — When required by law, court order, or valid governmental request.

Within your organization, access is governed by the roles your account administrator configures.`,
  },
  {
    title: "Data Retention",
    body: `Data is retained while your account is active. After cancellation:

— Active project data is kept for 90 days for export.
— After 90 days, production data is permanently deleted.
— Backups purge on a 30-day rolling cycle.
— Billing records and audit logs may be retained longer for legal compliance.

Request early deletion at info@wickd-fl.com.`,
  },
  {
    title: "Security",
    body: `**In transit** — TLS 1.2 or higher on all connections.
**At rest** — AES-256 encryption on all stored data.
**Access** — Employee access is role-based, logged, and reviewed quarterly.
**Testing** — Annual third-party penetration tests with published remediation timelines.
**Certification** — SOC 2 Type II. Report available on request under NDA.

If you suspect a compromise, contact info@wickd-fl.com immediately.`,
  },
  {
    title: "Your Rights",
    body: `Depending on your location, you may request access to, correction of, deletion of, or a portable copy of your personal data. You may also object to or restrict certain processing.

To exercise any right, email info@wickd-fl.com with subject line "Data Rights Request." We respond within 30 days. EEA residents may also lodge a complaint with their local data protection authority.`,
  },
  {
    title: "Cookies",
    body: `**Essential** — Authentication and session management. Cannot be disabled.
**Analytics** — Help us understand product usage. Opt out in Account Settings → Privacy.
**Preferences** — Remember your settings between sessions.

We do not use advertising or cross-site tracking cookies.`,
  },
  {
    title: "Children",
    body: `Utility Vision is for adults in professional field operations contexts. We do not knowingly collect data from anyone under 16. Contact info@wickd-fl.com if you believe a minor's data has been collected.`,
  },
  {
    title: "Policy Updates",
    body: `Material changes are communicated by email and in-app notice at least 14 days before they take effect. Continued use after the effective date constitutes acceptance. A changelog of all past versions is available at utilityvision.io/privacy/history.`,
  },
  {
    title: "Contact",
    body: `**Utility Vision**
864 SW Spirit Ave
Fort White, FL 32038

Phone: (352) 642-9777
Email: info@wickd-fl.com`,
  },
];

function PolicySection({ title, body }: { title: string; body: string }) {
  const parts = body.split(/\*\*(.*?)\*\*/g);
  return (
    <div id={title.toLowerCase().replace(/\s+/g, "-")} className="mb-12">
      <h2
        className="text-xl text-foreground mb-4 pb-3 border-b border-border font-serif-heading font-semibold"
        
      >
        {title}
      </h2>
      <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
        {parts.map((part, i) =>
          i % 2 === 1 ? (
            <strong key={i} className="text-foreground font-medium">{part}</strong>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </div>
    </div>
  );
}

export function PrivacyPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-secondary/40 border-b border-border py-16">
        <Reveal className="max-w-4xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-primary mb-3 font-medium">Legal</p>
          <h1
            className="text-4xl md:text-5xl text-foreground mb-3 leading-tight font-serif-heading font-bold"
            
          >
            Privacy Policy
          </h1>
          <p className="text-sm text-muted-foreground">
            Effective <strong className="text-foreground">January 1, 2026</strong> · Last updated{" "}
            <strong className="text-foreground">June 1, 2026</strong>
          </p>
        </Reveal>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14 flex flex-col lg:flex-row gap-14">
        {/* TOC */}
        <aside className="lg:w-52 shrink-0">
          <div className="sticky top-24">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium">Contents</p>
            <nav className="flex flex-col gap-1.5">
              {sections.map((s, i) => (
                <a
                  key={s.title}
                  href={`#${s.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-baseline gap-2"
                >
                  <span className="text-border/60">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 min-w-0">
          <Reveal>
            <div className="bg-card border border-border rounded-sm px-6 py-5 mb-10 text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">TL;DR —</strong> We collect data to run your account. We don't sell it. You can ask us to delete it any time.
            </div>
          </Reveal>

          <StaggerReveal>
            {sections.map((s) => (
              <StaggerItem key={s.title}>
                <PolicySection title={s.title} body={s.body} />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </main>
      </div>
    </div>
  );
}
