export default function AboutPage() {
  return (
    <div className="min-h-[70vh] flex items-center">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="bg-black/60 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl ring-1 ring-white/10">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-700">
            About The Cozy Corner
          </h1>

          <p className="mt-6 text-white/90">
            Welcome! We’re a small, warm online bookstore created with love.
            Our goal is simple: to help you find books that feel like coming home.
          </p>

          <p className="mt-4 text-white/90">
            Every title in our collection is hand-picked  whether you're looking for
            something cozy to read on a rainy afternoon, a story that makes your heart race,
            or words that quietly change the way you see the world.
          </p>

          <p className="mt-8 text-amber-400">
            More about our story coming soon...
          </p>
        </div>
      </div>
    </div>
  );
}