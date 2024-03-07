/* eslint-disable @next/next/no-img-element */
import { getStaticURL } from "@/untils/constants"
import { Feedback } from "../Feedback"
import { ButtonPrimary } from "../ButtonPrimary"
import { ArrowRightIcon } from "@/assets/icons/ArrowRightIcon"

export const SeventhSection = () => {
    return (
        <div className="flex gap-6 items-stretch">
            <div 
                style={{backgroundImage: `url(/assets/images/flowers.svg)`}}
                className="flex-1"
            />
            <div className="flex-1 flex flex-col gap-16 pr-14">
                <h2 className="font-libreBodoni text-[48px] text-black200 italic mb-0">Phản Hồi Của Khách Hàng</h2>
                <div className="flex flex-col gap-6">
                    {Array.from({length: 3}, (_, index) => (
                        <Feedback 
                            key={index}
                            avatarUrl={`/assets/images/user.svg`}
                            userName="Huỳnh Quốc Khánh"
                            content="Lorem ipsum dolor sit amet consectetur. Enim ipsum ultricies consectetur ullamcorper urna consequat nibh. Hendrerit suspendisse mi libero hendrerit. Risus quisque bibendum et a diam pellentesque pulvinar. Risus nunc sollicitudin interdum diam quam dis at interdum aliquam."
                        />
                    ))}
                </div>
                <ButtonPrimary 
                    url="/"
                    title="Xem tất cả"
                    rightIcon={<ArrowRightIcon />}
                />
            </div>
        </div>
    )
}