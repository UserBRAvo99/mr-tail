import { styled } from "styled-components";
import { IconSocComponent } from "../IconComponent/IconSoc";
import dataTrainingCenter from "../Data/dataTrainingCenter";

function Footer() {
  return (
    <FooterWrapper id="footer">
      <ContentWrapper>
        <WrapperContacts>
          <ContactsTitle>Контакти</ContactsTitle>
          <IconSocComponent data={dataTrainingCenter} />
        </WrapperContacts>
      </ContentWrapper>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.footer`
  padding: 20px 0;
  width: 100%;
  height: auto;
  background-color: rgb(213, 182, 226);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;
const WrapperContacts = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;

const ContactsTitle = styled.h2`
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.2rem;
`;
