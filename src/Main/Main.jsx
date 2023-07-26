import { styled } from "styled-components";
import TeamComponent from "../DogTrainerItemForListTeam/DogTrainerItem";
import photoHeaderMobile from "../Data/dog.png";

function Main() {
  return (
    <MainTag>
      <Hero>
        <ImgHeader src={photoHeaderMobile} alt="dog" />
        <HeroTitleWrapper>
          <HeroTitle>
            <span>Mr</span>Tail
          </HeroTitle>
          <p>кінологічна спільнота</p>
        </HeroTitleWrapper>
      </Hero>
      <TeamComponent />
    </MainTag>
  );
}

export default Main;

const MainTag = styled.main`
  display: block;
`;

const Hero = styled.div`
  display: block;
  position: relative;
`;

const ImgHeader = styled.img`
  z-index: -1;
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 30px;
`;
const HeroTitleWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
`;

const HeroTitle = styled.h1`
  display: flex;
  gap: 10px;
  justify-content: center;
`;
