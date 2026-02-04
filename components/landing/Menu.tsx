export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Placeholder items */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 dark:bg-zinc-800 rounded-xl mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Delicious Item {i}</h3>
              <p className="text-gray-500 dark:text-gray-400">Description of the item goes here.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
