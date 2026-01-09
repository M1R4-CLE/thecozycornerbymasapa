import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex max-w-3xl flex-col items-center gap-10 py-24 px-20 bg-black/70 w-[92vw] max-w-[900px] h-[70vh] max-h-[80svh] overflow-y-auto overscroll-contain text-white rounded-lg shadow-2xl backdrop-blur-md border border-white/10 -translate-y-10 md:-translate-y-40">
        <Image
          src="/images/The-Cozy-Corner-logo.png"
          alt="The Cozy Corner"
          width={150}
          height={160}
          priority
        />

        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Welcome to The Cozy Corner
          </h1>
          <p className="mt-4 text-white">
            A cozy online bookstore with hand-picked recommendations for every
            reader.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="/books"
            className="flex h-12 items-center justify-center rounded-full bg-white px-6 text-black hover:bg-gray-100"
          >
            Browse Books
          </Link>

          <Link
            href="/about"
            className="flex h-12 items-center justify-center rounded-full border px-6 hover:bg-gray-100"
          >
            Learn More
          </Link>
        </div>
      </main>
    </div>
  );
}