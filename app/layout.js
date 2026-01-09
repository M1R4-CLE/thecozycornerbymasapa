import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Cozy Corner",
  description: "A cozy online bookstore with great recommendations",
};

const navItem =
  "inline-flex items-center justify-center rounded-2xl px-4 py-2 " +
  "bg-white/15 text-white shadow-sm ring-1 ring-white/20 backdrop-blur " +
  "transition-all duration-200 ease-out " +
  "hover:bg-white/25 hover:shadow-md hover:scale-110 hover:text-white " +
  "active:scale-95";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-cover bg-center bg-no-repeat`}
        style={{ backgroundImage: "url('/images/Background.jpeg')" }}
      >
        <div className="min-h-screen flex flex-col bg-transparent">
          <header className="border-b bg-black/70 backdrop-blur">
            <div className="mx-auto max-w-6xl flex justify-between items-center p-4">
              <h1 className="text-xl font-semibold">The Cozy Corner</h1>
              <nav className="space-x-3 text-sm">
                <Link className={navItem} href="/">Home</Link>
                <Link className={navItem} href="/about">About</Link>
                <Link className={navItem} href="/books">Books</Link>
                <Link className={navItem} href="/contact">Contact</Link>
              </nav>
            </div>
          </header>

          <main className="mx-auto w-full max-w-4xl min-h-75 p-10 rounded-3xl">{children}</main>

          <footer className="fixed bottom-0 left-0 right-0 z-50 text-center text-sm text-white/95 py-4 [text-shadow:0_2px_12px_rgba(0,0,0,0.85)]">
            © 2026 The Cozy Corner
          </footer>
        </div>
      </body>
    </html>
  );
}