import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div>
        <h2 className="text-2xl md:6xl font-bold">Watersport Rentals</h2>
        <h3 className="text-lg md:text-4xl text-gray-500 pr-20 mt-5">
          NIC Adventure Center offers convenient rentals and activities like
          kayaking, paddleboarding, and sailing.
        </h3>
        <div className="pb-4 pt-2 mt-5 px-4">
          <Button>
            <span className="text-xl">Rent Now</span>
          </Button>
        </div>
      </div>
      <div>
        <Image
          src="/op_hero3.jpg"
          alt="Hero Image"
          height={400}
          width={500}
          className="w-full object-cover align-middle "
        />
      </div>
    </div>
  );
};

export default Hero;
