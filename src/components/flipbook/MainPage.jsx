"use client"
import { forwardRef } from "react";
import { useParams } from 'next/navigation';
// Component 
import { MobilePage } from "./MobilePage";
import { DesktopPage } from "./DesktopPage";
// Hooks
import { useInvitations } from '@/hooks/useInvitations';

export const MainPage = forwardRef(({
    ...props
// eslint-disable-next-line @typescript-eslint/no-unused-vars
}, _ref) => {
    const params = useParams();
    const { invitations, isLoading } = useInvitations(params?.id);

    if(isLoading) return <></>;
    
    return (
        <>
            <MobilePage
                id={invitations?._id}
                title={invitations?.title}
                name={invitations?.name}
                table={invitations?.table}
                valid_to={invitations?.valid_to}
                {...props} 
            />
            <DesktopPage
                id={invitations?._id}
                title={invitations?.title}
                name={invitations?.name}
                table={invitations?.table}
                valid_to={invitations?.valid_to}
                {...props}
        />
        </>
    );
});

MainPage.displayName = "MainPage";