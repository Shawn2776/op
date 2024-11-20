import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-2 shadow-sm border-b-[1px]">
      <div className="ml-10">
        <Image src="/logo2.png" alt="logo" width={100} height={100} />
      </div>
      <div className="md:flex gap-4 hidden">
        <h2>
          <Button variant="link">
            <span className="text-xl">Home</span>
          </Button>
        </h2>
        <h2>
          <Button variant="link">
            <span className="text-xl">History</span>
          </Button>
        </h2>
        <h2>
          <Button variant="link">
            <span className="text-xl">Contact Us</span>
          </Button>
        </h2>
      </div>
      <div className="mr-10">
        <UserButton />
      </div>
    </nav>
  );
};

export default Navbar;
