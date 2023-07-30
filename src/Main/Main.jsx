import { styled } from "styled-components";
import TeamComponent from "../DogTrainerItemForListTeam/DogTrainerItem";
import ServiceSection from "../ServiceSection/ServiceList";

function Main() {
  return (
    <MainTag>
      {/* <Hero>
        <ImgHeader src={photoHeaderMobile} alt="dog" />
        <HeroTitleWrapper>
          <HeroTitle>
            <span>Mr</span>Tail
          </HeroTitle>
          <Description>кінологічна спільнота</Description>
        </HeroTitleWrapper>
      </Hero> */}
      <TeamComponent />
      <ServiceSection />
    </MainTag>
  );
}

export default Main;

const MainTag = styled.main`
  display: block;
`;
