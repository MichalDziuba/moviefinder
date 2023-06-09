import { LayoutProps } from "@/types/Layout";
import { Navbar } from "../Header/navbar";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700"] });

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`flex min-h-screen min-w-screen  flex-col items-center ${lato.className} bg-primary text-primary text-xl subpixel-antialiased italic`}
    >
      <Navbar />
      <main className="w-11/12 grow py-8 flex flex-col items-center">
        {children}
      </main>
    </div>
  );
};
