import Link from "next/link";

export const metadata = {
  title: "Memosページ",
};

// ダミーデータ（このファイル内だけで使う）
const memoData = [
  { id: 1, title: "買い物リスト" },
  { id: 2, title: "勉強メモ" },
  { id: 3, title: "旅行計画" },
];

export default function MemoListPage() {
  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">メモ一覧</h1>
      <ul className="space-y-2">
        {memoData.map((memo) => (
          <li key={memo.id}>
            <Link
              href={`/memos/${memo.id}`}
              className="text-blue-600 underline"
            >
              {memo.title}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/" className="block mt-4 text-gray-600 underline">
        ホームに戻る
      </Link>
    </main>
  );
}
