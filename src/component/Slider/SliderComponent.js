import React, { useEffect, useState } from 'react'
import { sliderImages } from './SliderImagesData'
import Arrows from './Arrows'
import Dots from './Dots'
import SliderContent from './SliderContent'
import './slider.css'

const slidersLength = sliderImages.length - 1

function SliderComponent() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === slidersLength ? 0 : activeIndex + 1)
    }, 5000)
    return () => clearInterval(interval)
  }, [activeIndex])

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? slidersLength : activeIndex - 1)}
        nextSlide={() =>
          setActiveIndex(activeIndex === slidersLength ? 0 : activeIndex + 1)}
      />
      <Dots activeIndex={activeIndex} handleClick={(activeIndex) => setActiveIndex(activeIndex)} />

    </div>
  )
}

export default SliderComponent
