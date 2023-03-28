import React, { useState } from 'react';
import Slider from 'react-slick';

import { bannerImgOne, bannerImgTwo, bannerImgThree, bannerImgFour, bannerImgFive } from '../../assets/index';


export const Banner = () => {

    const [dotActive, setDotActive] = useState(0)

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (prev, next) => {
            setDotActive(next)
        },
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      appendDots: dots => (
        <div
          style={{
                  position: 'absolute',
                  top: "70%",
                  left: '45%',
                  transform: 'translate (-50% -50%)',
              width:'210px',
          }}
        >
              <ul style={{ 
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
              }}> {' '}{dots}{ ' '} </ul>
        </div>
      ),
      customPaging: (i) => (
        <div
            style={
            i === dotActive
                      ? {
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          background: '#131921',
                          padding: '8px 0',
                          cursor: 'pointer',
                          border: '1px solid #f3a847',
                      }
                      : {
                          width: '30px',
                          height: '30px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          background: '#2323F3E',
                          padding: '8px 0',
                          cursor: 'pointer',
                          border: '1px solid #white',
                      }
              }
        >
          {i + 1}
        </div>
      )
    };
  return (
  
<div className='w-full' >
        
    <div className='w-full h-full relative' >
        <Slider {...settings} >
          <div>
            <img src={bannerImgOne} alt="bannerOne" />
          </div>
          <div>
            <img src={bannerImgTwo} alt="bannerTwo" />
          </div>
          <div>
            <img src={bannerImgThree} alt="bannerThree" />
          </div>
          <div>
            <img src={bannerImgFour} alt="bannerFour" />
          </div>
          <div>
            <img src={bannerImgFive} alt="bannerFive" />
          </div>
          
        </Slider>
    </div>
</div>
  )
}
