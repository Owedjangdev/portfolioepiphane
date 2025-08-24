import Photo from "@/components/Photo";
import Social from "@/components/Social";

import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="  container  mx-auto ">
        <div className=" flex flex-col xl:flex-row    items-center justify-between xl:pt-8 xl:pb-24 ">
          <div className=" text-center xl:text-left">
            <span className="text-xl">Software Developer</span>
            <h1 className=" text-[38px] xl:text-[45px] leading-[1.1] font-semibold mb-6">
              Hello Im <br /> <span>Epiphane Houehanou</span>{" "}
            </h1>
            <p className="max-w-[500px] mb-9 text-white/90">
              I excel at crafting elegant digital experiences and I am
              proficient in various programing languages
            </p>

            {/*  btn and social */}

            <div className="flex flex-col xl:flex-row items-center gap-4 xl:gap-6 mb-8">
              <Button
                size="lg"
                className="uppercase flex items-center gap-2 bg-accent hover:bg-blue-900 text-white transition-colors"
              >
                <Link href="/EpiphaneHouehanou.pdf">Download CV</Link>
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
