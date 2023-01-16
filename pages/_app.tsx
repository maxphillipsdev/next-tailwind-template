import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} font-sans`}>
      <div className="flex h-12 items-center justify-center border-b-2 border-slate-3 bg-slate-2">
        <nav>
          <ul className="flex items-center justify-center space-x-2">
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
          </ul>
        </nav>
      </div>
      <main>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
