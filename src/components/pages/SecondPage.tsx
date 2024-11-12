import { Ref, forwardRef, ReactNode } from "react";
import Image from "next/image";
import { great_vibes } from "@/app/fonts";
// Components
import { PageLayout } from "../layout/PageLayout";

interface SecondPageProps {
    props?: ReactNode;
}

export const SecondPage = forwardRef(({
    ...props
}: SecondPageProps, ref: Ref<HTMLDivElement>) => {
    return (
        <PageLayout ref={ref} {...props}>
            <div className="py-10">
                <h2 className={`${great_vibes.className} w-full text-2xl text-center`}>Su número de mesa será</h2>

                <Image src={"/assets/oval-mirror.png"} width={120} height={50} alt="Decorative Vines" className="mx-auto -mt-2" />
                <p className={`${great_vibes.className} text-5xl absolute top-[6.4rem] -translate-x-1/2 left-1/2 mb-2`}>2</p>
                <p className={`${great_vibes.className} text-3xl w-full text-center`}>Valido para 0 personas</p>
                <p className="text-xs px-4 text-justify">
                    El atuendo de la velada es de carácter <span className="font-semibold">formal</span> para realzar la elegancia del momento, y se solicita encarecidamente que los más <span className="font-semibold">pequeños de la casa se queden descansando plácidamente en sus hogares.</span>
                </p>

                <Image src={"/assets/dancing-couple.svg"} width={120} height={50} alt="Decorative Vines" className="mx-auto mt-2" />

                <p className="text-xs px-4 text-justify mt-2">
                    La celebración <span className="font-semibold">comenzará a las 8:30pm</span>, y será un honor ver a nuestra quinceañera hacer su <span className="font-semibold">entrada triunfal a las 9:30pm</span>.
                </p>
            </div>
        </PageLayout>
    );
});

SecondPage.displayName = "SecondPage";