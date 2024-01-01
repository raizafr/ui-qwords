import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
const Topbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white">
      <div className="container mx-auto py-1 flex justify-between items-center px-2 md:px-5 lg:px-0">
      <div>
        <Image
          src={"/images/logo-qw-light.webp"}
          alt="logo"
          width={150}
          height={150}
        />
      </div>
      <div className="font-semibold lg:flex gap-5 hidden">
        <Link href={"#"} className="flex items-center gap-[2px]">
          <span>Cloud Hosting</span>
          <span className="scale-[0.8] ">
            <IoIosArrowDown />
          </span>
        </Link>
        <Link href={"#"} className="flex items-center gap-[2px]">
          <span>Server</span>
          <span className="scale-[0.8] ">
            <IoIosArrowDown />
          </span>
        </Link>
        <Link href={"#"} className="flex items-center gap-[2px]">
          <span>Domain</span>
          <span className="scale-[0.8] ">
            <IoIosArrowDown />
          </span>
        </Link>
        <Link href={"#"} className="flex items-center gap-[2px]">
          <span>Email Suite</span>
          <span className="scale-[0.8] ">
            <IoIosArrowDown />
          </span>
        </Link>
        <Link href={"#"} className="flex items-center gap-[2px]">
          <span>Services</span>
          <span className="scale-[0.8] ">
            <IoIosArrowDown />
          </span>
        </Link>
        <Link href={"#"} className="flex items-center gap-[2px]">
          <span>Internet Access</span>
          <span className="scale-[0.8] ">
            <IoIosArrowDown />
          </span>
        </Link>
        <Link href={"#"} className="flex items-center gap-[2px]">
          <span>Promo</span>
        </Link>
      </div>
      <div className="hidden lg:block">
        <Link
          href={"#"}
          className="text-[#FF6D0B] border border-[#FF6D0B] px-3 py-1.5 rounded-2xl font-semibold hover:bg-[#FF6D0B] hover:text-white duration-300"
        >
          Login
        </Link>
      </div>
      <div className="lg:hidden">
        <div className="w-fit border rounded p-2">
        <RxHamburgerMenu className='scale-150'/>
        </div>
      </div>
    </div>
    </nav>
  );
};

export default Topbar;
