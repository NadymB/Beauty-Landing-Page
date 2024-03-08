/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/untils/constants";

export const FifSection = () => {
    return (
        <div className="flex flex-col gap-[27px] items-center py-14 bg-pink400">
            <h2 className="font-libreBodoni font-bold text-[30px] text-red100 italic">Hợp Tác Với Những Thương Hiệu Nổi Tiếng</h2>
            <div className="flex gap-2">
                {Array.from({ length: 4 }, (_, index) => (
                    <img 
                        key={index}
                        src={`/assets/images/cocoon.svg`}
                        alt="Cocoon Brand"
                    />
                ))}
            </div>
        </div>
    )
}