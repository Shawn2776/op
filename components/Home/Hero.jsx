import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center gap-10">
        <h2 className="text-[40px] md:text-[60px] font-bold">
          NIC Adventure Center
        </h2>
        <h3 className="text-[20px] text-gray-500 pr-20 mt-5">
          We offer convenient rentals and activities like kayaking,
          paddleboarding, and sailing.
        </h3>
        <div className="pb-4 pt-2 mt-5 px-4">
          <Button>
            <span className="text-xl">Explore Rentals</span>
          </Button>
        </div>
      </div>
      <div>
        <Image
          src="/hero5.png"
          alt="Hero Image"
          height={400}
          width={500}
          className="w-full object-cover align-middle"
        />
      </div>
    </div>
  );
};

export default Hero;
