"use client";

import Image from "next/image";
import { useState } from "react";

const EquipmentCard = (equip) => {
  const [equipment, setEquipment] = useState(equip.equipment);
  return (
    <div className="group rounded-md bg-gray-50 p-2 hover:bg-white hover:border-[1px] cursor-pointer duration-75 border-blue-500 ">
      <h2 className="text-[20px] font-medium mb-2">
        {equipment.equipmentName}
      </h2>
      <h2 className="mb-2 font-bold">
        <span className="text-[12px] font-light">$ </span>
        <span className="text-[28px]">{equipment.hourlyPublicRate}</span>
        <span className="text-[12px] font-light">/hour</span>
      </h2>
      <Image
        src={equipment.image[0]?.url}
        alt={equipment.equipmentName}
        width={220}
        height={200}
        className="w-[250px] h-[150px] mb-3 object-contain"
      />
    </div>
  );
};

export default EquipmentCard;
