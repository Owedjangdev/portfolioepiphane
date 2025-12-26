'use client';
import Link from "next/link"
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-4 xl:py-6 transition-all duration-300 backdrop-blur-md bg-slate-900/60 border-b border-white/5 supports-[backdrop-filter]:bg-slate-900/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-1 group">
          <h1 className="text-3xl xl:text-4xl font-bold tracking-tight text-white group-hover:text-white/90 transition-colors font-primary">
            Epiphane
          </h1>
          <span className="text-accent text-3xl xl:text-4xl animate-pulse">.</span>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="rounded-full bg-accent hover:bg-accent/80 text-slate-900 font-bold px-6 py-2 transition-all shadow-[0_0_15px_rgba(0,255,153,0.3)] hover:shadow-[0_0_25px_rgba(0,255,153,0.5)] hover:scale-105">
              Engagez-moi
            </Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header

