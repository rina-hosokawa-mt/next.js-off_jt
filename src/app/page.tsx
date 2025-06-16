import { LikeButton } from "./components/LikeButton";

export const metadata = {
  titale: "トップページ",
};

export default function Home() {
  const today = new Date().toLocaleDateString();
  return (
    <main className="p-4">
      <div>
        <h1 className="text-2xl font-bold mb-4">ようこそ</h1>
        <h2>こんにちは</h2>
        <p>今日は{today}です。</p>
        <LikeButton />
      </div>
    </main>
  );
}
