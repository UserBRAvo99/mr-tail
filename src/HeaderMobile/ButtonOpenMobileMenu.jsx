// import { BsChevronDoubleLeft } from "react-icons/bs";
import { IoPaw } from "react-icons/io5";
import { styled } from "styled-components";

function ButtonOpenMobileMenu({ onClick }) {
  return (
    <ButtonOpenMenu onClick={onClick}>
      <IoPaw />
    </ButtonOpenMenu>
  );
}

export default ButtonOpenMobileMenu;

const ButtonOpenMenu = styled.button`
  display: block;
  width: 40px;
  height: 40px;
  border: none;
  margin-left: auto;
  background-color: inherit;
  & svg {
    width: 40px;
    height: 40px;
  }
`;
