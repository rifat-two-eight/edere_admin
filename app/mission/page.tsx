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

                        <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 mb-6">
                            Our Mission
                        </h1>

                        <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto">
                            Why Edere Exists
                        </p>
                    </section>

                    {/* Story Card */}
                    <section className="bg-white/80 backdrop-blur rounded-3xl p-8 md:p-12 shadow-sm mb-20">
                        <div className="space-y-6 leading-relaxed text-[17px]">
                            <p>
                                At age 30, I developed six additional food allergies on top of
                                the one I'd had since childhood. Suddenly, dining out in New
                                York—once my favorite pastime—became an anxiety-filled research
                                project.
                            </p>

                            <p>
                                Not knowing who could accommodate me, how many dishes I could
                                have, or what modifications were possible without stripping the
                                flavor away. Every meal meant phone calls, uncertainty, and too
                                often, watching friends enjoy elaborate dishes while I picked
                                at a plain salad.
                            </p>

                            <p>
                                I realized I wasn't alone. Over{" "}
                                <span className="font-semibold text-zinc-900">
                                    200 million Americans
                                </span>{" "}
                                have allergies, dietary restrictions, or preferences.
                            </p>

                            <p>
                                We're all doing the same anxious research, making the same
                                exhausting phone calls, and missing the same social
                                connections.
                            </p>

                            <p className="font-semibold text-[#055E2C] text-lg">
                                So I created Edere.
                            </p>
                        </div>
                    </section>

                    {/* What We Do */}
                    <section className="mb-20">
                        <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-8">
                            What We Do
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-2xl p-8 shadow-sm">
                                <p className="leading-relaxed mb-4">
                                    Edere transforms dining from anxiety to joy for everyone with
                                    dietary restrictions. Our platform combines AI with chef
                                    verification to show exactly what you can eat—at the dish
                                    level—before you arrive.
                                </p>

                                <p className="leading-relaxed">
                                    We're building a world where date nights feel exciting again,
                                    family dinners go beyond the same three restaurants, and
                                    dining out brings joy instead of isolation.
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-[#055E2C]/10 to-[#055E2C]/5 rounded-2xl p-8">
                                <div className="space-y-4">
                                    <div>
                                        <span className="font-semibold text-green-700">Green</span>{" "}
                                        means completely safe.
                                    </div>
                                    <div>
                                        <span className="font-semibold text-orange-600">
                                            Copper Orange
                                        </span>{" "}
                                        means modifiable with clear recommendations.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Values */}
                    <section className="mb-24">
                        <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-10">
                            Our Values
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Safety First",
                                    desc:
                                        "Menus are chef-verified, but we always encourage communication with servers about allergies and dietary needs.",
                                },
                                {
                                    title: "Empowerment Through Information",
                                    desc:
                                        "Clear, reliable information removes anxiety and enables confident dining decisions.",
                                },
                                {
                                    title: "Inclusion at Every Table",
                                    desc:
                                        "Everyone deserves to fully participate in dining experiences—not just get by.",
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="bg-white rounded-2xl p-6 shadow-sm"
                                >
                                    <h3 className="font-semibold text-lg text-zinc-900 mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-zinc-600">
                                        {item.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="text-center bg-[#055E2C] rounded-3xl px-8 py-14 text-white">
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
                            Join Us
                        </h2>

                        <p className="max-w-2xl mx-auto text-white/90 mb-8">
                            Whether you're a diner searching for safe options or a restaurant
                            ready to serve this underserved community—join the Edere movement.
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

                            <Link
                                href="#restaurants"
                                className="px-8 py-3 border border-white/40 rounded-full font-semibold hover:bg-white/10 transition"
                            >
                                For Restaurant Owners
                            </Link>
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}
