import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import AvaPic from "@/assets/img/avatar.png";
import Logo from "@/assets/img/logo.png";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import ContentLayout from "@/layouts/ContentLayout";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); // You can tweak the scroll threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50" role="navbar">
      <div
        className={`max-w-[1024px] mx-auto text-white shadow-md py-4 transition-all ${
          scrolled
            ? "bg-[oklch(0.22_0_0)] shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
            : ""
        }`}
      >
        <ContentLayout>
          <div className="flex justify-between items-center">
            <div className="flex gap-x-4 items-center">
              <img src={Logo} className="size-[35px]" />
              <h1 className="text-2xl font-bold">Base Template</h1>
            </div>
            <div className="flex gap-x-6 items-center">
              <Link
                to="/"
                className="text-gray-400 hover:text-gray-700 transition-colors duration-200 sm:block hidden"
              >
                Link 1
              </Link>
              <Link
                to="/example-one"
                className="text-gray-400 hover:text-gray-700 transition-colors duration-200 sm:block hidden"
              >
                Link 2
              </Link>
              <Link
                to="/example-two"
                className="text-gray-400 hover:text-gray-700 transition-colors duration-200 sm:block hidden"
              >
                Link 3
              </Link>
              <Avatar>
                <AvatarImage src={AvaPic} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </ContentLayout>
      </div>
    </nav>
  );
};

export default Navbar;
