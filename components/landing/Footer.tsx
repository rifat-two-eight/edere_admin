"use client";


import Image from "next/image";
import Link from "next/link";

export default function Footer({
  transparent = false,
}: {
  transparent?: boolean;
}) {
  return (
    <footer
      className={`pt-16 pb-8 ${transparent
        ? "bg-transparent border-t-0"
        : "bg-[#F5F2EE] border-t border-gray-200"
        }`}
    >
      <div className="container mx-auto px-4">

        {/* ── MOBILE/TABLET layout (< lg) ── */}
        <div className="lg:hidden flex flex-col gap-12 mb-12">
          {/* Top Row: Logo & Social */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
            <Image src="/logo.png" alt="Logo" width={80} height={80} />
            <div>
              <h4 className="font-bold text-[#2D2A26] mb-3">Follow us</h4>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-[#055E2C] rounded-full flex items-center justify-center text-white hover:bg-[#044c23] transition-colors"
                >
                  <img src="/instagram.svg" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-[#055E2C] rounded-full flex items-center justify-center text-white hover:bg-[#044c23] transition-colors"
                >
                  <img src="/linkedin.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {/* Column 2: Navigate */}
            <div>
              <h4 className="font-bold text-[#2D2A26] mb-5">Navigate</h4>
              <ul className="space-y-3 text-[#2D2A26]/80">
                <li><Link href="/mission" className="hover:text-[#055E2C]">Our Mission</Link></li>
                <li><Link href="/faq" className="hover:text-[#055E2C]">FAQs</Link></li>
                <li><Link href="https://edere.beehiiv.com/" target="_blank" className="hover:text-[#055E2C]">Blog</Link></li>
                <li><Link href="/terms" className="hover:text-[#055E2C]">Terms + Conditions</Link></li>
                <li><Link href="/policy" className="hover:text-[#055E2C]">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div>
              <h4 className="font-bold text-[#2D2A26] mb-5">Contact</h4>
              <ul className="space-y-4 text-[#2D2A26]/80 text-sm">
                <li className="flex items-center gap-2">
                  <Image src="/mail.svg" alt="Mail" width={20} height={20} />
                  <a href="mailto:hello@edere.life" className="hover:text-[#055E2C]">hello@edere.life</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Download */}
          <div className="flex flex-col items-center text-center gap-6 pt-4 border-t border-[#2D2A26]/10 sm:border-none">
            <p className="text-[#2D2A26] text-sm font-medium leading-relaxed max-w-sm">
              The ultimate restaurant discovery app for food allergies, dietary restrictions & preferences... all before you step through the doors.
            </p>
            <button className="w-full sm:w-auto px-8 py-3 bg-[#055E2C] text-white rounded-full font-bold hover:bg-[#044c23] transition-colors">
              Download app
            </button>
          </div>
        </div>

        {/* ── DESKTOP layout (lg+) — 100% ORIGINAL ── */}
        <div className="hidden lg:block">
          <div className="flex justify-between gap-0 mb-16 items-start">
            {/* Column 1: Logo & Social */}
            <div className="space-y-8">
              <Image src="/logo.png" alt="Logo" width={100} height={100} />
              <div>
                <h4 className="font-bold text-[#2D2A26] mb-4">Follow us</h4>
                <div className="flex gap-4">
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/edere.life"
                    className="w-10 h-10 bg-[#055E2C] rounded-full flex items-center justify-center text-white hover:bg-[#044c23] transition-colors"
                  >
                    <img src="/instagram.svg" />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/edere"
                    className="w-10 h-10 bg-[#055E2C] rounded-full flex items-center justify-center text-white hover:bg-[#044c23] transition-colors"
                  >
                    <img src="/linkedin.svg" alt="" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Column 2: Navigate */}
            <div className="flex justify-center gap-20">
              <div>
                <h4 className="font-bold text-[#2D2A26] mb-6">Navigate</h4>
                <ul className="space-y-4 text-[#2D2A26]/80">
                  <li><Link href="/mission" className="hover:text-[#055E2C]">Our Mission</Link></li>
                  <li><Link href="/faq" className="hover:text-[#055E2C]">FAQs</Link></li>
                  <li><Link href="https://edere.beehiiv.com/" target="_blank" className="hover:text-[#055E2C]">Blog</Link></li>
                  <li><Link href="/terms" className="hover:text-[#055E2C]">Terms + Conditions</Link></li>
                  <li><Link href="/policy" className="hover:text-[#055E2C]">Privacy Policy</Link></li>
                </ul>
              </div>

              {/* Column 3: Contact */}
              <div>
                <h4 className="font-bold text-[#2D2A26] mb-6">Contact</h4>
                <ul className="space-y-4 text-[#2D2A26]/80">
                  <li className="flex items-center gap-2">
                    <Image src="/mail.svg" alt="Mail" width={20} height={20} />
                    <a href="mailto:hello@edere.life" className="hover:text-[#055E2C]">hello@edere.life</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 4: Download */}
            <div className="text-right font-medium md:text-right flex flex-col items-start md:items-end">
              <div className="mb-6 text-left md:text-right ml-auto">
                <p className="text-[#2D2A26] text-sm font-medium leading-relaxed">
                  The ultimate restaurant discovery app for <br /> food allergies, dietary restrictions & preferences... <br /> all before you step through the doors.
                </p>
              </div>
              <button className="px-6 py-3 bg-[#055E2C] text-white rounded-full font-bold hover:bg-[#044c23] transition-colors">
                Download app
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-[#2D2A26]/60 text-sm pt-8 border-t border-[#2D2A26]/10">
          © Copyright {new Date().getFullYear()} All Rights Reserved by Edere Inc.
        </div>
      </div>
    </footer>
  );
}
