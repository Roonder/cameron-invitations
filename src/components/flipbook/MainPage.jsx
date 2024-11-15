"use client"
import { forwardRef } from "react";
import { useParams } from 'next/navigation';
// Component 
import { MobilePage } from "./MobilePage";
import { DesktopPage } from "./DesktopPage";
// Hooks
import { useInvitations } from '@/hooks/useInvitations';
// Motion
import { motion } from "framer-motion";

export const MainPage = forwardRef(({
    ...props
// eslint-disable-next-line @typescript-eslint/no-unused-vars
}, _ref) => {
    const params = useParams();
    const { invitations, isLoading } = useInvitations(params?.id);

    if(isLoading) return( 
        <motion.div 
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 0 }}
            exit={{ x: 0, opacity: 0 }}
        ></motion.div>
    );
    
    return (
        <motion.div 
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: [0, .25, .5, .75, 1] }}
            exit={{ x: 0, opacity: 0 }}
            transition={{ ease: "easeIn", 
                duration: 2, 
                when: "beforeChildren",
                staggerChildren: 0.3,
            }}
        >
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
        </motion.div>
    );
});

MainPage.displayName = "MainPage";