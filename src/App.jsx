import React, { useState } from "react";

import HeaderMobile from "./HeaderMobile/HeaderMobile";

import Main from "./Main/Main";

import "./App.css";
import Footer from "./Footer/Footer";
import { styled } from "styled-components";
import ModalConsultation from "./ModalConsultation/ModalConsultation";
import { ToastContainer } from "react-toastify";
// import ButtonUp from "./ButtonUp/ButtonUp";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickModal = (event) => {
    console.log(event.target.id);
    if (
      event.target.id === "modal" ||
      event.target.id === "modalOpen" ||
      event.target.id === "modalClose"
    ) {
      toggleModal();
      scroll();
    }
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  function scroll() {
    if (!modalOpen) {
      document.body.style.overflow = "hidden";
      return;
    }
    document.body.style.overflow = "scroll";
  }
  const ButtonUpScroll = () =>
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) return console.log(true);
      return console.log(false);
    });
  console.log(ButtonUpScroll());

  return (
    <>
      <ToastContainer />
      {/* <ButtonUp /> */}
      <ModalConsultation
        isOpen={handleClickModal}
        toggleModal={toggleModal}
        modal={modalOpen}
      />
      <TimeDiv>
        <HeaderMobile />
        <Main onClick={handleClickModal} />
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
