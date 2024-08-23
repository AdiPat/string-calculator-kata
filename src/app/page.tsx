import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-800 m-8 p-8 rounded-lg">
      <h1 className="text-2xl text-white text-center">
        TDD Kata: String Calculator 🌞
      </h1>
      <p className="text-md text-white text-center mt-4">
        This is a simple string calculator that was built using TDD (Test Driven
        Development).{" "}
      </p>
    </div>
  );
}
