import React, { useState } from "react";

import { styled } from "styled-components";

import ButtonOpenMobileMenu from "./ButtonOpenMobileMenu";
import MobileMenuSlide from "./MobileMenu";
import photoHeaderMobile from "../Data/dog.png";

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
      <MobileMenuSlide onClick={handleClick} isOpen={mobileMenuOpen} />
      <Header>
        <Hero>
          <ButtonOpenMobileMenu onClick={handleClick} />
          <ImgHeader src={photoHeaderMobile} alt="dog" />
          <ImageTitleWrapper>
            <ImageTitle>
              <span>Mr</span>Tail
            </ImageTitle>
            <Description>кінологічна спільнота</Description>
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
`;
const ImageTitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
`;

const ImageTitle = styled.h1`
  display: flex;
  gap: 10px;
  justify-content: center;
`;
const Description = styled.p`
  align-items: center;
  text-align: center;
`;
