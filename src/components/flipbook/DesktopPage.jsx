"use client"
import { forwardRef } from "react";
// Component 
import HTMLFlipBook from 'react-pageflip';
// Pages
import { Cover } from '@/components/pages/Cover';
import { FirstPage } from "@/components/pages/FirstPage"
import { SecondPage } from "@/components/pages/SecondPage"
import { ThirdPage } from "@/components/pages/ThirdPage"

export const DesktopPage = forwardRef(({
    id,
    title,
    name,
    table,
    valid_to,
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
                    <Cover title={title} name={name} />
                    <FirstPage />
                    <SecondPage valid_to={valid_to} table={table} />
                    <ThirdPage id={id} />
                </HTMLFlipBook>
            </div>
        </>
    );
});

DesktopPage.displayName = "DesktopPage";