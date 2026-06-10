import type { Metadata } from "next";
import { PrivacyPage } from "@/components/pages/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Utility Vision privacy policy. Learn how we collect, use, and protect your data.",
};

export default function Page() {
  return <PrivacyPage />;
}
