/* eslint-disable @next/next/no-img-element */
"use client";
import { HEADER_DATA, getStaticURL } from "@/untils/constants";
import Link from "next/link";
import { ButtonPrimary } from "../ButtonPrimary";
import { ArrowBottomIcon } from "@/assets/icons/ArrowBottomIcon";
import { useState } from "react";

const Header = () => {
  const [isHover, setIsHover] = useState<boolean>();
  
  return (
    <div className="sticky top-0 left-0 right-0 z-[100] flex justify-between items-center h-[106px] px-[50px] bg-[#fff7f7] border-b border-[#FFE8EC]">
      <Link
        href={"/"}
      >
        <img 
          src={`/assets/images/Logo.svg`}
          alt="Logo"
          className=""
        />
      </Link>
      <div className="flex gap-8 text-xl">
        {HEADER_DATA.map((item, index) => (
          <Link 
            key={index}
            href={item.link}
            className="group flex gap-2 items-center hover:text-red200"
            onMouseMove={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {item.label}
            {item.list && <ArrowBottomIcon color={isHover ? "#C2153E" : "#1C1B1F"}/>}
          </Link>
        ))}
      </div>
      <ButtonPrimary url="#advise-free" title="Tư vấn miễn phí" containerStyle="transaction duration-300 ease-in-out"/>
    </div>
  );
};

export default Header;
