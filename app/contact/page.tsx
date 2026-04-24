import { Contact2 } from "@/components/contact-2";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("Contact", "Get in touch with JAAI for inquiries, partnerships, and support.", "/contact");

export default function ContactPage() {
  return (
    <Contact2
      title="Contact Us"
      description="We are available for questions, feedback, partnerships, and collaboration opportunities. Let us know how we can help!"
      phone="+1 (612) 472-3780"
      email="jenneh.autismaware@gmail.com"
      web={{ label: "jaai.org", url: "https://jaai.org" }}
    />
  );
}
