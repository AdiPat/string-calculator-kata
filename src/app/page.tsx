import { Header } from "@/components/header";
import { UserInput } from "@/components/user-input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-800 m-8 p-8 rounded-lg">
      <Header />
      <UserInput />
    </div>
  );
}
