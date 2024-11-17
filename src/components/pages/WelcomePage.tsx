import { Ref, forwardRef, ReactNode } from "react";
import Image from "next/image";
// Fonts
import { great_vibes } from "@/app/fonts";
// Components
import { motion } from "framer-motion" 
import { PageLayout } from "../layout/PageLayout";

interface WelcomePageProps {
    click?: boolean;
    once: boolean;
    props?: ReactNode;
}

export const WelcomePage = forwardRef(({
    click,
    once,
    ...props
}: WelcomePageProps, ref: Ref<HTMLDivElement>) => {
    return (
        <PageLayout ref={ref} click={click} {...props}>
            <Image src={"/assets/red-heart.svg"} width={60} height={60} alt="Decorative Vines" className="absolute top-10 -translate-x-1/2 left-1/2" />

            <div className="rotate-[5deg] absolute top-[3rem] left-1/2 ml-6">
                <Image src={"/assets/pink-white-flower.svg"} width={120} height={120} alt="Decorative Vines" className="" />
            </div>
            <div className="-rotate-[5deg] absolute top-[3rem] right-1/2 mr-6">
                <Image src={"/assets/pink-white-flower.svg"} width={120} height={120} alt="Decorative Vines" className="horizontal-reflect" />
            </div>

            <div className="w-full h-32 p-2 absolute -translate-y-[50%] top-[50%] bg-inv-white border-2 border-inv-brown text-center">
                <Image src={"/assets/golden-leaves.png"} width={300} height={40} alt="Decorative Vines"     className="absolute -top-12 -translate-x-1/2 left-1/2" />
                <Image src={"/assets/golden-leaves.png"} width={300} height={40} alt="Decorative Vines"     className="absolute -bottom-12 -translate-x-1/2 left-1/2" />

                {once && (
                    <>
                        <motion.h1
                            animate={{ y: [-100, 20], opacity: [.25, 1], scale: 1.25 }}
                            transition={{
                                duration: 3,
                                delay: 0.3,
                            }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            className={`${great_vibes.className} text-4xl`}
                        >
                            Querido y gentil
                        </motion.h1>
                        <motion.h3
                            animate={{ y: [1000, 25], opacity: [.25, 1], scale: 1.25 }}
                            transition={{
                                duration: 3,
                                delay: 0.3,
                            }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileHover={{ scale: 1.2 }}
                            className={`${great_vibes.className} inline-block text-3xl relative`}
                        >
                            lector
                        </motion.h3>
                    </>
                )}
            </div>

            <Image src={"/assets/red-heart.svg"} width={60} height={60} alt="Decorative Vines" className="absolute bottom-10 -translate-x-1/2 left-1/2" />

            <div className="rotate-[5deg] absolute bottom-[3rem] left-1/2 ml-6">
                <Image src={"/assets/pink-white-flower.svg"} width={120} height={120} alt="Decorative Vines" className="vertical-reflect" />
            </div>
            <div className="-rotate-[5deg] absolute bottom-[3rem] right-1/2 mr-6">
                <Image src={"/assets/pink-white-flower.svg"} width={120} height={120} alt="Decorative Vines" className="double-reflect" />
            </div>
        </PageLayout>
    );
});

WelcomePage.displayName = "WelcomePage";