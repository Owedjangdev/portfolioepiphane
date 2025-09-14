import Photo from "@/components/Photo";
import Social from "@/components/Social";

import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 py-8">
          <div className="text-center xl:text-left order-2 xl:order-1">
            <span className="text-lg sm:text-xl">Software Developer</span>
            <h1 className="text-[32px] sm:text-[38px] xl:text-[45px] leading-[1.1] font-semibold mb-4 sm:mb-6">
              Hello Im <br /> <span className="text-accent">Epiphane Houehanou</span>{" "}
            </h1>
            <p className="max-w-[500px] mb-6 sm:mb-9 text-white/90 text-sm sm:text-base mx-auto xl:mx-0">
              I excel at crafting elegant digital experiences and I am
              proficient in various programing languages
            </p>

            {/*  btn and social */}

            <div className="flex flex-col sm:flex-row xl:flex-row items-center gap-4 xl:gap-6 mb-8">
              <Button
                size="lg"
                className="uppercase flex items-center gap-2 bg-accent hover:bg-blue-900 text-white transition-colors w-full sm:w-auto"
              >
                <Link href="/EpiphaneHouehanou.pdf">Download CV</Link>
                <FiDownload className="text-xl" />
              </Button>

              {/*   social */}
              <div className="mt-4 sm:mt-0">
                <Social
                  containerStyle="flex gap-3 justify-center"
                  iconStyle="w-8 h-8 sm:w-9 sm:h-9 border border-accent bg-accent rounded-full flex justify-center items-center text-white text-sm sm:text-base hover:bg-accent hover:text-white hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          <div className="order-1 xl:order-2 mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      <div className="mt-8 xl:mt-0">
        <Stats />
      </div>
    </section>
  );
}
