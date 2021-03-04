import React from 'react'
import { SliderImagesData } from './SliderImagesData'
import SliderLogic from './SliderLogic'

function SliderComponent() {
  return (
    <div>
      <SliderLogic slides={SliderImagesData} />
    </div>
  )
}

export default SliderComponent
