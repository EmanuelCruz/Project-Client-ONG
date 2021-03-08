import React from 'react'
import { sliderImages } from './SliderImagesData'

function SliderContent({ activeIndex }) {
  return (
    <section>
      {sliderImages.map((slide, index) => (

        <div
          key={index}
          className={index === activeIndex ? 'slides active' : 'inactive'}>

          <img className={index === activeIndex ? 'slide-image slides active' : 'slide-image inactive'} src={slide.urls} alt=""></img>
          <h3 className="slide-title">{slide.title}</h3>
        </div>
      ))}
    </section>
  )
}

export default SliderContent
