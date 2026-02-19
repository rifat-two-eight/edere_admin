"use client";

import Navbar from "@/components/landing/Navbar";
import { useState } from "react";

type FAQItem = {
    q: string;
    a: string;
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
                        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6">
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
                                a: "We're the only platform with dish-level, chef-verified allergen information and modification options. Others rely on restaurant-level tags or crowdsourced data that can become outdated.",
                            },
                            {
                                q: "How do I get started?",
                                a: "Download the app, create your dietary profile (under 2 minutes), and start searching for restaurants near you.",
                            },
                            {
                                q: "Which cities is Edere available in?",
                                a: "We're launching in New York City and surrounding areas in May 2026, with plans to expand throughout the year. You can request your city in the app.",
                            },
                        ]}
                    />

                    <FAQAccordion
                        title="Dietary Needs & Restrictions"
                        items={[
                            {
                                q: "What food allergies does Edere support?",
                                a: "All major allergens including peanuts, tree nuts, milk, eggs, wheat, soy, fish, shellfish, sesame, plus less common allergens. You can add any food or ingredient to your profile.",
                            },
                            {
                                q: "Does Edere work for gluten-free diets?",
                                a: "Yes. We support celiac disease, gluten sensitivity, and gluten-free preferences with cross-contamination information.",
                            },
                            {
                                q: "Can I use Edere for vegan or vegetarian diets?",
                                a: "Absolutely. Vegan and vegetarian dietary needs are fully supported.",
                            },
                            {
                                q: "Can I filter for multiple dietary needs?",
                                a: "Yes. Edere only shows dishes that meet all of your selected requirements.",
                            },
                            {
                                q: "Does Edere show cross-contamination information?",
                                a: "Yes. We highlight cross-contamination risks and identify restaurants with dedicated prep areas.",
                            },
                        ]}
                    />

                    <FAQAccordion
                        title="How It Works"
                        items={[
                            {
                                q: "How does Edere verify restaurant information?",
                                a: "Our AI analyzes menus, then chefs and managers review and verify ingredients, modifications, and kitchen practices for accuracy.",
                            },
                            {
                                q: "How accurate is the allergen information?",
                                a: "Information is chef-verified, but we always recommend confirming with restaurant staff since menus and practices can change.",
                            },
                            {
                                q: "What do green and orange indicators mean?",
                                a: "Green means completely safe as prepared. Orange means the dish can be modified safely with specific instructions.",
                            },
                            {
                                q: "How often is menu data updated?",
                                a: "Menus are updated in real-time by restaurants through our portal.",
                            },
                        ]}
                    />

                    {/* RESTAURANT FAQS */}
                    <FAQAccordion
                        title="Restaurant Questions"
                        items={[
                            {
                                q: "How do I add my restaurant to Edere?",
                                a: "Email hello@edere.life for an invite. Onboarding takes about 10 minutes.",
                            },
                            {
                                q: "Is there a contract?",
                                a: "No. Month-to-month service with no long-term commitment.",
                            },
                            {
                                q: "How much does Edere cost for restaurants?",
                                a: "Currently, we are offering free verification listings.",
                            },
                            {
                                q: "Can I manage multiple locations?",
                                a: "Yes. Multi-location operators can manage all locations from a single account.",
                            },
                            {
                                q: "How does chef verification work?",
                                a: "Our AI pre-analyzes your menu, then your chef or manager reviews and confirms the information.",
                            },
                        ]}
                    />

                    {/* Contact CTA */}
                    <div className="mt-24 text-center bg-[#055E2C] rounded-3xl px-8 py-14 text-white">
                        <h2 className="text-3xl font-semibold mb-4">
                            Still have questions?
                        </h2>
                        <p className="text-white/90 mb-8">
                            Reach out anytime—we’re happy to help.
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
