import { Ref, forwardRef, ReactNode } from "react";
// Components
import { PageLayout } from "../layout/PageLayout";


interface AuxPageProps {
    click?: boolean;
    props?: ReactNode;
}

export const AuxPage = forwardRef(({
    click,
    ...props
}: AuxPageProps, ref: Ref<HTMLDivElement>) => {
    return (
        <PageLayout ref={ref} click={click} {...props}>
            <></>
        </PageLayout>
    );
});

AuxPage.displayName = "AuxPage";