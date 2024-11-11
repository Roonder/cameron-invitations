import { Ref, forwardRef, ReactNode } from "react";
import Image from "next/image";

interface CoverCornerLeafsProps {
    props?: ReactNode;
}

export const CoverCornerLeafs = forwardRef(({
// eslint-disable-next-line @typescript-eslint/no-unused-vars
}: CoverCornerLeafsProps, _ref: Ref<HTMLDivElement>) => {
    return (
        <>
            <Image src={"/assets/cover-corner-leaf.svg"} width={60} height={60} alt="Decorative Vines" className="absolute top-1 left-1" />
                    <Image src={"/assets/cover-corner-leaf.svg"} width={60} height={60} alt="Decorative Vines" className="absolute top-1 right-1 horizontal-reflect" />
                    <Image src={"/assets/cover-corner-leaf.svg"} width={60} height={60} alt="Decorative Vines" className="absolute bottom-1 left-1 vertical-reflect" />
                    <Image src={"/assets/cover-corner-leaf.svg"} width={60} height={60} alt="Decorative Vines" className="absolute bottom-1 right-1 double-reflect" />
        </>
    );
});

CoverCornerLeafs.displayName = "CoverCornerLeafs";