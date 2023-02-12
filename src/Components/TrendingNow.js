import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { useState } from "react";

export default function TrendingNow() {
 
   var subjects=[{id:"1",Name:'Physics',bg:'green'},{id:"1",Name:'Chemistry',bg:'green'},{id:"1",Name:'Maths',bg:'green'},{id:"1",Name:'Maths',bg:'green'}]
  const settings = {
    dots: false,
    infinite: true,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,

    
   
    autoplaySpeed: 2000,
   // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
         // infinite: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 3,
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
             <div className="bg-lime-400 rounded-lg" style={{height:'300px' ,width:'300px',backgroundSize:'cover',display:'flex',flexDirection:'column',justifyContent:'center'}}>
             <div style={{color:"grey",backgroundColor:"black",fontFamily:"Oswald",paddingLeft:5}}><p>{item.Name}</p>
             </div>
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
