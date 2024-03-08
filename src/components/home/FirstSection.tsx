/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getStaticURL } from "@/untils/constants";

export const FirstSection = () => {
    return (
        <div className="bg-[#fff7f7] relative">
            <div className="flex flex-col items-center relative">
                <div className="flex flex-col text-center italic text-[46px] font-libreBodoni font-bold text-black200 mt-[121px] mb-[107px] leading-[120%] z-50">
                    Chúng Tôi Ở Đây 
                    <span className="text-pink600">  
                        Để Giúp Bạn Đẹp Hơn Mỗi Ngày
                    </span>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 top-[64px]">
                    <img
                        src={`/assets/images/frame.svg`}
                        alt="Leaf"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-[63px] absolute top-[39px]">
                <div className="pl-[310px]">
                    <img
                        src={`/assets/images/twinkle-left.svg`}
                        alt="Leaf"
                        className=""
                    />
                </div>
                <div>
                    <img
                        src={`/assets/images/leaf-left.svg`}
                        alt="Leaf"
                        className=""
                    />
                </div>
            </div>
            <div className="flex flex-col gap-[61px] absolute right-0 top-1">
                <div>
                    <img
                        src={`/assets/images/leaf-right.svg`}
                        alt="Leaf"
                        className=""
                    />
                </div>
                <div className="w-full self-end">
                    <img
                        src={`/assets/images/twinkle-right.svg`}
                        alt="Leaf"
                        className=""
                    />
                </div>
            </div>
        </div>
    )
}