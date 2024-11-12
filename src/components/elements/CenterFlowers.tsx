import { Ref, forwardRef, ReactNode } from "react";
import Image from "next/image";

interface CenterFlowersProps {
    props?: ReactNode;
}

export const CenterFlowers = forwardRef(({
// eslint-disable-next-line @typescript-eslint/no-unused-vars
}: CenterFlowersProps, _ref: Ref<HTMLDivElement>) => {
    return (
        <>
            <Image src={"/assets/center-flower.png"} width={120} height={60} alt="Decorative Vines" className="absolute -top-5 z-10 -translate-x-1/2 left-1/2" />
            <Image src={"/assets/center-flower.png"} width={120} height={60} alt="Decorative Vines" className="absolute -bottom-5 z-10 -translate-x-1/2 left-1/2" />
        </>
    );
});

CenterFlowers.displayName = "CenterFlowers";