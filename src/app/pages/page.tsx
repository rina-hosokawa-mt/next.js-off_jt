import Link from "next/link";

export const memoData = {
  title: "一覧ページ",
};

const memodata = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default function memolist() {
  return (
    <main className="p-4">
      <h1 className="text-xl">メモ一覧</h1>
      <ul className="space-y-2">
        {memodata.map((memo) => (
          <li key={memo.id}>
            <Link href={`/pages/${memo.id}`} className="text-blue-100">
              {memo.id}
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/">ホームへ戻る</Link>
    </main>
  );
}
