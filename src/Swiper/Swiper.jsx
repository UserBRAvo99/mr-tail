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

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";

function SwiperBlock() {
  return (
    <WrapperSwiper className="container">
      <Swiper
        modules={[Navigation, Pagination, A11y, Keyboard, Mousewheel, Autoplay]}
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
        {dataDogTrainerData.map(({ photo, name }) => {
          return (
            <SwiperSlide key={nanoid()}>
              <Image src={photo} alt={name} />
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

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
