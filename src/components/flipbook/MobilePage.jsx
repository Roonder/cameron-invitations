"use client"
import { forwardRef } from "react";
// Component 
import HTMLFlipBook from 'react-pageflip';
// Pages
import { Cover } from '@/components/pages/Cover';
import { FirstPage } from "@/components/pages/FirstPage"
import { SecondPage } from "@/components/pages/SecondPage"
import { ThirdPage } from "@/components/pages/ThirdPage"

export const MobilePage = forwardRef(({
    id,
    title,
    name,
    table,
    valid_to,
    ...props
}, ref) => {    
    return (
        <>
            <div className='flex items-center justify-center' ref={ref} {...props}>
                <HTMLFlipBook 
                    flippingTime={8e2}
                    width={375}
                    height={667}
                    minHeight={667}
                    maxHeight={667}  
                    swipeDistance={10}       
                >
                    <Cover title={title} name={name} />
                    <FirstPage number={1} />
                    <SecondPage number={2} valid_to={valid_to} table={table} />
                    <ThirdPage number={3} id={id} />
                </HTMLFlipBook>
            </div>
        </>
    );
});

MobilePage.displayName = "MobilePage";