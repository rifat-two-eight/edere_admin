import Navbar from "@/components/landing/Navbar";

export default function TermsAndConditionsPage() {
    return (
        <div className="min-h-screen bg-[#F6F2EE] text-zinc-800">
            <Navbar />

            <main className="pt-32 pb-28">
                <div className="container mx-auto px-4 max-w-5xl">

                    {/* Header */}
                    <section className="text-center mb-20">
                        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6" style={{ fontFamily: 'athletics' }}>
                            Terms & Conditions
                        </h1>
                        <p className="text-zinc-600">
                            Effective Date: February 8, 2026
                        </p>
                        <p className="text-zinc-600">
                            Last Updated: February 8, 2026
                        </p>
                    </section>

                    {/* Section 1 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">1. ACCEPTANCE OF TERMS</h2>
                        <div className="leading-relaxed text-zinc-700">
                            <p>
                                By accessing or using the Edere mobile application ("App"), website, or services ("Services"), you agree to be bound by these Terms & Conditions ("Terms"). If you do not agree to these Terms, do not use our Services.
                            </p>
                        </div>
                    </section>

                    {/* Section 2 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">2. DESCRIPTION OF SERVICE</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-4">
                            <p>
                                Edere is a restaurant discovery platform that provides information about food allergens, dietary restrictions, and menu modifications. We connect users with food allergies and dietary restrictions to restaurants that can safely accommodate their needs.
                            </p>
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
                                    <li>Dashboard for updating allergen information and menus</li>
                                    <li>Analytics on customer searches and profile views</li>
                                    <li>"Verified by Chef" certification status</li>
                                    <li>Hosted allergen menu services</li>
                                    <li>API integration capabilities for chains and enterprise partners</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section className="bg-red-50 border border-red-200 rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-red-700 mb-4">3. CRITICAL MEDICAL AND SAFETY DISCLAIMER</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-4">
                            <p className="font-bold text-red-700">URGENT NOTICE ⚠️</p>
                            <p className="font-semibold text-red-700">
                                EDERE IS NOT A MEDICAL DEVICE, MEDICAL SERVICE, OR SUBSTITUTE FOR PROFESSIONAL MEDICAL CARE. THIS IS AN INFORMATIONAL PLATFORM ONLY.
                            </p>
                            <div>
                                <h4 className="font-semibold mb-2">ABSOLUTE REQUIREMENTS FOR ALL USERS:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>ALWAYS CONSULT YOUR PHYSICIAN before making any dietary decisions</li>
                                    <li>NEVER RELY SOLELY ON EDERE for food safety decisions</li>
                                    <li>ALWAYS INFORM RESTAURANT STAFF about ALL allergies and dietary restrictions</li>
                                    <li>ALWAYS VERIFY INFORMATION independently with restaurant personnel before ordering</li>
                                    <li>ALWAYS CARRY EMERGENCY MEDICATIONS (such as epinephrine auto-injectors) if prescribed by your doctor</li>
                                    <li>ALWAYS USE YOUR OWN MEDICAL JUDGMENT - Edere cannot replace your knowledge of your condition</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">CRITICAL LIMITATIONS - READ CAREFULLY:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>NO GUARANTEE OF ACCURACY: Information may be outdated, incomplete, or incorrect</li>
                                    <li>NO GUARANTEE OF SAFETY: We cannot guarantee the safety of any meal, ingredient, or restaurant</li>
                                    <li>NO MEDICAL SUPERVISION: Restaurant practices can change without notice</li>
                                    <li>CROSS-CONTAMINATION RISKS: Exist in ALL food service environments regardless of precautions</li>
                                    <li>HUMAN ERROR: Kitchen staff and servers may make mistakes despite best intentions</li>
                                    <li>INFORMATION DELAYS: Updates to menus and practices may not be immediately reflected</li>
                                </ul>
                            </div>
                            <p className="font-semibold text-red-700">EMERGENCY PROTOCOL 🚨</p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>IF YOU EXPERIENCE ANY ALLERGIC REACTION SYMPTOMS: CALL 911 IMMEDIATELY</li>
                                <li>Do not wait to see if symptoms worsen</li>
                                <li>Do not rely on Edere for emergency medical guidance</li>
                                <li>Seek immediate professional medical attention</li>
                            </ul>
                            <p className="font-semibold">FDA COMPLIANCE NOTICE:</p>
                            <p>
                                Edere has not been evaluated by the Food and Drug Administration. This platform is not intended to diagnose, treat, cure, or prevent any disease or medical condition. All health-related decisions should be made in consultation with qualified healthcare providers.
                            </p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">4. USER ACCOUNTS AND REGISTRATION</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-4">
                            <div>
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
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">5. ACCEPTABLE USE POLICY</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-4">
                            <div>
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
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">6. CONTENT AND INFORMATION</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Restaurant Information:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Menu and allergen data is provided by restaurants and third parties</li>
                                    <li>We strive for accuracy but cannot guarantee completeness</li>
                                    <li>Information may become outdated between updates</li>
                                    <li>Restaurants may change practices without notice</li>
                                </ul>
                            </div>
                            <div>
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
                        </div>
                    </section>

                    {/* Section 7 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">7. PRIVACY AND DATA PROTECTION</h2>
                        <div className="leading-relaxed text-zinc-700">
                            <p>
                                Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and protect your information. By using Edere, you consent to our data practices as described in our Privacy Policy.
                            </p>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">8. PRICING AND PAYMENT TERMS</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-4">
                            <h4 className="font-semibold">CONSUMER SERVICES</h4>
                            <div>
                                <h4 className="font-semibold mb-2">Free Tier:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Basic restaurant discovery features are provided at no cost</li>
                                    <li>Access to chef-verified restaurant information</li>
                                    <li>Allergen filtering and search capabilities</li>
                                    <li>Favorites and collections management</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Premium Subscriptions (If Applicable):</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Premium features may be offered via optional paid subscription</li>
                                    <li>Current or future pricing will be clearly displayed before purchase</li>
                                    <li>Subscriptions automatically renew unless cancelled</li>
                                    <li>Cancellations take effect at the end of the current billing period</li>
                                    <li>No refunds for partial subscription periods</li>
                                </ul>
                            </div>
                            <h4 className="font-semibold">RESTAURANT SERVICES</h4>
                            <div>
                                <h4 className="font-semibold mb-2">Free Basic Listing:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Restaurant profile creation and basic listing</li>
                                    <li>Ability to claim and verify restaurant information</li>
                                    <li>Access to basic analytics</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Paid Services for Restaurants:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Hosted Allergen Menu Service: Starting at $50/month</li>
                                    <li>API Integration for Chains: Custom pricing based on scale and features</li>
                                    <li>Enterprise Solutions: Contact for pricing</li>
                                    <li>All restaurant service pricing will be provided via direct communication or service agreements</li>
                                </ul>
                            </div>
                            <h4 className="font-semibold">GENERAL PAYMENT TERMS</h4>
                            <div>
                                <h4 className="font-semibold mb-2">Payment Processing:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>All payments processed through secure third-party payment processors</li>
                                    <li>You authorize us to charge your payment method for applicable fees</li>
                                    <li>Prices are subject to change with 30 days notice</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Late Payments and Delinquent Accounts:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Late payments may result in service suspension</li>
                                    <li>Delinquent accounts may be subject to collection efforts</li>
                                    <li>You remain responsible for all fees incurred</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Taxes:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Prices do not include applicable taxes</li>
                                    <li>You are responsible for all sales, use, and other taxes</li>
                                </ul>
                            </div>
                            <h4 className="font-semibold">FUTURE PRICING CHANGES</h4>
                            <div>
                                <h4 className="font-semibold mb-2">Service Model Evolution:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>We reserve the right to introduce new paid features or modify pricing</li>
                                    <li>Material changes to pricing will be communicated 30 days in advance</li>
                                    <li>Continued use after pricing changes constitutes acceptance</li>
                                    <li>Existing subscribers will be grandfathered at current rates for their subscription term</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 9 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">9. DISCLAIMERS AND COMPLETE LIMITATION OF LIABILITY</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-4">
                            <h4 className="font-semibold">ABSOLUTE DISCLAIMER OF WARRANTIES</h4>
                            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, EDERE PROVIDES ALL SERVICES "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:</p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
                                <li>Warranties that services will be uninterrupted, secure, or error-free</li>
                                <li>Warranties regarding the accuracy, reliability, or completeness of information</li>
                                <li>Warranties that any information will meet your health or safety needs</li>
                            </ul>
                            <h4 className="font-semibold">COMPLETE LIMITATION OF LIABILITY</h4>
                            <p>UNDER NO CIRCUMSTANCES SHALL EDERE, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR:</p>
                            <div>
                                <h4 className="font-semibold mb-2">Health-Related Incidents:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Allergic reactions, anaphylaxis, or any adverse health events</li>
                                    <li>Food poisoning, foodborne illness, or contamination</li>
                                    <li>Injury, illness, or death related to restaurant visits</li>
                                    <li>Medication reactions or medical complications</li>
                                    <li>Failure to receive proper medical care</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Information-Related Damages:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Inaccurate, incomplete, or outdated restaurant information</li>
                                    <li>Errors in allergen or ingredient data, including AI processing and restaurant verification errors</li>
                                    <li>Miscommunication with restaurant staff during verification</li>
                                    <li>Changes in restaurant practices or menu items after verification</li>
                                    <li>Technical failures or app malfunctions</li>
                                    <li>AI system errors, biases, or misinterpretations</li>
                                    <li>Restaurant staff errors, oversights, or incomplete knowledge during verification</li>
                                    <li>Automated data collection inaccuracies</li>
                                    <li>Failure of verification processes or restaurant non-participation</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Financial and Other Damages:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Direct, indirect, incidental, special, consequential, or punitive damages</li>
                                    <li>Lost profits, lost data, or business interruption</li>
                                    <li>Costs of substitute services or products</li>
                                    <li>Legal fees or court costs</li>
                                    <li>Any damages exceeding the amount paid for services in the past 12 months</li>
                                </ul>
                            </div>
                            <h4 className="font-semibold">MAXIMUM LIABILITY CAP</h4>
                            <p>IN NO EVENT SHALL EDERE'S TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES, AND CAUSES OF ACTION EXCEED THE GREATER OF: (A) ONE HUNDRED DOLLARS ($100), OR (B) THE AMOUNT YOU PAID TO EDERE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.</p>
                            <h4 className="font-semibold">ACKNOWLEDGMENT OF RISK</h4>
                            <p>BY USING EDERE, YOU EXPRESSLY ACKNOWLEDGE AND AGREE THAT:</p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>You assume all risks associated with dining decisions and restaurant visits</li>
                                <li>You understand that food allergies can be life-threatening</li>
                                <li>You will not rely solely on Edere for health or safety decisions</li>
                                <li>You will seek appropriate medical care when needed</li>
                                <li>You release Edere from any liability related to your use of the service</li>
                            </ul>
                            <h4 className="font-semibold">Indemnification</h4>
                            <p>YOU AGREE TO INDEMNIFY, DEFEND, AND HOLD HARMLESS EDERE AND ITS AFFILIATES FROM ANY CLAIMS, DAMAGES, LOSSES, OR EXPENSES (INCLUDING REASONABLE ATTORNEY'S FEES) ARISING FROM:</p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Your use of the Edere platform</li>
                                <li>Your violation of these Terms</li>
                                <li>Your dining decisions or restaurant visits</li>
                                <li>Any content you submit to the platform</li>
                                <li>Any breach of your representations and warranties</li>
                            </ul>
                            <h4 className="font-semibold">STATUTORY COMPLIANCE</h4>
                            <p>These limitations apply to the fullest extent permitted by applicable law. Some jurisdictions do not allow certain warranty disclaimers or liability limitations, so some of these provisions may not apply to you. However, in such cases, liability shall be limited to the minimum extent permitted by law.</p>
                        </div>
                    </section>

                    {/* Section 10 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">10. RESTAURANT PARTNERSHIPS AND THIRD-PARTY INFORMATION</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-4">
                            <p className="font-semibold">🤖 CRITICAL DISCLAIMER REGARDING RESTAURANT INFORMATION</p>
                            <p className="font-semibold">EDERE USES AUTOMATED AI SYSTEMS TO COLLECT AND PROCESS RESTAURANT INFORMATION. THIS CREATES ADDITIONAL RISKS AND LIMITATIONS:</p>
                            <div>
                                <h4 className="font-semibold mb-2">AI-Generated Content Risks:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>AI systems may misinterpret menu items, ingredients, or allergen information</li>
                                    <li>Automated scraping may capture outdated, incorrect, or incomplete data</li>
                                    <li>AI analysis of allergen content may contain errors or omissions</li>
                                    <li>Machine learning algorithms are not perfect and can make mistakes</li>
                                    <li>AI cannot understand context, sarcasm, or nuanced menu descriptions</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Data Collection Limitations:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Scraped information may not reflect current menu items or prices</li>
                                    <li>Restaurant websites may contain outdated or seasonal information</li>
                                    <li>AI systems cannot access verbal modifications or special preparation methods</li>
                                    <li>Some menu information may be missed or incorrectly categorized</li>
                                </ul>
                            </div>
                            <p className="font-semibold">EDERE DOES NOT VERIFY, ENDORSE, OR GUARANTEE THE ACCURACY OF ANY RESTAURANT INFORMATION</p>
                            <p>This includes, but is not limited to:</p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>AI-processed menu items, ingredients, or allergen information</li>
                                <li>Food preparation methods or kitchen practices</li>
                                <li>Staff training on allergen protocols</li>
                                <li>Cross-contamination prevention measures</li>
                                <li>Compliance with food safety regulations</li>
                                <li>Accuracy of automated data collection processes</li>
                            </ul>
                            <h4 className="font-semibold">RESTAURANT PARTNER RESPONSIBILITIES</h4>
                            <p>RESTAURANTS ARE SOLELY RESPONSIBLE FOR:</p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Providing accurate menu and allergen information</li>
                                <li>Maintaining current safety practices and certifications</li>
                                <li>Training staff on allergen protocols</li>
                                <li>Complying with all applicable food safety regulations</li>
                                <li>Updating information when practices change</li>
                                <li>Communicating directly with customers about safety concerns</li>
                            </ul>
                            <h4 className="font-semibold">VERIFICATION LIMITATIONS</h4>
                            <p>REGARDING "VERIFIED BY CHEF," "RESTAURANT VERIFIED," OR "CONFIRMED" INFORMATION:</p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Initial data collection is performed by automated AI systems</li>
                                <li>Restaurants are contacted to review AI-processed information about their menus</li>
                                <li>Verification depends entirely on restaurant staff participation and accuracy</li>
                                <li>Restaurant staff may not be allergen specialists or have complete ingredient knowledge</li>
                                <li>Does NOT guarantee accuracy, completeness, or current status of information</li>
                                <li>Does NOT constitute a medical or safety certification by Edere or the restaurant</li>
                                <li>Information may become outdated immediately after restaurant confirmation</li>
                                <li>Edere cannot monitor ongoing compliance with verified practices</li>
                                <li>Kitchen practices, recipes, or suppliers may change without notice</li>
                                <li>Staff turnover may affect accuracy of future allergen information</li>
                                <li>Verification indicates restaurant review occurred, not accuracy guarantee</li>
                            </ul>
                            <h4 className="font-semibold">AUTOMATED DATA COLLECTION AND VERIFICATION PROCESS</h4>
                            <p>Our 5-Stage Process:</p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Stage 1: Edere uses artificial intelligence to scrape publicly available menu information</li>
                                <li>Stage 2: AI systems analyze and categorize menu items for potential allergen content</li>
                                <li>Stage 3: Edere contacts restaurants to review AI-processed data about their menus</li>
                                <li>Stage 4: Restaurant staff (chefs/managers) review and confirm or correct the information</li>
                                <li>Stage 5: Confirmed information receives "Verified by Chef" or "Restaurant Verified" status</li>
                            </ul>
                            <h4 className="font-semibold">LIMITATIONS OF VERIFICATION PROCESS</h4>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Restaurant participation in verification is voluntary and not guaranteed</li>
                                <li>Some restaurants may not respond to verification requests</li>
                                <li>Restaurant staff may not have complete allergen knowledge</li>
                                <li>Verification depends on restaurant staff accuracy and diligence</li>
                                <li>Kitchen practices may change after verification without notice to Edere</li>
                                <li>Staff turnover may affect consistency of allergen knowledge</li>
                                <li>Time constraints may limit thoroughness of restaurant review</li>
                                <li>Restaurants may verify some items but not others</li>
                            </ul>
                            <h4 className="font-semibold">THIRD-PARTY INFORMATION SOURCES AND AI PROCESSING</h4>
                            <p>EDERE MAY DISPLAY INFORMATION FROM VARIOUS SOURCES, INCLUDING:</p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Restaurant websites and social media (collected via AI scraping)</li>
                                <li>Third-party menu platforms and delivery services</li>
                                <li>Government health inspection data</li>
                                <li>User-generated reviews and ratings</li>
                                <li>Public menu databases and industry publications</li>
                                <li>AI-generated analysis and categorization of collected data</li>
                            </ul>
                            <h4 className="font-semibold">AI AND RESTAURANT VERIFICATION DISCLAIMER</h4>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Artificial intelligence systems process and analyze collected information</li>
                                <li>Restaurants review AI-processed data but may not catch all errors</li>
                                <li>AI may misinterpret, miscategorize, or miss important allergen information</li>
                                <li>Machine learning algorithms are subject to bias and error</li>
                                <li>Restaurant staff verification depends on their knowledge and attention to detail</li>
                                <li>Automated systems cannot replace direct communication with restaurant personnel</li>
                                <li>Restaurant verification cannot eliminate underlying AI processing limitations</li>
                                <li>AI analysis may not account for preparation methods or cross-contamination risks</li>
                                <li>Combined AI and restaurant verification process still subject to errors and omissions</li>
                            </ul>
                            <h4 className="font-semibold">EDERE DISCLAIMS ALL LIABILITY FOR:</h4>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Errors in AI processing or restaurant verification</li>
                                <li>Inaccuracies in automated data collection or restaurant review</li>
                                <li>Third-party information and AI/restaurant interpretation thereof</li>
                                <li>Timeliness, completeness, or accuracy of scraped or restaurant-verified data</li>
                                <li>Misrepresentation of menu items or allergen content by AI systems or restaurant staff</li>
                                <li>Failures in the verification process or restaurant non-participation</li>
                                <li>Changes in restaurant practices after verification</li>
                            </ul>
                            <h4 className="font-semibold">RESTAURANT RELATIONSHIP CLARIFICATION</h4>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Edere is an independent platform and not affiliated with any restaurant</li>
                                <li>Restaurant listings do NOT constitute partnerships, endorsements, or guarantees</li>
                                <li>Restaurants may be removed from the platform at any time</li>
                                <li>Edere does NOT control restaurant operations, policies, or practices</li>
                            </ul>
                            <h4 className="font-semibold">USER RESPONSIBILITY FOR VERIFICATION</h4>
                            <p>YOU ACKNOWLEDGE AND AGREE THAT:</p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>All information on Edere is for reference purposes only and may contain AI-generated errors</li>
                                <li>You will independently verify all safety information with restaurant staff</li>
                                <li>You will not rely solely on AI-processed information for dining decisions</li>
                                <li>You understand that automated systems can make mistakes</li>
                                <li>You recognize that restaurant practices can change without notice to Edere</li>
                                <li>AI analysis cannot replace direct communication with restaurant personnel</li>
                                <li>You assume all risks associated with relying on automated data collection</li>
                            </ul>
                        </div>
                    </section>

                    {/* Section 11 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">11. THIRD-PARTY SERVICES</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Integration Partners:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>We may integrate with mapping, payment, and review services</li>
                                    <li>Third-party terms and policies apply to their services</li>
                                    <li>We are not responsible for third-party service failures</li>
                                    <li>Links to external websites are provided for convenience only</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 12 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">12. DISPUTE RESOLUTION AND LEGAL COMPLIANCE</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-4">
                            <h4 className="font-semibold">MANDATORY BINDING ARBITRATION</h4>
                            <p>ALL DISPUTES, CLAIMS, OR CONTROVERSIES ARISING OUT OF OR RELATING TO THESE TERMS, YOUR USE OF EDERE, OR ANY HEALTH-RELATED INCIDENTS SHALL BE RESOLVED EXCLUSIVELY THROUGH BINDING ARBITRATION.</p>
                            <div>
                                <h4 className="font-semibold mb-2">Arbitration Process:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Administered by the American Arbitration Association (AAA)</li>
                                    <li>Conducted under AAA's Consumer Arbitration Rules</li>
                                    <li>Single arbitrator appointed according to AAA rules</li>
                                    <li>Arbitration held in New York, New York</li>
                                    <li>Governed by the Federal Arbitration Act</li>
                                </ul>
                            </div>
                            <h4 className="font-semibold">CLASS ACTION WAIVER</h4>
                            <p>YOU EXPRESSLY WAIVE ANY RIGHT TO:</p>
                            <ul className="list-disc ml-6 space-y-1">
                                <li>Participate in class action lawsuits</li>
                                <li>Join consolidated proceedings with other users</li>
                                <li>Seek relief on behalf of others</li>
                                <li>Act as a representative in any legal proceeding</li>
                            </ul>
                            <h4 className="font-semibold">STATUTE OF LIMITATIONS</h4>
                            <p>ANY CLAIMS MUST BE BROUGHT WITHIN ONE (1) YEAR OF THE DATE THE CAUSE OF ACTION AROSE, OR SUCH CLAIM SHALL BE PERMANENTLY BARRED.</p>
                            <h4 className="font-semibold">REGULATORY COMPLIANCE</h4>
                            <div>
                                <h4 className="font-semibold mb-2">State Consumer Protection Laws:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>These Terms comply with applicable state consumer protection statutes</li>
                                    <li>Where state law provides greater consumer protections, such laws shall apply</li>
                                    <li>Users in states with specific disclosure requirements are hereby notified of all material terms</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Healthcare and Medical Device Regulations:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>Edere is not a medical device under FDA regulations</li>
                                    <li>Information provided is for general informational purposes only</li>
                                    <li>Users should consult healthcare providers for medical advice</li>
                                    <li>No therapeutic claims are made regarding the platform</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">International Privacy Law Compliance:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>GDPR compliance for European users</li>
                                    <li>CCPA compliance for California residents</li>
                                    <li>PIPEDA compliance for Canadian users</li>
                                    <li>Additional disclosures provided in Privacy Policy</li>
                                </ul>
                            </div>
                            <h4 className="font-semibold">GOVERNING LAW AND JURISDICTION</h4>
                            <p>These Terms are governed by the laws of the State of New York, without regard to conflict of law principles. To the extent arbitration is not applicable, exclusive jurisdiction lies with the courts of New York County, New York.</p>
                        </div>
                    </section>

                    {/* Section 13 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">13. MODIFICATIONS TO TERMS</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Changes to Terms:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>We may update these Terms periodically</li>
                                    <li>Material changes will be communicated 30 days in advance</li>
                                    <li>Continued use after changes constitutes acceptance</li>
                                    <li>Previous versions will be archived for reference</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Section 14 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">14. TERMINATION</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Account Termination:</h4>
                                <ul className="list-disc ml-6 space-y-1">
                                    <li>You may delete your account at any time</li>
                                    <li>We may suspend or terminate accounts for Terms violations</li>
                                    <li>Termination does not excuse payment obligations for services already rendered</li>
                                    <li>Certain provisions survive termination</li>
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
                        </div>
                    </section>

                    {/* Section 15 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">15. GENERAL PROVISIONS</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-4">
                            <div>
                                <h4 className="font-semibold mb-2">Entire Agreement:</h4>
                                <p>These Terms, together with our Privacy Policy, constitute the complete agreement between you and Edere.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Severability:</h4>
                                <p>If any provision is found unenforceable, the remaining Terms continue in full force.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Assignment:</h4>
                                <p>You may not assign your rights under these Terms. We may assign our rights with notice.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-2">Governing Law:</h4>
                                <p>These Terms are governed by New York State law, excluding conflict of law principles.</p>
                            </div>
                        </div>
                    </section>

                    {/* Section 16 */}
                    <section className="bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-10">
                        <h2 className="text-2xl font-semibold text-zinc-900 mb-4">16. CONTACT INFORMATION</h2>
                        <div className="leading-relaxed text-zinc-700 space-y-2">
                            <p>For questions about these Terms, contact us at:</p>
                            <p>📧 Email: <a href="mailto:support@edere.life" className="text-[#055E2C] underline underline-offset-2">support@edere.life</a></p>
                            <p>📍 Address: 145 E 27th St, 7B, New York NY 10016</p>
                        </div>
                    </section>

                    {/* Final Safety Notice */}
                    <section className="bg-red-50 border border-red-200 rounded-3xl p-8 mt-10 leading-relaxed space-y-2">
                        <p className="font-bold text-red-700 text-base">FINAL CRITICAL SAFETY REMINDERS</p>
                        <ul className="list-disc ml-6 space-y-1 text-red-800">
                            <li>LIFE-THREATENING ALLERGIC REACTIONS CAN OCCUR WITHOUT WARNING</li>
                            <li>CALL 911 IMMEDIATELY IF YOU EXPERIENCE ANY ALLERGIC REACTION SYMPTOMS</li>
                            <li>EDERE IS AN INFORMATIONAL TOOL ONLY - NOT A MEDICAL DEVICE OR SAFETY GUARANTEE</li>
                            <li>ALWAYS CONSULT YOUR HEALTHCARE PROVIDER FOR MEDICAL ADVICE</li>
                            <li>ALWAYS VERIFY SAFETY INFORMATION DIRECTLY WITH RESTAURANT STAFF</li>
                        </ul>
                    </section>

                    {/* Acceptance Notice */}
                    <section className="bg-[#055E2C]/10 rounded-3xl p-8 mt-6 text-sm leading-relaxed">
                        By using Edere, you acknowledge that you have read, understood, and agree to these Terms & Conditions, including all disclaimers and limitations of liability. You further acknowledge that you understand the risks associated with food allergies and will not rely solely on Edere for safety decisions.
                    </section>

                </div>
            </main>
        </div>
    );
}