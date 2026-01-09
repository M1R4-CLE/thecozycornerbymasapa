export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-10 md:py-2">
      <div className="bg-black/50 backdrop-blur-md p-10 rounded-2xl text-white">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-amber-900 mb-8">
          Let's Stay in Touch
        </h1>

        <p className="text-xl text-amber-800 mb-10">
          Have questions? Want to share your favorite book? We'd love to hear from you!
        </p>

        <div className="bg-white/70 backdrop-blur-sm border border-amber-100 rounded-2xl p-8 shadow-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-amber-800 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-gray-100/70 placeholder:text-gray-400"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-amber-800 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-gray-100/70 placeholder:text-gray-400"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-amber-800 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-400 bg-gray-100/70 placeholder:text-gray-400"
                placeholder="Tell us what's on your mind..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-4 bg-linear-to-r from-amber-600 to-orange-600 text-white font-medium rounded-full hover:brightness-110 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        <p className="text-center mt-10 text-amber-700">
          (created by Daryll Dave R. Masapa)
        </p>
      </div>
    </div>
  )
}