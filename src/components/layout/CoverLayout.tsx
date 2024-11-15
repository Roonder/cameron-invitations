import { Ref, forwardRef, ReactNode } from "react";
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
    return (
        <div ref={ref} className="bg-inv-marble p-4 h-dvh w-dvw relative" {...props} data-density="hard">
            {click && (
                <Image src={"/assets/tap.png"} width={20} height={20} alt="Tap aqui" className="absolute top-1/2 -translate-x-1/2 right-10 mt-4 animate-bounce" />
            )}
            <div className="border-2 border-inv-palid-pink border-dotted border-spacing-10 p-4 h-full">
                <section className="h-full w-full relative overflow-hidden border-2 border-inv-brown">
                    <CoverCornerLeafs />
                    <UpperCover />
                    <CoverMirror />
                    <CoverFamilyBanner name={name}title={title} />
                    <CoverFooter />
                </section>
            </div>
        </div>
    );
});

CoverLayout.displayName = "CoverLayout";