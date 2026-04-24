import Link from "next/link";
import { Globe, Mail, MapPin, Phone, Send, Share2 } from "lucide-react";

import { navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-lg font-bold text-[#0146AE]">JAI Network</h3>
          <p className="mt-3 text-sm text-slate-600 italic">
            ...A Special Child, a Special Potential
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-800">Quick Links</h4>
          <ul className="mt-3 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-slate-600 hover:text-[#0146AE]">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/donate" className="text-sm font-semibold text-[#0146AE] hover:text-[#013b93]">
                Donate
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-800">Contact</h4>
          <ul className="mt-3 space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 text-[#0146AE]" />
              <span>+1 (612) 472-3780</span>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 text-[#0146AE]" />
              <span>jenneh.autismaware@gmail.com</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 text-[#0146AE]" />
              <span>PO BOX 48173, Coon Rapids, MN 55448, USA</span>
            </li>
          </ul>
          {/* <div className="mt-4 flex items-center gap-3">
            <Link href="#" aria-label="Visit JAI Network website" className="rounded-full bg-white p-2 text-[#0146AE] shadow-sm hover:bg-slate-100">
              <Globe size={16} />
            </Link>
            <Link href="#" aria-label="Share JAI Network content" className="rounded-full bg-white p-2 text-[#0146AE] shadow-sm hover:bg-slate-100">
              <Share2 size={16} />
            </Link>
            <Link href="#" aria-label="Send message to JAI Network" className="rounded-full bg-white p-2 text-[#0146AE] shadow-sm hover:bg-slate-100">
              <Send size={16} />
            </Link>
          </div> */}
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        {new Date().getFullYear()} JAI Network. All rights reserved.
      </div>
    </footer>
  );
}
