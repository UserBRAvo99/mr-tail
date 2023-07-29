import { nanoid } from "nanoid";
import { MdReadMore } from "react-icons/md";
import { css, styled } from "styled-components";

import "../index.css";

function ServiceItem({ data, onClick, open }) {
  return (
    <ListSection>
      {data.map(({ image, title, text, id }) => {
        return (
          <ItemSection id={id} key={nanoid()} onClick={onClick}>
            <Image src={image} alt="" />
            <WrapperTitle>
              <Title>{title}</Title>
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
  );
}

export default ServiceItem;

const ListSection = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ItemSection = styled.li`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  /* box-shadow: 0px 6px 20px -4px rgba(0, 0, 0, 0.39); */
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  height: 350px;
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
  cursor: pointer;
`;

const Title = styled.h3`
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
