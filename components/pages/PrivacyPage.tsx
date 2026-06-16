"use client";

import { Reveal, StaggerReveal, StaggerItem } from "@/components/Reveal";

function RichText({ children }: { children: string }) {
  const parts = children.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="text-foreground font-medium">
              {part.slice(2, -2)}
            </strong>
          );
        }
        const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
        if (linkMatch) {
          return (
            <a
              key={i}
              href={linkMatch[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {linkMatch[1]}
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

function LegalBasisTable({ rows }: { rows: { purpose: string; legalBasis: string }[] }) {
  return (
    <div className="overflow-x-auto mb-6 border border-border rounded-sm">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-secondary/40 border-b border-border">
            <th className="text-left text-foreground font-medium px-4 py-3 w-1/2">Purpose</th>
            <th className="text-left text-foreground font-medium px-4 py-3 w-1/2">Legal Basis for Processing</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.purpose} className="border-b border-border last:border-0">
              <td className="text-muted-foreground px-4 py-3 align-top">{row.purpose}</td>
              <td className="text-muted-foreground px-4 py-3 align-top">{row.legalBasis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

interface Subsection {
  title: string;
  body: string;
}

interface Section {
  id: string;
  title: string;
  intro?: string;
  body?: string;
  subsections?: Subsection[];
  list?: string[];
  table?: { purpose: string; legalBasis: string }[];
}

const sections: Section[] = [
  {
    id: "what-personal-information-do-we-collect",
    title: "What Personal Information Do We Collect?",
    intro:
      "We may collect or process the following categories of personal information in connection with the Services:",
    subsections: [
      {
        title: "1.1 Contact Information",
        body: "including name, address, email address, phone number, social media handle, and other contact information provided to us.",
      },
      {
        title: "1.2 Account Information",
        body: "including username and credentials, identifiers, settings and preferences, and subscription information.",
      },
      {
        title: "1.3 Payment Information",
        body: "including credit card or debit card information and information about the payment methods and services used to make purchases. Payment information is primarily stored and processed by our third-party service providers; however, we may store and process limited payment-related information.",
      },
      {
        title: "1.4 Location Information",
        body: "including imprecise geolocation data (such as location derived from your IP address) and precise geolocation data when you have granted location permissions.",
      },
      {
        title: "1.5 Content You Create or Share With Us",
        body: "including photographs, videos, files, and data, communications with us such as texts, emails, and phone calls, and messages between users, and business information such as financial statements.",
      },
      {
        title: "1.6 Device and Internet Information",
        body: "including internet protocol (IP) address, browser type, version, and plug-ins, battery, processing, and device health information, time zone setting and location, operating system and platform, device based and online identifiers, and your interactions with the Services.",
      },
      {
        title: "1.7 Activity and Transaction Information",
        body: "including information about the Services purchased and session replay data, such as records of your mouse movements, clicks, scrolls, and keystrokes within the Services.",
      },
      {
        title: "1.8 Sensitive Information",
        body: "some of the information identified above may be considered sensitive personal information under the laws of some jurisdictions. You can turn off Wick'd Environmental Technologies's ability to collect and use precise location at any time in your settings.",
      },
    ],
  },
  {
    id: "how-do-we-collect-personal-information",
    title: "How Do We Collect Personal Information?",
    subsections: [
      {
        title: "2.1 From You",
        body: "We receive information through your interactions with and use of our Services, such as through account creation, capture or upload of photographs and videos, and when you communicate with us and other users.",
      },
      {
        title: "2.2 Automatically from Your Use of the Services",
        body: "When you use our Services, some personal information is collected through the use of cookies or similar technologies. Please see our Cookie Policy for more information. We also use session replay tools that record your interactions with our Services.",
      },
      {
        title: "2.3 From Partners and Affiliates",
        body: "We may receive personal information from our business partners and affiliates whom we work with to provide our Services including integrations with other platforms.",
      },
      {
        title: "2.4 From Service Providers",
        body: "We may receive personal information from providers whom we engage to perform services on our behalf such as payment processing, marketing and advertising, and analytics.",
      },
    ],
  },
  {
    id: "how-do-we-use-personal-information",
    title: "How Do We Use Personal Information?",
    subsections: [
      {
        title: "3.1 To Provide Our Services",
        body: "including job site photo and video capture, organization including based on location, sharing, messaging and collaboration features, artificial intelligence features, transactions and billing, personalization of the Services, facilitation of third-party integrations, and any other use you consent to.",
      },
      {
        title: "3.2 To Communicate With You",
        body: "including providing customer support and responding to your inquiries.",
      },
      {
        title: "3.3 To Advertise and Promote Our Services",
        body: "including displaying advertisements based on your preferences and activity, measuring the effectiveness of our marketing campaigns, and communicating about events, webinars, and other Wick'd Environmental Technologies community activities.",
      },
      {
        title: "3.4 To Analyze and Improve Our Services",
        body: "including understanding how you use our Services, troubleshooting our Services, and developing new Services including by training our internal artificial intelligence and large language models.",
      },
      {
        title: "3.5 For Legal and Policy Compliance",
        body: "including to comply with legal, regulatory, and contractual obligations, security purposes, and investigation of violations of our terms and policies.",
      },
    ],
  },
  {
    id: "how-we-share-personal-information",
    title: "How We Share Personal Information?",
    subsections: [
      {
        title: "4.1 To Service Providers",
        body: "we may disclose personal information to service providers and vendors to enable us to perform our Services including cloud hosting providers, payment processors, analytics providers, customer support tools, and marketing and advertising providers. We do not sell personal information.",
      },
      {
        title: "4.2 To Corporate Affiliates",
        body: "we may disclose personal information to our corporate affiliates and subsidiaries.",
      },
      {
        title: "4.3 To Business Partners",
        body: "we may disclose personal information to enable joint products, integrations, Services, or other products and services that may be of interest to you and your business.",
      },
      {
        title: "4.4 To Other Users",
        body: "we may disclose personal information to your account administrator or with other users when you use our Services to enable your interactions.",
      },
      {
        title: "4.5 For Corporate Transactions",
        body: "in connection with a merger, acquisition, sale of assets, or other business transaction, personal information may be disclosed or transferred.",
      },
      {
        title: "4.6 To Government Authorities or Where Legally Permitted or Required",
        body: "we may disclose personal information when legally required or permitted with third parties as necessary to enforce our agreements, prevent fraud, or protect rights, property, or safety.",
      },
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    body: "Please refer to our Cookie Policy for more information about our use of cookies.",
  },
  {
    id: "your-privacy-rights",
    title: "Your Privacy Rights",
    intro:
      "Depending on your jurisdiction, you may have specific rights regarding your personal information. These rights may include:",
    list: [
      "**Access/Portability:** You may confirm whether we process your personal information and access a copy of the personal information we possess.",
      "**Correction:** You may request that we correct inaccuracies in your personal information.",
      "**Deletion:** You may request that we delete personal information, subject to certain exceptions under applicable law.",
      "**Limit or Opt Out of Sale or Sharing:** you may request that we do not share or sell your personal information for targeted advertising, profiling and sales and limit the use of certain sensitive personal information to specific statutorily permitted purposes. You may choose to enable global privacy controls (\"GPC\") within your browser to automatically communicate your opt-out preferences to us.",
      "**Right to Appeal:** You may have the right to appeal decisions that we make with regards to a rights request. To appeal a decision please contact us by calling us at +1 (352) 642-9777.",
    ],
  },
  {
    id: "exercising-your-rights",
    title: "Exercising Your Rights",
    body: "To exercise the rights described above, please contact us by calling us at +1 (352) 642-9777.",
  },
  {
    id: "how-do-we-protect-your-personal-information",
    title: "How Do We Protect Your Personal Information?",
    body: "We use commercially reasonable administrative, physical, and technical measures designed to protect your personal information from accidental loss or destruction from access, use, alteration, and disclosure. However, no system is ever completely secure. We are not responsible for circumvention of any privacy settings or security measures contained on our Services or those on third-party websites. The security of your personal information is also your responsibility, and we urge you to take precautions to protect your personal information. If you have reason to believe that your Wick'd Environmental Technologies account or any interaction with us is no longer secure, please let us know immediately by contacting Wick'd Environmental Technologies support or as indicated below in the Contact Us section.",
  },
  {
    id: "childrens-personal-information",
    title: "Children's Personal Information",
    body: "Our Services are not created for or directed at individuals under the age of 18. We do not knowingly process personal information from individuals under 18 years old. If you are a parent or guardian and believe we have information about your child or that your child has provided us with personal information without your consent, please let us know immediately by contacting us as indicated below in the Contact Us section.",
  },
  {
    id: "third-party-websites",
    title: "Third-Party Websites",
    body: "Our Services may include links to third-party websites. These third parties are not controlled by Wick'd Environmental Technologies and we are not responsible for their privacy policies and practices. If you provide your personal information to any third party or through a third-party website it is subject to the privacy policies and practices of that third party.",
  },
  {
    id: "changes-to-this-privacy-notice",
    title: "Changes to this Privacy Notice",
    body: "We may update this Notice to account for changes in how we collect and process your personal information and for changes in privacy laws. Changes will be indicated by the \"Updated\" date at the top of the Notice. To the extent any of these changes are material, we may provide notice such as by contacting you via email.",
  },
  {
    id: "eu-uk-switzerland",
    title: "EU, UK & Switzerland",
    intro:
      "The terms in this section only apply to residents of the European Union, the United Kingdom, and Switzerland. This section supplements the information contained elsewhere in our Privacy Notice and is only applicable to those located in the European Union (\"EU\"), including the Republic of Ireland and the United Kingdom (\"UK\"), and Switzerland (subject to the Section 13 \"Data Privacy Frameworks\" below). The purpose of this section is to provide information and additional provisions that apply to our processing of Personal Data in accordance with the EU General Data Protection Regulation 2016/679, the UK General Data Protection Regulation, the Irish Data Protection Act, and the Swiss Federal Act on Data Protection (collectively referred to herein as the \"GDPR\"). In the event of a conflict between this section and the remainder of the Privacy Statement, this section shall control for those persons located in the EU or the UK.",
    subsections: [
      {
        title: "12.1 Legal Bases for Processing",
        body: "We process Personal Data as indicated in this Notice in line with the lawful bases set out below.",
      },
      {
        title: "12.2 Your Choices",
        body: "We offer several methods for you to limit the use and disclosure of your Personal Data. In addition to the options listed in our Cookie Policy, you may opt out of us disclosing your Personal Data to third parties or using your data for any purpose that is materially different from the purpose(s) for which we collected it or for which you subsequently authorized us to use it by emailing us at: privacy@wickd-fl.com",
      },
      {
        title: "12.3 Additional Privacy Rights",
        body: "You also have the following additional privacy rights: Right of access — You have the right to request copies of your personal data. Right to rectification — You have the right to request that we amend or update your personal data where it is inaccurate or incomplete. Right to erasure — You have the right to request that we erase certain of your personal information. Right to restriction of processing — You have the right to request that we stop processing your personal information, under certain conditions. Right to object to processing — You have the right to object to our processing of your personal information, under certain conditions. Right to data portability — You have the right to request that we transfer the data that we have collected to another organization or to you, under certain conditions. Right to withdraw consent — Where we process your Personal Data based on consent, you have the right to withdraw that consent at any time by contacting us. To exercise the above rights, please submit a request by sending an email to privacy@wickd-fl.com.",
      },
      {
        title: "12.4 Complaints",
        body: "If you believe we have processed your Personal Data in a manner which is unlawful you have the right to submit a complaint to your local data protection authority. A list of EU data protection authorities and their contact details is available at [https://www.edpb.europa.eu/about-edpb/about-edpb/members_en#member-ie](https://www.edpb.europa.eu/about-edpb/about-edpb/members_en#member-ie). The details of the UK Information Commissioner's Office are here [https://ico.org.uk/global/contact-us/](https://ico.org.uk/global/contact-us/), the details of the Irish Data Protection Commission are here [https://www.dataprotection.ie/en/contact/how-contact-us](https://www.dataprotection.ie/en/contact/how-contact-us) and the details of the Swiss Federal Data Protection and Information Commissioner are here [https://www.edoeb.admin.ch/en/data-protection](https://www.edoeb.admin.ch/en/data-protection).",
      },
      {
        title: "12.6 Automated Decision Making",
        body: "We do not use automated decision making, including profiling, to produce a legal or similarly significant effect. If you have any questions about how we use automated decision making, you can contact us at privacy@wickd-fl.com.",
      },
      {
        title: "12.7 International Data Transfers",
        body: "Your Personal Data may be transferred to, processed, and stored in countries other than the country in which you reside, including the United States. These countries may have less strict data protection laws than the laws of your country or no data protection laws. Whenever we transfer your Personal Data, we implement appropriate safeguards which are reasonably necessary to protect your Personal Data and to make sure it is treated securely regardless of its location. When we transfer your Personal Data from the European Union/European Economic Area to the U.S., we rely on the EU-U.S. Data Privacy Framework with the UK Extension and the Swiss-U.S. Data Privacy Framework (see \"Data Privacy Framework\" section below), or other approved data transfer mechanisms such as the Standard Contractual Clauses approved by the European Commission and the UK Information Commission's Office to ensure your information is subject to adequate safeguards in the recipient country. If you are located in the EU, UK, or Switzerland, you may contact us using the contact details below for a copy of the safeguards which we have put in place to protect your personal data and privacy rights in these circumstances.",
      },
      {
        title: "12.8 GDPR — European Representative",
        body: "Pursuant to Article 27 of the GDPR, Wick'd Environmental Technologies has appointed European Data Protection Office (EDPO) as its GDPR Representative in the EU. You can contact EDPO regarding matters pertaining to the GDPR by using EDPO's online request form: [https://edpo.com/gdpr-data-request/](https://edpo.com/gdpr-data-request/) or by writing to EDPO at Avenue Huart Hamoir 71, 1030 Brussels, Belgium.",
      },
      {
        title: "12.9 UK GDPR — UK Representative",
        body: "Pursuant to Article 27 of the UK GDPR, Wick'd Environmental Technologies has appointed EDPO UK Ltd as its UK GDPR representative in the UK. You can contact EDPO UK regarding matters pertaining to the UK GDPR by using EDPO's online request form [https://edpo.com/uk-gdpr-data-request/](https://edpo.com/uk-gdpr-data-request/) or by writing to EDPO UK at Unit 33, Waterside, Schooner Court, 44 – 48 Wharf Road, London, N1 7UX, United Kingdom.",
      },
      {
        title: "12.10 Swiss Federal Act on Data Protection (FADP) — Swiss Representative",
        body: "Pursuant to Article 14 of the Swiss FADP, Wick'd Environmental Technologies has appointed EDPO Switzerland as its FADP representative in Switzerland. You can contact EDPO Switzerland regarding matters pertaining to the Swiss FADP by using EDPO's online request form: [https://edpo.com/swiss-data-request](https://edpo.com/swiss-data-request) or by writing to EDPO Switzerland at Rue de Lausanne 37, 1201 Genève, Switzerland.",
      },
    ],
    table: [
      {
        purpose: "Providing our Services in accordance with our contract with you.",
        legalBasis: "Performance of a contract.",
      },
      {
        purpose:
          "To provide further parts of the Service including the improvement of the Services, promotion of the security of the Services, and development of new Services.",
        legalBasis:
          "Legitimate Interest including developing and improving products and features for our users, and maintaining the safety and security of our Services.",
      },
      {
        purpose: "To provide additional voluntary features of the Services.",
        legalBasis: "Consent.",
      },
      {
        purpose:
          "To communicate with you and analyze communications including providing customer service, prospecting sales leads, and notifying you of changes to our policies.",
        legalBasis:
          "Legitimate Interest in communicating with existing and prospective users about our Services.",
      },
      {
        purpose: "For marketing, advertising, or promotional purposes.",
        legalBasis:
          "Legitimate interest in advertising the Services and, where necessary, prior consent to the extent it has been provided.",
      },
      {
        purpose: "To provide third-party integrations.",
        legalBasis: "Performance of our contract with you and, where necessary, prior consent.",
      },
      {
        purpose:
          "To comply with legal obligations and requests from law enforcement, to defend Wick'd Environmental Technologies or to establish legal claims.",
        legalBasis:
          "Compliance with legal obligations and legitimate interest in protecting Wick'd Environmental Technologies in legal proceedings.",
      },
    ],
  },
  {
    id: "data-privacy-frameworks",
    title: "Data Privacy Frameworks",
    subsections: [
      {
        title: "13.1 Data Privacy Frameworks",
        body: "Wick'd Environmental Technologies complies with the principles of the EU-U.S. Data Privacy Framework, the UK Extension thereto, and the Swiss-U.S. Data Privacy Framework (together, the \"DPF\"), as set forth by the U.S. Department of Commerce. Wick'd Environmental Technologies has certified to the U.S. Department of Commerce that it adheres to the DPF Principles with regard to the processing of Personal Data received from the European Union, the United Kingdom, and Switzerland in reliance on the DPF. If there is any conflict between the terms in this Privacy Notice and the DPF Principles, the Principles shall govern. To learn more about the Data Privacy Framework program, and to view our certification, please visit [https://www.dataprivacyframework.gov/](https://www.dataprivacyframework.gov/).",
      },
      {
        title: "13.2 Questions, Concerns, or Complaints",
        body: "As a first step, if you have any questions, concerns, or complaints about our compliance with the DPF Principles, we encourage you to contact us using the contact details set forth in the section below.",
      },
      {
        title: "13.3 Alternate Dispute Resolution and Recourse",
        body: "If we are not able to resolve your concerns or complaints through that first step, and you are a resident of the EU and the UK whose Personal Data we have processed in the U.S. pursuant to the DPF, Wick'd Environmental Technologies has agreed to participate in the VeraSafe DPF Dispute Resolution Procedure. Subject to the terms of that Procedure, VeraSafe will provide appropriate recourse free of charge to you. To file a complaint and participate in the VeraSafe DPF Dispute Resolution Procedure, please submit the required information here: [https://verasafe.com/public-resources/dispute-resolution/submit-dispute/](https://verasafe.com/public-resources/dispute-resolution/submit-dispute/)",
      },
      {
        title: "13.4 Binding Arbitration",
        body: "If your dispute or complaint related to your Personal Data that we received in reliance on the DPF cannot be resolved by us, nor through the VeraSafe dispute resolution mechanism mentioned above, Wick'd Environmental Technologies acknowledges and agrees that we will follow the terms for binding arbitration set forth in Annex I of the DPF Principles, provided that an individual has invoked that option by delivering notice to our organization and following the procedures and subject to the conditions set forth in Annex I of the DPF Principles.",
      },
      {
        title: "13.5 Federal Trade Commission (\"FTC\") Investigations and Enforcement",
        body: "Wick'd Environmental Technologies acknowledges and agrees that we are subject to the investigatory and enforcement powers of the FTC.",
      },
      {
        title: "13.6 Third-Party Transfers",
        body: "Wick'd Environmental Technologies limits its use of third parties for processing Personal Data of EU, UK, and Swiss residents to those that will apply the same level of protection as required by the DPF Principles. In the context of an onward transfer, Wick'd Environmental Technologies is responsible for the processing of Personal Data that it receives under the Data Privacy Framework and subsequently transfers to a third-party agent acting on our behalf. If such third-party agents process Personal Data in a manner inconsistent with the DPF Principles, we remain liable unless we prove we are not responsible for the event giving rise to the damage.",
      },
    ],
  },
  {
    id: "contact-us",
    title: "Contact Us",
    body: "**Write us at:** 864 SW Spirit Ave, Fort White, FL 32038\n\n**Call us at:** +1 (352) 642-9777",
  },
];

function PolicySection({ section }: { section: Section }) {
  return (
    <div id={section.id} className="mb-12 scroll-mt-24">
      <h2 className="text-xl text-foreground mb-4 pb-3 border-b border-border font-serif-heading font-semibold">
        {section.title}
      </h2>

      {section.intro && (
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          <RichText>{section.intro}</RichText>
        </p>
      )}

      {section.body && (
        <div className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line mb-4">
          <RichText>{section.body}</RichText>
        </div>
      )}

      {section.list && (
        <ul className="text-sm text-muted-foreground leading-relaxed space-y-3 mb-4 list-none pl-0">
          {section.list.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="text-primary shrink-0 mt-0.5">•</span>
              <span>
                <RichText>{item}</RichText>
              </span>
            </li>
          ))}
        </ul>
      )}

      {section.subsections?.map((sub, index) => (
        <div key={sub.title}>
          <div className="mb-5 last:mb-0">
            <h3 className="text-sm text-foreground font-medium mb-1.5">{sub.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              <RichText>{sub.body}</RichText>
            </p>
          </div>
          {section.table && index === 0 && <LegalBasisTable rows={section.table} />}
        </div>
      ))}
    </div>
  );
}

export function PrivacyPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-secondary/40 border-b border-border py-16">
        <Reveal className="max-w-4xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-primary mb-3 font-medium">Legal</p>
          <h1 className="text-4xl md:text-5xl text-foreground mb-3 leading-tight font-serif-heading font-bold">
            Privacy Notice
          </h1>
          <p className="text-sm text-muted-foreground">
            Updated <strong className="text-foreground">June 1, 2026</strong>
          </p>
        </Reveal>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14 flex flex-col lg:flex-row gap-14">
        <aside className="lg:w-52 shrink-0">
          <div className="sticky top-24">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-medium">Contents</p>
            <nav className="flex flex-col gap-1.5">
              {sections.map((s, i) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-baseline gap-2"
                >
                  <span className="text-border/60">{String(i + 1).padStart(2, "0")}</span>
                  {s.title}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex-1 min-w-0">
          <Reveal>
            <div className="text-sm text-muted-foreground leading-relaxed mb-10">
              <p className="mb-4">
                We at Wick&apos;d Environmental Technologies, Inc. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
                &ldquo;Wick&apos;d Environmental Technologies&rdquo;) respect your privacy. This Privacy Notice
                (&ldquo;Notice&rdquo;) describes how Wick&apos;d Environmental Technologies handles your personal
                information when providing its services, including, but not limited to, its websites, mobile
                applications, any website, platform, or application that contains or includes a link to this Notice,
                and channels of communication with Wick&apos;d Environmental Technologies (collectively, the
                &ldquo;Services&rdquo;).
              </p>
              <p className="mb-4">
                Your continued use of the Services indicates you acknowledge and agree with the terms of this Notice.
                This Notice applies only to your personal information, which is information that can reasonably be
                used to identify you. Anonymous or de-identified information is not personal information.
              </p>
            </div>
          </Reveal>

          <StaggerReveal>
            {sections.map((s) => (
              <StaggerItem key={s.id}>
                <PolicySection section={s} />
              </StaggerItem>
            ))}
          </StaggerReveal>
        </main>
      </div>
    </div>
  );
}
