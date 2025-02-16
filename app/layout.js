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
  title: "First Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <nav className="text-3xl flex justify-center gap-10 bg-green-600 p-9">
          <Link href={`/`}>TakeMeHome</Link>
          <Link href={`/articles`}>Articles</Link>
          <Link href={`/posts`}>Posts</Link>
        </nav>
        <div className="mx-20">{children}</div>
      </body>
    </html>
  );
}
