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
    <html lang="es">
      <body
        className={`antialiased ${lora.className} overflow-hidden bg-[url('/assets/british-bg.jpg')] bg-cover bg-no-repeat bg-center bg-blend-lighten min-h-dvh`}
      >
        {children}
      </body>
    </html>
  );
}
