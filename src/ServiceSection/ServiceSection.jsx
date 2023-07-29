import { styled } from "styled-components";
import data from "../Data/dataServiceInfo";

function ServiceSection() {
  const { image, title, text } = data[0];
  return (
    <Section className="container">
      <Image src={image} alt="" />
      {/* <WrapperTitle>
        <Title>{title}</Title>
      </WrapperTitle> */}
      <WrapperInfo>
        {/* <TitleInfo>{title}</TitleInfo> */}
        <ParagraphInfo>{text}</ParagraphInfo>
      </WrapperInfo>
    </Section>
  );
}
export default ServiceSection;

const Section = styled.section`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
`;

const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  padding: 20px 0;
  top: 80%;
  right: 15px;
  align-items: center;
  width: calc(100% - 30px);
  backdrop-filter: blur(10px);
`;

const Title = styled.h3`
  letter-spacing: 0.2em;
  color: var(--basic-text-color-white);
`;

const WrapperInfo = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  top: 0;
  right: 15px;
  width: calc(100% - 30px);
  height: 100%;
  backdrop-filter: blur(10px);
  padding: 15px 15px;
`;

const TitleInfo = styled.h3`
  text-align: center;
  align-items: center;
  color: var(--basic-text-color-white);
`;
const ParagraphInfo = styled.p`
  text-align: center;
  align-items: center;
  color: var(--basic-text-color-white);
`;
