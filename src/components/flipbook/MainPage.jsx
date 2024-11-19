"use client"
import { forwardRef, useRef, useState } from "react";
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
    const [once, setOnce] = useState(false);
    const audioRef = useRef(null);

    const play = async () => {
        if(!once) {
            audioRef.current.volume = .2
            await audioRef.current.play();
            audioRef.current.volume = .5
            audioRef.current.volume = 1
            setOnce(true);
        }
    }

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
            onClick={play}
        >
            <audio ref={audioRef} src="/audio/intro.mp3" loop />

            <MobilePage
                id={invitations?._id}
                title={invitations?.title}
                name={invitations?.name}
                table={invitations?.table}
                valid_to={invitations?.valid_to}
                kids={invitations?.kids}
                once={once}
                {...props} 
            />
            <DesktopPage
                id={invitations?._id}
                title={invitations?.title}
                name={invitations?.name}
                table={invitations?.table}
                valid_to={invitations?.valid_to}
                kids={invitations?.kids}
                once={once}
                {...props}
        />
        </motion.div>
    );
});

MainPage.displayName = "MainPage";