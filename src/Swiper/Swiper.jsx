import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  A11y,
  Keyboard,
  Mousewheel,
} from "swiper/modules";

import dataDogTrainerData from "../Data/dataTeam";
import tabyretka from "../Data/MIL_1986-01.jpeg";
import { styled } from "styled-components";
import { nanoid } from "nanoid";

import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";
import "swiper/css/pagination";

function SwiperBlock() {
  return (
    <section id="team">
      <Title>Команда</Title>
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
        </Swiper>
      </WrapperSwiper>
    </section>
  );
}

export default SwiperBlock;

const Title = styled.h2`
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.2rem;
`;

const WrapperSwiper = styled.div`
  display: flex;
  width: 100%;
`;

const Image = styled.img`
  object-position: bottom;
  object-fit: contain;

  width: 100%;
  height: auto;
`;

const WrapperInfoTrainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
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
