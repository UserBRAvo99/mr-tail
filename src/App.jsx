import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { styled } from "styled-components";

import ButtonUp from "./ButtonUp/ButtonUp";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

import { scrollStop } from "./utilities/utilities";

import { ToastContainer } from "react-toastify";

import "./App.css";

import Modal from "./ModalConsultationClient/ModalConsultation";

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
      // setModalOpen(toggle(modalOpen));
      toggleModal();
      scrollStop(modalOpen);
    }
  };

  const toggleModal = () => {
    return setModalOpen(!modalOpen);
  };

  return (
    <>
      <ToastContainer />
      <ButtonUp onClick={goToTop} visible={!inView} />
      <TimeDiv>
        <div ref={ref}>
          <HeaderMobile />
        </div>
        <Main openModal={handleClickModal} />
        <Footer />
      </TimeDiv>
      <Modal
        isOpen={handleClickModal}
        toggleModal={toggleModal}
        modal={modalOpen}
      />
    </>
  );
}

export default App;

const TimeDiv = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
