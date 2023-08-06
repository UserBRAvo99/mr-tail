import { styled } from "styled-components";
import ServiceSection from "../ServiceSection/ServiceList";
import ButtonOpenModal from "../ModalConsultation/ButtonOpenModal";
import SwiperBlock from "../Swiper/Swiper";

function Main({ onClick }) {
  return (
    <MainTag>
      <SwiperBlock />
      <ServiceSection />
      <ButtonOpenModal onClick={onClick} />
    </MainTag>
  );
}

export default Main;

const MainTag = styled.main`
  display: block;
`;
