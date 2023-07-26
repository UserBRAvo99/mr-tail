import { styled } from "styled-components";
import { nanoid } from "nanoid";
import { IconSocComponent } from "../IconComponent/IconSoc";

import dogTrainerData from "../Data/data";

function TeamComponent() {
  return dogTrainerData.map(
    ({
      linkFacebook,
      linkInstagram,
      linkTelegram,
      tel,
      foto,
      name,
      profession,
    }) => {
      return (
        <Section key={nanoid()}>
          <Img src={foto} alt="user" />
          <NameTitle>{name}</NameTitle>
          <Paragraph>{profession}</Paragraph>
          <IconSocComponent
            facebook={linkFacebook}
            instagram={linkInstagram}
            telegram={linkTelegram}
            phone={tel}
          />
        </Section>
      );
    }
  );
}

export default TeamComponent;

const Section = styled.section`
  display: flex;
  width: 280px;
  min-height: 100px;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border: solid 1px black;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const NameTitle = styled.h3``;

const Paragraph = styled.p``;
