"use client"
import { Ref, forwardRef, ReactNode } from "react";
import Image from "next/image";
// import { great_vibes } from "@/app/fonts";
// Components
import { PageLayout } from "../layout/PageLayout";
import { great_vibes } from "@/app/fonts";

interface ThirdPageProps {
    props?: ReactNode;
}

export const ThirdPage = forwardRef(({
    ...props
}: ThirdPageProps, ref: Ref<HTMLDivElement>) => {
    return (
        <PageLayout ref={ref} {...props}>
            <div className="py-10">
                <div className="w-full flex justify-evenly mt-4">
                    <Image src={"/assets/money1.svg"} width={35} height={35} alt="Decorative Vines" className="" />
                    <Image src={"/assets/money2.svg"} width={35} height={35} alt="Decorative Vines" className="" />
                    <Image src={"/assets/money3.svg"} width={35} height={35} alt="Decorative Vines" className="" />

                </div>
    
                <p className="text-xs px-4 text-justify my-2">
                    <span className="font-semibold">Para aquellos que deseen honrar a la cumpleañera con un obsequio de distinción</span>, la quinceañera sugiere que en un sobre le será mejor.
                </p>
                <p className="text-xs px-4 text-justify my-2">
                    Se espera la asistencia de cada uno de ustedes a tan memorable celebración, quienes con su presencia honrarán tan especial ocasión. 
                </p>
                <p className="text-xs px-4 text-justify my-2">
                    Por lo tanto, <span className="font-semibold">puede confirmar o dimitir su asistencia haciendo click en alguno de los siguientes botones</span>. Puede cambiar su estado de asistencia cuando desee.
                </p>

                <div className="w-full flex items-center justify-evenly mt-2">
                    <button onClick={() => console.log("boi")} className="relative">
                        <Image src={"/assets/leaf-button.svg"} width={100} height={100} alt="Decorative Vines" className="" />
                        <p className={`${great_vibes.className} text-xl absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 mt-1 w-fit`}>Asistiré</p>
                    </button>
                    <button onClick={() => console.log("no boi")} className="relative">
                        <Image src={"/assets/leaf-button.svg"} width={100} height={100} alt="Decorative Vines" className="" />
                        <p className={`${great_vibes.className} text-xl absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 mt-1 w-[5rem]`}>No asistiré</p>
                    </button>
                </div>

                <p className="text-xs px-4 text-justify my-4 font-thin">
                La familia Escobar-Martínez agradece de antemano su gentil asistencia y espera recibirlos con los brazos abiertos en este día tan especial.
                </p>
            </div>
        </PageLayout>
    );
});

ThirdPage.displayName = "ThirdPage";