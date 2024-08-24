"use client";

import { Header } from "@/components/header";
import { Result } from "@/components/result";
import { UserInput } from "@/components/user-input";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [result, setResult] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [value, setValue] = useState<string>("");

  return (
    <div className="bg-gray-800 m-8 p-8 rounded-lg">
      <Header />
      <UserInput
        setError={setError}
        value={value}
        setResult={setResult}
        setShowResult={setShowResult}
        setValue={setValue}
      />
      {showResult && <Result result={result} />}
    </div>
  );
}
