"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";


const links = [
  { name: "Accueil", path: "/" },
  { name: "services", path: "/services" },
  { name: "cv", path: "/resume" },
  { name: "projets", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.path}
          className={`${
            link.path === pathname && "text-accent border-b-2 border-accent"  
          } capitalize font-medium transition-all hover:text-accent`}
        >
          {link.name}
        </Link>
      ))}


    </nav>
  );
};

export default Nav;
