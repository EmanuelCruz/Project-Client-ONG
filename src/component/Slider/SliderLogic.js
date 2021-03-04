import React, { useState } from 'react'
import { SliderImagesData } from './SliderImagesData'
import './Slider.css'

function SliderLogic({ slides }) {
  const [currentVisibleImage, setCurrentVisibleImage] = useState(0)
  const slidesLength = slides.length

  return (
    <section className="slider">
      <i className="bi bi-arrow-left-circle" onClick={() => console.log('asd')}></i>
      <i className="bi bi-arrow-right-circle"></i>
      {SliderImagesData.map((slide, index) => {
        return (
          <img src={slide.image} alt="" key={index} />
        )
      })}
    </section>
  )
}

export default SliderLogic
