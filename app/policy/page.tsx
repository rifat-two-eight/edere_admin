import Navbar from "@/components/landing/Navbar";

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-[#F6F2EE] text-zinc-800">
            <Navbar />

            <main className="pt-32 pb-28">
                <div className="container mx-auto px-4 max-w-5xl">

                    {/* Header */}
                    <section className="text-center mb-20">
                        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6" style={{ fontFamily: 'athletics' }}>
                            Privacy Policy
                        </h1>
                        <p className="text-zinc-600">
                            Effective Date: Feb 8, 2026
                        </p>
                        <p className="text-zinc-600">
                            Last Updated: Feb 8, 2026
                        </p>
                    </section>

                    {/* Introduction */}
                    <section className="bg-white/80 backdrop-blur rounded-3xl p-8 md:p-12 shadow-sm mb-10 space-y-6">
                        <p>
                            Welcome to <strong>Edere</strong>! We're committed to protecting your privacy while helping you find safe dining options. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
                        </p>
                        <p className="text-sm bg-[#055E2C]/10 border-l-4 border-[#055E2C] p-4 rounded-md">
                            <strong>Important:</strong> Your allergy and dietary information is sensitive health data. We take extra steps to protect it, but no system is 100% secure. Please review this policy carefully before sharing your information with us.
                        </p>
                    </section>

                    {/* Section 1 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">1. Information We Collect</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Information You Provide to Us:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Account Information: Name, email address, password</li>
                                    <li>Health & Dietary Information: Food allergies, intolerances, dietary preferences, cross-contamination sensitivity</li>
                                    <li>Profile Details: Dietary restrictions, favorite restaurants, saved collections</li>
                                    <li>Communications: Messages you send us, feedback, and reviews</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Information We Collect Automatically:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Usage Data: How you use our website, features you access, time spent</li>
                                    <li>Device Information: Browser type, operating system, IP address</li>
                                    <li>Location Data: General location (city/region) to show nearby restaurants</li>
                                    <li>Cookies: Small files that help our website function (see Section 6)</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">2. How We Use Your Information</h2>
                        <div className="leading-relaxed text-zinc-700">
                            <p className="mb-3">We use your information to:</p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Provide Our Service: Match you with safe restaurant options based on your dietary needs</li>
                                <li>Personalize Your Experience: Show restaurants and dishes that fit your specific restrictions</li>
                                <li>Communicate With You: Send account updates, respond to questions, share important safety information</li>
                                <li>Improve Our Platform: Analyze usage patterns to enhance features and fix bugs</li>
                                <li>Restaurant Partnerships: Share aggregated, anonymized data trends with restaurant partners (never your personal health information)</li>
                                <li>Legal Compliance: Meet legal obligations and protect our rights</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">3. How We Share Your Information</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-4">
                            <p className="font-semibold text-[#055E2C]">We DO NOT sell your personal information.</p>
                            <p>We may share your information only in these limited situations:</p>
                            <div>
                                <h4 className="font-semibold mb-2">With Restaurant Partners:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>We share aggregated, anonymized trends (e.g., "30% of users search for gluten-free options")</li>
                                    <li>We NEVER share your individual allergy information or identity with restaurants</li>
                                    <li>Restaurants only see the data they need to serve you safely</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">With Service Providers:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Payment processors (for subscriptions)</li>
                                    <li>Email service providers (for communications)</li>
                                    <li>Analytics providers (to improve our service)</li>
                                    <li>Cloud hosting services (to store data securely)</li>
                                </ul>
                                <p className="mt-2">All service providers are contractually required to protect your data.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Legal Requirements:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>When required by law or legal process</li>
                                    <li>To protect safety or prevent fraud</li>
                                    <li>In connection with a business transfer (merger, acquisition)</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">4. Data Security</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-4">
                            <p>We implement industry-standard security measures to protect your information:</p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Encryption: Your health data is encrypted both in transit and at rest</li>
                                <li>Access Controls: Limited employee access to sensitive information</li>
                                <li>Regular Security Audits: Ongoing monitoring and testing</li>
                                <li>Secure Servers: Industry-standard hosting with robust protections</li>
                            </ul>
                            <p>However: No system is completely secure. You use our service at your own risk.</p>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">5. Your Rights & Choices</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-4">
                            <p>You have the right to:</p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Access Your Data: Request a copy of the information we have about you</li>
                                <li>Update Your Information: Change your profile and dietary settings anytime</li>
                                <li>Delete Your Account: Request permanent deletion of your account and data</li>
                                <li>Opt-Out of Marketing: Unsubscribe from promotional emails</li>
                                <li>Control Cookies: Manage cookie preferences in your browser settings</li>
                            </ul>
                            <p>To exercise these rights: Email us at <a href="mailto:support@edere.life" className="text-[#055E2C] underline underline-offset-2">support@edere.life</a></p>
                            <p>Response Time: We'll respond to requests within 30 days.</p>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">6. Cookies & Tracking</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">What Are Cookies?</h4>
                                <p>Small files stored on your device that help our website function and improve your experience.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Types of Cookies We Use:</h4>
                                <div className="space-y-3">
                                    <div>
                                        <p className="font-semibold">Essential Cookies (Required):</p>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>Login and session management</li>
                                            <li>Security and fraud prevention</li>
                                            <li>Core website functionality</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Analytics Cookies (Optional):</p>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>Usage statistics</li>
                                            <li>Performance metrics</li>
                                            <li>Feature popularity tracking</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-semibold">Marketing Cookies (Optional):</p>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>Personalized recommendations</li>
                                            <li>Email marketing effectiveness</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Managing Cookies:</h4>
                                <p>You can control cookie preferences in your browser settings. Note that disabling essential cookies may affect website functionality.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">7. Children's Privacy</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-3">
                            <p>Edere is not intended for children under 13. We do not knowingly collect information from children under 13. If you believe we have collected information from a child, please contact us immediately at <a href="mailto:privacy@edere.com" className="text-[#055E2C] underline underline-offset-2">privacy@edere.com</a>.</p>
                            <p>For Parents: If you allow your teenager (13-17) to use Edere, please supervise their use given the health-related nature of the service.</p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">8. Data Retention</h2>
                        <div className="leading-relaxed text-zinc-700">
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Active Accounts: We retain your information while your account is active</li>
                                <li>Inactive Accounts: Accounts inactive for 3 years will be automatically deleted</li>
                                <li>Deleted Accounts: Information is permanently deleted within 30 days of account deletion</li>
                                <li>Legal Requirements: Some data may be retained longer if required by law</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">9. International Users</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-3">
                            <p>Our servers are located in the United States. If you access Edere from outside the US, your information will be transferred to and processed in the United States.</p>
                            <p>For EU/UK Users: We comply with GDPR and use appropriate safeguards for international transfers.</p>
                            <p>For California Users: See Section 11 for additional CCPA rights.</p>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">10. Third-Party Links</h2>
                        <div className="leading-relaxed text-zinc-700">
                            <p>Our website may contain links to other websites (restaurant websites, social media, etc.). We are not responsible for the privacy practices of these external sites. Please review their privacy policies separately.</p>
                        </div>
                    </section>

                    {/* Section 11 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">11. State-Specific Privacy Rights</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">California Residents (CCPA):</h4>
                                <p className="mb-2">You have the right to:</p>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Know what personal information we collect</li>
                                    <li>Request deletion of your information</li>
                                    <li>Opt-out of sale of personal information (we don't sell data)</li>
                                    <li>Non-discrimination for exercising your rights</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Virginia, Colorado, Connecticut Residents:</h4>
                                <p>Similar rights apply under your state laws. Contact us to exercise these rights.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 12 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">12. Updates to This Policy</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-3">
                            <p>We may update this Privacy Policy periodically. We'll notify you of material changes by:</p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Posting the updated policy on our website</li>
                                <li>Sending email notification to registered users</li>
                                <li>In-app notification for significant changes</li>
                            </ul>
                            <p>Your continued use after changes indicates acceptance of the updated policy.</p>
                        </div>
                    </section>

                    {/* Section 13 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">13. Contact Us</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-2">
                            <p>Questions about privacy? We're here to help.</p>
                            <p>Email: <a href="mailto:support@edere.life" className="text-[#055E2C] underline underline-offset-2">support@edere.life</a></p>
                            <p>Response Time: We respond to most inquiries within 5 business days</p>
                            <p>Data Protection Concerns: If you believe your privacy rights have been violated, you may also file a complaint with your local data protection authority.</p>
                        </div>
                    </section>

                    {/* Important Health Data Reminder */}
                    <section className="bg-[#055E2C]/10 rounded-3xl p-8 mt-6 leading-relaxed space-y-3">
                        <p className="font-semibold text-zinc-900">Important Health Data Reminder</p>
                        <p>Your safety is our priority. Your allergy and dietary restriction information is considered sensitive health data under privacy laws. We implement additional security measures specifically for this information, including:</p>
                        <ul className="list-disc ml-6 space-y-1 text-zinc-700">
                            <li>Enhanced encryption protocols</li>
                            <li>Limited employee access</li>
                            <li>Regular security audits</li>
                            <li>Strict data minimization practices</li>
                        </ul>
                        <p>However, we cannot guarantee absolute security. Please consider carefully before sharing sensitive medical information online.</p>
                    </section>

                    {/* Acceptance Notice */}
                    <section className="bg-white rounded-3xl p-8 mt-6 text-sm leading-relaxed shadow-sm">
                        By using Edere, you acknowledge that you have read and understood this Privacy Policy.
                    </section>

                </div>
            </main>
        </div>
    );
}