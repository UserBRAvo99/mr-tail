import React from "react";
import { PiArrowBendLeftUpBold } from "react-icons/pi";
import { css, styled } from "styled-components";

function ButtonUp({ onClick, visible }) {
  return (
    <WrapperIcon onClick={onClick} visible={visible.toString()}>
      <PiArrowBendLeftUpBold />
    </WrapperIcon>
  );
}

export default ButtonUp;

const WrapperIcon = styled.div`
  ${({ visible }) => {
    if (visible === "true") {
      return css`
        z-index: 50;
        position: fixed;
        display: flex;
        width: 40px;
        height: 40px;
        background-color: rgb(88, 50, 115);
        color: white;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        top: 90%;
        right: 5%;
        cursor: pointer;
        opacity: 1;
      `;
    }
    if (visible === "false") {
      return css`
        /* z-index: 50;
        position: fixed;
        display: flex;
        width: 40px;
        height: 40px;
        background-color: rgb(88, 50, 115);
        color: white;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        top: 90%;
        right: 5%;
        cursor: pointer;
        opacity: 0; */
        display: none;
      `;
    }
  }}
`;
