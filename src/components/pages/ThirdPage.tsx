"use client"
import { Ref, forwardRef, ReactNode } from "react";
import Image from "next/image";
// Toastify
import { toast, Flip } from "react-toastify";
// Components
import { PageLayout } from "../layout/PageLayout";
import { great_vibes } from "@/app/fonts";
// Types
import { ObjectId } from "mongoose";

interface ThirdPageProps {
    id: ObjectId;
    props?: ReactNode;
}

export const ThirdPage = forwardRef(({
    id,
    ...props
}: ThirdPageProps, ref: Ref<HTMLDivElement>) => {

    const confirm = async () => {
        try {
            const res = await fetch("/api/invitations", {
                method: "PUT",
                body: JSON.stringify({
                    _id: id.toString(),
                    confirmation: true,
                    confirmed_at: new Date()
                })
            });

            if(res.status === 202)
                toast('¡Gracias por confirmar!', {
                    position: "top-right",
                    autoClose: 25e2,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Flip,
                });
        } catch (error) {
            if(error instanceof Error)
                console.log(error.message);
        }
    }

    const deny = async () => {
        try {
            const res = await fetch("/api/invitations", {
                method: "PUT",
                body: JSON.stringify({
                    _id: id.toString(),
                    confirmation: false,
                    confirmed_at: new Date()
                })
            });

            if(res.status === 202)
                toast('¡Gracias por confirmar!', {
                    position: "top-right",
                    autoClose: 25e2,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Flip,
                });
        } catch (error) {
            if(error instanceof Error)
                console.log(error.message);
        }
    }

    return (
        <PageLayout ref={ref} {...props}>
            <div className="py-10">
                <div className="w-full flex justify-evenly mt-4 relative z-20">
                    <Image src={"/assets/money1.svg"} width={35} height={35} alt="Decorative Vines" className="" />
                    <Image src={"/assets/money2.svg"} width={35} height={35} alt="Decorative Vines" className="" />
                    <Image src={"/assets/money3.svg"} width={35} height={35} alt="Decorative Vines" className="" />
                    <Image src={"/assets/falling-glitter.png"} width={310} height={120} alt="Decorative Vines" className="absolute -translate-x-1/2 left-1/2 -top-14 -z-[1] opacity-60" />
                </div>
    
                <p className="text-xs px-4 text-justify mt-4 mb-2">
                    <span className="font-semibold">Para aquellos que deseen honrar a la cumpleañera con un obsequio de distinción</span>, la quinceañera sugiere que en un sobre le será mejor.
                </p>

                <Image src={"/assets/golden-leaves.png"} width={300} height={40} alt="Decorative Vines" className="mx-auto my-4" />

                <p className="text-xs px-4 text-justify my-2">
                    Se espera la asistencia de cada uno de ustedes a tan memorable celebración, quienes con su presencia honrarán tan especial ocasión. 
                </p>
                <p className="text-xs px-4 text-justify my-2">
                    Por lo tanto, <span className="font-semibold">puede confirmar o dimitir su asistencia haciendo click en alguno de los siguientes botones</span>. Puede cambiar su estado de asistencia cuando desee.
                </p>

                <div className="w-full flex items-center justify-evenly mt-2">
                    <button onClick={confirm} className="relative z-40">
                        <Image src={"/assets/leaf-button.svg"} width={100} height={100} alt="Decorative Vines" className="" />
                        <p className={`${great_vibes.className} text-xl absolute -translate-x-1/2 left-1/2 -translate-y-1/2 top-1/2 mt-1 w-fit`}>Asistiré</p>
                    </button>
                    <button onClick={deny} className="relative z40">
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