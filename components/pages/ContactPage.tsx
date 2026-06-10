"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, StaggerReveal, StaggerItem } from "@/components/Reveal";

export function ContactPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-[#1C1008] text-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xs uppercase tracking-widest text-primary mb-3 font-medium"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.06 }}
            className="text-4xl md:text-5xl leading-tight font-serif-heading font-bold"
            
          >
            Get in touch
          </motion.h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact details */}
          <Reveal>
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-primary mb-5 font-medium">Reach us</p>
                <StaggerReveal className="flex flex-col gap-5">
                  <StaggerItem>
                    <a
                      href="https://maps.google.com/?q=864+SW+Spirit+Ave,+Fort+White,+FL+32038"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-4 group"
                    >
                      <span className="mt-0.5 w-8 h-8 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <MapPin size={14} className="text-primary" strokeWidth={1.5} />
                      </span>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Address</p>
                        <p className="text-sm text-foreground leading-relaxed group-hover:text-primary transition-colors">
                          864 SW Spirit Ave<br />Fort White, FL 32038
                        </p>
                      </div>
                    </a>
                  </StaggerItem>

                  <StaggerItem>
                    <a href="tel:+13526429777" className="flex gap-4 group">
                      <span className="mt-0.5 w-8 h-8 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Phone size={14} className="text-primary" strokeWidth={1.5} />
                      </span>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Phone</p>
                        <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                          (352) 642-9777
                        </p>
                      </div>
                    </a>
                  </StaggerItem>

                  <StaggerItem>
                    <a href="mailto:info@wickd-fl.com" className="flex gap-4 group">
                      <span className="mt-0.5 w-8 h-8 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Mail size={14} className="text-primary" strokeWidth={1.5} />
                      </span>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Email</p>
                        <p className="text-sm text-foreground group-hover:text-primary transition-colors">
                          info@wickd-fl.com
                        </p>
                      </div>
                    </a>
                  </StaggerItem>

                  <StaggerItem>
                    <div className="flex gap-4">
                      <span className="mt-0.5 w-8 h-8 rounded-sm bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                        <Clock size={14} className="text-primary" strokeWidth={1.5} />
                      </span>
                      <div>
                        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-0.5">Hours</p>
                        <p className="text-sm text-foreground leading-relaxed">
                          Mon – Fri, 7 AM – 6 PM ET
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                </StaggerReveal>
              </div>
            </div>
          </Reveal>

          {/* Contact form */}
          <Reveal delay={0.1}>
            <form
              className="bg-card border border-border rounded-sm p-7 flex flex-col gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              <p
                className="text-lg text-foreground font-serif-heading font-semibold"
                
              >
                Send a message
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-muted-foreground uppercase tracking-wide">First name</label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className="bg-secondary/40 border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-muted-foreground uppercase tracking-wide">Last name</label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="bg-secondary/40 border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-muted-foreground uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  placeholder="jane@company.com"
                  className="bg-secondary/40 border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-muted-foreground uppercase tracking-wide">Company</label>
                <input
                  type="text"
                  placeholder="Your organization"
                  className="bg-secondary/40 border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/50 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-muted-foreground uppercase tracking-wide">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your team and what you're looking for…"
                  className="bg-secondary/40 border border-border rounded-sm px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="bg-primary text-primary-foreground px-5 py-3 rounded-sm text-sm hover:bg-primary/90 active:scale-[0.98] transition-all duration-150 mt-1"
              >
                Send Message
              </button>
            </form>
          </Reveal>
        </div>

        {/* Map embed placeholder */}
        <Reveal delay={0.1} className="mt-14">
          <div className="w-full h-72 rounded-sm overflow-hidden border border-border">
            <iframe
              title="Utility Vision location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-placeholder&q=864+SW+Spirit+Ave,+Fort+White,+FL+32038"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">864 SW Spirit Ave, Fort White, FL 32038</p>
        </Reveal>
      </div>
    </div>
  );
}
