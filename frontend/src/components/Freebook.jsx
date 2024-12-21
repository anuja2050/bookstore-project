
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import List from '../../public/List.json'; 
import Card from './Card'; 

function Freebook() {
  const filterdata = List.filter((data) => data.category?.toLowerCase() === "free"); 

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-600 px-5 mt-10">
      <div className="space-y-2">
        <h1 className="font-semibold text-2xl text-yellow-800">FreeBooks Available Here..</h1>
        <p className="font-bold text-blue-1000">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex est architecto maxime officia blanditiis eaque sapiente,
          suscipit reprehenderit minus adipisci magnam vitae magni. Quam natus, molestiae nobis earum facilis nam.
        </p>
      </div>

      <div className='mt-10'>
        <Slider {...settings}>
          {filterdata.map((item) => (
            <Card item={item} key={item.id} /> 
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;