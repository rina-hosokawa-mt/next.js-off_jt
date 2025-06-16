import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="flex flex-col min-h-screen">
        <header className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">MY MEMOS APP</h1>
            <nav className="space-x-4 ">
              <Link
                href="/pages"
                className="text-white hover:text-yellow-300  underline"
              >
                一覧ページへ
              </Link>
              <Link
                href="/memos"
                className="text-white hover:text-yellow-300  underline"
              >
                memo一覧ページへ
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-grow container mx-auto p-4"> {children}</main>

        <footer className="bg-gray-200 text-center text-sm p-4">
          © 2024 My Memo App
        </footer>
      </body>
    </html>
  );
}
