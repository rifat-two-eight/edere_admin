"use client";

import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer({
  transparent = false,
}: {
  transparent?: boolean;
}) {
  return (
    <footer
      className={`py-16 ${transparent
          ? "bg-transparent border-t-0"
          : "bg-[#F5F2EE] border-t border-gray-200"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 items-start">
          {/* Column 1: Logo & Social */}
          <div className="space-y-8">
            {/* Logo Placeholder - Circle with text */}
            <div className="w-20 h-20 border border-black rounded-full flex items-center justify-center">
              <span className="font-bold text-xl">edere</span>
            </div>

            <div>
              <h4 className="font-bold text-[#2D2A26] mb-4">Follow us</h4>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-[#055E2C] rounded-full flex items-center justify-center text-white hover:bg-[#044c23] transition-colors"
                >
                  <Instagram size={20} />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-[#055E2C] rounded-full flex items-center justify-center text-white hover:bg-[#044c23] transition-colors"
                >
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Column 2: Navigate */}
          <div>
            <h4 className="font-bold text-[#2D2A26] mb-6">Navigate</h4>
            <ul className="space-y-4 text-[#2D2A26]/80">
              <li>
                <Link href="#" className="hover:text-[#055E2C]">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#055E2C]">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#055E2C]">
                  Terms + Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#055E2C]">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-bold text-[#2D2A26] mb-6">Contact</h4>
            <ul className="space-y-4 text-[#2D2A26]/80">
              <li className="flex items-center gap-2">
                <div className="w-4 h-3 bg-[#055E2C] rounded-[2px]" /> {/* Mail icon placeholder since lucide mail is used elsewhere */}
                <a href="mailto:hello@edere.life" className="hover:text-[#055E2C]">hello@edere.life</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Download */}
          <div className="text-right md:text-right flex flex-col items-start md:items-end">
            <div className="mb-6 max-w-[250px] text-left md:text-right ml-auto">
              <p className="text-[#2D2A26] text-sm font-medium leading-relaxed">
                The ultimate restaurant discovery app for food allergies, dietary restrictions & preferences... all before you step through the doors.
              </p>
            </div>
            <button className="px-6 py-3 bg-[#055E2C] text-white rounded-full font-bold hover:bg-[#044c23] transition-colors">
              Download app
            </button>
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
