import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { styled } from "styled-components";

import ButtonUp from "./ButtonUp/ButtonUp";
import ModalConsultation from "./ModalConsultation/ModalConsultation";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

import { scrollStop, toggle } from "./utilities/utilities";

import { ToastContainer } from "react-toastify";

import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleClickModal = (event) => {
    if (
      event.target.id === "modal" ||
      event.target.id === "modalOpen" ||
      event.target.id === "modalClose"
    ) {
      setModalOpen(toggle(modalOpen));
      scrollStop(modalOpen);
    }
  };

  return (
    <>
      <ToastContainer />
      <ButtonUp onClick={goToTop} visible={!inView} />
      <ModalConsultation
        isOpen={handleClickModal}
        toggleModal={toggle(modalOpen)}
        modal={modalOpen}
      />
      <TimeDiv>
        <div ref={ref}>
          <HeaderMobile />
        </div>

        <Main openModal={handleClickModal} />
        <Footer />
      </TimeDiv>
    </>
  );
}

export default App;

const TimeDiv = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
