"use client";

import { useState } from "react";

export function LikeButton() {
  const [count, setCount] = useState(0);

  return (
    // biome-ignore lint/a11y/useButtonType: <explanation>
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      onClick={() => setCount(count + 1)}
    >
      ❤{count}
    </button>
  );
}
