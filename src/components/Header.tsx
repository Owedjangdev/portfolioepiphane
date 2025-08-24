'use client';
import Link from "next/link"


import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";



const Header = () => {
  return (
  
  <header  className=" py-8 xl:py-12 w-  ">

    <div  className="container mx-auto flex items-center justify-between ">
        
<Link href="/" className="flex items-center gap-2">

<h1 className="text-4xl font-semibold ">Epiphane</h1>
<span className=" text-accent text-3xl">.</span>

</Link>

{/* desktop nav */}
<div className="hidden xl:flex items-center gap-8">

<Nav/>



<Link href="/contact" >

<Button className="text-white" >
 Hire me
</Button>
</Link>

</div>

<div className="xl:hidden">
  <MobileNav  />

</div>


    </div>


  </header>
  )
}

export default Header

