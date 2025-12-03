import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col xl:flex-row items-center justify-center gap-12 xl:gap-16 xl:pt-8 xl:pb-24 max-w-5xl mx-auto">
          
          {/* PHOTO EN PREMIER SUR MOBILE */}
          <div className="order-1 xl:order-2 flex justify-center flex-shrink-0">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72">
              <Photo />
            </div>
          </div>

          {/* TEXTE & ACTIONS */}
          <div className="order-2 xl:order-1 text-center xl:text-left flex-1">
            <span className="text-sm sm:text-base md:text-lg text-white/80">
              Développeur Logiciel
            </span>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight font-semibold mt-2 mb-3 sm:mb-4">
              Salut, je suis <br />
              <span className="text-accent">Epiphane Houehanou</span>
            </h1>

            <p className="text-white/80 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              J&apos;excelle dans la création d&apos;expériences numériques élégantes et je
              maîtrise divers langages de programmation.
            </p>

            {/* BOUTONS & SOCIAUX */}
            <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto uppercase flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white font-medium px-6 py-3 text-sm sm:text-base transition-all"
              >
                <Link href="/EpiphaneHouehanou.pdf" target="_blank" rel="noopener noreferrer">
                  <FiDownload className="text-lg" />
                  Télécharger CV
                </Link>
              </Button>

              <div className="flex gap-3">
                <Social
                  containerStyle="flex gap-3"
                  iconStyle="w-10 h-10 border border-accent rounded-full flex justify-center items-center text-white text-lg hover:bg-accent hover:border-accent transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS EN BAS */}
      <div className="mt-12 sm:mt-16">
        <Stats />
      </div>
    </section>
  );
}