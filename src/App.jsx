import React from "react";

import HeaderMobile from "./HeaderMobile/HeaderMobile";

import Main from "./Main/Main";

import "./App.css";
import Footer from "./Footer/Footer";
import { styled } from "styled-components";
import Consultation from "./ContactUs/ContactUs";
import SwiperBlock from "./Swiper/Swiper";
import OfferFooter from "./Footer/OfferFooter";

function App() {
  // const screenWidth = document.documentElement.scrollHeight;

  window.addEventListener("scroll", (event) => {
    // console.log(window.scrollY);
  });

  return (
    <>
      <TimeDiv>
        <HeaderMobile />
        <Main />
        <Consultation />
        <SwiperBlock />
      </TimeDiv>

      <Footer />
    </>
  );
}

export default App;

const TimeDiv = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
