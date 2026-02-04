export default function EdereFor() {
  return (
    <section id="edere-for" className="py-20 bg-gray-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Edere For</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-white dark:bg-black rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">For Users</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Seamlessly browse menus, book tables, and pay your bills all in one place.
            </p>
          </div>
          <div className="p-8 bg-white dark:bg-black rounded-3xl shadow-sm">
            <h3 className="text-2xl font-bold mb-4">For Partners</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Manage your restaurant efficiently, reach more customers, and grow your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
