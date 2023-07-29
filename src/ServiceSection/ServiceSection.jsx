import { css, styled } from "styled-components";
import data from "../Data/dataServiceInfo";
import { useState } from "react";

function ServiceSection() {
  const [infoSectionOpen, setInfoSectionOpen] = useState(false);

  function handleClick(event) {
    console.dir(event.currentTarget);
    toggle();
  }

  function toggle() {
    setInfoSectionOpen(!infoSectionOpen);
  }
  const { image, title, text } = data[0];
  return (
    <ListSection>
      <ItemSection className="container" onClick={handleClick} id={1}>
        <Image src={image} alt="" />
        <WrapperTitle>
          <Title>{title}</Title>
        </WrapperTitle>
        <WrapperInfo open={infoSectionOpen}>
          {/* <TitleInfo>{title}</TitleInfo> */}
          <ParagraphInfo>{text}</ParagraphInfo>
        </WrapperInfo>
      </ItemSection>
    </ListSection>
  );
}
export default ServiceSection;

const ListSection = styled.ul`
  width: 100%;
`;

const ItemSection = styled.li`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  /* box-shadow: 0px 6px 20px -4px rgba(0, 0, 0, 0.39); */
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const WrapperTitle = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  padding: 10px 0;
  top: 80%;
  right: 10px;
  align-items: center;
  width: calc(100% - 20px);
  backdrop-filter: blur(10px);
`;

const Title = styled.h3`
  letter-spacing: 0.2em;
  color: var(--basic-text-color-white);
`;

const WrapperInfo = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  top: 0;
  right: 10px;
  width: calc(100% - 20px);
  height: 100%;
  backdrop-filter: blur(10px);
  padding: 10px;
  /* box-shadow: 0px 6px 20px -4px rgba(0, 0, 0, 0.39); */
  ${(props) =>
    props.open &&
    css`
      /* transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
      transform: translateX(0); */
      display: flex;
    `}
`;

// const TitleInfo = styled.h3`
//   text-align: center;
//   align-items: center;
//   color: var(--basic-text-color-white);
// `;
const ParagraphInfo = styled.p`
  text-align: center;
  align-items: center;
  color: var(--basic-text-color-white);
`;
