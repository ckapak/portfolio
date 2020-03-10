import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import study from '../assets/study.png'
import about from '../assets/about.png'
import gin from '../assets/gin.png'
import crime from '../assets/crime.png'
import connect from '../assets/connect.png'


const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={5}
      >
        <Slider>

          <Slide index={0}>
            <p>First Slide</p>
            <img className="screenshot" src={study} alt="Study in London" />
          </Slide>

          <Slide index={1}>
            <p>Second Slide</p>
            <img className="screenshot" src={about} alt="Out and About" />
          </Slide>

          <Slide index={2}>
            <p>Third Slide</p>
            <img className="screenshot" src={gin} alt="Ginventory" />
          </Slide>

          <Slide index={3}>
            <p>Fourth Slide</p>
            <img className="screenshot" src={crime} alt="Crime Checkers" />
          </Slide>

          <Slide index={4}>
            <p>Fifth Slide</p>
            <img className="screenshot" src={connect} alt="Connect Four" />

          </Slide>

        </Slider>

        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </div>
  )
}

export default Projects