import React, { useState } from "react";

import { styled } from "styled-components";
import "animate.css";

import ButtonOpenMobileMenu from "./ButtonOpenMobileMenu";
import MobileMenuSlide from "./MobileMenu";
import photoHeaderMobile from "../Data/dog.jpg";

function HeaderMobile() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    if (
      event.currentTarget.tagName === "BUTTON" ||
      event.currentTarget.nodeName === "A"
    ) {
      toggleMenuOpen();
      scroll();
    }
  }

  function toggleMenuOpen() {
    setMobileMenuOpen(!mobileMenuOpen);
  }
  function scroll() {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "scroll";
  }

  return (
    <>
      <MobileMenuSlide onClick={handleClick} open={mobileMenuOpen} />
      <Header>
        <Hero>
          <ButtonOpenMobileMenu onClick={handleClick} />
          <ImgHeader src={photoHeaderMobile} alt="dog" />
          <ImageTitleWrapper className="animate__animated animate__backInRight animate__delay-1.5s">
            <Info>
              Раді вітати в нашій кінологічній спільноті, яка є об'єднанням
              професійних і досвідчених тренерок для собак! Навчаємо людей
              правильно виховувати і розуміти своїх хвостиків.
            </Info>
          </ImageTitleWrapper>
        </Hero>
      </Header>
    </>
  );
}

export default HeaderMobile;

const Header = styled.header`
  display: flex;
  max-width: 600px;
  height: auto;
  margin: 0 auto;
  margin-bottom: 30px;
  position: relative;
`;

const Hero = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  position: relative;
`;

const ImgHeader = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: relative;
`;
const ImageTitleWrapper = styled.div`
  position: absolute;
  display: block;
  width: 100%;
  bottom: 40px;
  left: 0;
  padding: 20px 15px;
  /* transform: translate(-50%, -50%); */
  align-items: center;
`;

const Info = styled.p`
  text-align: center;
  font-size: 1.2em;
`;

// const ImageTitle = styled.h1`
//   display: flex;
//   position: relative;
//   gap: 10px;
//   justify-content: center;
//   color: rgb(88, 50, 115);
//   font-family: Georgia, "Times New Roman", Times, serif;
//   font-size: 50px;
//   font-weight: bold;
// `;

// const Description = styled.p`
//   align-items: center;
//   text-align: center;
//   font-size: 20px;
// `;
