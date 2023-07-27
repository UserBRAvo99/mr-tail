// import { BsChevronDoubleRight } from "react-icons/bs";
import { IoPawOutline } from "react-icons/io5";
import { styled } from "styled-components";

function ButtonClose({ onClick }) {
  return (
    <ButtonCloseMenu onClick={onClick}>
      <IoPawOutline />
    </ButtonCloseMenu>
  );
}

export default ButtonClose;

const ButtonCloseMenu = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
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
