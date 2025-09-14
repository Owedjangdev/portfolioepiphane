import Photo from "@/components/Photo";
import Social from "@/components/Social";

import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="  container mx-auto ">
        <div className=" flex flex-col xl:flex-row    items-center justify-between xl:pt-8 xl:pb-24 ">
          <div className=" text-center xl:text-left">
            <span className="text-lg sm:text-xl">Développeur Logiciel</span>
            <h1 className="text-[32px] sm:text-[38px] xl:text-[45px] leading-[1.1] font-semibold mb-4 sm:mb-6">
              Salut, je suis <br /> <span className="text-accent">Epiphane Houehanou</span>{" "}
            </h1>
            <p className="max-w-[500px] mb-6 sm:mb-9 text-white/90 text-sm sm:text-base mx-auto xl:mx-0">
              J&apos;excelle dans la création d&apos;expériences numériques élégantes et je
              maîtrise divers langages de programmation
            </p>

            {/*  btn and social */}

            <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-6 mb-8">
              <Button
                size="lg"
                className="uppercase flex items-center gap-2 bg-accent hover:bg-blue-900 text-white transition-colors"
              >
                <Link href="/EpiphaneHouehanou.pdf">Télécharger CV</Link>
                <FiDownload className="text-xl " />
              </Button>

              {/*   social */}
              <div>
                <Social
                  containerStyle="flex gap-4"
                  iconStyle="w-9 h-9 border border-accent bg-accent rounded-full flex justify-center items-center   text-white  text-base  hover:bg-accent hover:text-white  hover:transition-all  duration-500 "
                />
              </div>
            </div>
          </div>

          <div>
            <Photo />
          </div>
        </div>
      </div>

      <Stats />
    </section>
  );
}
