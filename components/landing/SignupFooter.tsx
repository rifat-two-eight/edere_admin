"use client";

import Signup from "./Signup";
import Footer from "./Footer";
import Image from "next/image";

export default function SignupFooter() {
    return (
        <div className="relative w-full bg-[#F5F2EE] overflow-hidden">
            {/* Background Swoosh */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <Image
                    src="/vector.svg"
                    alt="Background Swoosh"
                    fill
                    className="object-cover opacity-100"
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
    );
}
