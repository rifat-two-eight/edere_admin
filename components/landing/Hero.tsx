export default function Hero() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center pt-24 bg-[#f6f2ee]">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-black">
          Welcome to Edere
        </h1>
        <p className="text-xl md:text-2xl text-zinc-800 mb-8 max-w-2xl mx-auto">
          Discover the future of dining. Experience functionality, menu discovery, and more.
        </p>
        <button className="px-8 py-3 bg-[#055E2C] text-white rounded-full text-lg font-semibold hover:opacity-90 transition-opacity">
          Get Started
        </button>
      </div>
    </section>
  );
}
