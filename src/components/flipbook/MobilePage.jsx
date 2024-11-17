"use client"
import { forwardRef } from "react";
// Component 
import HTMLFlipBook from 'react-pageflip';
// Pages
import { Cover } from '@/components/pages/Cover';
import { WelcomePage } from "../pages/WelcomePage";
import { FirstPage } from "@/components/pages/FirstPage"
import { SecondPage } from "@/components/pages/SecondPage"
import { ThirdPage } from "@/components/pages/ThirdPage"
import { FinalPage } from "../pages/FinalPage";

export const MobilePage = forwardRef(({
    id,
    title,
    name,
    table,
    valid_to,
    once,
    ...props
}, ref) => {    
    return (
        <>
            <div className='flex items-center justify-center md:hidden' ref={ref} {...props}>
                <HTMLFlipBook 
                    flippingTime={15e2}
                    width={375}
                    height={667}
                    minHeight={667}
                    maxHeight={667}  
                    swipeDistance={10}  
                    startZIndex={0}     
                >
                    <Cover click={true} title={title} name={name} />
                    <WelcomePage click={true} once={once} />
                    <FirstPage click={true} />
                    <SecondPage click={true} valid_to={valid_to} table={table} />
                    <ThirdPage id={id} click={true} />
                    <FinalPage />
                </HTMLFlipBook>
            </div>
        </>
    );
});

MobilePage.displayName = "MobilePage";