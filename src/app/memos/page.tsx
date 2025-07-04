import Link from "next/link";

export const metadata = {
  title: "メモ一覧ページ",
  description: "app-router演習メモ一覧",
};

const appMemos = [
  { id: "1", title: "sabrina" },
  { id: "2", title: "taylor" },
];

export default function MemosPage() {
  return (
    <main>
      <h1>メモの一覧ページ</h1>
      <ul>
        {appMemos.map((memo) => (
          <li key={memo.id}>
            <Link href={`/memos/${memo.id}`}>{memo.title}</Link>
          </li>
        ))}
      </ul>
      <p>
        <Link href="/">トップに戻る</Link>
      </p>
    </main>
  );
}
