"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src=""
          alt="Logo"
          width={`30`}
          height={`30`}
          className="object-contain"
        />
        <p className="logo_text">news</p>
      </Link>

      <div className="flex">
        
          <div className="flex gap-3 md:gap-5">
            <Link href="/">
              <a className="nav_link">Home</a>
              <a></a>
            </Link>
          </div>
      </div>

    </nav>
  );
};

export default Nav;
