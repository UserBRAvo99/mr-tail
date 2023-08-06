import React from "react";
import { PiArrowBendLeftUpBold } from "react-icons/pi";
import { styled } from "styled-components";

function ButtonUp({ showButton }) {
  return (
    <WrapperIcon>
      <PiArrowBendLeftUpBold />
    </WrapperIcon>
  );
}

export default ButtonUp;

const WrapperIcon = styled.div`
  z-index: 50;
  position: fixed;
  display: flex;
  width: 40px;
  height: 40px;
  background-color: aliceblue;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  top: 90%;
  right: 5%;
  cursor: pointer;
`;
