import { Globe, Mail, Phone } from "lucide-react";
import Link from "next/link";

interface Contact2Props {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export function Contact2({
  title = "Contact Us",
  description = "We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!",
  phone = "(123) 34567890",
  email = "email@example.com",
  web = { label: "jainetwork.org", url: "https://jainetwork.org" },
}: Contact2Props) {
  const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

  return (
    <section className="relative flex min-h-[calc(100dvh-4.5rem)] flex-col bg-gradient-to-b from-[#F5F7FB] via-white to-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_70%_60%_at_50%_0%,rgba(1,70,174,0.08)_0%,transparent_70%)]" aria-hidden />

      <div className="relative mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p>
        </div>

        <div className="mt-12 grid w-full gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <Link
            href={phoneHref}
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#0146AE]/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0146AE] focus-visible:ring-offset-2"
          >
            <span className="inline-flex w-fit rounded-lg bg-[#0146AE]/10 p-3 text-[#0146AE] transition group-hover:bg-[#0146AE]/15">
              <Phone className="h-5 w-5" aria-hidden />
            </span>
            <span className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-500">Phone</span>
            <span className="mt-2 text-lg font-medium text-slate-900 transition group-hover:text-[#0146AE] sm:text-xl">
              {phone}
            </span>
          </Link>

          <Link
            href={`mailto:${email}`}
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#0146AE]/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0146AE] focus-visible:ring-offset-2"
          >
            <span className="inline-flex w-fit rounded-lg bg-[#0146AE]/10 p-3 text-[#0146AE] transition group-hover:bg-[#0146AE]/15">
              <Mail className="h-5 w-5" aria-hidden />
            </span>
            <span className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-500">Email</span>
            <span className="mt-2 break-all text-lg font-medium text-slate-900 transition group-hover:text-[#0146AE] sm:text-xl">
              {email}
            </span>
          </Link>

          <Link
            href={web.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#0146AE]/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0146AE] focus-visible:ring-offset-2 sm:col-span-2 lg:col-span-1"
          >
            <span className="inline-flex w-fit rounded-lg bg-[#0146AE]/10 p-3 text-[#0146AE] transition group-hover:bg-[#0146AE]/15">
              <Globe className="h-5 w-5" aria-hidden />
            </span>
            <span className="mt-5 text-sm font-semibold uppercase tracking-wide text-slate-500">Website</span>
            <span className="mt-2 text-lg font-medium text-slate-900 transition group-hover:text-[#0146AE] sm:text-xl">
              {web.label}
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
