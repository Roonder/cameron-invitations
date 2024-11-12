import type { Metadata } from "next";
import "./globals.css";
import { lora } from "@/app/fonts";

export const metadata: Metadata = {
  title: "¡Bienvenido, querido lector!",
  description: "Invitación de las 15 primaveras de Cameron Escobar.",
  authors: [
    {name: "Roonder", url: "https://github.com/roonder"}
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${lora.className} overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
