import { Ref, forwardRef, ReactNode } from "react";
import Image from "next/image";

interface UpperCoverProps {
    props?: ReactNode;
}

export const UpperCover = forwardRef(({
// eslint-disable-next-line @typescript-eslint/no-unused-vars
}: UpperCoverProps, _ref: Ref<HTMLDivElement>) => {
    return (
        <>
            <Image src={"/assets/red-decoration.svg"} width={35} height={35} alt="Decorative Vines" className="absolute top-2 -translate-x-1/2 left-1/2" />
            <Image src={"/assets/pink-decoration.svg"} width={140} height={140} alt="Decorative Vines" className="absolute top-7 left-1/2 horizontal-reflect mx-2" />
            <Image src={"/assets/pink-decoration.svg"} width={140} height={140} alt="Decorative Vines" className="absolute top-7 right-1/2 mx-2" />
            <div className="rotate-[170deg] absolute top-[4rem] left-1/2 ml-[4rem]">
                <Image src={"/assets/spigue.svg"} width={55} height={55} alt="Decorative Vines" className="" />
            </div>
            <div className="-rotate-[170deg] absolute top-[4rem] right-1/2 mr-[4rem]">
                <Image src={"/assets/spigue.svg"} width={55} height={55} alt="Decorative Vines" className="horizontal-reflect" />
            </div>

            <Image src={"/assets/red-heart.svg"} width={60} height={60} alt="Decorative Vines" className="absolute top-10 -translate-x-1/2 left-1/2" />

            <div className="rotate-[5deg] absolute top-[3rem] left-1/2 ml-6">
                <Image src={"/assets/pink-white-flower.svg"} width={50} height={50} alt="Decorative Vines" className="" />
            </div>
            <div className="-rotate-[5deg] absolute top-[3rem] right-1/2 mr-6">
                <Image src={"/assets/pink-white-flower.svg"} width={50} height={50} alt="Decorative Vines" className="horizontal-reflect" />
            </div>
        </>
    );
});

UpperCover.displayName = "UpperCover";