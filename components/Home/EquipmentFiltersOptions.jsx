import React from "react";

const EquipmentFiltersOptions = () => {
  return (
    <div className="mt-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Equipment Catalog</h2>
        <h2>Explore Equipment You Might Like</h2>
      </div>
      <div className="flex gap-5">
        <select className="select select-bordered w-full max-w-xs bg-white">
          <option disabled selected>
            Price
          </option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
        <select className="select select-bordered w-full max-w-xs bg-white hidden md:block">
          <option disabled selected>
            Type
          </option>
          <option>Low to High</option>
          <option>High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default EquipmentFiltersOptions;
