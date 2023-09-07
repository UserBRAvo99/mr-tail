import { styled } from "styled-components";
import ServiceSection from "../ServiceSection/ServiceList";
import ButtonOpenModal from "../ModalConsultation/ButtonOpenModal";
import SwiperBlock from "../Swiper/Swiper";
import HeroMobile from "../HeroMobile/HeroMobile";

function Main({ openModal, hero, serviceItem }) {
  return (
    <MainTag>
      <HeroMobile onClick={hero} />
      <ServiceSection serviceItem={serviceItem} />
      <SwiperBlock />
      <ButtonOpenModal onClick={openModal} />
    </MainTag>
  );
}

export default Main;

const MainTag = styled.main`
  display: block;
`;
