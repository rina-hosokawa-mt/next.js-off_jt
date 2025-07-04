import Link from "next/link";
import { notFound } from "next/navigation";

const appMemos = [
  { id: "1", title: "sabrina", content: "26,152,America" },
  { id: "2", title: "taylor", content: "36,178,America" },
];

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
      <h1>{memo.title}</h1>
      <p>{memo.content}</p>
      <nav>
        <Link href="/memos">メモ一覧ページへ</Link>
        <br />
        <Link href="/">トップに戻る</Link>
      </nav>
    </main>
  );
}
