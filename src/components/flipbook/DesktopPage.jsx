"use client"
import { forwardRef } from "react";
// Component 
import HTMLFlipBook from 'react-pageflip';
// Pages
import { Cover } from '@/components/pages/Cover';
import { WelcomePage } from "../pages/WelcomePage";
import { AuxPage } from "../pages/AuxPage";
import { FirstPage } from "@/components/pages/FirstPage"
import { SecondPage } from "@/components/pages/SecondPage"
import { ThirdPage } from "@/components/pages/ThirdPage"
import { FinalPage } from "../pages/FinalPage";

export const DesktopPage = forwardRef(({
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
            <div className='flex items-center justify-center px-6' ref={ref} {...props}>
                <HTMLFlipBook 
                    flippingTime={15e2}
                    width={375}
                    height={667}
                    minHeight={667}
                    maxHeight={1080}     
                    showCover={true}   
                >
                    <Cover click={false} title={title} name={name} />
                    <AuxPage />
                    <WelcomePage click={true} once={once} />
                    <FirstPage click={true} />
                    <SecondPage click={true} valid_to={valid_to} table={table} />
                    <AuxPage />
                    <ThirdPage click={true} id={id} />
                    <FinalPage />
                </HTMLFlipBook>
            </div>
        </>
    );
});

DesktopPage.displayName = "DesktopPage";