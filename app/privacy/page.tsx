import type { Metadata } from "next";
import { PrivacyPage } from "@/components/pages/PrivacyPage";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description:
    "Wick'd Environmental Technologies Privacy Notice. Learn how we collect, use, and protect your personal information.",
};

export default function Page() {
  return <PrivacyPage />;
}
