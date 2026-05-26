import type { Metadata } from "next";
import Image from "next/image";
import Setup from "@/public/image/setup.webp";
import Head from "@/component/header";
import Foot from "@/component/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "FLORES Jhonver | Portfolio",
  description: "IPT211 Finals Project Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#12161A] text-[#ECEFF1] min-h-screen">
        

        <main className="relative min-h-screen w-full font-sans overflow-x-hidden flex flex-col justify-between">
          

          <div className="fixed inset-0 z-0 pointer-events-none">
            <Image
              src={Setup}
              alt="My Desk Setup"
              fill
              priority
              className="object-cover object-center select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#12161A]/95 via-[#12161A]/80 to-[#12161A]/40" />
          </div>

  
          <Head />
          <section className="relative z-10 flex flex-col justify-center flex-grow w-full py-12">
            {children}
          </section>
          <Foot />

        </main>

      </body>
    </html>
  );
}
