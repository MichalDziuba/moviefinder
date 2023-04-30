import { Logo } from "./logo";
import { NavButton } from "./navButton";

export const Navbar = () => {
  return (
    <header className="w-full h-32 flex flex-col items-center text-2xl border-b-2 border-secondary shadow-secondary box shadow-sm bottom-0 overflow-y-auto">
      <div className="w-11/12  h-1/2 items-center flex justify-between">
        <Logo />
      </div>
      <nav className="flex h-1/2 items-center w-11/12 justify-around">
        <NavButton text="Movies" href="/movies" />
        <NavButton text="Actors" href="/actors" />
        <NavButton text="Series" href="/series" />
      </nav>
    </header>
  );
};
