import React from "react";
import { styled } from "styled-components";
import ContactUs from "../ContactUs/ContactUs";

function ModalConsultation({ isOpen, toggleModal, modalOpen }) {
  return (
    <OverlayWrapper onClick={isOpen} id="modal">
      <ModalWrapper>
        <ContactUs onClick={isOpen} toggleModal={toggleModal} />
      </ModalWrapper>
    </OverlayWrapper>
  );
}

export default ModalConsultation;

const OverlayWrapper = styled.div`
  z-index: 100;
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  ${(props) => {
    console.log(props);
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
