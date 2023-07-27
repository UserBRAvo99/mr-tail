import { Link } from "react-scroll";
import { styled } from "styled-components";
import { IconSocComponent } from "../IconComponent/IconSoc";
import dataTrainingCenter from "../Data/dataTrainingCenter";

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
          <a onClick={onClick}>coming soon</a>
        </ItemNav>
      </ListNav>
      <div>
        <IconSocComponent data={dataTrainingCenter} />
      </div>
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
  }
`;
