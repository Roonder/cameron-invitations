import { Ref, forwardRef, ReactNode } from "react";
import Image from "next/image";
import { great_vibes } from "@/app/fonts";
// Components
import { PageLayout } from "../layout/PageLayout";
import { MapButton } from "../buttons/MapButton";
import Link from "next/link";

interface FirstPageProps {
    click?: boolean;
    props?: ReactNode;
}

export const FirstPage = forwardRef(({
    click,
    ...props
}: FirstPageProps, ref: Ref<HTMLDivElement>) => {
    return (
        <PageLayout ref={ref} click={click} {...props}>
            <div className="py-10">
                <Image src={"/assets/lady-w-oval-mirror.svg"} width={120} height={80} alt="Decorative Vines" className="mx-auto" />

                <h2 className={`${great_vibes.className} w-full text-3xl text-center`}>¡Oh, mis queridos lectores!</h2>

                {/* <p className="text-xs w-full px-4 mb-2 text-justify">Prepárense para un acontecimiento que sacudirá los cimientos de la sociedad. La joven señorita <span className={`${great_vibes.className}`}>Cameron Angely</span> está a punto de deslumbrarnos con su debut en la sociedad. La familia Escobar-Martínez ha organizado una velada que promete ser el tema de conversación de toda la temporada. ¿Acaso tendrá alguna sorpresa la velada? Solo quienes asistan podrán descubrirlo.</p> */}
                <p className="text-xs w-full px-4 mb-2 text-justify">Prepárense para un acontecimiento que sacudirá los cimientos de la sociedad. La joven señorita <span className={`${great_vibes.className} text-2xl text-inv-brown relative`}>Cameron Angely</span> está a punto de deslumbrarnos con su debut en la sociedad. La familia Escobar-Martínez ha organizado una velada que promete ser el tema de conversación de toda la temporada.</p>
                <p className="text-xs w-full px-4 mb-2 text-justify"><span className="font-semibold">El evento tendrá lugar el 21 de Diciembre</span>, donde las luces brillarán con intensidad y la música llenará el aire.</p>

                <p className="text-xs w-full px-4 mb-4 text-justify">Nos reuniremos en el encantador <span className="font-semibold">Salón de Fiestas Plaza Real,</span> situado en el <span className="font-semibold">Centro Comercial Castillejo - Piso 1</span> en <span className="font-semibold">Guatire.</span> Para su comodidad, pueden encontrar la ubicación en este enlace:
                </p>

                <div className="w-full justify-center flex gap-x-4">
                    <Image src={"/assets/lady-drink-left.svg"} width={45} height={45} alt="Decorative Vines" className="" />
                    <Link href={"https://maps.app.goo.gl/vFkvozt8Lc64YVfX8"}>
                        <MapButton />
                    </Link>
                    <Image src={"/assets/lady-drink-right.svg"} width={30} height={30} alt="Decorative Vines" className="" />
                </div>
            </div>
        </PageLayout>
    );
});

FirstPage.displayName = "FirstPage";