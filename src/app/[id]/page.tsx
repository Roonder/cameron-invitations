"use client"
// Component 
import HTMLFlipBook from 'react-pageflip';
// Pages
import { Cover } from '@/components/pages/Cover';
import { FirstPage } from "@/components/pages/FirstPage"
import { SecondPage } from "@/components/pages/SecondPage"
import { ThirdPage } from "@/components/pages/ThirdPage"

export default function GuestInvitation({ /** params: { id } */ }: { params: { id: string } }) {

    return (
        <HTMLFlipBook 
            flippingTime={8e2}
            width={375}
            height={667}
            maxHeight={844}
        >
            <Cover family={"Familia Lápida"} />
            <FirstPage number={1} />
            <SecondPage number={2} />
            <ThirdPage number={3} />
        </HTMLFlipBook>
    )
}