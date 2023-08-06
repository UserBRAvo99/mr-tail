import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Keyboard,
  Mousewheel,
} from "swiper/modules";

import dataDogTrainerData from "../Data/dataTeam";
import tabyretka from "../Data/tabyretka.jpg";
import { styled } from "styled-components";
import { nanoid } from "nanoid";

import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";
import "swiper/css/pagination";
import SwiperNawBtn from "./SwiperNawBtns";

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
          Pagination,
        ]}
        spaceBetween={50}
        slidesPerView={1}
        // navigation
        loop
        delay={800}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => swiper}
      >
        <SwiperSlide>
          <Image src={tabyretka} />
        </SwiperSlide>
        {dataDogTrainerData.map(({ photo, name }) => {
          return (
            <SwiperSlide key={nanoid()}>
              <Image src={photo} alt={name} />
              <WrapperInfoTrainer>
                <NameTitle>{name}</NameTitle>
              </WrapperInfoTrainer>
            </SwiperSlide>
          );
        })}
        <SwiperNawBtn />
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
  max-height: 694px;
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
  background-color: rgba(128, 128, 128, 0.5);
  padding: 20px 0;
  border-radius: 10px;
`;
const NameTitle = styled.h3`
  letter-spacing: 0.2em;
  font-size: 1.6rem;
  color: var(--basic-text-color-white);
`;
