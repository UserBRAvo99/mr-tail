import { Link } from "react-scroll";
import { styled } from "styled-components";

function MobileMenuNav({ onClick }) {
  return (
    <MenuNav>
      <ListNav>
        <ItemNav>
          <Link
            to="team"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={onClick}
          >
            Команда
          </Link>
        </ItemNav>
        <ItemNav>
          <Link
            to="footer"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={onClick}
          >
            Контакти
          </Link>
        </ItemNav>
        <ItemNav>
          <Link
            to="service"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={onClick}
          >
            Послуги
          </Link>
        </ItemNav>
      </ListNav>
    </MenuNav>
  );
}
export default MobileMenuNav;

const MenuNav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  justify-content: space-around;
`;
const ListNav = styled.ul``;
const ItemNav = styled.li`
  &:nth-child(n + 1) {
    padding: 20px;
    cursor: pointer;
    text-align: center;
    font-size: 30px;
  }
`;
