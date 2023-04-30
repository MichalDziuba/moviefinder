import { LayoutProps } from "@/types/Layout";
import { Navbar } from "./navbar";
import { Lato } from "next/font/google";
const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700"] });

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`flex min-h-screen min-w-screen  flex-col items-center ${lato.className} bg-third text-secondary text-xl`}
    >
      <Navbar />
      <main className="w-11/12 grow py-8">{children}</main>
    </div>
  );
};
