import { appMemos } from "@/app/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata = {
  title: "メモ詳細ページ",
  description: "app-router演習メモの詳細ページ",
};

export default function MemoDetailPage({ params }: { params: { id: string } }) {
  const memo = appMemos.find((m) => m.id === params.id);

  if (!memo) {
    notFound();
  }

  return (
    <main>
      <h1>{metadata.title}</h1>
      <h2>{memo.title}</h2>
      <p>{memo.content}</p>
      <nav>
        <p>
          <Link href="/memos" className="link-color">
            メモ一覧ページへ
          </Link>
        </p>
        <p>
          <Link href="/" className="link-color">
            トップに戻る
          </Link>
        </p>
      </nav>
    </main>
  );
}
