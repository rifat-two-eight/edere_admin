import Navbar from "@/components/landing/Navbar";

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-[#F6F2EE] text-zinc-800">
            <Navbar />

            <main className="pt-32 pb-28">
                <div className="container mx-auto px-4 max-w-5xl">

                    {/* Header */}
                    <section className="text-center mb-20">

                        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6">
                            Privacy Policy
                        </h1>

                        <p className="text-zinc-600">
                            Effective Date: Feb 8, 2026 · Last Updated: Feb 8, 2026
                        </p>
                    </section>

                    {/* Intro */}
                    <section className="bg-white/80 backdrop-blur rounded-3xl p-8 md:p-12 shadow-sm mb-16 space-y-6">
                        <p>
                            Welcome to <strong>Edere</strong>! We're committed to protecting
                            your privacy while helping you find safe dining options. This
                            Privacy Policy explains how we collect, use, and protect your
                            information when you use our website and services.
                        </p>

                        <p className="text-sm bg-[#055E2C]/10 border-l-4 border-[#055E2C] p-4 rounded-md">
                            <strong>Important:</strong> Your allergy and dietary information is
                            sensitive health data. We take extra steps to protect it, but no
                            system is 100% secure. Please review this policy carefully before
                            sharing your information with us.
                        </p>
                    </section>

                    {/* Content Sections */}
                    {[
                        {
                            title: "1. Information We Collect",
                            content: (
                                <>
                                    <h4 className="font-semibold mb-2">Information You Provide:</h4>
                                    <ul className="list-disc ml-6 space-y-1 mb-4">
                                        <li>Account information (name, email, password)</li>
                                        <li>Health & dietary information</li>
                                        <li>Profile details, favorites, saved collections</li>
                                        <li>Messages, feedback, and reviews</li>
                                    </ul>

                                    <h4 className="font-semibold mb-2">Information Collected Automatically:</h4>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>Usage data</li>
                                        <li>Device & browser information</li>
                                        <li>General location (city/region)</li>
                                        <li>Cookies (see Section 6)</li>
                                    </ul>
                                </>
                            ),
                        },
                        {
                            title: "2. How We Use Your Information",
                            content: (
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Provide and personalize our service</li>
                                    <li>Match you with safe dining options</li>
                                    <li>Communicate important updates</li>
                                    <li>Improve platform performance</li>
                                    <li>Share anonymized trends with restaurants</li>
                                    <li>Comply with legal obligations</li>
                                </ul>
                            ),
                        },
                        {
                            title: "3. How We Share Your Information",
                            content: (
                                <>
                                    <p className="font-semibold text-[#055E2C] mb-2">
                                        We do NOT sell your personal information.
                                    </p>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>Aggregated, anonymized restaurant insights</li>
                                        <li>Trusted service providers under strict contracts</li>
                                        <li>Legal or safety requirements</li>
                                        <li>Business transfers (if applicable)</li>
                                    </ul>
                                </>
                            ),
                        },
                        {
                            title: "4. Data Security",
                            content: (
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Encryption in transit and at rest</li>
                                    <li>Restricted employee access</li>
                                    <li>Regular security audits</li>
                                    <li>Secure cloud infrastructure</li>
                                </ul>
                            ),
                        },
                        {
                            title: "5. Your Rights & Choices",
                            content: (
                                <>
                                    <ul className="list-disc ml-6 space-y-1 mb-4">
                                        <li>Access your data</li>
                                        <li>Update or correct information</li>
                                        <li>Delete your account</li>
                                        <li>Opt-out of marketing</li>
                                        <li>Control cookies</li>
                                    </ul>
                                    <p className="text-sm">
                                        To exercise these rights, email{" "}
                                        <strong>support@edere.life</strong>. We respond within
                                        30 days.
                                    </p>
                                </>
                            ),
                        },
                        {
                            title: "6. Cookies & Tracking",
                            content: (
                                <>
                                    <p className="mb-3">
                                        Cookies are small files stored on your device to support
                                        functionality and analytics.
                                    </p>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>Essential cookies (required)</li>
                                        <li>Analytics cookies (optional)</li>
                                        <li>Marketing cookies (optional)</li>
                                    </ul>
                                </>
                            ),
                        },
                        {
                            title: "7. Children's Privacy",
                            content:
                                "Edere is not intended for children under 13. We do not knowingly collect data from children. Parents should supervise teens aged 13–17.",
                        },
                        {
                            title: "8. Data Retention",
                            content: (
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Active accounts: retained while active</li>
                                    <li>Inactive accounts: deleted after 3 years</li>
                                    <li>Deleted accounts: removed within 30 days</li>
                                </ul>
                            ),
                        },
                        {
                            title: "9. International Users",
                            content:
                                "Our servers are located in the United States. We comply with GDPR, CCPA, and applicable international data protection laws.",
                        },
                        {
                            title: "10. Third-Party Links",
                            content:
                                "We are not responsible for the privacy practices of external websites linked from Edere.",
                        },
                        {
                            title: "11. State-Specific Privacy Rights",
                            content:
                                "California, Virginia, Colorado, and Connecticut residents have additional rights under state laws.",
                        },
                        {
                            title: "12. Updates to This Policy",
                            content:
                                "We may update this policy periodically and will notify users of significant changes.",
                        },
                        {
                            title: "13. Contact Us",
                            content:
                                "Email support@edere.life. Most inquiries are answered within 5 business days.",
                        },
                    ].map((section) => (
                        <section
                            key={section.title}
                            className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10"
                        >
                            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">
                                {section.title}
                            </h2>
                            <div className="leading-relaxed text-zinc-700">
                                {section.content}
                            </div>
                        </section>
                    ))}

                    {/* Final Notice */}
                    <section className="bg-[#055E2C]/10 rounded-3xl p-8 mt-20 text-sm leading-relaxed">
                        <strong>Health Data Reminder:</strong> Your dietary and allergy data
                        is treated as sensitive health information. We apply enhanced
                        encryption, strict access controls, and data minimization practices.
                        Absolute security cannot be guaranteed.
                    </section>

                </div>
            </main>
        </div>
    );
}
