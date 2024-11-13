import { Ref, forwardRef, ReactNode } from "react";
// Components
import { CoverLayout } from "../layout/CoverLayout";

interface CoverProps {
    title: string;
    name: string;
    props?: ReactNode;
}

export const Cover = forwardRef(({
    title,
    name,
    ...props
}: CoverProps, ref: Ref<HTMLDivElement>) => {
    return (
        <CoverLayout name={name} title={title} ref={ref} {...props} />
    );
});

Cover.displayName = "Cover";