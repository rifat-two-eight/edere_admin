export default function Signup() {
  return (
    <section id="signup" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 max-w-md">
        <h2 className="text-3xl font-bold mb-8 text-center">Sign Up</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
              placeholder="you@example.com"
            />
          </div>
          {/* button */}
          <button type="submit" className="w-full py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg font-semibold">
            Create Account
          </button>
        </form>
      </div>
    </section>
  );
}
