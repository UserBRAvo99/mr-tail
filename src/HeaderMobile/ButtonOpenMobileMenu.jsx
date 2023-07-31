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
  position: absolute;
  top: 15px;
  right: 15px;
  display: block;
  width: 40px;
  height: 40px;
  border: none;
  background-color: inherit;
  color: rgb(39, 30, 59);
  cursor: pointer;
  & svg {
    width: 40px;
    height: 40px;
  }
`;
