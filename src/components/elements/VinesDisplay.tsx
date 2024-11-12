import { Ref, forwardRef, ReactNode } from "react";
import Image from "next/image";


interface VinesDisplayProps {
    props?: ReactNode;
}

export const VinesDisplay = forwardRef(({
// eslint-disable-next-line @typescript-eslint/no-unused-vars
}: VinesDisplayProps, _ref: Ref<HTMLDivElement>) => {
    return (
        <>
            <Image src={"/assets/corner-vines.png"} width={120} height={60} alt="Decorative Vines" className="absolute top-0" />
            <Image src={"/assets/corner-vines.png"} width={120} height={60} alt="Decorative Vines" className="absolute right-0 horizontal-reflect" />
            <Image src={"/assets/corner-vines.png"} width={120} height={60} alt="Decorative Vines" className="absolute -top-12 left-1/2 -translate-x-1/6 " />
            <Image src={"/assets/corner-vines.png"} width={120} height={60} alt="Decorative Vines" className="absolute -top-12 right-1/2 -translate-x-1/4 horizontal-reflect " />
            <Image src={"/assets/corner-vines.png"} width={120} height={60} alt="Decorative Vines" className="absolute right-0 horizontal-reflect" />
            <Image src={"/assets/corner-vines.png"} width={120} height={60} alt="Decorative Vines" className="absolute right-0 bottom-0  rotate-180" />
            <Image src={"/assets/corner-vines.png"} width={120} height={60} alt="Decorative Vines" className="absolute bottom-0 vertical-reflect" />
            <Image src={"/assets/corner-vines.png"} width={120} height={60} alt="Decorative Vines" className="absolute -bottom-12 left-1/2 -translate-x-1/6 vertical-reflect" />
            <Image src={"/assets/corner-vines.png"} width={120} height={60} alt="Decorative Vines" className="absolute -bottom-12 right-1/2 -translate-x-1/4 double-reflect" />
        </>
    );
});

VinesDisplay.displayName = "VinesDisplay";