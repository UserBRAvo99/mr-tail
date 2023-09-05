import React, { useState } from "react";

import { styled } from "styled-components";
import "../index.css";
import "animate.css";

import ButtonOpenMobileMenu from "./ButtonOpenMobileMenu";
import MobileMenuSlide from "./MobileMenu";
// import photoHeaderMobile from "../Data/dog.jpg";

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
        <Wrapper>
          <TitleHeader className="font-family-bitter-bold">
            Mr<span>.Tail</span>
          </TitleHeader>
        </Wrapper>
        <ButtonOpenMobileMenu onClick={handleClick} />
      </Header>
    </>
  );
}

export default HeaderMobile;

const Header = styled.header`
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 30px;
  position: relative;
  border-bottom: solid 1px rgb(213, 182, 226);
  background-color: #9d85c8;
`;
const Wrapper = styled.div``;
const TitleHeader = styled.h1`
  font-family: "Bitter", serif;
  font-weight: bold;
`;
