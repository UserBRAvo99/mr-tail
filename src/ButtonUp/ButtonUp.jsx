import React, { useEffect, useState } from "react";
import { PiArrowBendLeftUpBold } from "react-icons/pi";
import { css, styled } from "styled-components";

function ButtonUp({ onClick, visible }) {
  //   const [isVisibleBtn, setIsVisibleBtn] = useState(false);
  //   const goToTop = () => {
  //     window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  //   };

  //   const listenToScroll = () => {
  //     let heightToHidden = 250;
  //     const winScroll =
  //       document.body.scrollTo || document.documentElement.scrollTop;
  //     if (winScroll > heightToHidden) {
  //       setIsVisibleBtn(true);
  //     } else {
  //       setIsVisibleBtn(false);
  //     }
  //   };
  //   useEffect(() => {
  //     window.addEventListener("scroll", listenToScroll);
  //     return () => window.removeEventListener("scroll", listenToScroll);
  //   }, []);
  return (
    <WrapperIcon onClick={onClick} visible={visible.toString()}>
      <PiArrowBendLeftUpBold />
    </WrapperIcon>
  );
}

export default ButtonUp;

const WrapperIcon = styled.div`
  ${({ visible }) => {
    console.log(visible);

    if (visible === "true") {
      return css`
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
        opacity: 1;
      `;
    }
    if (visible === "false") {
      return css`
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
        opacity: 0;
      `;
    }
  }}/* z-index: 50;
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
  cursor: pointer; */
`;
