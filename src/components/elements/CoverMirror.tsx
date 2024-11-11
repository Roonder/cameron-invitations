import { Ref, forwardRef, ReactNode } from "react";
import Image from "next/image";

interface CoverMirrorProps {
    props?: ReactNode;
}

export const CoverMirror = forwardRef(({
// eslint-disable-next-line @typescript-eslint/no-unused-vars
}: CoverMirrorProps, _ref: Ref<HTMLDivElement>) => {
    return (
        <>
            <Image src={"/assets/oval-mirror.png"} width={120} height={60} alt="Decorative Vines" className="absolute top-[4.5rem] -translate-x-1/2 left-1/2 " />
            <Image src={"/assets/lady-w.svg"} width={30} height={30} alt="Decorative Vines" className="absolute top-[6.5rem] -translate-x-1/2 left-1/2" />
            <Image src={"/assets/big-rose.svg"} width={60} height={60} alt="Decorative Vines" className="absolute top-[9.5rem] -translate-x-1/2 left-1/2" />
            <Image src={"/assets/white-long-leaf.svg"} width={90} height={90} alt="Decorative Vines" className="absolute top-36 right-1/2 mr-10" />
            <Image src={"/assets/white-long-leaf.svg"} width={90} height={90} alt="Decorative Vines" className="absolute top-36 left-1/2 ml-10 horizontal-reflect" />
        </>
    );
});

CoverMirror.displayName = "CoverMirror";