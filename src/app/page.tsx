import Link from "next/link";

export const metadata = {
  title: "トップページ",
  description: "app/page.tsxトップページです",
};

export default function HomePage() {
  return (
    <main>
      <h1>ようこそ</h1>
      <Link href="/memos">メモ一覧へ</Link>
    </main>
  );
}
