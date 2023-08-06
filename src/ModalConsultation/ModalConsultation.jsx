import React from "react";
import { css, styled } from "styled-components";
import ContactUs from "../ContactUs/ContactUs";

function ModalConsultation({ isOpen, toggleModal, modal }) {
  //   console.log(modal);
  return (
    <OverlayWrapper onClick={isOpen} id="modal" modal={modal.toString()}>
      <ModalWrapper>
        <ContactUs onClick={isOpen} toggleModal={toggleModal} />
      </ModalWrapper>
    </OverlayWrapper>
  );
}

export default ModalConsultation;

const OverlayWrapper = styled.div`
  ${({ modal }) => {
    if (modal === "true") {
      return css`
        z-index: 100;
        position: fixed;
        display: block;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(10px);
        opacity: 1;
        visibility: visible;
        transition: all 0.8s ease 0s;
      `;
    }
    return css`
      z-index: 100;
      position: fixed;
      display: block;
      width: 100%;
      height: 100%;
      backdrop-filter: blur(10px);
      opacity: 0;
      visibility: hidden;
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
`;
