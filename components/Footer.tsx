import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1C1008] text-white/60 py-14">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-3 group">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-sm bg-primary transition-transform duration-200 group-hover:scale-105">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="5" height="5" fill="white" rx="0.5" />
                <rect x="9" y="2" width="5" height="5" fill="white" rx="0.5" opacity="0.6" />
                <rect x="2" y="9" width="5" height="5" fill="white" rx="0.5" opacity="0.6" />
                <rect x="9" y="9" width="5" height="5" fill="white" rx="0.5" />
              </svg>
            </span>
            <span className="font-serif-heading text-white text-base font-semibold">
              Utility Vision
            </span>
          </Link>
          <p className="text-xs leading-relaxed max-w-[180px]">
            Field operations platform for utility and environmental crews.
          </p>
        </div>

        {[
          {
            heading: "Product",
            links: [
              { label: "Features", href: "/#features" },
              { label: "How It Works", href: "/#how-it-works" },
              { label: "Integrations", href: "/#integrations" },
            ],
          },
          {
            heading: "Company",
            links: [
              { label: "About", href: "#" },
              { label: "Contact", href: "mailto:info@wickd-fl.com" },
              { label: "Careers", href: "#" },
            ],
          },
          {
            heading: "Legal",
            links: [
              { label: "Privacy Policy", href: "/privacy", internal: true },
              { label: "Terms of Service", href: "#" },
              { label: "Support", href: "/support", internal: true },
            ],
          },
        ].map((col) => (
          <div key={col.heading}>
            <p className="text-white text-xs uppercase tracking-widest mb-3">{col.heading}</p>
            <ul className="space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  {"internal" in l && l.internal ? (
                    <Link href={l.href} className="hover:text-white transition-colors">{l.label}</Link>
                  ) : (
                    <a href={l.href} className="hover:text-white transition-colors">{l.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs">© 2026 Utility Vision, Inc.</p>
        <div className="flex gap-5 text-xs">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/support" className="hover:text-white transition-colors">Support</Link>
        </div>
      </div>
    </footer>
  );
}
