import React, { useEffect, useState } from "react";

import ButtonUp from "./ButtonUp/ButtonUp";
import ModalConsultation from "./ModalConsultation/ModalConsultation";
import HeaderMobile from "./HeaderMobile/HeaderMobile";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

import { ToastContainer } from "react-toastify";

import { styled } from "styled-components";
import "./App.css";

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

  function handleClickHero(e) {
    if (e.currentTarget.children[3].style.display !== "flex") {
      return (e.currentTarget.children[3].style.display = "flex");
    }
    if (e.currentTarget.children[3].style.display === "flex") {
      return (e.currentTarget.children[3].style.display = "none");
    }
  }

  function handleClickService(event) {
    const childrenList = [...event.currentTarget.parentElement.children];
    const childId = event.currentTarget.id;
    childrenList.forEach((e) => {
      if (e.children[2].style.display === "flex") {
        return (e.children[2].style.display = "none");
      }
      if (e.id === childId) {
        return (e.children[2].style.display = "flex");
      }
      return (e.children[2].style.display = "none");
    });
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
        <Main
          openModal={handleClickModal}
          hero={handleClickHero}
          serviceItem={handleClickService}
        />
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
