import { Ref, forwardRef, ReactNode } from "react";
// Components
import { CoverCornerLeafs } from "../elements/CoverCornerLeafs";
import { UpperCover } from "../elements/UpperCover";
import { CoverMirror } from "../elements/CoverMirror";
import { CoverFooter } from "../elements/CoverFooter";
import { CoverFamilyBanner } from "../elements/CoverFamilyBanner";

interface CoverLayoutProps {
    name: string;
    title: string;
    props?: ReactNode;
}

export const CoverLayout = forwardRef(({
    name,
    title,
    ...props
}: CoverLayoutProps, ref: Ref<HTMLDivElement>) => {
    return (
        <div ref={ref} className="bg-inv-marble p-4 h-dvh w-dvw relative" {...props} data-density="hard">
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