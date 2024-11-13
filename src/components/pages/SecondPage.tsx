import { Ref, forwardRef, ReactNode } from "react";
import Image from "next/image";
import { great_vibes } from "@/app/fonts";
// Components
import { PageLayout } from "../layout/PageLayout";

interface SecondPageProps {
    table: number;
    valid_to: number;
    props?: ReactNode;
}

export const SecondPage = forwardRef(({
    table,
    valid_to,
    ...props
}: SecondPageProps, ref: Ref<HTMLDivElement>) => {
    return (
        <PageLayout ref={ref} {...props}>
            <div className="py-10">
                <h2 className={`${great_vibes.className} w-full text-2xl text-center`}>Su número de mesa será</h2>

                <div className="relative z-20">
                    <Image src={"/assets/oval-mirror.png"} width={140} height={50} alt="Decorative Vines" className="mx-auto -mt-2 z-10" />
                    <Image src={"/assets/golden-leave.png"} width={140} height={50} alt="Decorative Vines" className="absolute -translate-y-1/2 top-[35%] -right-5 -z-10 horizontal-reflect" />
                    <Image src={"/assets/golden-leave.png"} width={140} height={50} alt="Decorative Vines" className="absolute -translate-y-1/2 top-1/2 -left-5 -z-10 " />
                    <Image src={"/assets/mirror-flowers.png"} width={60} height={60} alt="Decorative Vines" className="absolute -translate-x-1/2 left-1/2 -top-6 -ml-8 rotate-45" />
                    <p className={`${great_vibes.className} text-5xl absolute top-12 -translate-x-1/2 left-1/2 mb-2`}>{table}</p>
                    <Image src={"/assets/mirror-flowers.png"} width={60} height={60} alt="Decorative Vines" className="absolute -translate-x-1/2 right-1/2 -bottom-8 -mr-20 rotate-[230deg]" />
                </div>
                <p className={`${great_vibes.className} text-3xl w-full text-center`}>Valido para {valid_to} personas</p>
                <p className="text-xs px-4 text-justify my-3">
                    {/* El atuendo de la velada es de carácter <span className="font-semibold">formal</span> para realzar la elegancia del momento, y se solicita encarecidamente que los más <span className="font-semibold">pequeños de la casa se queden descansando plácidamente en sus hogares.</span> */}
                    El atuendo de la velada es de carácter <span className="font-semibold">formal</span> para realzar la elegancia del momento.
                </p>

                <div className="relative overflow-hidden z-20 mt-1">
                    <Image src={"/assets/falling-glitter.png"} width={310} height={120} alt="Decorative Vines" className="absolute -translate-x-1/2 left-1/2 -z-[1]" />
                    <Image src={"/assets/dancing-couple.svg"} width={300} height={120} alt="Decorative Vines" className="mx-auto mt-2 z-10" />
                    <Image src={"/assets/glitter.gif"} width={120} height={120} alt="Decorative Vines" className="absolute left-1/2 ml-2 bottom-5 -z-[1]" />
                    <Image src={"/assets/glitter.gif"} width={120} height={120} alt="Decorative Vines" className="absolute right-1/2 mr-2 bottom-5 -z-[1]" />
                </div>

                <p className="text-xs px-4 text-justify mt-2">
                    La celebración <span className="font-semibold">comenzará a las 8:30pm</span>, y será un honor ver a nuestra quinceañera hacer su <span className="font-semibold">entrada triunfal a las 9:30pm</span>.
                </p>
            </div>
        </PageLayout>
    );
});

SecondPage.displayName = "SecondPage";