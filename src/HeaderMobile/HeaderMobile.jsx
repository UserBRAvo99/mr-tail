import React, { useState } from "react";

import { styled } from "styled-components";
import "../index.css";
import "animate.css";

import ButtonOpenMobileMenu from "./ButtonOpenMobileMenu";
import MobileMenuSlide from "./MobileMenu";
import { scrollStop, toggle } from "../utilities/utilities";

function HeaderMobile() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    if (
      e.currentTarget.tagName === "BUTTON" ||
      e.currentTarget.nodeName === "A"
    ) {
      setMobileMenuOpen(toggle(mobileMenuOpen));
      scrollStop(mobileMenuOpen);
    }
  };

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
