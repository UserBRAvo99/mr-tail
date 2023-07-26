import { BsChevronDoubleLeft } from "react-icons/bs";
import { styled } from "styled-components";

function ButtonOpenMobileMenu({ onClick }) {
  return (
    <ButtonOpenMenu onClick={onClick}>
      <BsChevronDoubleLeft />
    </ButtonOpenMenu>
  );
}

export default ButtonOpenMobileMenu;

const ButtonOpenMenu = styled.button`
  display: block;
  width: 40px;
  height: 40px;
  border: none;
  background-color: inherit;
  & svg {
    width: 40px;
    height: 40px;
  }
`;
