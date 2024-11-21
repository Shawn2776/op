import React from "react";
import EquipmentCard from "./EquipmentCard";

const EList = (eList) => {
  return (
    <div className="pt-10">
      <div>{console.log("eList", eList)}</div>
      <div className="grid grid-cols-2 gap-4 rounded-md md:grid-cols-3 lg:grid-cols-4">
        {eList.eList.map((e) => (
          <div key={e.id} className="rounded-md">
            <EquipmentCard equipment={e} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EList;
