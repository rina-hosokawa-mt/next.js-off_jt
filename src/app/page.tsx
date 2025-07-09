import Link from "next/link";

export const metadata = {
  title: "メモトップページ",
  description: "app-router演習トップページです",
};

export default function HomePage() {
  return (
    <main>
      <h1>{metadata.title}</h1>
      <Link href="/memos" className="link-color">
        メモ一覧へ
      </Link>
    </main>
  );
}
