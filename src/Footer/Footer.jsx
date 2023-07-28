import { styled } from "styled-components";
import { IconSocComponent } from "../IconComponent/IconSoc";
import dataTrainingCenter from "../Data/dataTrainingCenter";

function Footer() {
  return (
    <FooterTag id="footer">
      <WrapperContacts>
        <ContactsTitle>Контакти</ContactsTitle>
        <IconSocComponent data={dataTrainingCenter} />
      </WrapperContacts>
    </FooterTag>
  );
}

export default Footer;

const FooterTag = styled.footer`
  display: flex;
  padding: 20px 0;
  width: 100%;
  height: auto;
  border-top: solid 1px var(--bg-color-footer);
`;
const WrapperContacts = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;

const ContactsTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;
