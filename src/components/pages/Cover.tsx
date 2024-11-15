import { Ref, forwardRef, ReactNode } from "react";
// Components
import { CoverLayout } from "../layout/CoverLayout";

interface CoverProps {
    title: string;
    name: string;
    click?: boolean;
    props?: ReactNode;
}

export const Cover = forwardRef(({
    title,
    name,
    click,
    ...props
}: CoverProps, ref: Ref<HTMLDivElement>) => {
    return (
        <CoverLayout name={name} click={click} title={title} ref={ref} {...props} />
    );
});

Cover.displayName = "Cover";