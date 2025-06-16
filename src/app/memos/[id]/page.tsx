import Link from "next/link";

export const metadata = {
  title: "MemoIDページ",
};

export default function MemoDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">メモ詳細</h1>
      <p>このページのIDは {id} です</p>
      <ul className="mt-4 space-y-2">
        <li>
          <Link href="/memos" className="text-blue-600 underline">
            メモ一覧に戻る
          </Link>
        </li>
        <li>
          <Link href="/" className="text-gray-600 underline">
            ホームに戻る
          </Link>
        </li>
      </ul>
    </main>
  );
}
