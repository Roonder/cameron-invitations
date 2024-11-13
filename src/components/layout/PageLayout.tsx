import { Ref, forwardRef, ReactNode } from "react";
import Image from "next/image";
// Components
import { VinesDisplay } from "../elements/VinesDisplay";
import { FlowersDisplay } from "../elements/FlowersDisplay";
import { CenterFlowers } from "../elements/CenterFlowers";

interface PageLayoutProps {
    children: ReactNode;
    props?: ReactNode;
}

export const PageLayout = forwardRef(({
    children,
    ...props
}: PageLayoutProps, ref: Ref<HTMLDivElement>) => {
    return (
        <>
            <div ref={ref} className="bg-[url('/assets/background.svg')] bg-center bg-cover p-8 h-dvh w-dvw" data-density="soft" {...props}>
                <CenterFlowers />
                <Image src={"/assets/tap.png"} width={25} height={25} alt="Tap aqui" className="absolute top-1/2 -translate-x-1/2 right-0 -mt-24 animate-bounce" />

                <section className="h-full w-full bg-inv-marble relative rounded-md overflow-hidden">
                    <VinesDisplay />
                    <FlowersDisplay />

                    {children}
                </section>
            </div>
        </>
    );
});

PageLayout.displayName = "PageLayout";