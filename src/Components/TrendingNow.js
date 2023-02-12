import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { useState } from "react";

export default function TrendingNow() {
 
   var subjects=[{id:"1",Name:'Physics',bg:''}]
  const settings = {
    dots: false,
    infinite: true,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    
   
    autoplaySpeed: 2000,
   // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 2,
         // infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
         // infinite: true,
        },
      },
    ],
  };

  

  const clothesView = () => {
    return subjects.map((item) => {
       return(
        <>
        <div >
             <div style={{height:'300px' ,width:'170px',border:"2px solid #000",backgroundImage:`url(${item.pic})`,backgroundSize:'cover',display:'flex',flexDirection:'column',justifyContent:'flex-end'}}>
             <div style={{color:"grey",backgroundColor:"black",fontFamily:"Oswald",paddingLeft:5}}><p>{item.name}</p>
             <p>{item.price}</p></div>
             </div>
             
             </div>
               
         
        </>
       )
    })
  }   
  return (
    <div style={{ width: "100%" }}>
      <Slider {...settings}>{clothesView()}</Slider>
    </div>
  );
}
