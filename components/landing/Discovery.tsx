export default function Discovery() {
  return (
    <section id="discovery" className="py-20 bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Discovery</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore new tastes and experiences tailored just for you. Find restaurants, cafes, and bars that match your vibe.
            </p>
          </div>
          <div className="flex-1 h-80 bg-gray-200 dark:bg-zinc-800 rounded-2xl">
            {/* Image placeholder */}
          </div>
        </div>
      </div>
    </section>
  );
}
