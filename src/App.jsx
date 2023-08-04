import React from "react";

import HeaderMobile from "./HeaderMobile/HeaderMobile";

import Main from "./Main/Main";

import "./App.css";
import Footer from "./Footer/Footer";
import { styled } from "styled-components";
import ContactUs from "./ContactUs/ContactUs";

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
        <ContactUs />
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
