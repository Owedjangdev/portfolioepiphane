"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "Home", path: "/" },
  { name: "services", path: "/services" },
  { name: "resume", path: "/resume" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet > 
      <SheetTrigger className="flex justify-center items-center ">
        <CiMenuFries className="h-10 w-10 text-accent" />
      </SheetTrigger>

      <SheetContent  side="right" className=" flex flex-col w-full sm:max-w-full">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        
        {/* logo */}
        <div className="mt-25 mb-30 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">Epiphane</h1>
            <span className="text-accent text-3xl">.</span>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-4">
          {links.map((link, index) => (
            <SheetClose key={index} asChild>
              <Link
                href={link.path}
                className={`${
                  link.path === pathname && "text-accent border-b-2 border-accent"
                } capitalize text-xl transition-all hover:text-accent`}
              >
                {link.name}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}