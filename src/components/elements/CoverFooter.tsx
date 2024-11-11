import { Ref, forwardRef, ReactNode } from "react";
import Image from "next/image";
// Font
import { great_vibes } from "@/app/fonts"

interface CoverFooterProps {
    props?: ReactNode;
}

export const CoverFooter = forwardRef(({
// eslint-disable-next-line @typescript-eslint/no-unused-vars
}: CoverFooterProps, _ref: Ref<HTMLDivElement>) => {
    return (
        <>
            <Image src={"/assets/red-decoration.svg"} width={35} height={35} alt="Decorative Vines" className="absolute bottom-2 -translate-x-1/2 left-1/2 rotate-180" />
            <Image src={"/assets/pink-decoration.svg"} width={140} height={140} alt="Decorative Vines" className="absolute bottom-7 left-1/2 double-reflect mx-2" />
            <Image src={"/assets/pink-decoration.svg"} width={140} height={140} alt="Decorative Vines" className="absolute bottom-7 right-1/2 mx-2 vertical-reflect" />

            <Image src={"/assets/pink-dot.svg"} width={3} height={3} alt="Decorative Vines" className="absolute bottom-[4.6rem] right-1/2 mr-6" />
            <Image src={"/assets/crown.svg"} width={100} height={100} alt="Decorative Vines" className="absolute bottom-10 -translate-x-1/2 left-1/2" />
            <Image src={"/assets/pink-dot.svg"} width={3} height={3} alt="Decorative Vines" className="absolute bottom-[4.6rem] left-1/2 ml-6" />

            <div className="rotate-12 absolute bottom-[3.5rem] left-1/2 ml-14">
                <Image src={"/assets/spigue.svg"} width={60} height={60} alt="Decorative Vines" className="horizontal-reflect" />
            </div>
            <div className="-rotate-12 absolute bottom-[3.5rem] right-1/2 mr-14">
                <Image src={"/assets/spigue.svg"} width={60} height={60} alt="Decorative Vines" className="" />
            </div>

            <div className="absolute bottom-[6.8rem] right-1/2 mr-1">
                <Image src={"/assets/gold-white-flower.svg"} width={100} height={100} alt="Decorative Vines" className="" />

            </div>
            <div className="absolute bottom-[6.8rem] left-1/2 ml-1">
                <Image src={"/assets/gold-white-flower.svg"} width={100} height={100} alt="Decorative Vines" className="horizontal-reflect" />
            </div>

            <Image src={"/assets/pink-dot.svg"} width={3} height={3} alt="Decorative Vines" className="absolute bottom-[5.55rem] -translate-x-1/2 left-1/2" />
            <Image src={"/assets/pink-dot.svg"} width={3} height={3} alt="Decorative Vines" className="absolute bottom-[6rem] right-1/2 mr-4" />
            <Image src={"/assets/pink-dot.svg"} width={3} height={3} alt="Decorative Vines" className="absolute bottom-[6rem] left-1/2 ml-4" />
            <Image src={"/assets/gold-pink-decoration.svg"} width={40} height={40} alt="Decorative Vines" className="absolute bottom-24 -translate-x-1/2 left-1/2" />
            <Image src={"/assets/pink-dot.svg"} width={3.8} height={3.8} alt="Decorative Vines" className="absolute bottom-[9rem] -translate-x-1/2 left-1/2" />
            <Image src={"/assets/pink-dot.svg"} width={3.4} height={3.4} alt="Decorative Vines" className="absolute bottom-[10rem] -translate-x-1/2 left-1/2" />

            <Image src={"/assets/white-long-leaf.svg"} width={105} height={105} alt="Decorative Vines" className="absolute bottom-[10rem] right-1/2 mr-10 vertical-reflect" />
            <Image src={"/assets/white-long-leaf.svg"} width={105} height={105} alt="Decorative Vines" className="absolute bottom-[10rem] left-1/2 ml-10 double-reflect" />

            <Image src={"/assets/title-line.svg"} width={160} height={80} alt="Decorative Vines" className="absolute bottom-[11rem] -translate-x-1/2 left-1/2" />

            <p className={`text-[10px] absolute bottom-[18.4rem] w-full text-center`}>Nos complace invitarlos a los</p>
            <p className={`text-2xl ${great_vibes.className} absolute bottom-[15.75rem] w-full text-center `}><span className="text-inv-palid-pink font-bold pr-4">.  .  .  .</span><span className="text-5xl">15</span> años<span className="text-inv-palid-pink font-bold pl-4">.  .  .  .</span></p>
            <p className={`text-[10px] absolute bottom-[15.25rem] w-full text-center`}>de</p>
            <p className={`text-xl ${great_vibes.className} absolute bottom-[13.55rem] w-full text-center `}>Cameron Angely Escobar</p>


            
        </>
    );
});

CoverFooter.displayName = "CoverFooter";