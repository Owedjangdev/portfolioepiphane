"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';

const links = [
  { name: "Accueil", path: "/" },
  { name: "Services", path: "/services" },
  { name: "CV", path: "/resume" },
  { name: "Projets", path: "/work" },
  { name: "Contact", path: "/contact" },
];

export default function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center group">
        <CiMenuFries className="h-8 w-8 text-accent group-hover:text-accent-hover transition-colors" />
      </SheetTrigger>

      <SheetContent side="right" className="flex flex-col border-l border-white/10 bg-[#020617]/95 backdrop-blur-xl">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        <SheetDescription className="sr-only">Site navigation</SheetDescription>

        <div className="mt-20 mb-16 text-center">
          <Link href="/">
            <h1 className="text-4xl font-bold tracking-tight">
              Epiphane<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            const isActive = link.path === pathname;
            return (
              <SheetClose key={index} asChild>
                <Link
                  href={link.path}
                  className={`${isActive
                      ? "text-accent border-b-2 border-accent"
                      : "text-white/80 hover:text-white"
                    } text-xl capitalize font-medium transition-all`}
                >
                  {link.name}
                </Link>
              </SheetClose>
            )
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}