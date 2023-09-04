import React, { useEffect, useState } from "react";

import HeaderMobile from "./HeaderMobile/HeaderMobile";

import Main from "./Main/Main";

import "./App.css";
import Footer from "./Footer/Footer";
import { styled } from "styled-components";
import ModalConsultation from "./ModalConsultation/ModalConsultation";
import { ToastContainer } from "react-toastify";
import ButtonUp from "./ButtonUp/ButtonUp";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [isVisibleBtn, setIsVisibleBtn] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 200;

    const winScroll = document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisibleBtn(true);
    } else {
      setIsVisibleBtn(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  const handleClickModal = (event) => {
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

  return (
    <>
      <ToastContainer />
      <ButtonUp onClick={goToTop} visible={isVisibleBtn} />
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
