import React from 'react'
import { sliderImages } from './SliderImagesData'

function Dots({ activeIndex, handleClick }) {
  return (
    <div className="all-dots">
      {sliderImages.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? 'dot active-dot' : 'dot'
            }`}
          onClick={(event) => handleClick((event.target.value = index))}></span>
      ))}

    </div>
  )
}

export default Dots
