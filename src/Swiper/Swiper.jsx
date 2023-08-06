import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Keyboard,
  Mousewheel,
  Autoplay,
} from "swiper/modules";

import dataDogTrainerData from "../Data/dataTeam";
import tabyretka from "../Data/tabyretka.png";
import { styled } from "styled-components";
import { nanoid } from "nanoid";
import IconTeamSocComponent from "../IconComponent/IconSocTeam";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";
import "swiper/css/pagination";

function SwiperBlock() {
  return (
    <WrapperSwiper className="container">
      <Swiper
        modules={[
          Navigation,
          Pagination,
          A11y,
          Keyboard,
          Mousewheel,
          Autoplay,
          Pagination,
        ]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        loop
        autoplay={{
          stopOnLastSlide: false,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        delay={800}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => swiper}
      >
        <SwiperSlide>
          <Image src={tabyretka} />
        </SwiperSlide>
        {dataDogTrainerData.map(
          ({ photo, name, linkFacebook, linkInstagram }) => {
            return (
              <SwiperSlide key={nanoid()}>
                <Image src={photo} alt={name} />
                <WrapperInfoTrainer>
                  <NameTitle>{name}</NameTitle>
                  <IconTeamSocComponent
                    facebook={linkFacebook}
                    instagram={linkInstagram}
                  />
                </WrapperInfoTrainer>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </WrapperSwiper>
  );
}

export default SwiperBlock;

const WrapperSwiper = styled.div`
  width: 100%;
  height: auto;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const WrapperInfoTrainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  top: 75%;
  right: 10px;
  align-items: center;
  width: calc(100% - 20px);
  backdrop-filter: blur(10px);
  padding: 20px 0;
`;
const NameTitle = styled.h3`
  letter-spacing: 0.2em;
  font-size: 1.6rem;
  color: var(--basic-text-color-white);
  margin-bottom: 16px;
  &:last-child {
    font-size: 16rem;
  }
`;
