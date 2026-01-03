
import { AuroraBackground } from "@/components/AuroraBackground";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <AuroraBackground className="h-full min-h-screen pt-4 pb-12 xl:pt-12 xl:pb-0">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 h-full z-20 relative">
        <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:pt-8 xl:pb-24">

          {/* TEXTE & ACTIONS */}
          <div className="text-center xl:text-left flex-1 max-w-2xl order-2 xl:order-1">
            <span className="text-xl text-accent font-medium tracking-widest mb-4 block uppercase font-mono">
              Développeur Fullstack
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-tight mb-6 leading-[1.1]">
              Salut, je suis <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-400 to-purple-500 animate-gradient-x">
                Epiphane
              </span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl mb-8 leading-relaxed max-w-lg mx-auto xl:mx-0 font-light">
              Transformant des idées en expériences numériques d&apos;exception.
              Je conçois des applications web performantes, esthétiques et évolutives.
            </p>

            {/* BOUTONS & SOCIAUX */}
            <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-6">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accent hover:bg-accent/80 text-slate-950 font-bold text-lg px-8 py-6 shadow-[0_0_20px_rgba(0,255,153,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,153,0.6)]"
              >
                <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <FiDownload className="text-xl" />
                  <span>CV</span>
                </Link>
              </Button>

              <div className="flex gap-4">
                <Social
                  containerStyle="flex gap-4"
                  iconStyle="w-12 h-12 border border-accent/30 bg-slate-900/50 rounded-full flex justify-center items-center text-accent text-xl hover:bg-accent hover:border-accent hover:text-slate-950 transition-all duration-300 hover:-translate-y-1 shadow-lg backdrop-blur-sm"
                />
              </div>
            </div>
          </div>

          {/* PHOTO */}
          <div className="order-1 xl:order-2 flex justify-center items-center flex-shrink-0 xl:mb-0 mb-8 z-30">
            <Photo />
          </div>
        </div>
      </div>

      {/* STATS EN BAS */}
      <div className="mt-8 sm:mt-16 w-full z-20 relative">
        <Stats />
      </div>
    </AuroraBackground>
  );
}