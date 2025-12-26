"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { name: "Accueil", path: "/" },
  { name: "Services", path: "/services" },
  { name: "CV", path: "/resume" },
  { name: "Projets", path: "/work" },
  { name: "Contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link
            key={index}
            href={link.path}
            className={`${isActive ? "text-accent" : "text-white/70"
              } relative font-medium text-sm xl:text-base hover:text-white transition-colors capitalize`}
          >
            {link.name}
            {isActive && (
              <motion.span
                layoutId="underline"
                className="absolute left-0 top-full block h-[2px] w-full bg-accent mt-1"
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
