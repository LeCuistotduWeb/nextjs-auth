import React, {} from 'react';
import {Carousel} from "react-bootstrap";

const CustomCarousel = ({slides}) => {
  return (
    <Carousel>
      {
        slides ? slides.map((slide, index)=> (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={slide}
              alt="slide"
            />
          </Carousel.Item>
        )): (
          <>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.rwkgoodman.com/wp-content/uploads/2018/02/Estate-agent.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fd1qfj231ug7wdu.cloudfront.net%2Fpictures%2Festate%2F6236%2F6235874%2F14669457906188e7348081a6.82052393_4096.jpg&option=N&idlisting=listingmedia&w=1200&permitphotoenlargement=false&fallbackimageurl=https%3A%2F%2Fstatic-christiesrealestate-cms-production-3.gtsstatic.net%2Fresources%2F_responsive%2Fimages%2Fcommon%2Fnophoto%2Flisting.jpg"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.wardeproperty.com/storage/properties/34/photos/5d304b8371b9d.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </>
        )
      }
    </Carousel>
  )
}

export default CustomCarousel