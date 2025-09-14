'use client';
import Link from "next/link"


import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";



const Header = () => {
  return (
  
  <header className="py-6 sm:py-8 xl:py-12">

    <div className="container mx-auto px-4 flex items-center justify-between">
        
<Link href="/" className="flex items-center gap-2">

<h1 className="text-2xl sm:text-3xl xl:text-4xl font-semibold">Epiphane</h1>
<span className="text-accent text-2xl sm:text-3xl xl:text-3xl">.</span>

</Link>

{/* desktop nav */}
<div className="hidden  xl:flex items-center gap-8">

<Nav />



<Link href="/contact" >

<Button className="text-white text-sm xl:text-base px-4 xl:px-6">
 Hire me
</Button>
</Link>

</div>

<div className="xl:hidden">
  <MobileNav   />

</div>


    </div>


  </header>
  )
}

export default Header

