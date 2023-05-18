import Image from "next/image";
import logoImage from "../assets/images/logo.png";
import { RiMovie2Line } from "react-icons/ri";
import Link from "next/link";
export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-1 border-b-2 border-r-2 p-1 h-fit border-primary rounded-2xl drop-shadow-lg shadow-white"
    >
          <RiMovie2Line className="p-0" />
      <h1>Movie Finder</h1>
    </Link>
  );
};
