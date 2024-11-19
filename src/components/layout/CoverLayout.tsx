import { Ref, forwardRef, useMemo, ReactNode } from "react";
import Image from "next/image";
// Components
import { CoverCornerLeafs } from "../elements/CoverCornerLeafs";
import { UpperCover } from "../elements/UpperCover";
import { CoverMirror } from "../elements/CoverMirror";
import { CoverFooter } from "../elements/CoverFooter";
import { CoverFamilyBanner } from "../elements/CoverFamilyBanner";

interface CoverLayoutProps {
    name: string;
    title: string;
    click?: boolean;
    props?: ReactNode;
}

export const CoverLayout = forwardRef(({
    name,
    title,
    click,
    ...props
}: CoverLayoutProps, ref: Ref<HTMLDivElement>) => {
    const titleMemo = useMemo(() => {
        switch(true) {
            case title.includes("Señores"):
                return "Estimados";
            case title.includes("Hermanos"):
                return "Estimados";
            case title.includes("Señor"):
                return "Estimado";
            case title.includes("Amigo"):
                return "Estimado";
            case title.includes("Señoras"):
                return "Estimadas";
            case title.includes("Hermanas"):
                return "Estimadas";
            case title.includes("Señora"):
                return "Estimada";
            case title.includes("Amiga"):
                return "Estimada";
            case title.includes("Familia"):
                return "Estimadas";
            default:
                return "Estimada"
        }
    }, [title])

    return (
        <div ref={ref} className="bg-inv-marble p-4 h-dvh w-dvw relative" {...props} >
            {click && (
                <Image src={"/assets/tap.png"} width={30} height={30} alt="Tap aqui" className="absolute top-1/2 -translate-x-1/2 right-10 mt-4 animate-bounce" />
            )}
            <div className="border-2 border-inv-palid-pink border-dotted border-spacing-10 p-4 h-full">
                <section className="h-full w-full relative overflow-hidden border-2 border-inv-brown">
                    <CoverCornerLeafs />
                    <UpperCover />
                    <CoverMirror />
                    <CoverFamilyBanner name={name} title={title} titleMemo={titleMemo} />
                    <CoverFooter />
                </section>
            </div>
        </div>
    );
});

CoverLayout.displayName = "CoverLayout";