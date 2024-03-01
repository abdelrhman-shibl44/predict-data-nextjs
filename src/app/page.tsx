"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputVal, setInputVal] = useState<string>("");
  const router = useRouter();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputVal && inputVal?.length > 0) {
      router.push(`/prediction/${inputVal}`);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="bg-black flex flex-col gap-6 p-10 rounded-lg">
        <div>
          <h1 className="text-blue-500 font-semibold text-h1_fontSize">
            Enter Your name
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex  justify-center md:justify-between sm:w-full flex-wrap gap-6 items-center"
        >
          <input
            className="text-p_fontsize bg-transparent w-full text-white border border-blue-500 p-2 rounded-sm focus-visible:outline-none"
            name="name"
            type="text"
            placeholder="Type your name"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          <button
            className="text-btn_fontsize text-green-500 border-2 shadow-md shadow-cyan-300 hover:shadow-red-400 transition-1  border-green-300 px-3 py-1 rounded-md"
            type="submit"
          >
            Predict Name
          </button>
        </form>
      </div>
    </main>
  );
}
