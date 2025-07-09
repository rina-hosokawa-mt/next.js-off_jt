import { appMemos } from "@/app/data";
import Link from "next/link";

export const metadata = {
  title: "メモ一覧ページ",
  description: "app-router演習メモ一覧",
};

export default function MemosPage() {
  return (
    <main>
      <h1>{metadata.title}</h1>
      <ul>
        {appMemos.map((memo) => (
          <li key={memo.id}>
            <Link href={`/memos/${memo.id}`}>{memo.title}</Link>
          </li>
        ))}
      </ul>
      <p>
        <Link href="/" className="link-color">
          トップに戻る
        </Link>
      </p>
    </main>
  );
}
