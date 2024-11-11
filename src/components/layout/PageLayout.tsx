import { Ref, forwardRef, ReactNode } from "react";
// Components
import { VinesDisplay } from "../elements/VinesDisplay";
import { FlowersDisplay } from "../elements/FlowersDisplay";

interface PageLayoutProps {
    children: ReactNode;
    props?: ReactNode;
}

export const PageLayout = forwardRef(({
    children
}: PageLayoutProps, ref: Ref<HTMLDivElement>) => {
    return (
        <main ref={ref} className="bg-[url('/assets/background.svg')] bg-center bg-cover p-8 h-dvh w-dvw">
            <section className="h-full w-full bg-inv-marble relative rounded-md overflow-hidden">
                <VinesDisplay />
                <FlowersDisplay />

                {children}
            </section>
        </main>
    );
});

PageLayout.displayName = "PageLayout";