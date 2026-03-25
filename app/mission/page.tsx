import Navbar from "@/components/landing/Navbar";
import Link from "next/link";

export default function OurMissionPage() {
    return (
        <div className="min-h-screen bg-[#F6F2EE] text-zinc-800">
            <Navbar />

            <main className="pt-32 pb-28">
                <div className="container mx-auto px-4 max-w-5xl">

                    {/* Hero Header */}
                    <section className="text-center mb-20">

                        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6" style={{ fontFamily: 'athletics' }}>
                            Our Mission
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto">
                            Why Edere Exists
                        </p>
                    </section>

                    {/* Main Content Area */}
                    <div className="bg-white rounded-[32px] p-8 md:p-16 shadow-sm mb-20 space-y-24">
                        {/* Story */}
                        <section>
                            <div className="space-y-6 leading-relaxed text-[17px]">
                                <p>
                                    At age 30, I developed six additional food allergies on top of the one I'd had since childhood. Suddenly, dining out in New York—once my favorite pastime—became an anxiety-filled research project. Not knowing who could accommodate me, how many dishes I could have, and what modifications could they make without stripping the flavor away. Every meal meant phone calls, uncertainty, and too often, watching friends enjoy elaborate dishes while I picked at a plain salad.
                                </p>

                                <p>
                                    I realized I wasn't alone. Over{" "}
                                    <span className="font-semibold text-zinc-900">
                                        200 million Americans
                                    </span>{" "}
                                    have allergies, dietary restrictions or preferences. We're all doing the same anxious research, making the same exhausting phone calls, missing the same social connections. So I created Edere.
                                </p>

                                <p className="text-2xl" style={{ fontFamily: 'var(--font-dancing-script)', fontWeight: 600 }}>
                                    - Amy, Founder + CEO
                                </p>
                            </div>
                        </section>

                        {/* What We Do */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-8" style={{ fontFamily: 'athletics' }}>
                                What We Do
                            </h2>

                            <div className="grid lg:grid-cols-5 gap-12 items-center">
                                <div className="lg:col-span-3 space-y-6">
                                    <p className="leading-relaxed text-lg text-zinc-600">
                                        Edere transforms dining from anxiety to joy for everyone with
                                        dietary restrictions. Our platform uses AI combined with chef
                                        verification to show exactly what you can eat at each restaurant—at
                                        the dish level, before you arrive.
                                    </p>

                                    <p className="leading-relaxed text-lg text-zinc-600">
                                        We're creating a world where date nights feel exciting again,
                                        family dinners expand beyond the same three restaurants, and
                                        dining out brings joy instead of isolation.
                                    </p>
                                </div>

                                <div className="lg:col-span-2 space-y-8 lg:border-l lg:border-[#2D2A26]/10 lg:pl-12">
                                    <div className="flex items-start gap-4">
                                        <span className="mt-1 w-4 h-4 rounded-full bg-[#055E2C] shrink-0 shadow-sm"></span>
                                        <p className="text-lg">
                                            <span className="font-bold text-[#055E2C]">Green</span>{" "}
                                            means completely safe.
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <span className="mt-1 w-4 h-4 rounded-full bg-[#D47A46] shrink-0 shadow-sm"></span>
                                        <p className="text-lg">
                                            <span className="font-bold text-[#D47A46]">Copper orange</span>{" "}
                                            means modifiable with specific recommendations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Values */}
                        <section>
                            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-10" style={{ fontFamily: 'athletics' }}>
                                Our Values
                            </h2>

                            <div className="grid md:grid-cols-3 gap-5">
                                {[
                                    {
                                        title: "Safety First",
                                        desc:
                                            "While menus are chef-verified (indicated by the checkmark) always communicate with your server about allergies and other dietary needs.",
                                    },
                                    {
                                        title: "Empowerment Through Information",
                                        desc:
                                            "Clear information eliminates anxiety and enables confident decisions.",
                                    },
                                    {
                                        title: "Inclusion at Every Table",
                                        desc:
                                            "Everyone deserves to participate fully in dining experiences, not just survive them.",
                                    },
                                ].map((item) => (
                                    <div key={item.title}>
                                        <h3 className="font-semibold text-xl text-zinc-900 h-16">
                                            {item.title}
                                        </h3>
                                        <p className="text-base leading-relaxed text-zinc-600">
                                            {item.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* CTA */}
                    <section className="text-center bg-[#055E2C] rounded-3xl px-8 py-14 text-white">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4" style={{ fontFamily: 'athletics' }}>
                            Join Us
                        </h2>

                        <p className="max-w-2xl mx-auto text-white/90 mb-8">
                            Whether you're a diner searching for safe options or a restaurant
                            ready to serve this underserved community, join the Edere movement.
                        </p>

                        <p className="font-medium mb-10">
                            Food that Fits You. Everywhere.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="#download"
                                className="px-8 py-3 bg-white text-[#055E2C] rounded-full font-semibold hover:opacity-90 transition"
                            >
                                Download the App
                            </Link>

                        </div>

                        <p className="mt-8 text-white/80">
                            Ready to discover safe dining options near you? Download the Edere app and start exploring.
                        </p>

                        <p className="mt-4 text-white/80 italic">
                            Restaurant owner? Learn how Edere can connect you with motivated diners searching for exactly what you offer.
                        </p>
                    </section>

                </div>
            </main>
        </div>
    );
}