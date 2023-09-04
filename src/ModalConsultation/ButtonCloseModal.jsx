import React from "react";
import { IoPawOutline } from "react-icons/io5";
import { styled } from "styled-components";

function ButtonCloseModal({ onClick }) {
  return (
    <ButtonClose onClick={onClick} name="close modal">
      <IoPawOutline id="modalClose" />
    </ButtonClose>
  );
}

export default ButtonCloseModal;

const ButtonClose = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  display: block;
  width: 40px;
  height: 40px;
  border: none;
  background-color: inherit;
  color: rgb(39, 30, 59);
  & svg {
    width: 40px;
    height: 40px;
  }
`;
