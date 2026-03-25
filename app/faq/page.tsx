"use client";

import Navbar from "@/components/landing/Navbar";
import { useState } from "react";

type FAQItem = {
    q: string;
    a: string | React.ReactNode;
};

function FAQAccordion({ title, items }: { title: string; items: FAQItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-8">
                {title}
            </h2>

            <div className="space-y-4">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-2xl shadow-sm overflow-hidden"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            className="w-full flex justify-between items-center px-6 py-5 text-left"
                        >
                            <span className="font-medium text-zinc-900">
                                {item.q}
                            </span>
                            <span className="text-[#055E2C] text-xl">
                                {openIndex === i ? "−" : "+"}
                            </span>
                        </button>

                        {openIndex === i && (
                            <div className="px-6 pb-6 text-zinc-700 leading-relaxed">
                                {item.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-[#F6F2EE]">
            <Navbar />

            <main className="pt-32 pb-28">
                <div className="container mx-auto px-4 max-w-5xl">

                    {/* Header */}
                    <div className="text-center mb-24">
                        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6" style={{ fontFamily: 'athletics' }}>
                            FAQs
                        </h1>
                        <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                            Frequently Asked Questions
                        </p>
                    </div>

                    {/* USER FAQS */}
                    <FAQAccordion
                        title="Getting Started"
                        items={[
                            {
                                q: "What is Edere?",
                                a: "Edere is a restaurant discovery app showing you exactly what you can eat before you arrive. We provide chef-verified menu information at the dish level for people with food allergies, dietary restrictions, and preferences.",
                            },
                            {
                                q: "Is Edere free to use?",
                                a: "Yes, completely free to download and use on both iOS and Android.",
                            },
                            {
                                q: "How is Edere different from other apps?",
                                a: "We're the only platform with dish-level, chef-verified allergen information and modification options. Others show only restaurant-level tags or rely on crowdsourced data that could be outdated over time.",
                            },
                            {
                                q: "How do I get started?",
                                a: "Download the app, create your dietary profile (under 2 minutes), and start searching for restaurants near you.",
                            },
                            {
                                q: "Which cities is Edere available in?",
                                a: "We're launching in New York City and surrounding areas in May 2026, with plans to expand to additional cities throughout the year. Want Edere in your city? Email us and we'll prioritize based on demand.",
                            },
                        ]}
                    />

                    <FAQAccordion
                        title="Dietary Needs & Restrictions"
                        items={[
                            {
                                q: "What food allergies does Edere support?",
                                a: "All major allergies (peanuts, tree nuts, milk, eggs, wheat, soy, fish, shellfish, sesame) plus other less common allergens. You can add any food and ingredient to your profile.",
                            },
                            {
                                q: "Does Edere work for gluten-free diets?",
                                a: "Yes! We help people with celiac disease, gluten sensitivity, or those choosing gluten-free find safe options with cross-contamination information.",
                            },
                            {
                                q: "Can I use Edere for vegan diets?",
                                a: "Absolutely. We support vegan and vegetarian dietary needs.",
                            },
                            {
                                q: "Can I filter for multiple dietary needs at once?",
                                a: "Yes. Set as many restrictions as you need - Edere shows only dishes that meet all your requirements.",
                            },
                            {
                                q: "Does Edere show cross-contamination information?",
                                a: "Yes. We indicate cross-contamination risks and show which restaurants have dedicated prep areas for gluten and nuts.",
                            },
                            {
                                q: "I'm trying a diet temporarily. Is Edere useful?",
                                a: "Absolutely. Whether it's one month or long-term, Edere adapts to your current needs.",
                            },
                        ]}
                    />

                    <FAQAccordion
                        title="How It Works"
                        items={[
                            {
                                q: "How does Edere verify restaurant information?",
                                a: "We have our custom AI model analyze menus, then chefs and managers review and verify the allergen information, confirming dish ingredients, modifications and that it meets their kitchen practices. This hybrid approach ensures speed and accuracy.",
                            },
                            {
                                q: "How accurate is the allergen information?",
                                a: "Edere provides chef-verified menu data (indicated by a checkmark next to the restaurant), but we always recommend confirming with restaurant staff about your specific allergies. Menus and kitchen practices can change, and cross-contamination risks vary. Edere is a discovery tool to help you find safe options, not a replacement for communication with your server and chef.",
                            },
                            {
                                q: "What does \"chef-verified\" mean?",
                                a: "Restaurant kitchen staff have reviewed and confirmed all allergen information, including ingredients, preparation methods, and cross-contamination risks.",
                            },
                            {
                                q: "How often is menu information updated?",
                                a: "Restaurants update menus in real-time through our restaurant portal.",
                            },
                            {
                                q: "What do the green and orange indicators mean?",
                                a: "Green = completely safe (for your dietary profile) as prepared. Orange = can be modified (with specific instructions and recommendations).",
                            },
                            {
                                q: "How do I know which dishes I can modify?",
                                a: "Dishes marked orange include specific modification instructions—for example, \"Remove cheese\" or \"Ask for gluten-free bun.\" These modifications come from the restaurant's own guidance about how they can safely adapt dishes for dietary needs.",
                            },
                        ]}
                    />

                    <FAQAccordion
                        title="Using the App"
                        items={[
                            {
                                q: "How do I find restaurants near me?",
                                a: "Open the app and enable location services. Browse the map or list view, or restaurant name. Each restaurant indicates how many dishes you can have - as prepared or with option to modify.",
                            },
                            {
                                q: "What if a restaurant isn't listed on Edere yet?",
                                a: `We're constantly expanding our restaurant network and prioritize additions based
on user requests -
                            please email us at hello@edere.life. You can also encourage your favorite restaurants to join Edere's
platform.`,
                            },
                            {
                                q: "Can I save my favorite restaurants?",
                                a: "Yes! Users can create custom collections like \"Date Night,\" \"Family Friendly,\" or \"Quick Lunch\" to organize their favorite safe dining spots.",
                            },
                            {
                                q: "What if restaurant information seems wrong?",
                                a: "Please email us at hello@edere.life and we'll work with the restaurant to verify and update immediately.",
                            },
                        ]}
                    />

                    <FAQAccordion
                        title="Safety & Privacy"
                        items={[
                            {
                                q: "Should I still tell my server about my allergies?",
                                a: "YES, always. Edere helps you discover restaurants and make informed dining decisions, but you must always inform staff about your allergies and dietary restrictions.",
                            },
                            {
                                q: "Can restaurants see who's searching for them?",
                                a: "No. Restaurants only see aggregate data (e.g., \"150 users viewed your menu\"), never individual users.",
                            },
                        ]}
                    />

                    {/* RESTAURANT FAQS */}
                    <FAQAccordion
                        title="Restaurant Questions — Getting Started"
                        items={[
                            {
                                q: "How do I add my restaurant to Edere?",
                                a: "Email hello@edere.life for an invite to your custom restaurant portal. Onboarding takes about 15-20 minutes.",
                            },
                            {
                                q: "How much does Edere cost for restaurants?",
                                a: "Currently, we are offering free verification listings.",
                            },
                            {
                                q: "I'm interested in the B2B opportunities for restaurants, where can I find more information?",
                                a: (
                                    <div className="space-y-3">
                                        <p>We offer our restaurant partners turnkey solutions to power and enhance the dining experience for those with food restrictions.</p>
                                        <p><span className="font-semibold text-zinc-900">The Edere-Powered Menu</span> is a dynamic hosted page customers use to filter your menu by dietary needs before visiting or provided via QR code in the restaurant.</p>
                                        <p><span className="font-semibold text-zinc-900">The Edere API Integration</span> will embed our filtering technology directly into your website, POS, or app for seamless allergen filtering.</p>
                                    </div>
                                ),
                            },
                            {
                                q: "How much do enterprise solutions cost?",
                                a: "Pricing is customized based on size, locations, and integration needs. Email hello@edere.life for a quote.",
                            },
                            {
                                q: "What types of restaurants can join?",
                                a: "Any food establishment from quick-service to fine dining, independent to chains! Our mission is to welcome all restaurants to join to share information about their menu.",
                            },
                            {
                                q: "Can I manage multiple locations?",
                                a: "Yes. Multi-location operators manage all locations from one account with location-specific customization.",
                            },
                            {
                                q: "Do I need to be in a specific city?",
                                a: "We're launching in select cities first but accepting partners nationwide for early access.",
                            },
                        ]}
                    />

                    <FAQAccordion
                        title="Restaurant Questions — Setup & Verification"
                        items={[
                            {
                                q: "How does chef verification work?",
                                a: "Our AI analyzes your menu, then your chef or manager reviews, confirms or edits the information in our restaurant portal.",
                            },
                            {
                                q: "How long does setup take?",
                                a: "About 15-20 minutes. AI pre-populates most information - you just review and confirm.",
                            },
                            {
                                q: "What information do I need?",
                                a: "Your current menu, ingredient lists, preparation methods, and cross-contamination protocols.",
                            },
                            {
                                q: "Can I update my menu?",
                                a: "Yes. 24/7 access to update dishes, ingredients, prices, and allergen information anytime through our restaurant portal.",
                            },
                        ]}
                    />

                    <FAQAccordion
                        title="Restaurant Questions — Benefits & Results"
                        items={[
                            {
                                q: "Why should I join Edere?",
                                a: "Reach 200M+ Americans with dietary restrictions who spend $50B+ annually at restaurants. Connect with loyal, high-spending customers actively searching for safe options.",
                            },
                            {
                                q: "How will Edere help my restaurant?",
                                a: "Reach new customers, reduce staff time on allergen questions, increase loyalty. 92% of diners with restrictions return to accommodating restaurants.",
                            },
                            {
                                q: "Will this replace my allergen menu?",
                                a: "Edere complements existing resources. Many restaurants link to their Edere-powered menu or integrate our API for a seamless menu-filtering functionality on your website.",
                            },
                            {
                                q: "Can Edere integrate with my POS?",
                                a: "More to come as we'd look to partner and integrate with major POS systems. Contact us about direct integration.",
                            },
                        ]}
                    />

                    {/* Contact CTA */}
                    <div className="mt-24 text-center bg-[#055E2C] rounded-3xl px-8 py-14 text-white">
                        <h2 className="text-3xl font-semibold mb-4" style={{ fontFamily: 'athletics' }}>
                            Still have questions?
                        </h2>
                        <p className="text-white/90 mb-8">
                            Reach out anytime—we're happy to help.
                        </p>
                        <a
                            href="mailto:hello@edere.life"
                            className="inline-block px-8 py-3 bg-white text-[#055E2C] rounded-full font-semibold hover:opacity-90 transition"
                        >
                            Contact Us
                        </a>
                    </div>

                </div>
            </main>
        </div>
    );
}