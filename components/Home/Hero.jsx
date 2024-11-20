import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src="/op_hero2.jpg" className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Watersport Rentals</h1>
          <p className="py-6">
            NIC Adventure Center, with over 1,000 feet of beachfront, offers
            convenient rentals and activities like kayaking, paddleboarding, and
            sailing, providing seamless adventures for students and the
            community.
          </p>
          <button className="btn btn-primary">Rent Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
