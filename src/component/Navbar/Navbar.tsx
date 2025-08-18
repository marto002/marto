"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { usePathname } from "next/navigation";

type NavbarProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/ourwork", label: "Our Work" },
    { href: "/contact", label: "Contact" },
    { href: "", label: "Track Order", icon: <CiDeliveryTruck size={15} /> },
    { href: "/login", label: "Login", icon: <FaLock size={12} /> },
    { href: "/signup", label: "Signup", icon: <FaLockOpen size={15} /> },
  ];

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-[#f8f8f8] font-nunito md:px-22 ">
      <nav className="flex   w-full  justify-between ">
        {/* Logo */}
        <div className="flex   text-left  space-x-2 text-[#163546] pt-2">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/images/aviary.png" alt="Logo" className="w-20 h-13 " />
            <p className="font-[20] font-inter text-2xl text-[#000]">
              Marto courier
            </p>
          </Link>
        </div>
        {/*
<div className="flex  items-center justify-center bg-red-500">
          <ul className="hidden md:flex items-center  text-[#777] font-normal uppercase whitespace-nowrap ">
            <li className="hover:text-white hover:bg-[#33accc] justify-center text-center active:bg-amber-300 font-bold py-4 px-4 text-base "><Link href="/">Home</Link></li>
            <li className="hover:text-white hover:bg-[#33accc] justify-center text-center active:bg-amber-300 font-bold py-4 px-4 ">
              <Link href="/about">About</Link></li>
            <li className="hover:text-white hover:bg-[#33accc] justify-center text-center active:bg-amber-300 font-bold py-4 px-4"><Link href="/services">Services</Link></li>
            <li className="hover:text-white hover:bg-[#33accc] justify-center text-center font-normal py-4 px-4">
              <Link href="/ourwork"> Our Work</Link></li>
            <li className="hover:text-white hover:bg-[#33accc] justify-center text-center font-normal py-4 px-4 bg-amber-700"><Link href="/contact">Contact</Link></li>
            <li className="hover:text-white hover:bg-[#33accc] justify-center text-center font-normal flex items-center py-4 px-4">
            <CiDeliveryTruck color="black" size="15"/>
            <Link href="/trackorder"> Track Order</Link></li>
            <li className="hover:text-white hover:bg-[#33accc] justify-center text-center font-normal flex items-center bg-amber-700 py-4 px-4"><FaLock size="12" color="black"/><Link href="/service">Login</Link></li>
            <li className="hover:text-white hover:bg-[#33accc] justify-center text-center font-normal flex items-center py-4 px-4"> <FaLockOpen size="15" color="black"/><Link href="/contact">Signup</Link></li>
               </ul>
          </div>*/}

        <div className="flex  items-center justify-center   ">
          <ul className="bg-[#f8f8f8] hidden md:flex items-center gap-0 text-sm  font-medium uppercase whitespace-nowrap ">
            {links.map((link) => (
              <li
                className={`${
                  pathname === link.href
                    ? "bg-[#33accc] text-white "
                    : " text-[#777] "
                }hover:text-white hover:bg-[#33accc] tex justify-center text-center  flex items-center py-4 px-2`}
              >
                {link.icon}
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden p-2 ">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <p className="text-black font-bold">X</p>
            ) : (
              <RxHamburgerMenu size={35} color="black" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <>
        
       
        
        <div >
            <ul className="md:hidden flex flex-col space-y-4 px-6 pb-4 bg-[#e4e4e4]  font-normal text-black">
              {links.map((link) => (
                <li
                  className={`${pathname === link.href
                      ? "bg-[#33accc] text-white "
                      : " text-[#777] "}hover:text-white hover:bg-[#33accc] tex justify-center text-center  flex items-center py-4 px-2`}
                >
                  {link.icon}
                  <Link key={link.href} href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          </>
      )}
    </div>
  );
};

export default Navbar;
