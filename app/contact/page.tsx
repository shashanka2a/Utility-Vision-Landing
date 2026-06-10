import type { Metadata } from "next";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Utility Vision. Reach our team in Fort White, FL.",
};

export default function Page() {
  return <ContactPage />;
}
