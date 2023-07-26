import { css, styled } from "styled-components";
import ButtonClose from "./ButtonCloseMobileMenu";

function MobileMenuSlide({ onClick, isOpen }) {
  return (
    <MobileMenu open={isOpen}>
      <ButtonClose onClick={onClick} />
      {/* <nav>
        <ul>
          <li>
            <a href="#">Про нас</a>
          </li>
          <li>
            <a href="#">Команда</a>
          </li>
          <li>
            <a href="#">Ще щось</a>
          </li>
          <li>
            <a href="#">Ще щось</a>
          </li>
        </ul>
      </nav> */}
    </MobileMenu>
  );
}

export default MobileMenuSlide;

const MobileMenu = styled.div`
  position: absolute;
  z-index: 4;
  width: 100vw;
  height: 100vh;
  padding: 70px 10px 10px 10px;
  background-color: pink;
  top: 0;
  left: 0;
  /* transform: translateX(+100%);
  transition: all 0.5ms cubic-bezier(0.645, 0.045, 0.355, 1); */
  display: none;
  ${(props) =>
    props.open &&
    css`
      /* transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform: translateX(0); */
      display: flex;
      width: 100vw;
      height: 100vh;
    `}
`;
