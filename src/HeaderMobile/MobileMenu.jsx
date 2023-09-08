import { lazy } from "react";
import { css, styled } from "styled-components";
// import ButtonClose from "./ButtonCloseMobileMenu";
// import MobileMenuNav from "./MobileMenuNav";
const ButtonClose = lazy(() => import("./ButtonCloseMobileMenu"));
const MobileMenuNav = lazy(() => import("./MobileMenuNav"));

function MobileMenuSlide({ onClick, open }) {
  return (
    <MobileMenu menu={open.toString()}>
      <ButtonClose onClick={onClick} />
      <MobileMenuNav onClick={onClick} />
    </MobileMenu>
  );
}

export default MobileMenuSlide;

const MobileMenu = styled.div`
  ${({ menu }) => {
    if (menu === "true") {
      return css`
        position: absolute;
        display: flex;
        width: 100vw;
        height: 100vh;
        z-index: 4;
        width: 100vw;
        height: 100vh;
        padding: 70px 10px 10px 10px;
        background-color: rgb(213, 182, 226);
        top: 0;
        left: 0;
        opacity: 1;
        visibility: visible;
        transition: all 0.8s ease 0s;
      `;
    }
    return css`
      position: absolute;
      display: flex;
      z-index: 4;
      width: 100vw;
      height: 100vh;
      padding: 70px 10px 10px 10px;
      background-color: rgb(213, 182, 226);
      top: 0;
      left: 0;
      transition: all 0.4ms cubic-bezier(0.645, 0.045, 0.355, 1);
      opacity: 0;
      visibility: hidden;
      transition: all 0.8s ease 0s;
    `;
  }}
`;
