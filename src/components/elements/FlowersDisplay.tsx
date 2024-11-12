import { Ref, forwardRef, ReactNode } from "react";
import Image from "next/image";

interface FlowersDisplayProps {
    props?: ReactNode;
}

export const FlowersDisplay = forwardRef(({
// eslint-disable-next-line @typescript-eslint/no-unused-vars
}: FlowersDisplayProps, _ref: Ref<HTMLDivElement>) => {
    return (
        <>
            <Image src={"/assets/corner-flower.png"} width={120} height={60} alt="Decorative Vines" className="absolute -top-10 -left-10 -rotate-45" />
            <Image src={"/assets/corner-flower.png"} width={120} height={60} alt="Decorative Vines" className="absolute -top-10 -right-10 rotate-45" />
            <Image src={"/assets/corner-flower.png"} width={120} height={60} alt="Decorative Vines" className="absolute -bottom-10 -left-10 rotate-45 horizontal-reflect" />
            <Image src={"/assets/corner-flower.png"} width={120} height={60} alt="Decorative Vines" className="absolute -bottom-10 -right-10 rotate-45" />
        </>
    );
});

FlowersDisplay.displayName = "FlowersDisplay";