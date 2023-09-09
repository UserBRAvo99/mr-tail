import { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";
import ContactUs from "../ContactUs/ContactUs";

const modalRootElement = document.querySelector("#modalConsultation");

function ModalConsultationClient({ isOpen, toggleModal, modal }) {
  const element = useMemo(() => document.createElement("div"), []);

  useEffect(() => {
    if (modal) {
      modalRootElement.appendChild(element);
      return () => {
        modalRootElement.removeChild(element);
      };
    }
  });

  useEffect(() => {
    if (modal) {
      document.addEventListener("keydown", handleKeyDownModal);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDownModal);
    };
  });

  const handleKeyDownModal = (event) => {
    console.log(event.keyCode);
    if (event.keyCode === 27) {
      toggleModal();
    }
  };

  if (modal) {
    return createPortal(
      <OverlayWrapper onClick={isOpen} id="modal" modal={modal.toString()}>
        <ModalWrapper>
          <ContactUs onClick={isOpen} toggleModal={toggleModal} />
        </ModalWrapper>
      </OverlayWrapper>,
      element
    );
  }
  return null;
}

export default ModalConsultationClient;

const OverlayWrapper = styled.div`
  ${({ modal }) => {
    if (modal === "true") {
      return css`
        z-index: 20;
        position: fixed;
        top: 0;
        display: block;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(10px);
        opacity: 1;
        transition: all 0.8s ease 0s;
      `;
    }
    return css`
      position: fixed;
      top: 0;
      display: block;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(10px);
      opacity: 0;
      transition: all 0.8s ease 0s;
    `;
  }}
`;

const ModalWrapper = styled.div`
  z-index: 101;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  width: calc(100% - 20%);
  height: auto;
  background-color: white;
  border-radius: 10px;
  border: solid 1px black;
`;
