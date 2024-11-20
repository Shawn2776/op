import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
    </main>
  );
}
