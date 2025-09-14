"use client";
import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "Years of experience",
  },
  {
    num: 10,
    text: "Projects completed",
  },
  {
    num: 6,
    text: "Technologies mastered",
  },
  {
    num: 50,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-[90vw] mx-auto xl:max-w-none xl:flex xl:flex-wrap xl:mx-6">
          {stats.map((item, index) => {
            return (
              <div
                className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center xl:justify-start text-center sm:text-left"
                key={index}
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-2xl sm:text-3xl xl:text-6xl font-extrabold text-accent"
                />
                <div className={`${
                  item.text.length < 15
                    ? "max-w-[120px] sm:max-w-[180px]"
                    : "max-w-[100px] sm:max-w-[150px]"
                } leading-snug text-white/80 text-xs sm:text-sm xl:text-base`}>
                  {item.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;