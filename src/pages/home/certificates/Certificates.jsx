import React, { useState } from 'react';
import "./certificates.scss"

function Certificates() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    {
      id: "1",
      title: "AGHIMJUAN PH INCORPORATED INTERNSHIP",
      img: "../assets/HomeImg/certificates/cert1.png",
      backgroundColor: "white",
      type: "Certificate of Completion",
      speaker: "AghimJuanPH",
    },
    {
      id: "2",
      title: "REINFORCING YOUR NETWORK WITH SANGFOR CYBER SECURITY",
      img: "../assets/HomeImg/certificates/cert2.jpg",
      backgroundColor: "white",
      type: "Certificate of Attendance",
      speaker: "SANGFOR AND ACTIONLABS",
    },
    {
      id: "3",
      title: "TECH TRENDS: BLOCK CHAIN",
      img: "../assets/HomeImg/certificates/cert3.jpg",
      backgroundColor: "white",
      type: "Certificate of Participation",
      speaker: "DICT",
    },  
    {
      id: "4",
      title: "LABOR AND EMPLOYMENT FOR GRADUATING STUDENTS",
      img: "../assets/HomeImg/certificates/cert4.png",
      backgroundColor: "white",
      type: "Certificate of Participation",
      speaker: "BuLSU SAS AND PESO",
    },
    {
      id: "5",
      title: "UpSkill 2021: Embracing Technological Trends for the 21st Century Education",
      img: "../assets/HomeImg/certificates/cert5.jpg",
      backgroundColor: "white",
      type: "Certificate of Participation",
      speaker: "CHED",
    },
    {
      id: "6",
      title: "UI/UX DESIGN USING WORDPRESS",
      img: "../assets/HomeImg/certificates/cert6.jpg",
      backgroundColor: "white",
      type: "Certificate of Completion",
      speaker: "DICT",
    },
    {
      id: "7",
      title: "In-Progress: Starting Over Again with Linux Fundamentals",
      img: "../assets/HomeImg/certificates/cert7.png",
      backgroundColor: "white",
      type: "Certificate of Participation",
      speaker: "BulSU: Computer Engineering Department",
    },
    {
      id: "8",
      title: "In-Progress: Begin Your Journey To Data Preparation and Data Scraping in Machine Learning",
      img: "../assets/HomeImg/certificates/cert8.png",
      backgroundColor: "white",
      type: "Certificate of Participation",
      speaker: "BulSU: Computer Engineering Department",
    },

  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="certificates" id="certificates"> 
   
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((slide) => (
          <div
            key={slide.id}
            className="container"
            style={{ backgroundColor: slide.backgroundColor }}
          >
            <div className="item">
            
              <div className="left">
                <div className="webImgLeft">
                  <img src={slide.img} alt="" />
                </div>
              </div>
              <div className="right">

                <div className="title">
                  <h3>{slide.title}</h3>
                  <p>{slide.type}</p>
                  <p>{slide.speaker}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src="../assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="../assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  )
}

export default Certificates
