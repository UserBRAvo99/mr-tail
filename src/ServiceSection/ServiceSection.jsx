import { styled } from "styled-components";
import data from "../Data/dataServiceInfo";

function ServiceSection() {
  const { image, title, text } = data[0];
  return (
    <Section className="container">
      <Image src={image} alt="" />
      <h3>{title}</h3>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </Section>
  );
}
export default ServiceSection;

const Section = styled.section`
  display: block;
  position: relative;
  width: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
`;
