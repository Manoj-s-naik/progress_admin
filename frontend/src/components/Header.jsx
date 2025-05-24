import React from "react";
import logo from "/gray.png";

function Header() {
  return (
    <>
      <div className="w-full h-[7rem] bg-[#1e2024] text-white flex items-center">
        <div className="w-[5rem]">
          <img src={logo} alt="logo" className="rounded-full" />
        </div>
      </div>
    </>
  );
}

export default Header;
