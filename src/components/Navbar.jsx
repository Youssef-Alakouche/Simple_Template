import { navItems } from "../constants";
import { AlignJustify, X } from "lucide-react";
import FilledBtn from "./UI/FilledBtn";
import EmptyBtn from "./UI/EmptyBtn";
import logo from "../assets/logo.png";
import React from "react";
import { useState } from "react";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  function menuToggleHandler() {
    setShowMenu((prev) => !prev);
  }

  return (
    <nav className="max-sm:px-10 z-50  backdrop-blur-lg border-b border-b-neutral-700/80 ">
      <div className="container flex justify-between items-center mx-auto py-4 sm:px-3 lg:px-8">
        <div className=" flex items-center shrink-0">
          <img src={logo} alt="logo" className="size-12 mr-2" />
          <span className="text-lg tracking-tight">VirtualR</span>
        </div>
        <ul className=" hidden lg:flex gap-7 ">
          {navItems.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex space-x-12 ">
          <EmptyBtn className="py-1 px-3">Sign In</EmptyBtn>
          <FilledBtn className="py-1 px-3" >create an account</FilledBtn>
        </div>

        {!showMenu && (
          <AlignJustify
            className="lg:hidden cursor-pointer"
            onClick={menuToggleHandler}
          />
        )}
        {showMenu && (
          <X className="lg:hidden cursor-pointer" onClick={menuToggleHandler} />
        )}
      </div>
      {showMenu && (
        <div className="fixed right-0 z-20 p-12 w-full bg-neutral-800 flex flex-col justify-center gap-y-8 items-center lg:hidden">
          <ul className=" flex flex-col gap-7 ">
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex space-x-12 ">
            <EmptyBtn>Sign In</EmptyBtn>
            <FilledBtn>create an account</FilledBtn>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
