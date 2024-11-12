import { Ref, forwardRef, ReactNode } from "react";
// Components
import { CoverLayout } from "../layout/CoverLayout";

interface CoverProps {
    family: string;
    props?: ReactNode;
}

export const Cover = forwardRef(({
    family,
    ...props
}: CoverProps, ref: Ref<HTMLDivElement>) => {
    return (
        <CoverLayout family={family} ref={ref} {...props} />
    );
});

Cover.displayName = "Cover";