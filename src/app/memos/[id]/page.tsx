import { appMemos } from "@/app/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export const metadata = {
  title: "メモ詳細ページ",
  description: "app-router演習メモの詳細ページ",
};

export default async function MemoDetailPage(props: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await props.params;
  const id = resolvedParams.id;

  const memo = await Promise.resolve(appMemos.find((m) => m.id === id));

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
