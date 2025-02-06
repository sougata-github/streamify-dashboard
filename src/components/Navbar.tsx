import { Player as Lottie } from "@lottiefiles/react-lottie-player";
import { ChevronDown, Settings, User } from "lucide-react";

import logo from "../assets/logo.json";

const Navbar = () => {
  return (
    <header className="flex justify-between py-1">
      <nav className="flex gap-4">
        <div className="flex gap-4 items-center bg-transparent">
          <a href="/" className="px-1 py-0.5 rounded-lg cursor-pointer">
            <Lottie autoplay loop={true} src={logo} className="size-12" />
          </a>

          <a href="/" className="text-xl font-pacifico cusor-pointer">
            Streamify
          </a>

          <input
            className="max-md:hidden bg-white/10 backdrop-blur-md max-w-[400px] rounded-lg py-2 px-2.5 text-sm  focus:outline-white/15 focus:outline-2 placeholder:text-white/20 placeholder:text-sm"
            placeholder="Search any component"
          />
        </div>
      </nav>
      <div className="flex gap-4 items-center ">
        <a
          href="/"
          className="p-2 rounded-lg bg-white/10 hover:bg-white/5 transition-all cursor-pointer"
        >
          <Settings className="size-5" />
        </a>

        <div className="flex items-center gap-4 max-md:hidden bg-white/10 rounded-lg p-2 px-4 hover:bg-white/5 transition-all cursor-pointer">
          <div className="flex flex-col gap-1">
            <p className="text-sm">johndoe@example.com</p>
          </div>
          <ChevronDown className="size-5" />
        </div>

        <a
          href="/"
          className="p-2 rounded-lg bg-white/10 md:hidden hover:bg-white/5 transition-all cursor-pointer"
        >
          <User className="size-5" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
