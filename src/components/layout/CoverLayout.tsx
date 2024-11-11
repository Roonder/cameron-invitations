import { Ref, forwardRef, ReactNode } from "react";
// Components
import { CoverCornerLeafs } from "../elements/CoverCornerLeafs";
import { UpperCover } from "../elements/UpperCover";
import { CoverMirror } from "../elements/CoverMirror";
import { CoverFooter } from "../elements/CoverFooter";
import { CoverFamilyBanner } from "../elements/CoverFamilyBanner";

interface CoverLayoutProps {
    children: ReactNode;
    props?: ReactNode;
}

export const CoverLayout = forwardRef(({
    children
}: CoverLayoutProps, ref: Ref<HTMLDivElement>) => {
    return (
        <main ref={ref} className="bg-inv-marble p-4 h-dvh w-dvw relative">
            <div className="border-2 border-inv-palid-pink border-dotted border-spacing-10 p-4 h-full">
                <section className="h-full w-full relative overflow-hidden border-2 border-inv-brown">
                    <CoverCornerLeafs />
                    <UpperCover />
                    <CoverMirror />
                    <CoverFamilyBanner family="Familia N" />
                    {children}
                    <CoverFooter />
                </section>
            </div>
        </main>
    );
});

CoverLayout.displayName = "CoverLayout";
{/* <Image src={"/assets/center-flower.png"} width={120} height={60} alt="Decorative Vines" className="absolute top-0 -translate-x-1/2 left-1/2" /> */}