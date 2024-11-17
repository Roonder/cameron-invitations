import { Ref, forwardRef, ReactNode } from "react";
import Image from "next/image";
// Font
import { great_vibes } from "@/app/fonts"

interface CoverFamilyBannerProps {
    title: string;
    name: string;
    props?: ReactNode;
}

export const CoverFamilyBanner = forwardRef(({
    title,
    name
// eslint-disable-next-line @typescript-eslint/no-unused-vars
}: CoverFamilyBannerProps, ref: Ref<HTMLDivElement>) => {
    return (
        <>
            <p className={`text-2xl absolute -translate-y-[34%] top-[34%] w-full text-center`}><span className="text-inv-palid-pink font-bold pr-4">.  .  .  .</span>Estimada<span className="text-inv-palid-pink font-bold pl-4">.  .  .  .</span></p>
            <div ref={ref} className="w-full h-fit p-2 relative -translate-y-[42%] top-[42%] bg-inv-white border-2 border-inv-brown">
                <Image src={"/assets/corner-flower.png"} width={55} height={55} alt="Decorative Vines" className="absolute -top-7 -left-5" />
                <Image src={"/assets/corner-flower.png"} width={55} height={55} alt="Decorative Vines" className="absolute -top-7 -right-5 horizontal-reflect" />
                <Image src={"/assets/corner-flower.png"} width={55} height={55} alt="Decorative Vines" className="absolute -bottom-7 -left-5" />
                <Image src={"/assets/corner-flower.png"} width={55} height={55} alt="Decorative Vines" className="absolute -bottom-7 -right-5 horizontal-reflect" />

                <p className={`${great_vibes.className} text-4xl text-center`}>{title === "Chamo" ? `${name}` : `${title} ${name}`}</p>
            </div>
        </>
    );
});

CoverFamilyBanner.displayName = "CoverFamilyBanner";