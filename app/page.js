"use client";

import EquipmentFiltersOptions from "@/components/Home/EquipmentFiltersOptions";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getEquipmentList } from "@/services";
import { UserButton } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    getEquipment();
  }, []);

  const getEquipment = async () => {
    const result = await getEquipmentList();
  };

  return (
    <main className="p-5 sm:px-10 md:px-20">
      <Hero />
      <SearchInput />
      <EquipmentFiltersOptions />
    </main>
  );
}
