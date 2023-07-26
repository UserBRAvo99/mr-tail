import { styled } from "styled-components";
import { IoPaw } from "react-icons/io5";

function LogoPaw() {
  return (
    <Logo>
      <IoPaw />
    </Logo>
  );
}

const Logo = styled.div`
  z-index: 5;
  width: 40px;
  height: 40px;
  svg {
    width: 40px;
    height: 40px;
  }
`;

export default LogoPaw;
