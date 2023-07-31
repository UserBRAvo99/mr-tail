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
