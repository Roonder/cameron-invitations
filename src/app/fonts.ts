import { Lora, Great_Vibes } from "next/font/google";

const lora = Lora({
    subsets: ["latin"],
    display: "swap"
});

const great_vibes = Great_Vibes({
    subsets: ["latin"],
    weight: "400",
    display: "swap"
});

export { lora, great_vibes };