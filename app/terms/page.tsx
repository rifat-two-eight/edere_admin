import Navbar from "@/components/landing/Navbar";

export default function TermsAndConditionsPage() {
    return (
        <div className="min-h-screen bg-[#F6F2EE] text-zinc-800">
            <Navbar />

            <main className="pt-32 pb-28">
                <div className="container mx-auto px-4 max-w-5xl">

                    {/* Header */}
                    <section className="text-center mb-20">
                        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6">
                            Terms & Conditions
                        </h1>
                        <p className="text-zinc-600">
                            Effective Date: Feb 8, 2026 · Last Updated: Feb 8, 2026
                        </p>
                    </section>

                    {/* Intro */}
                    <section className="bg-white/80 backdrop-blur rounded-3xl p-8 md:p-12 shadow-sm mb-16 space-y-6">
                        <p>
                            Welcome to <strong>Edere</strong>! By accessing or using the Edere
                            mobile application ("App"), website, or services ("Services"), you
                            agree to be bound by these Terms & Conditions ("Terms"). If you do
                            not agree to these Terms, do not use our Services.
                        </p>

                        <p className="text-sm bg-[#055E2C]/10 border-l-4 border-[#055E2C] p-4 rounded-md">
                            <strong>Important:</strong> Edere is not a medical device or
                            substitute for professional medical care. Always verify food safety
                            information directly with restaurant staff and consult your physician
                            before making dietary decisions.
                        </p>
                    </section>

                    {/* Critical Safety Warning */}
                    <section className="bg-red-50 border border-red-200 rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-red-700 mb-4">
                            ⚠️ Critical Medical & Safety Disclaimer
                        </h2>
                        <div className="leading-relaxed text-zinc-700 space-y-4">
                            <p className="font-semibold text-red-700">
                                EDERE IS NOT A MEDICAL DEVICE, MEDICAL SERVICE, OR SUBSTITUTE FOR
                                PROFESSIONAL MEDICAL CARE. THIS IS AN INFORMATIONAL PLATFORM ONLY.
                            </p>
                            <div>
                                <h4 className="font-semibold mb-2">Absolute Requirements for All Users:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>ALWAYS consult your physician before making any dietary decisions</li>
                                    <li>NEVER rely solely on Edere for food safety decisions</li>
                                    <li>ALWAYS inform restaurant staff about ALL allergies and dietary restrictions</li>
                                    <li>ALWAYS verify information independently with restaurant personnel before ordering</li>
                                    <li>ALWAYS carry emergency medications (such as epinephrine auto-injectors) if prescribed</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Critical Limitations:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>No guarantee of accuracy — information may be outdated, incomplete, or incorrect</li>
                                    <li>No guarantee of safety — we cannot guarantee the safety of any meal or restaurant</li>
                                    <li>Cross-contamination risks exist in ALL food service environments</li>
                                    <li>Human error — kitchen staff may make mistakes despite best intentions</li>
                                    <li>Information delays — menu updates may not be immediately reflected</li>
                                </ul>
                            </div>
                            <p className="text-sm bg-red-100 border-l-4 border-red-500 p-4 rounded-md font-semibold text-red-700">
                                🚨 Emergency Protocol: IF YOU EXPERIENCE ANY ALLERGIC REACTION SYMPTOMS — CALL 911 IMMEDIATELY. Do not wait to see if symptoms worsen.
                            </p>
                            <p className="text-sm text-zinc-600">
                                <strong>FDA Compliance Notice:</strong> Edere has not been evaluated by the
                                Food and Drug Administration. This platform is not intended to diagnose,
                                treat, cure, or prevent any disease or medical condition.
                            </p>
                        </div>
                    </section>

                    {/* Content Sections */}
                    {[
                        {
                            title: "1. Acceptance of Terms",
                            content: (
                                <p>
                                    By accessing or using the Edere App, website, or Services, you agree
                                    to be bound by these Terms. If you do not agree to these Terms, do
                                    not use our Services.
                                </p>
                            ),
                        },
                        {
                            title: "2. Description of Service",
                            content: (
                                <>
                                    <p className="mb-4">
                                        Edere is a restaurant discovery platform that provides information
                                        about food allergens, dietary restrictions, and menu modifications.
                                        We connect users with food allergies and dietary restrictions to
                                        restaurants that can safely accommodate their needs.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="font-semibold mb-2">Key Features for Consumers:</h4>
                                            <ul className="list-disc ml-6 space-y-1">
                                                <li>Restaurant discovery and menu information</li>
                                                <li>Allergen and dietary restriction filtering</li>
                                                <li>Chef-verified safety information</li>
                                                <li>Menu modification suggestions</li>
                                                <li>Restaurant reviews and ratings</li>
                                                <li>Favorites and collections management</li>
                                                <li>Optional premium subscription features</li>
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold mb-2">Key Features for Restaurant Partners:</h4>
                                            <ul className="list-disc ml-6 space-y-1">
                                                <li>Self-service restaurant portal for menu management</li>
                                                <li>Dashboard for updating allergen information</li>
                                                <li>Analytics on customer searches and profile views</li>
                                                <li>"Verified by Chef" certification status</li>
                                                <li>Hosted allergen menu services</li>
                                                <li>API integration capabilities</li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                            ),
                        },
                        {
                            title: "3. User Accounts & Registration",
                            content: (
                                <>
                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-2">Account Requirements:</h4>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>You must be at least 13 years old to use Edere</li>
                                            <li>Provide accurate, current information during registration</li>
                                            <li>Maintain the security of your account credentials</li>
                                            <li>Notify us immediately of any unauthorized use</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Account Responsibilities:</h4>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>You are responsible for all activities under your account</li>
                                            <li>Keep your dietary restrictions and allergy information current</li>
                                            <li>Report any safety concerns or inaccurate information</li>
                                        </ul>
                                    </div>
                                </>
                            ),
                        },
                        {
                            title: "4. Acceptable Use Policy",
                            content: (
                                <>
                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-2">You May:</h4>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>Use Edere for personal, non-commercial purposes</li>
                                            <li>Share restaurants and menu information with friends and family</li>
                                            <li>Provide honest reviews and feedback</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">You May Not:</h4>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>Post false, misleading, or defamatory content</li>
                                            <li>Interfere with the App's operation or security</li>
                                            <li>Use automated systems to access our Services</li>
                                            <li>Violate any applicable laws or regulations</li>
                                            <li>Harass other users or restaurant staff</li>
                                            <li>Attempt to gain unauthorized access to our systems</li>
                                        </ul>
                                    </div>
                                </>
                            ),
                        },
                        {
                            title: "5. Content & Information",
                            content: (
                                <>
                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-2">Restaurant Information:</h4>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>Menu and allergen data is provided by restaurants and third parties</li>
                                            <li>We strive for accuracy but cannot guarantee completeness</li>
                                            <li>Information may become outdated between updates</li>
                                            <li>Restaurants may change practices without notice</li>
                                        </ul>
                                    </div>
                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-2">User-Generated Content:</h4>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>You retain ownership of content you submit</li>
                                            <li>You grant us license to use, display, and distribute your content</li>
                                            <li>Content must be truthful and comply with our community guidelines</li>
                                            <li>We may remove content that violates these Terms</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Intellectual Property:</h4>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>Edere's technology, design, and content are protected by intellectual property laws</li>
                                            <li>Our trademarks and logos may not be used without permission</li>
                                            <li>You may not copy, modify, or distribute our proprietary content</li>
                                        </ul>
                                    </div>
                                </>
                            ),
                        },
                        {
                            title: "6. Privacy & Data Protection",
                            content: (
                                <p>
                                    Your privacy is important to us. Please review our{" "}
                                    <a href="/privacy" className="text-[#055E2C] underline underline-offset-2">
                                        Privacy Policy
                                    </a>
                                    , which explains how we collect, use, and protect your information. By using
                                    Edere, you consent to our data practices as described in our Privacy Policy.
                                </p>
                            ),
                        },
                        {
                            title: "7. Pricing & Payment Terms",
                            content: (
                                <>
                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-2">Consumer Services — Free Tier:</h4>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>Basic restaurant discovery features are provided at no cost</li>
                                            <li>Access to chef-verified restaurant information</li>
                                            <li>Allergen filtering and search capabilities</li>
                                            <li>Favorites and collections management</li>
                                        </ul>
                                    </div>
                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-2">Premium Subscriptions (If Applicable):</h4>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>Premium features may be offered via optional paid subscription</li>
                                            <li>Pricing will be clearly displayed before purchase</li>
                                            <li>Subscriptions automatically renew unless cancelled</li>
                                            <li>Cancellations take effect at the end of the current billing period</li>
                                            <li>No refunds for partial subscription periods</li>
                                        </ul>
                                    </div>
                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-2">Restaurant Services:</h4>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>Free basic listing, profile creation, and basic analytics</li>
                                            <li>Hosted Allergen Menu Service: Starting at $50/month</li>
                                            <li>API Integration for Chains: Custom pricing</li>
                                            <li>Enterprise Solutions: Contact us for pricing</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">General Payment Terms:</h4>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>All payments processed through secure third-party processors</li>
                                            <li>Prices are subject to change with 30 days notice</li>
                                            <li>Late payments may result in service suspension</li>
                                            <li>You are responsible for all applicable taxes</li>
                                        </ul>
                                    </div>
                                </>
                            ),
                        },
                        {
                            title: "8. Disclaimers & Limitation of Liability",
                            content: (
                                <>
                                    <p className="font-semibold text-zinc-800 mb-3">
                                        TO THE MAXIMUM EXTENT PERMITTED BY LAW, EDERE PROVIDES ALL SERVICES "AS IS"
                                        AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND.
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-2">Edere is NOT liable for:</h4>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>Allergic reactions, anaphylaxis, or any adverse health events</li>
                                            <li>Inaccurate, incomplete, or outdated restaurant information</li>
                                            <li>Errors in allergen or ingredient data, including AI processing errors</li>
                                            <li>Technical failures or app malfunctions</li>
                                            <li>AI system errors, biases, or misinterpretations</li>
                                            <li>Direct, indirect, incidental, special, or consequential damages</li>
                                        </ul>
                                    </div>
                                    <p className="text-sm bg-zinc-100 border-l-4 border-zinc-400 p-4 rounded-md">
                                        <strong>Maximum Liability Cap:</strong> Edere's total liability shall not exceed
                                        the greater of (A) $100, or (B) the amount you paid to Edere in the twelve
                                        months preceding the claim.
                                    </p>
                                </>
                            ),
                        },
                        {
                            title: "9. Restaurant Partnerships & Third-Party Information",
                            content: (
                                <>
                                    <p className="font-semibold text-[#055E2C] mb-3">
                                        🤖 Critical Disclaimer Regarding AI-Processed Restaurant Information
                                    </p>
                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-2">How Our 5-Stage Verification Works:</h4>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>Stage 1: AI scrapes publicly available menu information</li>
                                            <li>Stage 2: AI analyzes and categorizes menu items for allergen content</li>
                                            <li>Stage 3: Edere contacts restaurants to review AI-processed data</li>
                                            <li>Stage 4: Restaurant staff review and confirm or correct information</li>
                                            <li>Stage 5: Confirmed information receives "Verified by Chef" status</li>
                                        </ul>
                                    </div>
                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-2">Limitations of Verification:</h4>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>Restaurant participation in verification is voluntary</li>
                                            <li>AI may misinterpret or miss important allergen information</li>
                                            <li>Verification does not guarantee accuracy or current status</li>
                                            <li>Kitchen practices may change after verification without notice</li>
                                            <li>Staff turnover may affect consistency of allergen knowledge</li>
                                        </ul>
                                    </div>
                                    <p className="text-sm bg-[#055E2C]/10 border-l-4 border-[#055E2C] p-4 rounded-md">
                                        <strong>Your Responsibility:</strong> Always independently verify all safety
                                        information with restaurant staff. Do not rely solely on AI-processed
                                        information for dining decisions.
                                    </p>
                                </>
                            ),
                        },
                        {
                            title: "10. Third-Party Services",
                            content: (
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>We may integrate with mapping, payment, and review services</li>
                                    <li>Third-party terms and policies apply to their services</li>
                                    <li>We are not responsible for third-party service failures</li>
                                    <li>Links to external websites are provided for convenience only</li>
                                </ul>
                            ),
                        },
                        {
                            title: "11. Dispute Resolution & Legal Compliance",
                            content: (
                                <>
                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-2">Mandatory Binding Arbitration:</h4>
                                        <p className="mb-2">
                                            All disputes arising out of or relating to these Terms shall be resolved
                                            exclusively through binding arbitration administered by the American
                                            Arbitration Association (AAA), conducted in New York, New York.
                                        </p>
                                    </div>
                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-2">Class Action Waiver:</h4>
                                        <p>
                                            You expressly waive any right to participate in class action lawsuits or
                                            seek relief on behalf of others.
                                        </p>
                                    </div>
                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-2">Statute of Limitations:</h4>
                                        <p>
                                            Any claims must be brought within one (1) year of the date the cause of
                                            action arose, or such claim shall be permanently barred.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Regulatory Compliance:</h4>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>GDPR compliance for European users</li>
                                            <li>CCPA compliance for California residents</li>
                                            <li>PIPEDA compliance for Canadian users</li>
                                            <li>State-specific consumer protection laws apply where applicable</li>
                                        </ul>
                                    </div>
                                </>
                            ),
                        },
                        {
                            title: "12. Modifications to Terms",
                            content: (
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>We may update these Terms periodically</li>
                                    <li>Material changes will be communicated 30 days in advance</li>
                                    <li>Continued use after changes constitutes acceptance</li>
                                    <li>Previous versions will be archived for reference</li>
                                </ul>
                            ),
                        },
                        {
                            title: "13. Termination",
                            content: (
                                <>
                                    <div className="mb-4">
                                        <h4 className="font-semibold mb-2">Account Termination:</h4>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>You may delete your account at any time</li>
                                            <li>We may suspend or terminate accounts for Terms violations</li>
                                            <li>Termination does not excuse payment obligations for services already rendered</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-2">Effect of Termination:</h4>
                                        <ul className="list-disc ml-6 space-y-1">
                                            <li>Access to Services will be immediately revoked</li>
                                            <li>User data will be handled according to our Privacy Policy</li>
                                            <li>Subscription fees are non-refundable upon termination</li>
                                        </ul>
                                    </div>
                                </>
                            ),
                        },
                        {
                            title: "14. General Provisions",
                            content: (
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>
                                        <strong>Entire Agreement:</strong> These Terms, together with our Privacy
                                        Policy, constitute the complete agreement between you and Edere.
                                    </li>
                                    <li>
                                        <strong>Severability:</strong> If any provision is found unenforceable, the
                                        remaining Terms continue in full force.
                                    </li>
                                    <li>
                                        <strong>Assignment:</strong> You may not assign your rights under these Terms.
                                        We may assign our rights with notice.
                                    </li>
                                    <li>
                                        <strong>Governing Law:</strong> These Terms are governed by New York State law,
                                        excluding conflict of law principles.
                                    </li>
                                </ul>
                            ),
                        },
                        {
                            title: "15. Contact Us",
                            content: (
                                <>
                                    <p className="mb-2">For questions about these Terms, contact us at:</p>
                                    <ul className="list-disc ml-6 space-y-1">
                                        <li>
                                            📧 Email:{" "}
                                            <a
                                                href="mailto:support@edere.life"
                                                className="text-[#055E2C] underline underline-offset-2"
                                            >
                                                support@edere.life
                                            </a>
                                        </li>
                                        <li>📍 Address: 145 E 27th St, 7B, New York NY 10016</li>
                                    </ul>
                                    <p className="text-sm mt-3 text-zinc-500">
                                        Most inquiries are answered within 5 business days.
                                    </p>
                                </>
                            ),
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

                    {/* Final Safety Notice */}
                    <section className="bg-red-50 border border-red-200 rounded-3xl p-8 mt-20 text-sm leading-relaxed space-y-2">
                        <p className="font-bold text-red-700 text-base">🚨 Final Critical Safety Reminders</p>
                        <ul className="list-disc ml-6 space-y-1 text-red-800">
                            <li>Life-threatening allergic reactions can occur without warning</li>
                            <li>Call 911 immediately if you experience any allergic reaction symptoms</li>
                            <li>Edere is an informational tool only — not a medical device or safety guarantee</li>
                            <li>Always consult your healthcare provider for medical advice</li>
                            <li>Always verify safety information directly with restaurant staff</li>
                        </ul>
                    </section>

                    {/* Acceptance Notice */}
                    <section className="bg-[#055E2C]/10 rounded-3xl p-8 mt-6 text-sm leading-relaxed">
                        <strong>By using Edere</strong>, you acknowledge that you have read, understood, and
                        agree to these Terms & Conditions, including all disclaimers and limitations of
                        liability. You further acknowledge that you understand the risks associated with food
                        allergies and will not rely solely on Edere for safety decisions.
                    </section>

                </div>
            </main>
        </div>
    );
}