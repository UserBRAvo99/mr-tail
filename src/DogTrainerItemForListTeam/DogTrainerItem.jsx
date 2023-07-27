import { styled } from "styled-components";
import { nanoid } from "nanoid";
// import { IconSocComponent } from "../IconComponent/IconSoc";
// import IconTeamSocComponent from "../IconComponent/IconSocTeam";

import dogTrainerData from "../Data/data";
import IconTeamSocComponent from "../IconComponent/IconSocTeam";

function TeamComponent() {
  return (
    <TeamBlockWrapper id="team">
      <TeamBlockTitle>Команда</TeamBlockTitle>
      <List>
        {dogTrainerData.map(
          ({ linkFacebook, linkInstagram, linkTelegram, tel, photo, name }) => {
            return (
              <Item key={nanoid()}>
                <Img src={photo} alt={name} />
                <NameTitle>{name}</NameTitle>
                <IconTeamSocComponent
                  facebook={linkFacebook}
                  instagram={linkInstagram}
                />
              </Item>
            );
          }
        )}
      </List>
    </TeamBlockWrapper>
  );
}

export default TeamComponent;

const TeamBlockWrapper = styled.section`
  padding: 15px 10px;
`;

const TeamBlockTitle = styled.h2`
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
`;

const List = styled.ul``;

const Item = styled.li`
  display: flex;
  width: 100%;
  min-height: 100px;
  padding-bottom: 10px;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 6px 20px -4px rgba(0, 0, 0, 0.39);
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 16px;
`;

const NameTitle = styled.h3`
  margin-bottom: 16px;
`;
