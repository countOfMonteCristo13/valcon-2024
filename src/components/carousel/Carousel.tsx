import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { buildRewardImageURL } from '../../utils/imageBuilder';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { carouselButtonStyle, carouselImageStyle, carouselStyle } from './Carousel.css';
import { backgroundTertiary, borderPrimary, borderRadius0_5, cursorPointer, fullHeight, fullWidth, ratio1, textColor } from '../../styles/index.css';

type CarouselProps = {
  images: string[];
  onClick?: () => void;
}
const Carousel = ({ images, onClick }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {theme} = useTheme();
  
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className={`${carouselStyle} ${fullWidth}`}>
      <LuChevronLeft size={48} onClick={goToPrevious} className={`${carouselButtonStyle} ${textColor} ${cursorPointer}`} />
        <img 
          src={buildRewardImageURL(theme,images[currentIndex]) } 
          alt={`Slide ${currentIndex}`} 
          className={`${fullWidth} ${fullHeight} ${ratio1} ${borderRadius0_5} ${backgroundTertiary} ${carouselImageStyle} ${borderPrimary}`} 
          onClick={onClick}
        />
      <LuChevronRight size={48} onClick={goToNext} className={`${carouselButtonStyle} ${textColor} ${cursorPointer}`}/>
    </div>
  );
};
export default Carousel;