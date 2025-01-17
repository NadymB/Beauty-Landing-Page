/* eslint-disable @next/next/no-img-element */
import { SERVICE_DATA, getStaticURL } from "@/untils/constants"
import { ServiceCard } from "../ServiceCard"
import { ButtonPrimary } from "../ButtonPrimary"
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon"

export const ThirdSection = () => {
    return (
        <div className="flex flex-col gap-10 items-center px-[56px] pb-[75px] pt-[56px] relative">
            <div
                style={{
                    backgroundImage: `url(/assets/images/frame-bottom.svg)`,
                    backgroundRepeat: "no-repeat"
                }} 
                className="absolute -top-[200px] w-[560px] h-[353px]"
            />
            <h2 className="font-libreBodoni text-[46px] text-black200 text-center italic z-50 mb-0">Dịch Vụ Của Chúng Tôi</h2>
            <div className="flex gap-6">
                {SERVICE_DATA.map((item, index) => (
                    <ServiceCard 
                        key={index}
                        imageName={item.imageUrl}
                        serviceName={item.name}
                        serviceContent={item.content}
                    />
                ))}
            </div>
            <ButtonPrimary 
                url="/"
                title="Xem thêm"
                rightIcon={<ArrowRightIcon />}
            />
        </div>
    )
}