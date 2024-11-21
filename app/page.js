"use client";

import EquipmentFiltersOptions from "@/components/Home/EquipmentFiltersOptions";
import EList from "@/components/Home/EList";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import { getEquipmentList } from "@/services";
import { UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function Home() {
  const [equipList, setEquipList] = useState([]);

  useEffect(() => {
    getEquipment();
  }, []);

  const getEquipment = async () => {
    const result = await getEquipmentList();
    console.log("RESULT:", result);
    setEquipList(result?.equipmentLists);
  };

  return (
    <main className="p-5 mx-auto sm:px-10 md:px-20 max-w-7xl">
      <Hero />
      <SearchInput />
      <EquipmentFiltersOptions />
      <EList eList={equipList} />
    </main>
  );
}
