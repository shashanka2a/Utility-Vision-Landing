import type { Metadata } from "next";
import { SupportPage } from "@/components/pages/SupportPage";

export const metadata: Metadata = {
  title: "Support",
  description: "Get help with Utility Vision. Search FAQs, browse documentation, or contact our support team.",
};

export default function Page() {
  return <SupportPage />;
}
