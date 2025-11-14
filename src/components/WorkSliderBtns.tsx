// src/components/WorkSliderBtns.tsx
"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

interface WorkSliderBtnsProps {
  containerStyles?: string;
  btnStyles?: string;
}

export default function WorkSliderBtns({ containerStyles, btnStyles }: WorkSliderBtnsProps) {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button
        onClick={() => swiper.slidePrev()}
        className={btnStyles}
        aria-label="Précédent"
      >
        <PiCaretLeftBold />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className={btnStyles}
        aria-label="Suivant"
      >
        <PiCaretRightBold />
      </button>
    </div>
  );
}