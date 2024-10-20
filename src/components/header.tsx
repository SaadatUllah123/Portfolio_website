"use client";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../public/image/logo.png";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  let [menu, setMenu] = useState(false);
  return (
    <div>
      <div className="bg-orange-200 w-[100%] capitalize flex justify-between items-center p-[1rem_5%] md:p-[1rem_7%] lg:px-[9%] xl:py-[1.5rem] fixed z-10 shadow-[0_0_15px_0px_rgb(200,40,0)]">
        <Link href={"#home"}>
          <Image
            src={logoImage}
            alt="logo"
            className="w-[3rem] sm:w-[4rem] md:w-[4.5rem] xl:w-[5.5rem]"
          />
        </Link>
        <button
          className="text-[1.75rem] text-[rgb(200,40,0)]  md:hidden"
          onClick={() => setMenu(!menu)}
        >
          {" "}
          {menu ? <IoMdClose /> : <IoMdMenu />}{" "}
        </button>

        <nav
          className={`flex flex-col bg-orange-200 absolute top-full left-0 w-full text-center p-[1.5rem] text-[1.25rem] xl:text-[1.75rem] gap-[1.5rem] font-[650] md:static md:flex md:flex-row md:justify-end md:p-0 ${
            menu ? "block" : "hidden"
          } `}
        >
          <Link
            href={"#home"}
            className="text-[#c82800]"
            onClick={() => setMenu(!menu)}
          >
            Home
          </Link>
          <Link
            href={"#about"}
            className="hover:text-[#c82800] "
            onClick={() => setMenu(!menu)}
          >
            About
          </Link>
          <Link
            href={"#services"}
            className="hover:text-[#c82800] "
            onClick={() => setMenu(!menu)}
          >
            services
          </Link>
          <Link
            href={"#portfolio"}
            className="hover:text-[#c82800] "
            onClick={() => setMenu(!menu)}
          >
            Portfolio
          </Link>
          <Link
            href={"#contact"}
            className="hover:text-[#c82800] "
            onClick={() => setMenu(!menu)}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
