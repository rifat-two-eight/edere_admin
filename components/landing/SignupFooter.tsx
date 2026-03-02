"use client";

import Signup from "./Signup";
import Footer from "./Footer";
import Image from "next/image";

export default function SignupFooter() {
    return (
        <div className="relative w-full rounded-t-[28px] bg-[#F5F2EE] overflow-hidden">
            {/* ── MOBILE/TABLET layout (< lg) ── */}
            <div className="lg:hidden relative">
                {/* Background Swoosh */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                    <Image
                        src="/vector.svg"
                        alt="Background Swoosh"
                        fill
                        className="object-cover opacity-100"
                    />
                </div>

                <div className="relative z-10 pt-12 pb-8">
                    <Signup transparent />
                    <div className="px-4">
                        <hr className="border-[#2D2A26]/10 max-w-7xl mx-auto" />
                    </div>
                    <Footer transparent />
                </div>
            </div>

            {/* ── DESKTOP layout (lg+) — 100% ORIGINAL ── */}
            <div className="hidden lg:block relative">
                {/* Background Swoosh */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                    <Image
                        src="/vector.svg"
                        alt="Background Swoosh"
                        fill
                        className="object-contain opacity-100"
                    />
                </div>

                <div className="relative z-10 pt-20">
                    <Signup transparent />
                    <div className="px-4">
                        <hr className="border-[#2D2A26]/10 max-w-7xl mx-auto" />
                    </div>
                    <Footer transparent />
                </div>
            </div>
        </div>
    );
}
