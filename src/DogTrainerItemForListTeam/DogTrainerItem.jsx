import { styled } from "styled-components";
import { nanoid } from "nanoid";
// import { IconSocComponent } from "../IconComponent/IconSoc";
// import IconTeamSocComponent from "../IconComponent/IconSocTeam";

import dataDogTrainerData from "../Data/dataTeam";
import IconTeamSocComponent from "../IconComponent/IconSocTeam";

function TeamComponent() {
  return (
    <TeamBlockWrapper id="team">
      <TeamBlockTitle>Команда</TeamBlockTitle>
      <List>
        {dataDogTrainerData.map(
          ({ linkFacebook, linkInstagram, linkTelegram, tel, photo, name }) => {
            return (
              <Item key={nanoid()}>
                <Img src={photo} alt={name} />
                <WrapperInfoTrainer>
                  <NameTitle>{name}</NameTitle>
                  <IconTeamSocComponent
                    facebook={linkFacebook}
                    instagram={linkInstagram}
                  />
                </WrapperInfoTrainer>
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

const TeamBlockTitle = styled.h3`
  align-items: center;
  text-align: center;
  margin-bottom: 30px;
`;

const List = styled.ul``;

const Item = styled.li`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 100px;
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
`;

const WrapperInfoTrainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  top: 80%;
  right: 10px;
  align-items: center;
  width: calc(100% - 20px);
  backdrop-filter: blur(10px);
`;
const NameTitle = styled.h3`
  letter-spacing: 0.2em;
  color: var(--basic-text-color-white);
  margin-bottom: 16px;
  &:last-child {
    font-size: 16rem;
  }
`;
