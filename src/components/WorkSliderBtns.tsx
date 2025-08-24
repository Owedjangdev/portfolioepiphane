"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

// Interface pour typer les props
interface WorkSliderBtnsProps {
  containerStyles?: string;
  btnStyles?: string;
  iconsStyles?: string;
}

const WorkSliderBtns = ({ 
  containerStyles = "", 
  btnStyles = "", 
  iconsStyles = "" 
}: WorkSliderBtnsProps) => {
  const swiper = useSwiper();
  
  return (
    <div className={containerStyles}>
      <button 
        className={btnStyles} 
        onClick={() => swiper?.slidePrev()}
        aria-label="Slide précédent"
      >
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button 
        className={btnStyles} 
        onClick={() => swiper?.slideNext()}
        aria-label="Slide suivant"
      >
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;