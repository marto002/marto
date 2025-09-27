"use client";

import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useAuthStore } from "../Login/login";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
 const pathname = usePathname();


  const isLoggedIn = useAuthStore((state) => state.isLoggedIn); // ✅
  const logout = useAuthStore((state) => state.logout); // Optional logout

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/ourwork", label: "Our Work" },
    { href: "/contact", label: "Contact" },
    ...(isLoggedIn
      ? [
          { href: "/trackorder", label: "Track Order", icon: <CiDeliveryTruck size={15} color="black" /> },
          { href: "/", label: "Profile", icon: <FaLock size={12} /> },
        ]
      : [{ href: "/login", label: "Signup", icon: <FaLockOpen size={15} /> }]),
  ];


  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-[#f8f8f8] font-nunito md:px-22 ">
      <nav className="flex md:px-0 px-5  w-full  justify-between ">
      
        <div className="flex   text-left  space-x-2 text-[#163546] pt-2">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/images/martrologo1.png" alt="Logo" className="w-20 h-13 " />
            <p className="font-[20] font-inter  md:text-[26px] text-[27px] text-[#000]">
              Marto Shipping
            </p>
          </Link>
        </div>

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
            <ul className="md:hidden flex flex-col   pb-4 bg-[#e4e4e4] h-[26rem] mx-4  font-normal text-black">
              {links.map((link) => (
                <li
                  className={`${pathname === link.href
                      ? "bg-[#33accc] text-white "
                      : " text-[#777] "}hover:text-white hover:bg-[#33accc] text-[14px] justify-center text-center  flex items-center py-4 px-2`}
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
