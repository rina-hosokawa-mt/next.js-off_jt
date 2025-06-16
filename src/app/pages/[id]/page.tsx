import Link from "next/link";
export const metadata = {
  title: "詳細ページ",
};

export default function memodetail({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <main className="p-4">
      <h1 className="taxt-xl">メモ詳細</h1>
      <p>このページのIDは{id}です</p>
      <li>
        <Link href="/pages" className="text-blue-400">
          メモ一覧へ
        </Link>
      </li>
      <li>
        <Link href="/" className="text-blue-400">
          ホームへ
        </Link>
      </li>
    </main>
  );
}
