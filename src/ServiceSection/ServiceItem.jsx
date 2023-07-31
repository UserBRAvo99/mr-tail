import { nanoid } from "nanoid";
import { MdReadMore } from "react-icons/md";
import { styled } from "styled-components";

import "../index.css";

function ServiceItem({ data, onClick }) {
  return (
    <WrapperBlock id="service">
      <Title>Послуги</Title>
      <ListSection>
        {data.map(({ image, title, text, id }) => {
          return (
            <ItemSection id={id} key={nanoid()} onClick={onClick}>
              <Image src={image} alt="" />
              <WrapperTitle>
                <TitleSection>{title}</TitleSection>
                <TitleIcon>
                  <MdReadMore />
                </TitleIcon>
              </WrapperTitle>
              <WrapperInfo>
                <ParagraphInfo>{text}</ParagraphInfo>
              </WrapperInfo>
            </ItemSection>
          );
        })}
      </ListSection>
    </WrapperBlock>
  );
}

export default ServiceItem;

const WrapperBlock = styled.div`
  padding: 20px 10px;
`;

const Title = styled.h2`
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.2rem;
`;

const ListSection = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ItemSection = styled.li`
  position: relative;
  display: flex;
  width: 100%;
  height: auto;
  box-shadow: 0px 6px 20px -4px rgba(0, 0, 0, 0.39);
  cursor: pointer;
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  cursor: pointer;
`;

const TitleSection = styled.h3`
  margin: auto 0;
  letter-spacing: 0.2em;
  color: var(--basic-text-color-white);
`;

const TitleIcon = styled.span`
  width: 40px;
  height: 40px;
  svg {
    width: 40px;
    height: 40px;
    color: var(--basic-text-color-white);
  }
`;

const WrapperInfo = styled.div`
  position: absolute;
  display: none;
  flex-direction: column;
  justify-content: space-around;
  top: 0;
  right: 0;
  width: calc(100%);
  height: 100%;
  backdrop-filter: blur(10px);
  padding: 10px;
`;

const ParagraphInfo = styled.p`
  text-align: center;
  align-items: center;
  color: var(--basic-text-color-white);
`;
