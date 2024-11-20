import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center">
      <div className="ml-10">
        <Image src="/logo2.png" alt="logo" width={200} height={200} />
      </div>
      <div className="flex gap-4">
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
