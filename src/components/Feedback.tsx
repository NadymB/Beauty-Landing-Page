import { CommaIcon } from "@/assets/icons/CommaIcon";

interface IFeedback {
    content: string;
    avatarUrl: string;
    userName: string;
}

export const Feedback = ({content, avatarUrl, userName} : IFeedback) => {
    return (
        <div className="flex flex-col gap-4 py-4 px-8 rounded-3xl bg-pink200">
            <span className="text-xl text-red100 font-normal">{content}</span>
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div
                        className="w-10 h-10 rounded-full"
                        style={{
                            backgroundImage: `url(${avatarUrl})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    />
                    <span className="text-base text-red100 font-bold">{userName}</span>
                </div>
                <div className="flex gap-[2px]">
                    <CommaIcon />
                    <CommaIcon />
                </div>
            </div>
        </div>
    )
}