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
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";

function SwiperBlock() {
  return (
    <WrapperSwiper className="container">
      <Swiper
        modules={[Navigation, Pagination, A11y, Keyboard, Mousewheel]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => swiper}
      >
        <SwiperSlide>
          <Img src={tabyretka} />
        </SwiperSlide>
        {dataDogTrainerData.map(({ photo, name }) => {
          return (
            <SwiperSlide key={nanoid()}>
              <Img src={photo} alt={name} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </WrapperSwiper>
  );
}

export default SwiperBlock;

const WrapperSwiper = styled.div`
  width: 100%;
  height: auto;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;
