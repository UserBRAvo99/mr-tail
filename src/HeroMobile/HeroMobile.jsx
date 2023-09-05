import React from "react";
import { MdReadMore } from "react-icons/md";
import { styled } from "styled-components";
import hero from "../Data/dog.jpg";

function HeroMobile({ onClick }) {
  // function handleClickHero(e) {
  //   if (e.currentTarget.children[3].style.display !== "flex") {
  //     return (e.currentTarget.children[3].style.display = "flex");
  //   }
  //   if (e.currentTarget.children[3].style.display === "flex") {
  //     return (e.currentTarget.children[3].style.display = "none");
  //   }
  // }
  return (
    <WrapperBlock id="heroMobile" className="container" onClick={onClick}>
      <h2 className="hidden_title">Logo</h2>
      <Image
        src={hero}
        alt="На фото зображений логотип кінологічної спілноти."
      />
      <WrapperTitle>
        <TitleSection>Про нас</TitleSection>
        <TitleIcon>
          <MdReadMore />
        </TitleIcon>
      </WrapperTitle>
      <WrapperInfo>
        <Info>
          Раді вітати в нашій кінологічній спільноті, яка є об'єднанням
          професійних і досвідчених тренерок для собак! Навчаємо людей правильно
          виховувати і розуміти своїх хвостиків.
        </Info>
      </WrapperInfo>
    </WrapperBlock>
  );
}

export default HeroMobile;

const WrapperBlock = styled.div`
  position: relative;
  cursor: pointer;
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
  padding: 10px 0px;
  top: 80%;
  right: 20px;
  align-items: center;
  width: calc(100% - 40px);
  backdrop-filter: blur(10px);
  cursor: pointer;
`;

const TitleSection = styled.h2`
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
  flex-direction: column;
  justify-content: space-around;
  top: 0;
  right: 0;
  width: calc(100%);
  height: 100%;
  backdrop-filter: blur(10px);
  transform: translate3d(0, 0, 0);
  padding: 30px;
  display: none;
`;

const Info = styled.p`
  letter-spacing: 0.15em;
  color: var(--basic-text-color-white);
  text-align: center;
`;
