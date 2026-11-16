import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy text-white/60">
      <div className="max-w-3xl mx-auto px-6 pt-16 pb-12 text-center border-b border-white/10">
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] text-white font-bold tracking-[-0.03em] leading-[1.1] mb-4">
          Ready to have{" "}
          <span className="text-primary">seamless field data tracking?</span>
        </h2>
        <p className="text-[15px] text-white/50 mb-8 max-w-lg mx-auto leading-relaxed">
          Utility Field Intelligence Software built for solar asset operators, right-of-way contractors, and utility stakeholders.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://uv-dashboard-demo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white px-7 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors shadow-[0_8px_24px_rgba(241,90,43,0.28)]"
          >
            Start Free
          </a>
          <a
            href="https://uv-mobile.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/50 hover:text-white transition-colors font-medium"
          >
            Get the Field App
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/icon.png"
              alt=""
              width={28}
              height={28}
              className="rounded-[7px] transition-transform duration-200 group-hover:scale-105"
            />
            <span className="flex flex-col items-start leading-none gap-1.5">
              <span className="text-[15px] font-bold tracking-tight">
                <span className="text-white">Utility</span>
                <span className="text-primary">Vision</span>
              </span>
              <span className="text-[7.5px] uppercase tracking-[0.18em] text-white/45 font-medium pl-px">
                Field Intelligence
              </span>
            </span>
          </Link>
        </div>

        {[
          {
            heading: "Product",
            links: [
              { label: "Experiences", href: "/#how-it-works" },
              { label: "Features", href: "/#features" },
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

      <div className="max-w-7xl mx-auto px-6 pb-8 pt-2 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs">© 2026 Utility Vision, Inc.</p>
        <div className="flex gap-5 text-xs">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/support" className="hover:text-white transition-colors">Support</Link>
        </div>
      </div>
    </footer>
  );
}
