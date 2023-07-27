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
      </ListNav>
    </MenuNav>
  );
}

export default MobileMenuNav;

const MenuNav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const ListNav = styled.ul``;
const ItemNav = styled.li``;
