
import { NavButtonTypes } from "@/types/NavButton"
import Link from "next/link"

export const NavButton = ({text,href}:NavButtonTypes) => {
    return (
        <button>
            <Link href={href}>
            {text}
            </Link>
        </button>
    )
}