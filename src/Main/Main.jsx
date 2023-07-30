import { styled } from "styled-components";
import TeamComponent from "../TeamComponent/TeamComponent";
import ServiceSection from "../ServiceSection/ServiceList";

function Main() {
  return (
    <MainTag>
      <TeamComponent />
      <ServiceSection />
    </MainTag>
  );
}

export default Main;

const MainTag = styled.main`
  display: block;
`;
